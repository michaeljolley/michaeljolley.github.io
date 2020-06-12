---
date: 2020-06-11
title: "Using Netlify Functions with Gridsome"
image: https://res.cloudinary.com/dk3rdh3yo/image/upload/c_scale,w_auto/v1591897176/netlify-functions-gridsome_wvvqks.png
banner_image_alt: Terminal window with the words Using Netlify functions with Gridsome 
description: Netlify provides serverless functions to process information, while Gridsome provides a Vue.js based static-site generation. Combining the two allows developers to build static-sites with the same capabilities of dynamic sites; all while maintaining stability and scalability.
tags: [netlify, gridsome, functions, serverless, vuejs]
---

When I started writing this blog a few years ago, I was overwhelmed at the plethora of platforms available to me. .NET? Got it. JavaScript? Sure. Ruby? You know it!

While I settled on Jekyll, it was somewhat by accident. I really liked the idea of writing my posts in Markdown with GitHub Pages and, since they were powered by Jekyll, the choice was made for me.

<!--more-->

Since then many of those platforms have gone the way of the buffalo. But it seems that just as one dies off, another takes its place. Now we have options for nearly every language and framework. You're an Angular developer? You might feel comfortable with [Scully](https://github.com/scullyio/scully). More of a React dev? [Gatsby](https://www.gatsbyjs.org/) is probably more up your alley.

I've been developing with Vue.js for a while, so [Gridsome](https://gridsome.org/) seemed like a better fit for me. So a few months ago I made the transition and have loved every minute of it.

I admit that one reason I like Gridsome better is the fact that I understand how it works. I used Ruby just enough to get my blog going, but it always felt like voodoo to this .NET/JavaScript guy. But this isn't a Gridsome versus the world post. It's about a problem you'll face no matter which of these static-site platforms you choose... *user comments*.

## Platform? Check. Comments? Uhhhh...

<img alt="Logos of Facebook, Disqus, and Discourse" src="https://res.cloudinary.com/dk3rdh3yo/image/upload/v1591928511/socials_zo4hwm.png" class="right"/>

Don't tell me. You decided on your static-site framework; Designed or purchased a theme; Started building it out.  Then it hits you... "how do I get comments from users and display them on each post?" In the words of Scooby Doo, "ruh roh."