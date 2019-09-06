---
layout: post
date: 2019-05-26 18:00
title: "Measuring moisture with Adafruit STEMMA soil sensor and Particle Xenons"
image: https://user-images.githubusercontent.com/1228996/58390241-dcd25e00-7ff5-11e9-9491-c55439dfffe5.png
description: "Adding Adafruit STEMMA soil moisture sensors to our Aviary project's Particle Xenons to begin monitoring based off moisture levels."
comments: true
tags: [twitch, stream, particle, adafruit, stemma, iot, xenon]
---

<img src="{{page.image}}"/>

## Stream Replay Link

[https://youtu.be/ZvMu6JhRnOQ](https://youtu.be/ZvMu6JhRnOQ)

<!--more-->

### Segments

| Timestamp | Topic                                                                                 |
| ---       | ---                                                                                   |
| 00:10     | Kick it off                                                                           |
| 00:18     | Reviewing pull requests on our VS Code extension                                      |
| 00:39     | Working on the Aviary project to add a soil moisture sensor                           |
| 01:09     | Having problems flashing our Argon & Xenon boards                                     |
| 04:10     | After flashing two new devices our code starts working fine and sends moisture data   |
| 04:30     | Discussing Aviary project and next steps                                              |
| 05:00     | Preparing a new release of our VS Code Twitch Themer extension                        |
| 05:30     | Testing our release in VS Code                                                        |
| 06:00     | Reviewing a new NodeJs bot, talking food and wrapping it up.                          |


---

### Today's Candle To Code By

[Old Factory Mahogany](https://amzn.to/2IHHPNJ)

---

## Things we learned

- [majorthorn](https://github.com/majorthorn) Suggested the following future baby bird names for Aviary:
    - Big Momma & Dinky (Fox & the Hound)
    - Archimedes (Sword and the Stone)
- [majorthorn](https://github.com/majorthorn) helped us name our mesh network Volary after we couldn't join/delete the existing Aviary mesh network
- [cmjchrisjones](https://github.com/cmjchrisjones)  https://github.com/cmjchrisjones/LiveCodersStreamDeckProfilesTwitchCommands/
- The [Particle](https://docs.particle.io/tutorials/device-os/led/argon/) documentation provides definitions to various blinking
patterns of the device LED
- Based on the [Particle community forums](https://community.particle.io/t/unable-to-setup-argon-on-mesh-network/46463/4) we learned
that you can not currently delete a mesh network from your account
- Someone shared the [Waveshare 7in HDMI touch screen display](https://amzn.to/2M8pooA) for possible use in our project to
notify the family of streaming/on call/available system
- [varlabel](https://twitch.tv/varlabel) suggested monitoring flow to our planters via volume rather than
sensing moisture level to stop watering.  `water density / volume * pore space`


## Things to Review & Notes

- [Natalia Tepluhina](https://twitter.com/N_Tepluhina) will be joining us next Sunday, June 2nd, as we
continue our [Heroines of Javascript](https://www.twitch.tv/themichaeljolley/events) series
- IO is being delivered Tuesday

## Goals

- [x] Review pull requests on our VS Code extension
- [x] Connect our soil moisture sensor to our Xenon and start sending actual measurements to mother bird

## Ideas / Next Steps

- [roberttables](https://github.com/mtheoryx) suggested adding a `!heroines` command to link people to more information
about our upcoming Heroines of Javascript series.
- We want to submit feedback to [Particle](https://particle.io) that the Workbench extension should report when
flashing is complete.  Currently it says "Flashing device_name..." but never sends a message when the flashing has finished.

---

## Todays stream brought to you by

### Subscribers

- Clarkio (2 mo)
- Lannonbr `Gifted by Clarkio`
- dare_devel_ops
- theLaurynJolley `Gifted by roberttables`
- KimPhillpotts


### Cheers

| Compadre      | Bits      |
| ---           | ---       |
| roberttables  | 1,130     |
| ninjacoder88  | 25        |


### Raids

| Marauder      | Accomplices   |
| ---           | ---           |
| cmgriffing    | 43            |
| SudoKid       | 10            |

