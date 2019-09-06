---
layout: post
date: 2019-07-16 18:07
title: "Adding more chat commands to our bot and continuing to automate stream note generation."
image: https://user-images.githubusercontent.com/1228996/61337656-017bd280-a7fc-11e9-81da-5d61df44c7cd.png
description: "Added logic to add segments to our stream notes from markers set by users in chat.  Started recording contributors to the stream that use any A/V effects, vote for the candle or use the !theme command."
comments: true
tags: [twitch, stream, node-js, bot, socket-io]
---

<img src="{{page.image}}"/>

## Stream Replay Link

[https://youtu.be/8X7Imx4XRlU](https://youtu.be/8X7Imx4XRlU)

<!--more-->

### Segments

| Timestamp | Topic                                                                       |
| ---       | ---                                                                         |
| 00:06     | Kicking it off                                                              |
| 00:33     | Coding IO bot to save segments on the stream notes                          |
| 02:59     | Adding logic to track stream contributors and add to stream notes           |
| 04:40     | Wrapping up and raid to [caLLowCreation](https://twitch.tv/callowcreation)  |

---

### Today's Candle To Code By

[Warm Tobacco Pipe](https://amzn.to/2GSsMxX)

---

## Goals

- [x] Add stream segments to stream notes auto-magically based on markers from chat
- [x] Track users who contribute via A/V commands, !theme
- [x] Record users who contributed in some way to the stream notes
- [x] Add `!attention` command
- [x] Add `!sfx` command

## Things we learned

- [BlueberryKing](https://twitch.tv/BlueberryKing) shared that when pushing to one array in JS from another array you can use the spread `...` operator.
- [BlueberryKing](https://twitch.tv/BlueberryKing) shared you can define function parameters based on their actual input/output (i.e. rather than `twitchFunc: Function` use `twitchFunc: (message: string) => void`)
- [Chimerablack1](https://twitch.tv/Chimerablack1) showed us the [JSONView](https://jsonview.com/) Chrome extension for pretty JSON formatting
- [parithon](https://twitch.tv/parithon) introduced us to ngrok to use as a proxy between our local containers & external webhook generators

---

## Today's stream brought to you by

### Subscribers

- [dot_commie](https://twitch.tv/dot_commie) (4 mo)
- [ElectricHavoc](https://twitch.tv/electrichavoc) (3 mo)

### Cheers

| Compadre                                        | Bits  |
| ---                                             | ---   |
| [copperbeardy](https://twitch.tv/copperbeardy)  | 100   |

### Raids

| Marauder                                    | Accomplices |
| ---                                         | ---         |
| [DevChatter](https://twitch.tv/devchatter)  | 23          |
| [ChefBrent](https://twitch.tv/chefbrent)    | 10          |

### Moderators

- [roberttables](https://twitch.tv/roberttables)
- [cmjchrisjones](https://twitch.tv/cmjchrisjones)

### Contributors

- [cmjchrisjones](https://twitch.tv/cmjchrisjones)
- [RazerPoint](https://twitch.tv/razerpoint)
- [Chimerablack1](https://twitch.tv/chimerablack1)
- [viperc46](https://twitch.tv/viperc46)
- [sorskoot](https://twitch.tv/sorskoot)
- [Flyken](https://twitch.tv/flyken)
- [dot_commie](https://twitch.tv/dot_commie)
- [parithon](https://twitch.tv/parithon)
- [thelaurynjolley](https://twitch.tv/thelaurynjolley)
- [phrakberg](https://twitch.tv/phrakberg)
- [roberttables](https://twitch.tv/roberttables)
- [copperbeardy](https://twitch.tv/copperbeardy)
