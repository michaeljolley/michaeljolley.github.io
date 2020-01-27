---
layout: post
date: 2020-01-19 19:01
title: "Repo maintenance, MS MVP unboxing and GitHub Actions in TypeScript"
image: https://res.cloudinary.com/dk3rdh3yo/image/upload/w_auto,c_scale/73209955-e37a1d80-410e-11ea-9d2e-90e8a942d95e_fwuq1d.png
description: "Writing a new GitHub extension"
comments: true
tags: [twitch, stream, github, actions]
replay: https://youtu.be/3gSSoPM491A
---

### Stream Replay Link

[{{page.replay}}]({{page.replay}})

<!--more-->

### Today's Candle To Code By

<a href="https://amzn.to/320cEn1" target="_blank">Unicorn Dust</a>

## Today's stream brought to you by

### Subscribers

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/f5373f0e-4fa8-4d90-8303-12c47001c08f-profile_image-300x300.jpeg"/>
    <span>AncientCoder<br/>
      <a href="https://twitch.tv/ancientcoder" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://github.com/theancientcoder" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
</div>

### Moderators

<div class="users">
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
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/abd243dc-3790-4a73-b7b4-1269f89ce083-profile_image-300x300.png"/>
    <span>parithon<br/>
      <a href="https://twitch.tv/parithon" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
</div>

### Followers

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/cdd517fe-def4-11e9-948e-784f43822e80-profile_image-300x300.png"/>
    <span>nullsh3ll<br/>
      <a href="https://twitch.tv/nullsh3ll" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/f892b84f-74c3-480c-b8ee-d4ebd17332c5-profile_image-300x300.png"/>
    <span>EralpKaraduman<br/>
      <a href="https://twitch.tv/eralpkaraduman" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/ecc826be-a2c3-4363-b8c3-67c191b40b43-profile_image-300x300.png"/>
    <span>tcool86<br/>
      <a href="https://twitch.tv/tcool86" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/41780b5a-def8-11e9-94d9-784f43822e80-profile_image-300x300.png"/>
    <span>lmpikachu<br/>
      <a href="https://twitch.tv/lmpikachu" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/75305d54-c7cc-40d1-bb9c-91fbe85943c7-profile_image-300x300.png"/>
    <span>programmer0000<br/>
      <a href="https://twitch.tv/programmer0000" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/63c101df-04b0-4732-b592-67f75b20ea7c-profile_image-300x300.jpeg"/>
    <span>Drifters_Workshop<br/>
      <a href="https://twitch.tv/drifters_workshop" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/540b1c0ad944f30e-profile_image-300x300.jpeg"/>
    <span>TheGreatReplayy<br/>
      <a href="https://twitch.tv/thegreatreplayy" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/kubissus-profile_image-fd598df3132ba53f-300x300.png"/>
    <span>Kubissus<br/>
      <a href="https://twitch.tv/kubissus" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/376f3e3b-ac83-40d7-a4de-c2fc8ad6ef29-profile_image-300x300.png"/>
    <span>priucodes<br/>
      <a href="https://twitch.tv/priucodes" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
</div>

