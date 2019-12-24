---
layout: post
date: 2019-12-23 01:00
title: "Adding HATEOAS to an ASP.NET Core API"
image: https://res.cloudinary.com/dk3rdh3yo/image/upload/v1577158217/71390264-4256ef00-25c5-11ea-890b-6614ed7fd9a9_xjzxer.png
description: Implement simple JSON HATEOAS support to an ASP.NET Core web API
comments: true
tags: [aspnetcore, hateoas, api, json, dotnet, c#]
---

RESTful APIs are very popular these days. When used consistently, they provide a great way to make our APIs easier 
for users to consume.  But how can we make discovering endpoints and capabilities easier? One way is to implement 
Hypermedia as the Engine of Application State (HATEOAS).  You may have seen HATEOAS used in other APIs without 
realizing it.

Let's look at two responses from RESTful APIs:

<figure>
    <img alt="Example code of a JSON result from a RESTful and RESTful + HATEOAS API" src="https://res.cloudinary.com/dk3rdh3yo/image/upload/v1577158190/header-templatssse_uzfqri.png" />
</figure>

In the example responses, you can see that by just adding the `links` property to your object, adding HATEOAS 
data to your responses can greatly increase the discover-ability of your RESTful APIs.

Let's look at how to add a rudimentary implementation of HATEOAS in an ASP.NET Core web API.

<!--more-->

First, download the sample code at <a href="https://github.com/MichaelJolley/aspnetcore-hateoas" target="blank">https://github.com/MichaelJolley/aspnetcore-hateoas</a>.  The solution contains two C# projects: BaldBeardedBuilder.HATEOAS.Lib (Lib) and BaldBeardedBuilder.HATEOAS (API).  The Lib project contains a very basic Entity Framework Core DbContext with two related DbSets; Clients and Addresses.




{% highlight csharp %}

public class Link
{
    public Link(string href, string rel, string type)
    {
        Href = href;
        Rel = rel;
        Type = type;
    }

    public string Href { get; private set; }
    public string Rel { get; private set; }
    public string Type { get; private set; }

}

{% endhighlight %}
