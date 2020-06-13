---
date: 2020-06-11
title: "Using Netlify Functions with Gridsome"
image: https://res.cloudinary.com/dk3rdh3yo/image/upload/c_scale,w_auto/v1591897176/netlify-functions-gridsome_wvvqks.png
banner_image_alt: Terminal window with the words Using Netlify functions with Gridsome 
description: Netlify provides serverless functions to process information, while Gridsome provides a Vue.js based static-site generation. Combining the two allows developers to build static-sites with the same capabilities of dynamic sites; all while maintaining stability and scalability.
tags: [netlify, gridsome, functions, serverless, vuejs]
---

When I started writing this blog a few years ago, I was overwhelmed at the number of platforms available to me. JavaScript, .NET, Ruby? We got 'em all! While I settled on Jekyll, it was somewhat by accident. I really liked the idea of writing my posts in Markdown with GitHub Pages and, since they were powered by Jekyll, the choice was made for me.

<!--more-->

Since then many of those platforms have gone the way of the buffalo. But it seems that just as one dies off, another takes its place. Now we have options for nearly every language and framework. You're an Angular developer? You might feel comfortable with [Scully](https://github.com/scullyio/scully). More of a React dev? [Gatsby](https://www.gatsbyjs.org/) is probably more up your alley. I've been developing with Vue.js for a while, so [Gridsome](https://gridsome.org/) seemed like a better fit for me.

No matter the framework & platform you choose, before you get too far you hit the same brick wall we all do... *user comments*.

## Platform? Check. Comments? Uhhhh...

<img alt="Logos of Facebook, Disqus, and Discourse" src="https://res.cloudinary.com/dk3rdh3yo/image/upload/c_scale,w_auto/v1591930862/socials_yakdpk.png" class="right"/>

Write your posts in Markdown they said. It will compile to a static site they said. But no one ever brings up the fact that comments on a blog aren't static. Hopefully, your community is chiming in and providing feedback. So how do we add these dynamic, incoming messages to our page?

Just like the multitude of static-site frameworks, there are a ton of options for managing comments on your site. From integrating platforms like Disqus or Facebook to systems like Discourse. But I wanted more control over my site. I didn't want to integrate with a third-party that may require my visitors to register for an account.

Then it hit me... my site lives in GitHub. If I could store comments in files within my repo, I could add them to the site just like my posts. Plus, I'd gain the ability to use pull requests as my moderation tool.

But how to make that happen...

## Servers? We Don't Need No Stinking Servers

<img alt="Scene from the film The Treasure of the Sierra Madre with the words 'Servers!? We don't need no stinking servers!'" src="https://res.cloudinary.com/dk3rdh3yo/image/upload/c_scale,w_auto/v1591934417/servers_obmhkl.png" class="right"/>

There's an old saying "To a man with a hammer, everything looks like a nail." Lately, no matter the problem I face, serverless functions seem like the answer. So why stop now? Let's make a serverless function that we trigger via an HTTP Post request.  We'll send it information about the comment and let it create a file in my repo with the details.

> I'm going to assume you already have a Gridsome site. If you want to stand something up quickly, I used the [Gridsome CLI](https://gridsome.org/docs/gridsome-cli/) to generate the basic framework I needed.

## What is Your Function?

We'll need a few more npm packages before we can write our function. These will be used to communicate with the GitHub Rest API, manipulate querystring information and convert objects to YAML.

```JS
npm install --save @octokit/rest querystring js-yaml
```

In the root of your project create a folder named `functions` and, within that folder, create a file named `comments.js`. Copy the following into that file.

```JS
const { Octokit } = require("@octokit/rest")
const querystring = require('querystring');
const yaml = require("js-yaml")

const { GITHUB_USERNAME, GITHUB_AUTHTOKEN, GITHUB_REPO } = process.env;

const octokit = new Octokit({ auth: GITHUB_AUTHTOKEN });
let baseRef, latestCommitSha, treeSha, newTreeSha, comment, commentId, commitRef;
```