---
layout: post
date: 2019-10-29 18:10
title: "Adding auth to our Azure Functions with Auth0 for our awesum.io project"
image: https://user-images.githubusercontent.com/1228996/68077295-4cabf800-fd8f-11e9-9767-735b4f93b3a9.png
description: "Working to authorize requests to our Azure functions using Auth0."
comments: true
tags: [twitch, stream, auth0, azure, function, awesum-io]
replay: https://youtu.be/_VYMrDoevRw
---

### Stream Replay Link

[{{page.replay}}]({{page.replay}})

<!--more-->

### Segments

| Timestamp                           | Topic                                                            |
| ----------------------------------- | ---------------------------------------------------------------- |
| [00:08]({{page.replay}}?t=480)      | Kicking it off                                                   |
| [00:18]({{page.replay}}?t=1080)     | Learning to validate JWT's in our Azure Function                 |
| [03:00]({{page.replay}}?t=10858.85) | Wrapping up and raid to [jitterted](https://twitch.tv/jitterted) |

### Today's Candle To Code By

<a href="https://amzn.to/30ttzO6" target="_blank">Whiskey and Cigar (The Den)</a>

### Things We Learned

- <a href="https://twitch.tv/iamnotmyself" target="_blank">IAmNotMyself</a>: shared custom security bindings for azure functions at https://github.com/benmorris/functionscustomsercuity
- <a href="https://twitch.tv/iamnotmyself" target="_blank">IAmNotMyself</a>: shared custom security bindings for azure functions at https://www.ben-morris.com/custom-token-authentication-in-azure-functions-using-bindings/
- <a href="https://twitch.tv/themichaeljolley" target="_blank">theMichaelJolley</a>: found https://liftcodeplay.com/2017/11/25/validating-auth0-jwt-tokens-in-azure-functions-aka-how-to-use-auth0-with-azure-functions/

## Today's stream brought to you by

### Subscribers

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/a18df476-3988-4e2e-9a67-e32bda1946f5-profile_image-300x300.jpeg"/>
    <span>piece_a_pizza<br/>
      <a href="https://twitch.tv/piece_a_pizza" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-300x300.png"/>
    <span>Jua12n<br/>
      <a href="https://twitch.tv/jua12n" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
</div>

### Raids

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/2cc01832-4ccb-466a-8c76-e522e52cdf2b-profile_image-300x300.png"/>
    <span>Beachcasts<br/>
      <a href="https://twitch.tv/beachcasts" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/2744be7b-3c0c-48f1-af2e-6de284b7d847-profile_image-300x300.png"/>
    <span>VisualStudio<br/>
      <a href="https://twitch.tv/visualstudio" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/2044bc54-272c-4430-90be-8702987e3eed-profile_image-300x300.jpg"/>
    <span>CodeRushed<br/>
      <a href="https://twitch.tv/coderushed" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
</div>

### Moderators

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/f7ff026e-98ca-4081-9e96-17e46b43df9d-profile_image-300x300.png"/>
    <span>phrakberg<br/>
      <a href="https://twitch.tv/phrakberg" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/b159c7c5-bbff-43d7-999a-7a0805f4893e-profile_image-300x300.jpg"/>
    <span>cmjchrisjones<br/>
      <a href="https://twitch.tv/cmjchrisjones" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/cmjchrisjones" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/cmjchrisjones" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/20bd3f0a-ce68-4f5c-a9bf-f61b950be3d2-profile_image-300x300.png"/>
    <span>IAmNotMyself<br/>
      <a href="https://twitch.tv/iamnotmyself" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/notmyself" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/notmyself" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/abd243dc-3790-4a73-b7b4-1269f89ce083-profile_image-300x300.png"/>
    <span>parithon<br/>
      <a href="https://twitch.tv/parithon" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/a390873e-0dff-4ae6-a798-93c1e9516616-profile_image-300x300.png"/>
    <span>RamblingGeek<br/>
      <a href="https://twitch.tv/ramblinggeek" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/rgeekuk" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/ramblinggeekuk" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
</div>

### Followers

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/1f3fc22d-9336-464d-bcef-2cc4212187ff-profile_image-300x300.png"/>
    <span>jongalloway<br/>
      <a href="https://twitch.tv/jongalloway" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/76245632-fef1-49d6-95d2-724f74fed1a0-profile_image-300x300.png"/>
    <span>Stoonman<br/>
      <a href="https://twitch.tv/stoonman" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/2375463d-4090-4e74-a173-615140601bc0-profile_image-300x300.png"/>
    <span>cozmicstreamer<br/>
      <a href="https://twitch.tv/cozmicstreamer" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/75305d54-c7cc-40d1-bb9c-91fbe85943c7-profile_image-300x300.png"/>
    <span>orakhan<br/>
      <a href="https://twitch.tv/orakhan" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/df36a732-7de4-4480-a8c1-9f27ce0e155d-profile_image-300x300.png"/>
    <span>shendyy<br/>
      <a href="https://twitch.tv/shendyy" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/shaymin_fakezz-profile_image-6201801d340c7128-300x300.png"/>
    <span>shaymin_fakezz<br/>
      <a href="https://twitch.tv/shaymin_fakezz" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
</div>

### Contributors

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/f7ff026e-98ca-4081-9e96-17e46b43df9d-profile_image-300x300.png"/>
    <span>phrakberg<br/>
      <a href="https://twitch.tv/phrakberg" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/cdd517fe-def4-11e9-948e-784f43822e80-profile_image-300x300.png"/>
    <span>mantas159159<br/>
      <a href="https://twitch.tv/mantas159159" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/215b7342-def9-11e9-9a66-784f43822e80-profile_image-300x300.png"/>
    <span>GAhlekzis<br/>
      <a href="https://twitch.tv/gahlekzis" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-300x300.png"/>
    <span>snoopaloopy<br/>
      <a href="https://twitch.tv/snoopaloopy" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-300x300.png"/>
    <span>jameyl1877<br/>
      <a href="https://twitch.tv/jameyl1877" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/1e60395d-4246-4690-b486-40ebb3c8b00b-profile_image-300x300.png"/>
    <span>tbdgamer<br/>
      <a href="https://twitch.tv/tbdgamer" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/terryburnsdyson" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/tbd-develop" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/b159c7c5-bbff-43d7-999a-7a0805f4893e-profile_image-300x300.jpg"/>
    <span>cmjchrisjones<br/>
      <a href="https://twitch.tv/cmjchrisjones" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/cmjchrisjones" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/cmjchrisjones" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/20bd3f0a-ce68-4f5c-a9bf-f61b950be3d2-profile_image-300x300.png"/>
    <span>IAmNotMyself<br/>
      <a href="https://twitch.tv/iamnotmyself" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/notmyself" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/notmyself" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-300x300.png"/>
    <span>krangence<br/>
      <a href="https://twitch.tv/krangence" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/5932de2a-43d1-4224-a8b9-5c5ddab181e2-profile_image-300x300.png"/>
    <span>codeman_codes<br/>
      <a href="https://twitch.tv/codeman_codes" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/codemancodes" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/codemancodes" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-300x300.png"/>
    <span>noobhax<br/>
      <a href="https://twitch.tv/noobhax" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/adamculp-profile_image-86f739610ac7df4f-300x300.jpeg"/>
    <span>AdamCulp<br/>
      <a href="https://twitch.tv/adamculp" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://github.com/adamculp" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/76245632-fef1-49d6-95d2-724f74fed1a0-profile_image-300x300.png"/>
    <span>Stoonman<br/>
      <a href="https://twitch.tv/stoonman" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/7d5a92ba-8ac0-4731-b0d0-bd469342d146-profile_image-300x300.png"/>
    <span>JTsom<br/>
      <a href="https://twitch.tv/jtsom" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-300x300.png"/>
    <span>charbelsako<br/>
      <a href="https://twitch.tv/charbelsako" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-300x300.png"/>
    <span>sbtw15<br/>
      <a href="https://twitch.tv/sbtw15" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/abd243dc-3790-4a73-b7b4-1269f89ce083-profile_image-300x300.png"/>
    <span>parithon<br/>
      <a href="https://twitch.tv/parithon" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-300x300.png"/>
    <span>bl3nd865<br/>
      <a href="https://twitch.tv/bl3nd865" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/f9628911-6451-4c38-be55-a9bb94a68085-profile_image-300x300.png"/>
    <span>LittleDan45<br/>
      <a href="https://twitch.tv/littledan45" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/a390873e-0dff-4ae6-a798-93c1e9516616-profile_image-300x300.png"/>
    <span>RamblingGeek<br/>
      <a href="https://twitch.tv/ramblinggeek" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/rgeekuk" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/ramblinggeekuk" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/efeb108d-6334-42da-89b8-993a6292f95a-profile_image-300x300.png"/>
    <span>ToeFrog<br/>
      <a href="https://twitch.tv/toefrog" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/thetoefrog" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/toefrog" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/41780b5a-def8-11e9-94d9-784f43822e80-profile_image-300x300.png"/>
    <span>tekuto_kiari<br/>
      <a href="https://twitch.tv/tekuto_kiari" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/9de001e8953baf17-profile_image-300x300.png"/>
    <span>Janisku7<br/>
      <a href="https://twitch.tv/janisku7" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/a09ddc5d-b61e-4baa-ad97-7b2284319f38-profile_image-300x300.png"/>
    <span>TheHugoDahl<br/>
      <a href="https://twitch.tv/thehugodahl" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/hugodahl" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/hugodahl" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/bfcb04d4-2e37-4f81-b58a-955a34b33e9d-profile_image-300x300.png"/>
    <span>CodingGorilla<br/>
      <a href="https://twitch.tv/codinggorilla" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/e0d81e861b461f14-profile_image-300x300.jpeg"/>
    <span>Wally_KC<br/>
      <a href="https://twitch.tv/wally_kc" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/75305d54-c7cc-40d1-bb9c-91fbe85943c7-profile_image-300x300.png"/>
    <span>FuleSnabel<br/>
      <a href="https://twitch.tv/fulesnabel" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ebb84563-db81-4b9c-8940-64ed33ccfc7b-profile_image-300x300.png"/>
    <span>youaremyangel1<br/>
      <a href="https://twitch.tv/youaremyangel1" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/958a22b1-e9e5-4390-8843-98d9def72a35-profile_image-300x300.png"/>
    <span>sorskoot<br/>
      <a href="https://twitch.tv/sorskoot" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/62f154f8-2e4e-4da2-b6fa-d86aa42fb813-profile_image-300x300.jpg"/>
    <span>dreyhiflden<br/>
      <a href="https://twitch.tv/dreyhiflden" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/d8d1d839-7d75-4bdf-b992-5995645ccdbd-profile_image-300x300.png"/>
    <span>retro_crt<br/>
      <a href="https://twitch.tv/retro_crt" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
</div>