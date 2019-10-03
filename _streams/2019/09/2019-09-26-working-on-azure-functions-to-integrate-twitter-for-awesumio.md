---
layout: post
date: 2019-09-26 18:09
title: "Awesum.io | Working on the Azure Functions and integrating with Twitter"
image: https://user-images.githubusercontent.com/1228996/65778333-59dc2400-e10b-11e9-93ab-77032bdbcd39.png
description: "Modified our Azure Functions to be durable functions for Awesum.io"
comments: true
tags: [twitch, stream, azure, functions, durable, twitter]
replay: https://youtu.be/GZ_BOM4jpqw
---

### Stream Replay Link

[{{page.replay}}]({{page.replay}})

<!--more-->

### Segments

| Timestamp | Topic
| ---       | ---
| [00:09]({{page.replay}}?t=540) | Kicking it off with Nate telling jokes |
| [00:15]({{page.replay}}?t=900) | Discussing the new Twitch UI &amp; my talk at DotNetConf 2019 |
| [00:28]({{page.replay}}?t=1680) | Starting to work on awesum.io |
| [04:11]({{page.replay}}?t=15065) | Wrapping up and raid to [cpayette](https://twitch.tv/cpayette) |

### Today's Candle To Code By

<a href="https://amzn.to/320cEn1" target="_blank">Unicorn Dust</a>

### Goals

- [] Finalize our Azure Functions

### Things We Learned

- <a href="https://twitch.tv/lannonbr" target="_blank">Lannonbr</a>: shared the <a href="https://www.wired.com/story/want-free-coding-lessons-twitch-real-time/" target="blank">WIRED article</a> featuring noopkat, csharpfritz & SushiDay
- <a href="https://twitch.tv/cmjchrisjones" target="_blank">cmjchrisjones</a>: shared <a href="https://stackoverflow.com/questions/46553687/azure-function-run-code-on-startup" target="_blank">a link that describes dependancy injection in Azure Functions</a>
- <a href="https://twitch.tv/RamblingGeek" target="_blank">RamblingGeek</a>: shared the new <a href="https://www.elgato.com/en/gaming/multi-mount" target="_blank">Multi-mount products</a> from Elgato
- <a href="https://twitch.tv/parithon" target="_blank"><a/> shared a <a href="https://stackoverflow.com/questions/46315734/how-to-call-another-function-with-in-an-azure-function" target="_blank">StackOverflow</a> question that discusses using Durable Functions in Azure

---

## Today's stream brought to you by

### Cheers

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/933c6970-ad44-4b52-a4d3-8b573655df03-profile_image-300x300.png"/>
    <span>cpayette<br/>
      <a href="https://twitch.tv/cpayette" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
</div>

### Raids

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/958a22b1-e9e5-4390-8843-98d9def72a35-profile_image-300x300.png"/>
    <span>sorskoot<br/>
      <a href="https://twitch.tv/sorskoot" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
</div>

### Moderators

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/a390873e-0dff-4ae6-a798-93c1e9516616-profile_image-300x300.png"/>
    <span>RamblingGeek<br/>
      <a href="https://twitch.tv/ramblinggeek" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/rgeekuk" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/ramblinggeekuk" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/3c435956-3fc3-4ccd-bac5-1c4e1671500b-profile_image-300x300.png"/>
    <span>phrakberg<br/>
      <a href="https://twitch.tv/phrakberg" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/b159c7c5-bbff-43d7-999a-7a0805f4893e-profile_image-300x300.jpg"/>
    <span>cmjchrisjones<br/>
      <a href="https://twitch.tv/cmjchrisjones" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/cmjchrisjones" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/cmjchrisjones" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/6654d342-e3b6-45c4-83fe-32b523bdc7e2-profile_image-300x300.png"/>
    <span>roberttables<br/>
      <a href="https://twitch.tv/roberttables" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://github.com/mtheoryx" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/abd243dc-3790-4a73-b7b4-1269f89ce083-profile_image-300x300.png"/>
    <span>parithon<br/>
      <a href="https://twitch.tv/parithon" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/933c6970-ad44-4b52-a4d3-8b573655df03-profile_image-300x300.png"/>
    <span>cpayette<br/>
      <a href="https://twitch.tv/cpayette" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
</div>

### Contributors

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/7d5a92ba-8ac0-4731-b0d0-bd469342d146-profile_image-300x300.png"/>
    <span>JTsom<br/>
      <a href="https://twitch.tv/jtsom" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/674a3d7b-461f-48ac-b52d-b23f3482d86d-profile_image-300x300.png"/>
    <span>JonathanDelfraisse<br/>
      <a href="https://twitch.tv/jonathandelfraisse" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/dd1d0797-0516-48c7-963b-b15053798095-profile_image-300x300.png"/>
    <span>sinkien<br/>
      <a href="https://twitch.tv/sinkien" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/bb246225-4752-461b-819a-739c9e523a8e-profile_image-300x300.png"/>
    <span>deathpax<br/>
      <a href="https://twitch.tv/deathpax" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/f5373f0e-4fa8-4d90-8303-12c47001c08f-profile_image-300x300.jpeg"/>
    <span>AncientCoder<br/>
      <a href="https://twitch.tv/ancientcoder" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://github.com/theancientcoder" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures/4cbf10f1-bb9f-4f57-90e1-15bf06cfe6f5-profile_image-300x300.jpg"/>
    <span>pinkemma<br/>
      <a href="https://twitch.tv/pinkemma" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/2cf97457-191d-4268-b565-8be2ae0c94a8-profile_image-300x300.png"/>
    <span>CodeStencil<br/>
      <a href="https://twitch.tv/codestencil" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/845cc49d-4b3b-4dec-ad4f-8245d98e76c9-profile_image-300x300.png"/>
    <span>sarinbag<br/>
      <a href="https://twitch.tv/sarinbag" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/avery246813579-profile_image-cef09e542320a9d5-300x300.png"/>
    <span>Avery246813579<br/>
      <a href="https://twitch.tv/avery246813579" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/933c6970-ad44-4b52-a4d3-8b573655df03-profile_image-300x300.png"/>
    <span>cpayette<br/>
      <a href="https://twitch.tv/cpayette" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/b159c7c5-bbff-43d7-999a-7a0805f4893e-profile_image-300x300.jpg"/>
    <span>cmjchrisjones<br/>
      <a href="https://twitch.tv/cmjchrisjones" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/cmjchrisjones" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/cmjchrisjones" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/bfcb04d4-2e37-4f81-b58a-955a34b33e9d-profile_image-300x300.png"/>
    <span>CodingGorilla<br/>
      <a href="https://twitch.tv/codinggorilla" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/3c435956-3fc3-4ccd-bac5-1c4e1671500b-profile_image-300x300.png"/>
    <span>phrakberg<br/>
      <a href="https://twitch.tv/phrakberg" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures/0ecbb6c3-fecb-4016-8115-aa467b7c36ed-profile_image-300x300.jpg"/>
    <span>ecomath328<br/>
      <a href="https://twitch.tv/ecomath328" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/1e60395d-4246-4690-b486-40ebb3c8b00b-profile_image-300x300.png"/>
    <span>tbdgamer<br/>
      <a href="https://twitch.tv/tbdgamer" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/8e4eab31-0a66-4b1a-a0df-ca962e4a9b8e-profile_image-300x300.jpeg"/>
    <span>Lannonbr<br/>
      <a href="https://twitch.tv/lannonbr" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/f43c0fb3-e87e-459d-b093-ef9393d874e5-profile_image-300x300.png"/>
    <span>MusicalBookworm<br/>
      <a href="https://twitch.tv/musicalbookworm" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/a390873e-0dff-4ae6-a798-93c1e9516616-profile_image-300x300.png"/>
    <span>RamblingGeek<br/>
      <a href="https://twitch.tv/ramblinggeek" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/rgeekuk" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/ramblinggeekuk" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/3cbb6f5a-b4c6-424e-8fc4-8fb7c4711515-profile_image-300x300.png"/>
    <span>SvavaBlount<br/>
      <a href="https://twitch.tv/svavablount" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/ea38305853e9d3b3-profile_image-300x300.jpeg"/>
    <span>harlyhm<br/>
      <a href="https://twitch.tv/harlyhm" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/6654d342-e3b6-45c4-83fe-32b523bdc7e2-profile_image-300x300.png"/>
    <span>roberttables<br/>
      <a href="https://twitch.tv/roberttables" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://github.com/mtheoryx" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/abd243dc-3790-4a73-b7b4-1269f89ce083-profile_image-300x300.png"/>
    <span>parithon<br/>
      <a href="https://twitch.tv/parithon" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/ea313d11-e693-455d-8d79-e8b9a4787ea7-profile_image-300x300.jpeg"/>
    <span>CodebaseAlpha<br/>
      <a href="https://twitch.tv/codebasealpha" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/926c0d6b-bc04-4dba-88a6-915dc6c6bb54-profile_image-300x300.png"/>
    <span>CopperBeardy<br/>
      <a href="https://twitch.tv/copperbeardy" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/copperbeardy" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/copperbeardy" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures/4cbf10f1-bb9f-4f57-90e1-15bf06cfe6f5-profile_image-300x300.jpg"/>
    <span>deadend008<br/>
      <a href="https://twitch.tv/deadend008" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/0e358aad-5ca6-4ce9-bc44-b1f02d57ac19-profile_image-300x300.png"/>
    <span>newcoder101<br/>
      <a href="https://twitch.tv/newcoder101" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/49134312-c13a-439d-b230-c7244d303d13-profile_image-300x300.png"/>
    <span>mrBalrog<br/>
      <a href="https://twitch.tv/mrbalrog" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/9de001e8953baf17-profile_image-300x300.png"/>
    <span>Janisku7<br/>
      <a href="https://twitch.tv/janisku7" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures/b83b1794-7df9-4878-916c-88c2ad2e4f9f-profile_image-300x300.jpg"/>
    <span>infinitebattlefield<br/>
      <a href="https://twitch.tv/infinitebattlefield" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures/bb97f7e6-f11a-4194-9708-52bf5a5125e8-profile_image-300x300.jpg"/>
    <span>0ffby0ne<br/>
      <a href="https://twitch.tv/0ffby0ne" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/d8d1d839-7d75-4bdf-b992-5995645ccdbd-profile_image-300x300.png"/>
    <span>retro_crt<br/>
      <a href="https://twitch.tv/retro_crt" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures/49988c7b-57bc-4dee-bd4f-6df4ad215d3a-profile_image-300x300.jpg"/>
    <span>sbtw15<br/>
      <a href="https://twitch.tv/sbtw15" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/morpheuz420-profile_image-85769d609c0a36ae-300x300.png"/>
    <span>진정한모피어스<br/>
      <a href="https://twitch.tv/morpheuz420" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures/4cbf10f1-bb9f-4f57-90e1-15bf06cfe6f5-profile_image-300x300.jpg"/>
    <span>ohadsh<br/>
      <a href="https://twitch.tv/ohadsh" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures/bb97f7e6-f11a-4194-9708-52bf5a5125e8-profile_image-300x300.jpg"/>
    <span>p_jimmy<br/>
      <a href="https://twitch.tv/p_jimmy" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/72c4ef86-00a5-4124-b0c3-d5f51e5a22c9-profile_image-300x300.png"/>
    <span>BraveCobra2<br/>
      <a href="https://twitch.tv/bravecobra2" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/0c28e784-15dd-4725-a666-c1fd0ee953e3-profile_image-300x300.png"/>
    <span>vin_dev<br/>
      <a href="https://twitch.tv/vin_dev" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures/b83b1794-7df9-4878-916c-88c2ad2e4f9f-profile_image-300x300.jpg"/>
    <span>twitchloff<br/>
      <a href="https://twitch.tv/twitchloff" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures/cd618d3e-f14d-4960-b7cf-094231b04735-profile_image-300x300.jpg"/>
    <span>sirzmoke<br/>
      <a href="https://twitch.tv/sirzmoke" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/958a22b1-e9e5-4390-8843-98d9def72a35-profile_image-300x300.png"/>
    <span>sorskoot<br/>
      <a href="https://twitch.tv/sorskoot" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures/bb97f7e6-f11a-4194-9708-52bf5a5125e8-profile_image-300x300.jpg"/>
    <span>bl3nd865<br/>
      <a href="https://twitch.tv/bl3nd865" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures/cd618d3e-f14d-4960-b7cf-094231b04735-profile_image-300x300.jpg"/>
    <span>warpaint<br/>
      <a href="https://twitch.tv/warpaint" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
</div>
