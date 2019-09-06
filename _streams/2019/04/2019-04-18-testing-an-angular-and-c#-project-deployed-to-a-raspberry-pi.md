---
layout: post
date: 2019-04-18 18:00
title: "April 18, 2019 - Testing an Angular/C# application deployed to a Raspberry Pi."
image: https://user-images.githubusercontent.com/1228996/56391870-95d29b00-61f5-11e9-9e02-157507f0681e.png
description: "Today we're testing a client application written in C# & Angular.  The application is normally deployed to a Raspberry Pi, but we'll be testing it in the Visual Studio 2019 debugger."
comments: true
tags: [c#, angular, raspberry-pi, testing, twitch, stream]
---

<img src="{{page.image}}"/>

## Stream Replay Link

[https://youtu.be/xZM1IckcP8Y](https://youtu.be/xZM1IckcP8Y)

<!--more-->

### Segments

Timestamp | Topic
--- | ---
00:06 | Kick it off
00:08 | Reviewing show notes & generating https://baldbeardedbuilder.com
00:13 | Overviewing the application we're going to be testing
00:36 | Testing & debugging our Angular application 
02:05 | Sub-love singing
02:30 | Explaining the architecture of the Angular app using NGRX

---

### Today's Candle To Code By

[Old Factory Leather](https://amzn.to/2IHHPNJ)

---

## Things we learned

- [@jtsom](https://github.com/jtsom) showed us that with the format below you can inject variables into strings like using `$"some text {variable}"` in C# 
```JS
`some text ${variable}`
```
- [@parithon](https://github.com/parithon) directed us to the awesome Peacock extension by John Papa at [https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock)
- [@parithon](https://github.com/parithon) shared a link with a GitHub specific markdown cheatsheet: 
[https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links)

## Notes

- The Angular store/state is managed using [NGRX](https://ngrx.io/)
- The Angular folder/workspace structure is managed using [NX Workspaces](https://nx.dev/)

## Goals

- [x] Test transfer process
- [x] Test receiving process
- [x] Test consumption process
- [ ] Test shipping process

## Next Steps

- Add task to change background color of Remove Lot scan pad to rgba(0, 0, 0, 0)

---

## Todays stream brought to you by

### Subscribers

- Crowz4K

### Cheers

Compadre | Bits
--- | ---
 | 
