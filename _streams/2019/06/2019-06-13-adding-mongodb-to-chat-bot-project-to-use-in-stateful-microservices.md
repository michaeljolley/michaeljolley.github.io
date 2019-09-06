---
layout: post
date: 2019-06-13 18:00
title: "Adding MongoDB to our Node.js based chat bot to add more persistent state to some microservices"
image: https://user-images.githubusercontent.com/1228996/59479783-d0d30280-8e23-11e9-9f27-ec09f5121466.png
description: "Our chat bot, IO, runs as several Node.js microservices and we need to add a more permanent state than just in-memory arrays.  So we're adding a new container with MongoDB for our stateful services to take advantage of."
comments: true
tags: [twitch, stream, mongodb, nodejs, io, chat]
---

<img src="{{page.image}}"/>

## Stream Replay Link

[https://youtu.be/BSwGzizgzBY](https://youtu.be/BSwGzizgzBY)

<!--more-->

### Segments

| Timestamp | Topic                                                                           |
| ---       | ---                                                                             |
| 00:03     | Nate's rad moves                                                                |
| 00:06     | Going through Thing to Review                                                   |
| 00:24     | Reviewing PR's on our projects                                                  |
| 00:36     | Reviewing the IO chat bot project                                               |
| 00:40     | Working to add MongoDB to our IO chat bot to make a stateful service            |
| 04:14     | Show & Tell                                                                     |
| 04:25     | Fixing an issue with async/await with MongoDB                                   |
| 04:55     | Adding logic to turn on/off AV effects                                          |
| 05:15     | Adding a new admin Vue.js service to allow for turning on/off global services   |
| 06:15     | Wrap it up and raiding [codephobia](https://twitch.tv/codephobia)               |

---

### Today's Candle To Code By

[Warm Tobacco Pipe](https://amzn.to/2GSsMxX)

---

## Things we learned

- [dot_commie](https://twitch.tv/dot_commie) &  [TheHugoDahl](https://github.com/hugodahl) shared [https://db-engines.com/en/ranking](https://db-engines.com/en/ranking)
- [BrettMillerIT](https://github.com/brettmillerb) showed us the awesome PowerShell command `get-childitem -<Ctrl+space>`
- [LittleDan45](https://github.com/danielpomas) shared a MongoDB configuration to remove a warning message on connecting: `useNewUrlParser: true`
- [mholloway24](https://github.com/mholloway24) gave us a MongoDB method reference: [https://docs.mongodb.com/manual/reference/method/db.getCollection/](https://docs.mongodb.com/manual/reference/method/db.getCollection/)
- [d0ruk](https://github.com/d0ruk) introduced us to [Mongo Express](https://hub.docker.com/_/mongo-express) to manage our MongoDB container instance from another container
- [d0ruk](https://github.com/d0ruk) also showed us [https://docs.docker.com/docker-for-azure/persistent-data-volumes/](https://docs.docker.com/docker-for-azure/persistent-data-volumes/)

## Things to Review & Notes

- Next Sunday we'll have [Sara Vieira](https://www.twitch.tv/events/0YK5JEx4SLa9roW1aK6jBA) on with
Lauryn & Layla as part of our [Heroines of JavaScript](https://www.twitch.tv/themichaeljolley/dashboard/events/IUXJeFyqRReQAI5BLaUivQ) series
- All but one piece of hardware is in for our [Aviary](https://github.com/michaeljolley/aviary) project.
- Final state of our project from Tuesdays soldering stream.
- Discord (connect and chat with us off-stream, discuss our projects, help each other with questions/learning)
- GitHub (help us code, we acknowledge contributors)
- Website (all of our show notes, replay links, credit for cheers/subs/raids)
- YouTube
- VS Code new feature to hide status bar items

## Goals

- [x] Add a MongoDB container to use in our user & chat services
- [x] Move user state from in-memory array to the new MongoDB container
- [ ] Add command to start/stop all A/V commands by broadcaster/moderator.
- [ ] Add new candle commands that allow for voting for the candle.

## Next Steps

- Add an admin UI service with Vue

---

## Todays stream brought to you by

### Subscribers

- LittleDan45
- yaldabahut (2 mo)
- reillydom `Gifted by roberttables`

### Cheers

| Compadre        | Bits    |
| ---             | ---     |
| cpayette        | 200     |
| parithon        | 257     |
| MatthewDGroves  | 20      |

### Raids

| Marauder      | Accomplices   |
| ---           | ---           |
| nick_larsen   | 7             |
| sorskoot      | 7             |
| RamblingGeek  | 4             |
