---
layout: post
date: 2020-01-12 01:00
title: "Using AutoMapper with ASP.NET Core 3"
image: https://res.cloudinary.com/dk3rdh3yo/image/upload/w_auto,c_scale/header_wtvp67.png
banner_image_alt: Metamorphosis of a butterfly with the .NET core and AutoMapper logos
description: How to map objects to one another in ASP.NET Core 3 applications with AutoMapper.
comments: true
tags: [c#, automapper, dotnet, aspnetcore]
---

[AutoMapper] is well known in the .NET community. It bills itself as "a simple little library built
to solve a deceptively complex problem - getting rid of code that maps one object to another,"
and it does the job nicely.

In the past, I've used it exclusively with ASP.NET APIs. However, the method for utilizing it via
dependency injection has changed. So let's review how to get started, how to define mappings and
how to inject your mappings into ASP.NET Core APIs.

<!--more-->

# Getting Started

Like most .NET libraries, you can install the `AutoMapper` package from Nuget.

{% highlight PS %}
Install-Package AutoMapper
{% endhighlight %}

For our purposes, we'll focus on two classes that are related; `Client` and `ClientDTO`.

{% highlight csharp %}

public class Client
{
public Guid Id { get; set; }
public string Name { get; set; }
}

public class ClientDTO
{
public Guid Id { get; set; }
public string Name { get; set; }
}

{% endhighlight %}

var config = new MapperConfiguration(cfg => cfg.CreateMap<Client, ClientDTO>());

var mapper = config.CreateMapper();
ClientDTO clientDTO = mapper.Map<ClientDTO>(client)

## Default Mappings

## Custom Mappings

# Dependency Injection

<figure style="width:250px;float:right;margin: 0 0 10px 10px">
    <img src="https://res.cloudinary.com/dk3rdh3yo/image/upload/w_auto,c_scale/53030755_2228476424037910_6307370620143831616_n_igcxrg.jpg" alt="Our new dining room table.">
</figure>

[automapper]: https://automapper.org/
