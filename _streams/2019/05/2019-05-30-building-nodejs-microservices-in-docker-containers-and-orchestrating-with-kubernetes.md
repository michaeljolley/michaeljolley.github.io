---
layout: post
date: 2019-05-30 18:00
title: "Building Node.js microservices in Docker containers"
image: https://user-images.githubusercontent.com/1228996/58680805-1d501580-832f-11e9-8570-9f50e3a17aa1.png
description: "Today we are writing a Twitch chat bot using Node.js microservices.  Then adding
them to Docker containers."
comments: true
tags: [twitch, stream, nodejs, typescript, microservice, docker, container, kubernetes]
---

<img src="{{page.image}}"/>

## Stream Replay Link

[https://youtu.be/v8xR-RtTBJ0](https://youtu.be/v8xR-RtTBJ0)

<!--more-->

### Segments

| Timestamp | Topic                                                                                   |
| ---       | ---                                                                                     |
| 00:06     | Kick it off                                                                             |
| 00:17     | Show & tell with new hardware for our Aviary project                                    |
| 00:21     | Overview of our new Node.js chat bo                                                     |
| 00:42     | Working on a bug between our socket.io & chat services                                  |
| 00:58     | Translating emotes in a chat message into img tags for rendering on our chat overlay    |
| 02:44     | Wrapping it up and raid to [ninjabunny9000](https://twitch.tv/ninjabunny9000)           |


---

### Today's Candle To Code By

[Fresh Balsam](https://amzn.to/2XHzXQv)

---

## Things we learned

- [wil_bennett](https://twitch.tv/wil_bennett) told us about JavaScript lamba functions using more memory.  More info at [https://www.typescriptlang.org/docs/handbook/functions.html](https://www.typescriptlang.org/docs/handbook/functions.html)
- [cmjchrisjones](https://github.com/cmjchrisjones) showed us [KiteMatic](https://kitematic.com/) which helps with logging in Docker containers



## Things to Review & Notes

- [Natalia Tepluhina](https://twitter.com/N_Tepluhina) will be joining us next Sunday, June 2nd, as we
continue our [Heroines of Javascript](https://www.twitch.tv/themichaeljolley/events) series
  - We'll be giving away a deck of the Heroines of JavaScript cards on stream
- Join our [Discord](https://discord.gg/XSG7HJm) server to continue the conversation
- Aviary hardware purchases
- VS Code Twitch Themer changes needed

## Goals

- [x] Review current IO2 code base
- [x] Clean up any issues with data being sent through socket.io
- [x] Work on the overlay service to provide overlays for the stream (specifically chat & emote overlays)

## Next Steps

-

---

## Todays stream brought to you by

### Subscribers

- TheHugoDahl (2 mo)
- BrandonSatrom (3 mo)
- wil_bennett `Gifted by Clarkio`

### Cheers

| Compadre      | Bits      |
| ---           | ---       |
|               |           |

### Raids

| Marauder        | Accomplices   |
| ---             | ---           |
| CodeRushed      | 13            |
| MatthewDGroves  | 6             |
