---
layout: post
date: 2019-09-01 17:09
title: "Playing with Node.js and making chat more interactive"
image: https://user-images.githubusercontent.com/1228996/64084956-7e540480-ccf5-11e9-8ec0-72a0d750574a.png
description: "Fixed a few bugs with sound clips playing on alerts and tracking chat in MongoDB"
comments: true
tags: [twitch, stream, javascript, mongo]
replay: https://youtu.be/7nNML4-DeHU
---

<img src="{{page.image}}"/>

## Stream Replay Link

[{{page.replay}}]({{page.replay}})

<!--more-->

### Segments

| Timestamp | Topic
| ---       | ---
| [00:05]({{page.replay}}?t=600)      | Kicking it off          |
| [00:22]({{page.replay}}?t=1324.056) | Candle Winner - Unicorn |
| [00:26]({{page.replay}}?t=1615.302) | Starting to write some code |
| [02:39]({{page.replay}}?t=9578.431) | Wrapping up and raid to [luckynos7evin](https://twitch.tv/luckynos7evin) |

---

### Today's Candle To Code By

[Unicorn Dust](https://amzn.to/320cEn1)

---

### Goals

- [x] Flag chatters as contributors on the stream

---

## Today's stream brought to you by

### Subscribers

<table class="user">
  <tbody>
    <tr>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/3c435956-3fc3-4ccd-bac5-1c4e1671500b-profile_image-300x300.png"/>
        <span>phrakberg<br/>
        <a href="https://twitch.tv/phrakberg" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/8e4eab31-0a66-4b1a-a0df-ca962e4a9b8e-profile_image-300x300.jpeg"/>
        <span>Lannonbr<br/>
        <a href="https://twitch.tv/lannonbr" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/958a22b1-e9e5-4390-8843-98d9def72a35-profile_image-300x300.png"/>
        <span>sorskoot<br/>
        <a href="https://twitch.tv/sorskoot" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures/bb97f7e6-f11a-4194-9708-52bf5a5125e8-profile_image-300x300.jpg"/>
        <span>Taumee412<br/>
        <a href="https://twitch.tv/taumee412" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
    </tr>
  </tbody>
</table>
### Cheers

<table class="user">
  <tbody>
    <tr>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/9286dd24-2a0d-4bc8-85ef-a692a100e413-profile_image-300x300.png"/>
        <span>codingisundercover<br/>
        <a href="https://twitch.tv/codingisundercover" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/3c435956-3fc3-4ccd-bac5-1c4e1671500b-profile_image-300x300.png"/>
        <span>phrakberg<br/>
        <a href="https://twitch.tv/phrakberg" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/9286dd24-2a0d-4bc8-85ef-a692a100e413-profile_image-300x300.png"/>
        <span>codingisundercover<br/>
        <a href="https://twitch.tv/codingisundercover" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/3c435956-3fc3-4ccd-bac5-1c4e1671500b-profile_image-300x300.png"/>
        <span>phrakberg<br/>
        <a href="https://twitch.tv/phrakberg" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/6654d342-e3b6-45c4-83fe-32b523bdc7e2-profile_image-300x300.png"/>
        <span>roberttables<br/>
        <a href="https://twitch.tv/roberttables" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://github.com/mtheoryx" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a>
        </span>
      </td>
    </tr>
  </tbody>
</table>

### Raids

<table class="user">
  <tbody>
    <tr>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/9b76630d-fce3-46b9-a230-4fb0b20de988-profile_image-300x300.png"/>
        <span>stuykgaming<br/>
        <a href="https://twitch.tv/stuykgaming" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
    </tr>
  </tbody>
</table>

### Moderators

<table class="user">
  <tbody>
    <tr>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/a390873e-0dff-4ae6-a798-93c1e9516616-profile_image-300x300.png"/>
        <span>RamblingGeek<br/>
        <a href="https://twitch.tv/ramblinggeek" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/3c435956-3fc3-4ccd-bac5-1c4e1671500b-profile_image-300x300.png"/>
        <span>phrakberg<br/>
        <a href="https://twitch.tv/phrakberg" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/20bd3f0a-ce68-4f5c-a9bf-f61b950be3d2-profile_image-300x300.png"/>
        <span>IAmNotMyself<br/>
        <a href="https://twitch.tv/iamnotmyself" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/6654d342-e3b6-45c4-83fe-32b523bdc7e2-profile_image-300x300.png"/>
        <span>roberttables<br/>
        <a href="https://twitch.tv/roberttables" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://github.com/mtheoryx" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a>
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/abd243dc-3790-4a73-b7b4-1269f89ce083-profile_image-300x300.png"/>
        <span>parithon<br/>
        <a href="https://twitch.tv/parithon" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
    </tr>
  </tbody>
</table>

### Contributors

<table class="user">
  <tbody>
    <tr>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/908fd818-1fbe-4b44-8633-dfc6bec175c9-profile_image-300x300.png"/>
        <span>Flyken<br/>
        <a href="https://twitch.tv/flyken" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/flyken4" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/flyken271" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a>
        </span>
      </td>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/3bdd5c96-e43c-4745-b3fc-d969f8f55121-profile_image-300x300.jpeg"/>
        <span>FBoucheros<br/>
        <a href="https://twitch.tv/fboucheros" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/20bd3f0a-ce68-4f5c-a9bf-f61b950be3d2-profile_image-300x300.png"/>
        <span>IAmNotMyself<br/>
        <a href="https://twitch.tv/iamnotmyself" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/8e4eab31-0a66-4b1a-a0df-ca962e4a9b8e-profile_image-300x300.jpeg"/>
        <span>Lannonbr<br/>
        <a href="https://twitch.tv/lannonbr" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/f5373f0e-4fa8-4d90-8303-12c47001c08f-profile_image-300x300.jpeg"/>
        <span>AncientCoder<br/>
        <a href="https://twitch.tv/ancientcoder" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://github.com/theancientcoder" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a>
        </span>
      </td>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/926c0d6b-bc04-4dba-88a6-915dc6c6bb54-profile_image-300x300.png"/>
        <span>CopperBeardy<br/>
        <a href="https://twitch.tv/copperbeardy" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/copperbeardy" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/copperbeardy" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a>
        </span>
      </td>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/a390873e-0dff-4ae6-a798-93c1e9516616-profile_image-300x300.png"/>
        <span>RamblingGeek<br/>
        <a href="https://twitch.tv/ramblinggeek" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/3c435956-3fc3-4ccd-bac5-1c4e1671500b-profile_image-300x300.png"/>
        <span>phrakberg<br/>
        <a href="https://twitch.tv/phrakberg" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/1e60395d-4246-4690-b486-40ebb3c8b00b-profile_image-300x300.png"/>
        <span>tbdgamer<br/>
        <a href="https://twitch.tv/tbdgamer" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/ae01250c-087b-4745-8bff-745731ce30da-profile_image-300x300.png"/>
        <span>Lonely_Pl4yer1<br/>
        <a href="https://twitch.tv/lonely_pl4yer1" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/16707a2a-fcac-48ec-b40d-6d6916162dcc-profile_image-300x300.png"/>
        <span>LampeWebDev<br/>
        <a href="https://twitch.tv/lampewebdev" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/6654d342-e3b6-45c4-83fe-32b523bdc7e2-profile_image-300x300.png"/>
        <span>roberttables<br/>
        <a href="https://twitch.tv/roberttables" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://github.com/mtheoryx" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a>
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/7b926973-80d1-4ce5-9f1d-9153390a8d9c-profile_image-300x300.png"/>
        <span>MihaZupan<br/>
        <a href="https://twitch.tv/mihazupan" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/9b76630d-fce3-46b9-a230-4fb0b20de988-profile_image-300x300.png"/>
        <span>stuykgaming<br/>
        <a href="https://twitch.tv/stuykgaming" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/095ad31c-6075-40b9-ad89-be9a01a0bf58-profile_image-300x300.png"/>
        <span>BixxPlays<br/>
        <a href="https://twitch.tv/bixxplays" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures/bb97f7e6-f11a-4194-9708-52bf5a5125e8-profile_image-300x300.jpg"/>
        <span>Telluuu<br/>
        <a href="https://twitch.tv/telluuu" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/958a22b1-e9e5-4390-8843-98d9def72a35-profile_image-300x300.png"/>
        <span>sorskoot<br/>
        <a href="https://twitch.tv/sorskoot" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures/bb97f7e6-f11a-4194-9708-52bf5a5125e8-profile_image-300x300.jpg"/>
        <span>bl3nd865<br/>
        <a href="https://twitch.tv/bl3nd865" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/tuesdaylte-profile_image-e422319120e08c90-300x300.jpeg"/>
        <span>TuesdayLTE<br/>
        <a href="https://twitch.tv/tuesdaylte" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures/bb97f7e6-f11a-4194-9708-52bf5a5125e8-profile_image-300x300.jpg"/>
        <span>Taumee412<br/>
        <a href="https://twitch.tv/taumee412" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/xlxacidxlx-profile_image-c2e051db5e04a5ae-300x300.png"/>
        <span>xlxAciDxlx<br/>
        <a href="https://twitch.tv/xlxacidxlx" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures/b83b1794-7df9-4878-916c-88c2ad2e4f9f-profile_image-300x300.jpg"/>
        <span>lotsoftzatziki<br/>
        <a href="https://twitch.tv/lotsoftzatziki" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
      <td>
        <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/abd243dc-3790-4a73-b7b4-1269f89ce083-profile_image-300x300.png"/>
        <span>parithon<br/>
        <a href="https://twitch.tv/parithon" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a>
        </span>
      </td>
    </tr>
  </tbody>
</table>
