---
layout: post
date: 2019-05-02 18:00
title: "Using C#, SignalR, JavaScript & more to update our chat bot to allow HTML from viewers."
image: https://user-images.githubusercontent.com/1228996/57107625-1618f600-6cf6-11e9-9f1b-867d83e860ad.png
description: "Allowing viewers to send HTML in their chat messages that render in our stream chat overlay and adding some logic to clean out tags that could be sinister."
comments: true
tags: [twitch, stream, c#, signal-r]
---

<img src="{{page.image}}"/>

## Stream Replay Link

[https://youtu.be/aEOzjVVO71s](https://youtu.be/aEOzjVVO71s)

<!--more-->

### Segments

| Timestamp | Topic
| --- | ---
| 00:04 | Kick it off
| 00:19 | Things to Review & Notes
| 00:25 | Reviewing our VS Code extension
| 00:34 | Working on our bot to allow HTML in our chat overlays
| 02:37 | Wrap it up will ya'

---

### Today's Candle To Code By

[Tobacco Pipe](https://amzn.to/2GSsMxX)

---

## Things we learned

- [IAmNotMyself]() turned us on to some ways to test the overlays for XSS at [https://www.owasp.org/index.php/Testing_for_Reflected_Cross_site_scripting_(OTG-INPVAL-001)](https://www.owasp.org/index.php/Testing_for_Reflected_Cross_site_scripting_(OTG-INPVAL-001))
- dot_commie showed us some aspnetcore scripting info at [https://docs.microsoft.com/en-us/aspnet/core/security/cross-site-scripting?view=aspnetcore-2.2](https://docs.microsoft.com/en-us/aspnet/core/security/cross-site-scripting?view=aspnetcore-2.2)


## Things to Review & Notes

- New emotes are available.  We currently have Hype, Derp & Candle.  Only 4 subs away from having Raid.
- Heroine interviews on Sunday afternoons starting with the awesome [Jen Looper](https://twitter.com/jenlooper) of [Vue Vixens](https://vuevixens.org/)
- [Twitch Themer](https://marketplace.visualstudio.com/items?itemName=MichaelJolley.vscode-twitch-themer) extension is now in the VS Marketplace.
- Join our [Discord](https://discord.gg/XSG7HJm) to continue the discussions/fun off stream
- All of the code we work on is available on GitHub at [https://github.com/MichaelJolley](https://github.com/MichaelJolley) 


## Goals

- [x] Emotes in the chat overlays should render as their images
- [x] Clean HTML from initial chat message, while whitelisting some tags
- [x] Ensure no style/class attributes are allowed
- [ ] Add a flag to toggle sound clips via chat as a mod/broadcaster


## Next Steps

- 


---

## Todays stream brought to you by

### Subscribers

- BrandonSatrom (2 mo)
- h0usebesuch
- yaldabahut `Gifted by h0usebesuch`
- Brendoneus `Gifted by h0usebesuch`

### Cheers

| Compadre | Bits
| --- | ---
| cpayette | 156
| RamblingGeek | 110
| sorskoot | 56
| roberttables | 1

### Raids

| Marauder | Accomplices
| --- | ---
| [DevChatter](https://twitch.tv/DevChatter) | 28