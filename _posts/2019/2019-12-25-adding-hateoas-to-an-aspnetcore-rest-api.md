---
layout: post
date: 2019-12-23 01:00
title: "Adding HATEOAS to an ASP.NET Core API"
image: https://user-images.githubusercontent.com/1228996/71390264-4256ef00-25c5-11ea-890b-6614ed7fd9a9.png
description: Implement simple JSON HATEOAS support to an ASP.NET Core web API
comments: true
tags: [aspnetcore, hateoas, api, json, dotnet, c#]
---

<!--more-->

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
