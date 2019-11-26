---
layout: post
date: 2019-11-21 18:11
title: "Working on our serverless chat bot Vulcan | JS, FaunaDB, Azure, socket.io"
image: https://user-images.githubusercontent.com/1228996/69594945-886b6380-0fc3-11ea-8ce6-8fc9dcff9098.png
description: "Working on our serverless chat bot Vulcan"
comments: true
tags: [twitch, stream, javascript, faunadb, socket-io, azure]
replay: https://youtu.be/2Q6fojOFtlA
---

### Stream Replay Link

[{{page.replay}}]({{page.replay}})

<!--more-->

### Today's Candle To Code By

<a href="https://amzn.to/2GSsMxX" target="_blank">Warm Tobacco Pipe</a>

## Today's stream brought to you by

### Subscribers

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/75305d54-c7cc-40d1-bb9c-91fbe85943c7-profile_image-300x300.png"/>
    <span>unrulyhotfixer<br/>
      <a href="https://twitch.tv/unrulyhotfixer" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/2cc01832-4ccb-466a-8c76-e522e52cdf2b-profile_image-300x300.png"/>
    <span>Beachcasts<br/>
      <a href="https://twitch.tv/beachcasts" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/ffedad62-cc6e-497f-8eef-61e7fec4c9b4-profile_image-300x300.png"/>
    <span>TheAltF4Stream<br/>
      <a href="https://twitch.tv/thealtf4stream" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/wisdomleatherworks-profile_image-3ed842ed693ccb84-300x300.png"/>
    <span>WisdomLeatherworks<br/>
      <a href="https://twitch.tv/wisdomleatherworks" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/efeb108d-6334-42da-89b8-993a6292f95a-profile_image-300x300.png"/>
    <span>ToeFrog<br/>
      <a href="https://twitch.tv/toefrog" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/thetoefrog" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/toefrog" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/74d3567d-f1af-4e88-9f02-5a0e89bd741b-profile_image-300x300.png"/>
    <span>developersgarage<br/>
      <a href="https://twitch.tv/developersgarage" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
</div>

### Raids

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/74d3567d-f1af-4e88-9f02-5a0e89bd741b-profile_image-300x300.png"/>
    <span>developersgarage<br/>
      <a href="https://twitch.tv/developersgarage" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
</div>

### Moderators

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/0544659c-8d18-44dd-ae1b-b659553a4ffa-profile_image-300x300.jpg"/>
    <span>Clarkio<br/>
      <a href="https://twitch.tv/clarkio" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/6654d342-e3b6-45c4-83fe-32b523bdc7e2-profile_image-300x300.png"/>
    <span>roberttables<br/>
      <a href="https://twitch.tv/roberttables" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://github.com/mtheoryx" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/f7ff026e-98ca-4081-9e96-17e46b43df9d-profile_image-300x300.png"/>
    <span>phrakberg<br/>
      <a href="https://twitch.tv/phrakberg" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/solenberg" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/solenberg" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/e0b2472c-b103-44d3-b132-c618032217ef-profile_image-300x300.png"/>
    <span>RamblingGeek<br/>
      <a href="https://twitch.tv/ramblinggeek" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/rgeekuk" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/ramblinggeekuk" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
</div>

### Followers

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/dbdc9198-def8-11e9-8681-784f43822e80-profile_image-300x300.png"/>
    <span>indhayare123<br/>
      <a href="https://twitch.tv/indhayare123" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-300x300.png"/>
    <span>Chids21<br/>
      <a href="https://twitch.tv/chids21" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ead5c8b2-a4c9-4724-b1dd-9f00b46cbd3d-profile_image-300x300.png"/>
    <span>clarkioafterdarkio<br/>
      <a href="https://twitch.tv/clarkioafterdarkio" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/215b7342-def9-11e9-9a66-784f43822e80-profile_image-300x300.png"/>
    <span>helmsb<br/>
      <a href="https://twitch.tv/helmsb" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-300x300.png"/>
    <span>JourneyStarted<br/>
      <a href="https://twitch.tv/journeystarted" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-300x300.png"/>
    <span>ausmart2017<br/>
      <a href="https://twitch.tv/ausmart2017" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/8c080c73-d060-4b73-954d-7d4d972d182b-profile_image-300x300.png"/>
    <span>VLEESBROODTV<br/>
      <a href="https://twitch.tv/vleesbroodtv" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-300x300.png"/>
    <span>keepingtrckofthisacct<br/>
      <a href="https://twitch.tv/keepingtrckofthisacct" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
</div>

