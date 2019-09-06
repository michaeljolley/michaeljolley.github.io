---
layout: post
date: 2019-04-23 18:00
title: "Making a VS Code extension to integrate with Twitch chat.  Let's give you control of my VS Code theme."
image: https://user-images.githubusercontent.com/1228996/56616673-8a131a00-65e3-11e9-891b-bf627b64af0e.png
description: "Creating a VS Code extension that allows Twitch users to set the theme of the streamers VS Code"
comments: true
tags: [twitch, stream, vs-code, extension]
---

<img src="{{page.image}}"/>

## Stream Replay Link

[https://youtu.be/q0yhJlofS0k](https://youtu.be/q0yhJlofS0k)

<!--more-->

### Segments

Timestamp | Topic
--- | ---
00:11 | Kick it off
00:20 | Audio clips working & theme song revealed   
00:13 | Overviewing the application we're going to be testing
00:35 | Showing off new sub badges & emotes
00:38 | Starting to create our new extension based off Clarkio's VS Code Twitch Highlighter
02:15 | Credits & raiding to [roberttables](https://www.twitch.tv/roberttables)


---

### Today's Candle To Code By

[Old Factory Mahogany](https://amzn.to/2IHHPNJ)

---

## Things we learned

- [@ElectricHavoc](https://github.com/ElectricHavoc) shared a link for a fancy shell to use when playing with WSL: [https://cmder.net/](https://cmder.net/)
- [@ksivamuthu](https://github.com/ksivamuthu) shared his [Peacock Twitch Extension](https://marketplace.visualstudio.com/items?itemName=ksivamuthu.vscode-peacock-twitch-client)

## Notes

- [@cmjchrisjones](https://github.com/cmjchrisjones) was being picky about the bug in our bot when using the csharpHype before csharpHypebot.  (He's like that you know.)
- The mic is clicking/popping
- There's a bug in the bot that makes it go bye-bye.

## Goals

- [x] Steal @clarkio's code and modify commands for new extension
- [ ] Return list of available themes
- [ ] Change theme via !theme {name}

## Next Steps

- Need to get the extension changing the theme on command & returning a whisper with available themes

---

## Todays stream brought to you by

### Subscribers

- Clarkio `Gifted by BrandonSatrom`
- RamblingGeek (2 mo)

### Cheers

Compadre | Bits
--- | ---
roberttables | 100
cpayette | 100
