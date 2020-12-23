---
date: 2020-12-25
title: "Choosing Between Blazor Server or WebAssembly"
cover: ./cover.png
ograph: ./ograph.png
banner_image_alt: 
description: What are the differences between Blazor Server and WebAssembly (WASM)? When should you use each and why?
tags: [blazor, csharp, wasm, server, dotnet, aspnet]
---

Building for the web using a language you're already comfortable with? Sounds
like a great idea as long as it's easy to use and performs well for
clients. That's the promise of
[Blazor](https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor), and the
team at Microsoft is working feverishly to deliver.

But one question that keeps popping up is "which flavor of Blazor should I
use: Server or WebAssembly (WASM)?" Let's dive in and learn the differences
and use cases for both.

<!--more-->

 > **Before we move on:** I'm stoked to be taking part in 
 > <a href="https://www.csadvent.christmas/" target="_blank">C# Advent</a>
 > again this year. Honestly, I don't understand how I was allowed back.
 > I guess mistakes were made. 
 >
 > Regardless, I'm grateful to all the folks that made C# Advent possible
 > this year. If you haven't read the other articles, be sure to check out
 > the link and enjoy!

## What the Blazor!?

C# developers have been dabbling or building with Blazor for a while
now, but, for the uninitiated, what is it? In simplest terms, Blazor allows
you to build web applications using C# instead of, or in tandem with,
JavaScript *(sorry for using the "J"-word.)* With Blazor, you can build
feature-complete apps with reusable web components that make it easy to
isolate UI design, functionality, and testing.

Because you're writing C#, you can use any .NET libraries that conform to the 
[.NET Standard](https://dotnet.microsoft.com/platform/dotnet-standard). That
means most of the packages you would pull from [Nuget](https://www.nuget.org/)
can be included in your application. But the first choice you have to make
is what flavor of Blazor you want to use.

Blazor can run your C# application in the browser, using WebAssembly, or on
the Server. Both have pros/cons that should be considered depending on the
use-case of your application.

## Blazor Server

All Blazor Server code, including Razor pages, are compiled into libraries
that run, as the name implies, on the server. When clients visit the
application, they receive a page with a little JavaScript that initiates
a connection to the server via
[SignalR](https://docs.microsoft.com/en-us/aspnet/signalr/overview/getting-started/introduction-to-signalr).

The server then uses that websocket connection to send small payloads to
the client that updates the page. This allows users to experience fast
load &amp; render times, but also means that every visitor has a
persistent bi-directional connection to the server. You'll definitely want
to take that into consideration when thinking about scaling your application.

### Server Pros

**Render &amp; Load Times**

One of the biggest positives of Blazor Server is load &amp; render times.
Since users aren't downloading the runtime or application libraries, they
can start using teh application faster.

**All-in-one Application**

Because all your code runs on the server, all data-access, business logic,
etc. can live in the same place. That means you can use your actual data
entities and classes as models on the Razor pages without the need for
DTO objects. In fact, it means you don't need an API at all as you can make
data requests securely from the server. This makes building a feature-rich
web UI much easier for existing C# developers.

**Browser Support**

Unlike WASM, Blazor Server is supported in all major browsers because it
doesn't require the browser to support WebAssembly. This is a major
consideration if you still need to support users with IE 11 or other older
browsers.

**Search Engine Optimization**

Microsoft is making improvements for SEO in Blazor WASM, but currently,
Blazor Server is the gold standard between the two. Search engines can
easily crawl &amp; index the HTML served from Blazor Server. 

### Server Cons

**No Offline Support**

Blazor Server is not going to be the right fit for you if you're looking
to add offline support for your users. Since each page &amp; component
are served from the server, no code is maintained on the client.

**Page Load/Change Latency**

When changes need to be made to the UI, Blazor Server recognizes and sends
the diff down to the client to update the presented UI. This is much faster
than full page reloads, but can cause latency on the round-trip. You'll want
to be mindful of the datasets you're passing around to minimize the size of
the diff being sent.

**Scalability**

Scalability isn't necessarily a "con" for Server Blazor, but it is something to
consider. Since every visitor has a separate websocket connection to the
server, the amount of memory consumed by the application per user may require
scaling hardware more quickly than Blazor WASM.

**Servers Not Included**

Because your site will be running server-side, you will need something to serve
your application and handle requests. Serverless options are available, but
processing is handled server-side and not client-side, so all logic, etc. must
be handled there.

## Blazor WebAssembly

> [Mozilla](https://developer.mozilla.org/en-US/docs/WebAssembly) defines
WebAssembly, or WASM, as a "low-level assembly-like language that provides
near-native performance that allows other languages to run on the web."

Blazor WebAssembly is a single-page app (SPA) framework for building
client-side web applications with .NET. Developers can write C# and utilize
code that already exists in their back-end applications like models, business
logic, and more. When a Blazor WASM app is built, all your C# code and Razor
files are compiled into .NET assemblies that are downloaded to and run in
the client's browser.

If you've had experience with the popular JavaScript frameworks, Blazor WASM
will feel very familiar.

### WASM Pros

**Fast User Experience**

Once loaded, the user experience is blazing fast (pun intended.) With your
code running in the browser, the UI will feel nearly instantaneous for users
other than calls to external APIs.

**Offline Support**

Blazor WASM allows you to build applications that users can still use when
their internet connection isn't available. Your apps can also take a hybrid
approach to allow certain parts of your site to be accessible offline but not
others. 

**Servers Not Needed**

Because your Blazor WASM code can run offline, your app can be delivered via
a CDN. This effectively removes the need for a server to host your application.
If your application requires a back-end API, those would still need to live on
a server.

**.NET Standard 2.0 Is Ready To Go**

Any .NET Standard 2.0 code can run in a Blazor WASM application. That means,
in most cases, the internal &amp; external libraries your app depends on will
work as they do today.

### WASM Cons

**Initial Load Time**

The most often mentioned downside is the initial payload size. All Blazor
WASM apps bootstrap the .NET runtime. While Microsoft has made gains in
trimming this down, it can still result in a large initial download for
clients. One way the compiler tries to help is by tree-shaking unused code
with the Intermediate Language Trimmer. 

**API**

**Search Engine Optimization**

## Other Considerations
