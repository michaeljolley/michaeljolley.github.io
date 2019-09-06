---
layout: post
date: 2019-06-18 18:00
title: "Adding more state and tracking to our chat bot with Node.js and CosmosDB"
image: https://user-images.githubusercontent.com/1228996/59729450-3f3d0980-9204-11e9-8046-5111a8ef1428.png
description: "Fixing an issue with a new overlay served from our Node.js overlay service.  Also adding event logging to CosmosDB."
comments: true
tags: [twitch, stream, nodejs, cosmosdb, obs, state, microservice]
---

<img src="{{page.image}}"/>

## Stream Replay Link

[https://youtu.be/uE6QZU7BCJY](https://youtu.be/uE6QZU7BCJY)

<!--more-->

### Segments

| Timestamp | Topic                                                                   |
| ---       | ---                                                                     |
| 00:07     | Kick it off                                                             |
| 00:09     | Show & tell                                                             |
| 00:11     | Discussing changes made off-stream to the IO project                    |
| 00:20     | Debugging issues with candle voting                                     |
| 00:50     | Discussing analytics of stream data and how to capture them             |
| 01:10     | Starting to add TypeScript interfaces for various data objects          |
| 01:55     | Debugging problem with our alert overlay                                |
| 03:20     | Adding a new logger service to IO to log events to the database         |
| 04:42     | Wrapping it up and raiding [oh_brother](https://twitch.tv/oh_brother)   |


---

### Today's Candle To Code By

[Old Factory Leather](https://amzn.to/2IHHPNJ)


---

## Things we learned

- [Clarkio](https://twitch.tv/clarkio) showed us that by pasting timestamps into YouTube description it creates timestamped links in the video
- [codephobia](https://twitch.tv/codephobia) showed us a [Docker Compose](https://pastebin.com/gHPDpZLy) file that displays how to run MongoDB with data stored in a separate volume on Windows
- [Clarkio](https://twitch.tv/clarkio) shared a [code snippet](https://github.com/clarkio/stream-note-taker/blob/master/src/stream.js#L59-L70)] to calculate a timestamp since the streams start
- [parithon](https://github.com/parithon) showed a nice [JS utility method](https://stackblitz.com/edit/typescript-zrskdc) to map two objects, while only mapping matching properties between the two


## Goals

- [x] Fix issue with alert overlay
- [x] Start defining models to use across services
- [x] Start logger application to log events for a stream in a stateful db


---

## Todays stream brought to you by

### Subscribers

- dot_commie (3 mo)

### Cheers

| Compadre      | Bits      |
| ---           | ---       |
| Clarkio       | 1,700     |
| roberttables  | 3,001     |

### Raids

| Marauder      | Accomplices   |
| ---           | ---           |
| DevChatter    | 33            |
