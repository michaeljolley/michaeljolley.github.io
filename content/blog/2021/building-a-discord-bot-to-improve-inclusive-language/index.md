---
date: 2021-08-22
title: 'Building a Discord Bot to Improve Inclusive Language'
cover: ./cover.png
ograph: ./ograph.png
slug: building-a-discord-bot-to-improve-inclusive-language
banner_image_alt: Discord channel where the GuyBot has responded to a non-inclusive message.
description: Helping Discord members use more inclusive language by building a bot using JavaScript & Fauna and hosted by Azure in a Docker container.
tags: [discord, inclusion, fauna, azure]
---

Growing up in the Southeast US, the word "guys" was used to denote everyone.
Sure we had other words that meant the same; y'all, folks, and everybody to
name a few, but no one thought twice about calling to a group of people with
"hey guys." Heck, even though my immediate family includes my wife and two
daughters, I've found myself calling to my family with a "hey guys." But I
can do better.

I've been working over the last year to be more intentional with the words I
use; understanding that they can and do affect others in ways that I hadn't
considered in the past. That said, this isn't a post about why inclusive
language matters. There are plenty of resources out there to consume and
learn from. In this post, I want to share my experience in building a Discord
bot using TypeScript, [Fauna](https://fauna.com), [Docker](https://docker.com),
and [Azure](https://azure.com).

<!--more-->

> Want to jump straight to the code, check out the [GitHub
> repository](https://github.com/michaeljolley/discord-guy-bot). Want to add
> the bot to your Discord? Visit [https://guybot.app](https://guybot.app).

## What Should I Build?

Learning to build a Discord bot has been on my to-do list for a while now,
but I hadn't really thought about _what_ I wanted it to do. Then I remembered
a project built by a friend of mine, [Luke Oliff](https://twitter.com/lukeocodes).
Luke built a Slack bot that monitored messages for the word "guys." It then
sent an ephemeral message to the author alerting them to the opportunity to
use more inclusive language.

I know what you're thinking. "Wait... isn't that exactly what you said this
Discord bot was going to do?" Well, my friend, yes. Yes, I completely
plagiarized Lukes' idea. 😁

### Goals

Before I started, I decided on a few things I wanted it to do:

- Monitor the Discord server 24/7 for "guys" in messages
- Send a message to the author of the message with ideas for using more
  inclusive language
- Host a site where others could invite the bot to their Discord server
- Deploy automatically when I push changes to the `main` branch

I also wanted to make sure that the bot showed grace on the first offense. You
can only send ephemeral messages in Discord if the user is using an interaction.
In this case, they had only sent a message. So the only options were to reply
in the channel they used or send them a direct message.

In order for the bot to seem more friendly, I decided to send the author a
direct message on the first offense so they wouldn't feel attacked or
"called out" in front of everyone in the Discord server. However, subsequent
offenses within 30 days would cause the bot to reply to the message in the
same channel they had sent the message to and address them specifically.

Finally, I decided that in both cases, I'd add a reaction to their message
with the GuyBot "robot" logo to denote to everyone that the bot was on the job.

## Getting Started

I knew I wanted to use TypeScript, so after a quick `npm init`, I installed
the following packages:

```bash
npm i discord.js dotenv express faunadb
npm i -D @types/express @types/ws copyfiles typescript
```

> Technically, I installed other packages. Like prettier, eslint, and jest. But
> those packages are irrelevant to the goals of this post and are only used
> for making things pretty and tested.

The `src` directory will hold all my TypeScript code and it should be compiled
to the `dist` directory. So I added a `tsconfig.json` file to the root of my
project with the following:

```javascript
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDirs": [
      "./src",
      "./tests"
    ],
    "strict": true,
    "noImplicitAny": true,
    "esModuleInterop": true
  },
  "exclude": [
    "node_modules",
    "**/*.test.ts"
  ],
  "include": [
    "src"
  ]
}
```

### Setting up Fauna

### Setting

### Continuous Deployments with GitHub
