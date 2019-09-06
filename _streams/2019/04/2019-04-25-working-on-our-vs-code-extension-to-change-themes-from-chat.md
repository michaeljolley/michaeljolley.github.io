---
layout: post
date: 2019-04-25 18:00
title: "Continuing to work on our VS Code extension to allow chat to control what theme we're using."
image: https://user-images.githubusercontent.com/1228996/56783284-b92ab680-67b0-11e9-9bf0-12f645ced247.png
description: "We're continuing to work on our VS Code extension that will enable users to chat !theme list or !theme {theme name} and update the VS Code theme during the stream."
comments: true
tags: [twitch, stream, vs-code, javascript, theme, extension]
---

<img src="{{page.image}}"/>

## Stream Replay Link

[https://youtu.be/gHebGSg4VLE](https://youtu.be/gHebGSg4VLE)

<!--more-->

### Segments

Timestamp | Topic
--- | ---
00:04 | Kick it off
00:28 | Overview & working to get debugging working
00:44 | Trying to send a list of themes via whisper
02:37 | First stab at changing the theme on command
02:44 | Wrap up & raid to roberttables

---

### Today's Candle To Code By

[Fresh Balsam](https://amzn.to/2XHzXQv)

---

## Things we learned

- [@IAmNotMyself](https://github.com/NotMyself) turned us on to Olympia Coffee's [Little Buddy](https://www.olympiacoffee.com/collections/coffee/products/little-buddy-blend-organic?variant=32713188111) coffee
- We can enable the new Chromium based Edge browser's dark mode by going to `edge://flags` in Edge and enabling `Microsoft Edge theme`.  This will use the OS's light or dark theme.
- Our chat overlays are able to render HTML from chat.  Very fun, but dangerous in regards to JS, embeds or images

## Notes

- New Heroines of JavaScript cards from @roberttables
- BrandonSatrom coming on Sunday
- Heroine interviews


## Goals

- [x] Fix issues trying to debug the extension
- [x] Get `!theme list` sending the list of available themes via whisper to requestor
- [ ] Get `!theme {theme name}` changing the theme of VS Code

## Next Steps

- Need to get the `!theme {theme name}` command working
- Get Azure DevOps to automate builds & deploying to the VS Marketplace 
- Clean certain html tags from chat messages incoming to the chat overlay

---

## Todays stream brought to you by

### Subscribers

- 

### Cheers

Compadre | Bits
--- | ---
 | 
