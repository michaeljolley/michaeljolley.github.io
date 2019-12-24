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

<figure style="margin-bottom:20px;">
    <img alt="Example code of a JSON result from a RESTful and RESTful + HATEOAS API" src="https://res.cloudinary.com/dk3rdh3yo/image/upload/v1577158190/header-templatssse_uzfqri.png" />
</figure>

In the example responses, you can see that by adding the `links` property to your object, you can greatly increase the discover-ability of your RESTful APIs.

Let's add a rudimentary implementation of HATEOAS in an ASP.NET Core web API.

<!--more-->

## Getting Started

First, download the sample code at <a href="https://github.com/MichaelJolley/aspnetcore-hateoas" target="blank">https://github.com/MichaelJolley/aspnetcore-hateoas</a>.

The solution contains two C# projects: BaldBeardedBuilder.HATEOAS.Lib (Lib) and BaldBeardedBuilder.HATEOAS (API).  The 
Lib project contains a very basic Entity Framework Core DbContext with two related DbSets; Clients and Addresses.

### BaldBeardedBuilder.HATEOAS.Lib (Lib)

We're not going to go into much detail about the Lib project, but I want to provide a little context to how it's used. 
Its sole purpose is to provide an example data access layer.  The Lib project contains a small Entity Framework Core DbContext 
with two related DbSets; Clients and Addresses.  The solution will use an In-Memory database and will seed it each time you debug.  

### BaldBeardedBuilder.HATEOAS (API)

The API project is where all of our HATEOAS magic happens, but before we get into those details, let's take care of some housekeeping.

As we mentioned previously, we're using an In-Memory database for Entity Framework Core (EF).  We're also using AutoMapper to map our EF entities to the API models.  To get those things setup we'll first add an `AutoMapping.cs` file to the root of the API project with the following code:

{% highlight csharp %}

public class AutoMapping : Profile
{
    public AutoMapping()
    {
        CreateMap<Address, AddressModel>();
        CreateMap<Client, ClientModel>();
    }
}

{% endhighlight %}

This code will create the AutoMapper maps between our EF entities and models.  With that file in place, we'll update our `Startup.cs`'s `ConfigureServices` method with the following:

{% highlight csharp %}

services.AddAutoMapper(typeof(Startup));
services.AddDbContext<BBBContext>(options => 
    options.UseInMemoryDatabase(databaseName: "bbb"));

{% endhighlight %}