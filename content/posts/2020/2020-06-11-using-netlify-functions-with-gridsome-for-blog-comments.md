---
date: 2020-06-11
title: "Using Netlify Functions with Gridsome"
image: https://res.cloudinary.com/dk3rdh3yo/image/upload/c_scale,w_auto/v1591897176/netlify-functions-gridsome_wvvqks.png
banner_image_alt: Terminal window with the words Using Netlify functions with Gridsome 
description: Netlify provides serverless functions to process information, while Gridsome provides a Vue.js based static-site generation. Combining the two allows developers to build static-sites with the same capabilities of dynamic sites; all while maintaining stability and scalability.
tags: [netlify, gridsome, functions, serverless, vuejs]
---

When I started writing this blog a few years ago, I was overwhelmed at the number of platforms available to me. JavaScript, .NET, Ruby? We got 'em all!

While I settled on Jekyll, it was somewhat by accident. I really liked the idea of writing my posts in Markdown with GitHub Pages and, since they were powered by Jekyll, the choice was made for me.

<!--more-->

Since then many of those platforms have gone the way of the buffalo. But it seems that just as one dies off, another takes its place. Now we have options for nearly every language and framework. You're an Angular developer? You might feel comfortable with [Scully](https://github.com/scullyio/scully). More of a React dev? [Gatsby](https://www.gatsbyjs.org/) is probably more up your alley. I've been developing with Vue.js for a while, so [Gridsome](https://gridsome.org/) seemed like a better fit for me.

No matter the framework & platform you choose, before you get too far you hit the same brick wall we all do... *user comments*.

## Platform? Check. Comments? Uhhhh...

<img alt="Logos of Facebook, Disqus, and Discourse" src="https://res.cloudinary.com/dk3rdh3yo/image/upload/c_scale,w_auto/v1591930862/socials_yakdpk.png" class="right"/>

Don't tell me. You decided on your static-site framework; Designed or purchased a theme; Started building it out.  Then it hits you... "how do I get comments from users and display them on each post?" In the words of Scooby Doo, "ruh roh."