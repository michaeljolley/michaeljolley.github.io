---
layout: post
date: 2019-06-06 18:00
title: "Analyzing streaming video with Azure Face API to determine sentiment"
image: https://user-images.githubusercontent.com/1228996/59131169-38c2ae00-8937-11e9-86e6-ffbb75b3ac04.png
description: "We have a web application that allows users to join and communicate via audio/video using Agora.io's WebRTC offerings.  On today's stream we added the ability to scan those incoming streams and send bits to the Azure Face API to determine sentiment and display it on each persons video feed."
comments: true
tags: [twitch, stream, azure, agora, ai, machine-learning, face-api, sentiment]
---

<img src="{{page.image}}"/>

## Stream Replay Link

[https://youtu.be/nNEHBUTJ8_4](https://youtu.be/nNEHBUTJ8_4)

<!--more-->

### Segments

| Timestamp | Topic                                                                                   |
| ---       | ---                                                                                     |
| 00:06     | Kick it off                                                                             |
| 00:09     | Show and tell                                                                           |
| 00:38     | Reviewing current WebRTC streaming app                                                  |
| 00:55     | Researching and starting to add Azure Face API                                          |
| 01:45     | With Face API working, now we try to capture a still from the incoming video streams    |
| 02:24     | Attempting to send our canvas object to Face API for processing                         |
| 03:35     | Reviewing Face API results from our stills and starting to automate getting results     |
| 04:55     | Wrapping up and raid to [csharpfritz](https://twitch.tv/csharpfritz)                    |


---

### Today's Candle To Code By

[Fresh Balsam](https://amzn.to/2XHzXQv)

---

## Things we learned

- [williamcomartin](https://twitch.tv/williamcomartin) shared with us that Adafruit was named after Ada Lovelace, a 19th century Mathematician

## Things to Review & Notes

-

## Goals

- [x] Get our streaming videos to report sentiment for each participant using Azure Face API

## Next Steps

- Clean up UI of the web application

---

## Todays stream brought to you by

### Subscribers

- phrakberg (3 mo)
- ElectricHavoc (2 mo)

### Cheers

| Compadre      | Bits      |
| ---           | ---       |
| roberttables  | 643       |
| cpayette      | 500       |
| FBoucheros    | 200       |
| h0usebesuch   | 900       |
| phrakberg     | 100       |
| ramblinggeek  | 200       |
| cmjchrisjones | 300       |


### Raids

| Marauder      | Accomplices   |
| ---           | ---           |
| CodeRushed    | 13            |
| roberttables  | 8             |
