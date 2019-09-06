---
layout: post
date: 2019-04-30 18:00
title: "Automating the CI/CD process of our VS Code extension to change themes based on Twitch chat."
image: https://user-images.githubusercontent.com/1228996/56997529-ab3cb300-6b6d-11e9-80d7-8cc9845be04c.png
description: "Testing our new VS Code extension to allow viewers to change our VS Code theme via chat.  Then worked to automate the CI/CD process using Azure DevOps."
comments: true
tags: [twitch, stream, vs-code, javascript, theme, extension, azure, devops]
---

<img src="{{page.image}}"/>

## Stream Replay Link

[https://youtu.be/mXtMFcS-wsQ](https://youtu.be/mXtMFcS-wsQ)

<!--more-->

### Segments

Timestamp | Topic
--- | ---
00:05 | Kick it off
00:21 | Testing our VS Code extension
01:01 | Setting up Azure Pipelines to automate CI/CD for our extension
02:12 | Joined by the awesome [Clarkio](https://www.twitch.tv/clarkio) who tries to help us with the Release pipeline
02:26 | Reviewing allowing HTML in our chat messages but cleansing for XSS
02:33 | Wrap it up already, geez.

---

### Today's Candle To Code By

[Village Candle Christmas Tree](https://amzn.to/2Djr7R0)

---

## Things we learned

- [TheHugoDahl](https://github.com/hugodahl) shared [1Password](https://1password.com/) with chat to save more than passwords.


## Things to Review & Notes

- New emotes are available.  We currently have Hype, Derp & Candle
- Heroine interviews on Sunday afternoons
- Work offstream on `!theme {theme name}`
  - Available commands
  - Whisper throttling


## Goals

- [x] Clean up extension code and performance
- [x] Get Azure DevOps to automate builds & deploying to the VS Marketplace
- [ ] Have extension available in VS Marketplace


## Next Steps

- Finish getting Azure Release Pipelines pushing the extension to VS Marketplace
- Fix issue that causes chat bot to crash and reboot
- Allow some HTML in our chat overlay

---

## Todays stream brought to you by

### Subscribers

- IAmNotMyself (2 mo)
- TheHugoDahl
- BrandonSatrom (2 mo)
- phrakberg (2 mo)
- roberttables (2 mo)
- ItsMeJacz
- ikoakmaindehoas `Gifted by IAmNotMyself`
- ancientcoder `Gifted by IAmNotMyself`
- SushiDay `Gifted by IAmNotMyself`
- sorskoot `Gifted by IAmNotMyself`

### Cheers

Compadre | Bits
--- | ---
cpayette | 414
cmjchrisjones | 99
sorskoot | 45
brandonsatrom | 100

