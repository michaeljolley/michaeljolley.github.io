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

public class User
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string FavoriteFood { get; set; }
    public DateTime BirthDate { get; set; }
}

public class UserDTO
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public int BirthYear { get; set; }
}

{% endhighlight %}

## Default Mappings

These classes will services as source and destination types that we can work with. 
Without specific configuration, AutoMapper will match properties based on their name. 
By default, it will ignore null reference exceptions when mapping source and destination 
types. Below is a snippet mapping the source and destination types using the default 
configuration.

{% highlight csharp %}

var config = new MapperConfiguration(cfg => cfg.CreateMap<User, UserDTO>());

var user = new User() 
{
    Id = Guid.NewGuid(),
    Name = "Joe Bruiser",
    FavoriteFood = "Curry",
    BirthDate = new DateTime(2000, 10, 12)
};

var mapper = config.CreateMapper();
UserDTO userDTO = mapper.Map<UserDTO>(user);

{% endhighlight %}

The above will create a `UserDTO` object with an `Id` and `Name` that matches the original 
`user` object, but no error is thrown as a result of not having the `FavoriteFood` property 
on the `UserDTO` type. Also, the `BirthYear` property of the `UserDTO` will be null.

## Custom Mappings

We can use projection to translate properties as they are mapped. For instance, the code snippet 
below shows how we can map the `BirthDate` property of the `User` type to the `BirthYear` 
property of the `UserDTO` type.

{% highlight csharp %}

var config = new MapperConfiguration(cfg =>
    cfg.CreateMap<User, UserDTO>()
        .ForMember(dest => dest.BirthYear, opt => opt.MapFrom(src => src.BirthDate.Year));

var user = new User() 
{
    Id = Guid.NewGuid(),
    Name = "Joe Bruiser",
    FavoriteFood = "Curry",
    BirthDate = new DateTime(2000, 10, 12)
};

var mapper = config.CreateMapper();
UserDTO userDTO = mapper.Map<UserDTO>(user);

{% endhighlight %}

The resulting `userDTO` object will be similar to our first example, but this time will 
include the `BirthYear` property of 2000. 

# Dependency Injection








<figure style="width:250px;float:right;margin: 0 0 10px 10px">
    <img src="https://res.cloudinary.com/dk3rdh3yo/image/upload/w_auto,c_scale/53030755_2228476424037910_6307370620143831616_n_igcxrg.jpg" alt="Our new dining room table.">
</figure>

[automapper]: https://automapper.org/
