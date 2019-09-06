---
layout: post
date: 2019-07-11 18:00
title: "Integrating our chat bot with GitHub's API to save stream notes as markdown files in our repo"
image: https://user-images.githubusercontent.com/1228996/61196512-c612c400-a694-11e9-9100-5ea37302795c.png
description: "Creating a new Node.js service that watches for streams that end and create stream notes in markdown that automatically get committed to our GitHub repo."
comments: true
tags: [twitch, stream, github, nodejs, mongodb]
---

<img src="{{page.image}}"/>

## Stream Replay Link

[https://youtu.be/7yPKqu97uSs](https://youtu.be/7yPKqu97uSs)

<!--more-->

### Segments

| Timestamp | Topic                                                                         |
| ---       | ---                                                                           |
| 00:06     | Kick it off                                                                   |
| 00:07     | Adding some commands to my StreamDeck                                         |
| 00:15     | Discussing white BBQ sauce                                                    |
| 00:23     | Reviewing how we want to integrate with GitHub                                |
| 00:33     | Bluetoothageddon and setting up wired devices                                 |
| 00:42     | Fixing a few bugs due to refactoring with strongly typed Socket.io messages   |
| 01:26     | Fixing an issue with playing audio clips from chat                            |
| 01:39     | Finally working on our GitHub integration                                     |
| 02:52     | Wrapping up and raid to [roberttables](https://twitch.tv/roberttables)        |

---

### Today's Candle To Code By

[Old Factory Leather](https://amzn.to/2IHHPNJ)

---

## Goals

- [ ] Adding GitHub API requests to our API service
- [x] Generate a new markdown file based on our stream document in MongoDB

## Things we learned

- [cmjchrisjones](https://twitch.tv/cmjchrisjones) shared a white BBQ sauce at [https://www.myrecipes.com/recipe/white-barbecue-sauce-3](https://www.myrecipes.com/recipe/white-barbecue-sauce-3)

---

## Todays stream brought to you by

### Subscribers

-

### Cheers

| Compadre      | Bits      |
| ---           | ---       |
|               |           |

### Raids

| Marauder      | Accomplices   |
| ---           | ---           |
| peacefaker    | 1             |
| codephobia    | 8             |