### Contributors

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/41780b5a-def8-11e9-94d9-784f43822e80-profile_image-300x300.png"/>
    <span>lmpikachu<br/>
      <a href="https://twitch.tv/lmpikachu" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/f5373f0e-4fa8-4d90-8303-12c47001c08f-profile_image-300x300.jpeg"/>
    <span>AncientCoder<br/>
      <a href="https://twitch.tv/ancientcoder" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://github.com/theancientcoder" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/3bdd5c96-e43c-4745-b3fc-d969f8f55121-profile_image-300x300.jpeg"/>
    <span>FBoucheros<br/>
      <a href="https://twitch.tv/fboucheros" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
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
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/5f537035-57c4-48e1-847c-cd5298526385-profile_image-300x300.png"/>
    <span>discontinuedman<br/>
      <a href="https://twitch.tv/discontinuedman" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-300x300.png"/>
    <span>ChanceDev<br/>
      <a href="https://twitch.tv/chancedev" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/d5068df5265f12b0-profile_image-300x300.png"/>
    <span>RobinMalfait<br/>
      <a href="https://twitch.tv/robinmalfait" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
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
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-300x300.png"/>
    <span>doesnootcompute<br/>
      <a href="https://twitch.tv/doesnootcompute" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/7308ba5e-f7f4-4ee5-8a63-a43660495de8-profile_image-300x300.jpg"/>
    <span>Sushinateur<br/>
      <a href="https://twitch.tv/sushinateur" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/kershoc-profile_image-be83643ea5351531-300x300.png"/>
    <span>Kershoc<br/>
      <a href="https://twitch.tv/kershoc" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/efeb108d-6334-42da-89b8-993a6292f95a-profile_image-300x300.png"/>
    <span>ToeFrog<br/>
      <a href="https://twitch.tv/toefrog" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/thetoefrog" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/toefrog" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png"/>
    <span>domfx<br/>
      <a href="https://twitch.tv/domfx" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-300x300.png"/>
    <span>CodingStocks<br/>
      <a href="https://twitch.tv/codingstocks" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/fa425591-26cb-49e5-9f6d-699b32038f55-profile_image-300x300.jpg"/>
    <span>ashishsinghbaghel<br/>
      <a href="https://twitch.tv/ashishsinghbaghel" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://github.com/mechdeveloper" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ead5c8b2-a4c9-4724-b1dd-9f00b46cbd3d-profile_image-300x300.png"/>
    <span>cotoli<br/>
      <a href="https://twitch.tv/cotoli" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://github.com/andcotoli" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/0b21b9c4-d5ac-4837-ba3f-35c4934ceef6-profile_image-300x300.png"/>
    <span>BrettMillerIT<br/>
      <a href="https://twitch.tv/brettmillerit" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/brettmiller_it" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/brettmillerb" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/ecc826be-a2c3-4363-b8c3-67c191b40b43-profile_image-300x300.png"/>
    <span>tcool86<br/>
      <a href="https://twitch.tv/tcool86" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/c869cb51-cdca-47bb-8562-80ffbf117d88-profile_image-300x300.png"/>
    <span>ElectricHavoc<br/>
      <a href="https://twitch.tv/electrichavoc" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/electrichavoc" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/electrichavoc" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/75305d54-c7cc-40d1-bb9c-91fbe85943c7-profile_image-300x300.png"/>
    <span>programmer0000<br/>
      <a href="https://twitch.tv/programmer0000" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/5c68c507-5498-44f4-a6c9-365902e28d0b-profile_image-300x300.png"/>
    <span>codephobia<br/>
      <a href="https://twitch.tv/codephobia" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/codephobia" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/codephobia" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/63c101df-04b0-4732-b592-67f75b20ea7c-profile_image-300x300.jpeg"/>
    <span>Drifters_Workshop<br/>
      <a href="https://twitch.tv/drifters_workshop" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/41780b5a-def8-11e9-94d9-784f43822e80-profile_image-300x300.png"/>
    <span>VaIlcon<br/>
      <a href="https://twitch.tv/vailcon" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/540b1c0ad944f30e-profile_image-300x300.jpeg"/>
    <span>TheGreatReplayy<br/>
      <a href="https://twitch.tv/thegreatreplayy" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/kubissus-profile_image-fd598df3132ba53f-300x300.png"/>
    <span>Kubissus<br/>
      <a href="https://twitch.tv/kubissus" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/abd243dc-3790-4a73-b7b4-1269f89ce083-profile_image-300x300.png"/>
    <span>parithon<br/>
      <a href="https://twitch.tv/parithon" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/41780b5a-def8-11e9-94d9-784f43822e80-profile_image-300x300.png"/>
    <span>khoik<br/>
      <a href="https://twitch.tv/khoik" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/b784a2c3-2891-4446-bb63-2f213a15caa2-profile_image-300x300.jpg"/>
    <span>corbob<br/>
      <a href="https://twitch.tv/corbob" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/51b2380b-55c8-4acd-8e4b-21a0b86bf901-profile_image-300x300.png"/>
    <span>dare_devel_ops<br/>
      <a href="https://twitch.tv/dare_devel_ops" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/daredevelops" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/daredevelops" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
</div>