### Contributors

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/0544659c-8d18-44dd-ae1b-b659553a4ffa-profile_image-300x300.jpg"/>
    <span>Clarkio<br/>
      <a href="https://twitch.tv/clarkio" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/63a1ab96-e388-4937-8ae2-958aea48b799-profile_image-300x300.jpeg"/>
    <span>fishingdev<br/>
      <a href="https://twitch.tv/fishingdev" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/f7ff026e-98ca-4081-9e96-17e46b43df9d-profile_image-300x300.png"/>
    <span>phrakberg<br/>
      <a href="https://twitch.tv/phrakberg" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/solenberg" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/solenberg" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/6654d342-e3b6-45c4-83fe-32b523bdc7e2-profile_image-300x300.png"/>
    <span>roberttables<br/>
      <a href="https://twitch.tv/roberttables" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://github.com/mtheoryx" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/efeb108d-6334-42da-89b8-993a6292f95a-profile_image-300x300.png"/>
    <span>ToeFrog<br/>
      <a href="https://twitch.tv/toefrog" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/thetoefrog" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/toefrog" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/96a10945-5423-4b4a-b9dc-f578ffabaafe-profile_image-300x300.png"/>
    <span>BlazingBlackBeard<br/>
      <a href="https://twitch.tv/blazingblackbeard" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/171f8fad-0c99-49bb-a963-654c90b71517-profile_image-300x300.jpg"/>
    <span>AtomikJaye<br/>
      <a href="https://twitch.tv/atomikjaye" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/1330ef1c-5aec-48cf-8187-7bf285b54821-profile_image-300x300.png"/>
    <span>baskarmib<br/>
      <a href="https://twitch.tv/baskarmib" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/13e5fa74-defa-11e9-809c-784f43822e80-profile_image-300x300.png"/>
    <span>thaaoblues<br/>
      <a href="https://twitch.tv/thaaoblues" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ebb84563-db81-4b9c-8940-64ed33ccfc7b-profile_image-300x300.png"/>
    <span>cmjio<br/>
      <a href="https://twitch.tv/cmjio" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/294c98b5-e34d-42cd-a8f0-140b72fba9b0-profile_image-300x300.png"/>
    <span>Krennan<br/>
      <a href="https://twitch.tv/krennan" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/connorwrightkappa-profile_image-505d931be8488234-300x300.png"/>
    <span>ConnorwrightKappa<br/>
      <a href="https://twitch.tv/connorwrightkappa" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/e0b2472c-b103-44d3-b132-c618032217ef-profile_image-300x300.png"/>
    <span>RamblingGeek<br/>
      <a href="https://twitch.tv/ramblinggeek" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/rgeekuk" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/ramblinggeekuk" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-300x300.png"/>
    <span>bl3nd865<br/>
      <a href="https://twitch.tv/bl3nd865" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-300x300.png"/>
    <span>h0usebesuch<br/>
      <a href="https://twitch.tv/h0usebesuch" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/215b7342-def9-11e9-9a66-784f43822e80-profile_image-300x300.png"/>
    <span>helmsb<br/>
      <a href="https://twitch.tv/helmsb" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/215b7342-def9-11e9-9a66-784f43822e80-profile_image-300x300.png"/>
    <span>titanvoyager<br/>
      <a href="https://twitch.tv/titanvoyager" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/74d3567d-f1af-4e88-9f02-5a0e89bd741b-profile_image-300x300.png"/>
    <span>developersgarage<br/>
      <a href="https://twitch.tv/developersgarage" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-300x300.png"/>
    <span>JourneyStarted<br/>
      <a href="https://twitch.tv/journeystarted" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/a4261086-1c0e-4ed5-ba0d-1ba75d1cac8e-profile_image-300x300.png"/>
    <span>codeskunk<br/>
      <a href="https://twitch.tv/codeskunk" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/13e5fa74-defa-11e9-809c-784f43822e80-profile_image-300x300.png"/>
    <span>pinkemma<br/>
      <a href="https://twitch.tv/pinkemma" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/8c080c73-d060-4b73-954d-7d4d972d182b-profile_image-300x300.png"/>
    <span>VLEESBROODTV<br/>
      <a href="https://twitch.tv/vleesbroodtv" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/19ec13af-bf20-48bc-9d89-ba6c527c580f-profile_image-300x300.png"/>
    <span>JonathanDelfraisse<br/>
      <a href="https://twitch.tv/jonathandelfraisse" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/908fd818-1fbe-4b44-8633-dfc6bec175c9-profile_image-300x300.png"/>
    <span>Flyken<br/>
      <a href="https://twitch.tv/flyken" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/flyken4" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/flyken271" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/1e60395d-4246-4690-b486-40ebb3c8b00b-profile_image-300x300.png"/>
    <span>tbdgamer<br/>
      <a href="https://twitch.tv/tbdgamer" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/terryburnsdyson" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/tbd-develop" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-300x300.png"/>
    <span>sbtw15<br/>
      <a href="https://twitch.tv/sbtw15" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/cdd517fe-def4-11e9-948e-784f43822e80-profile_image-300x300.png"/>
    <span>Plutonan<br/>
      <a href="https://twitch.tv/plutonan" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/926c0d6b-bc04-4dba-88a6-915dc6c6bb54-profile_image-300x300.png"/>
    <span>CopperBeardy<br/>
      <a href="https://twitch.tv/copperbeardy" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/copperbeardy" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/copperbeardy" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/cd60b68d-824e-4e41-b7bb-8d9fb85258a7-profile_image-300x300.png"/>
    <span>fork04_<br/>
      <a href="https://twitch.tv/fork04_" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
</div>
