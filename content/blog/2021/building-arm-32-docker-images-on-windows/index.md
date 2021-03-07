---
date: 2021-03-07
title: Building ARM32 Docker Images on Windows with Buildx
cover: ./cover.png
slug: building-arm32-docker-images-on-windows
ograph: https://res.cloudinary.com/dk3rdh3yo/image/upload/b_rgb:000/l_ograph_2,g_south_east,x_0,y_0,e_tint:50:ff00ff:0p:00ffff:100p/e_tint:62:222/e_make_transparent:20/e_ordered_dither:2/l_blog-ograph/l_bbb-logo,g_north_east,x_40,y_40/l_text:Roboto_30_bold_letter_spacing_12:%2523DOCKER%20%23ARM32%20%23WINDOWS,g_north_west,x_40,y_40,co_rgb:FFFFFF/l_text:Roboto_30_bold_letter_spacing_12:BBB.DEV%252FARM32,g_north_west,x_40,y_100,co_rgb:FFFFFF/l_text:Roboto_56_black:Building%20ARM32%20Docker%20Images%20on%20Windows%20with%20Buildx,g_south_west,x_40,y_40,w_850,c_fit,co_rgb:FFFFFF/ograph-bg.png
banner_image_alt: Console window with docker commands covered with a bar that contains the Docker and Windows logos with the term ARM32.
description: When you want to run Docker containers on devices like Raspberry Pi's, you need to build your Docker images for the ARM32 platform. But how do you do that? It's changed over the past few years and in this post we discuss how to do it today. 
tags: [docker, arm32, windows]
---

Like most things in the IT world, building Docker images is painless once you
know how. But it gets a little trickier when you're building for platforms you
aren't working on. I recently built a VueJS application that I wanted
to run in a Docker container on a Raspberry Pi. All my work was on my Windows
10 PC, but the Raspberry Pi runs on an ARM32 platform. This meant images
I created by default wouldn't run there. So this post is my "hey Michael, next
time you need to build images for ARM32 on your PC, here's how" post.

> This isn't the first time I've faced this issue. A client project in the
> past caused me to learn how to build images on my x64 platform for ARM32.
> Unfortunately, I don't have access to the documentation I recorded and,
> as I learned, the methods for doing so have changed in the past couple of years.

There aren't many prerequisites for this post. All you'll need is Docker
installed on the build machine. With that installed, let's review the steps
to build a Docker image that runs on an ARM32 platform from within Windows.

## Docker Buildx

Docker Buildx is a plugin to the Docker CLI. It's still considered
an "experimental" feature, but it provides some excellent features that make
building images for different platforms quicker. You can use it to build
multiple nodes concurrently or, in our case, create a scoped builder instance
targeting one or more platforms. It also provides the same experience
as `docker build`, so all your existing parameters still work.

### Builder Instances

Builder instances allow you to have scoped environments that don't affect
the shared Docker daemon. If you have a project that needs to be built for N
number of platforms, a builder instance allows you to have an environment
that builds for those platforms, while your shared environment remains
unchanged.

In our case, we want to build for a specific platform that is different than
our shared environment. So let's create a builder instance that targets the
ARM32 platform. Below we create a new builder instance named `arm32` and tell
it to target the `linux/arm/v7` platform.

```powershell
docker buildx create --name arm32 --platform linux/arm/v7
```

## Dockerfile

With our build instance waiting for us, we'll want a Dockerfile to define
the image we want to create. In my case, I was building a VueJS web app
that I wanted to serve statically on the Raspberry Pi. My Dockerfile
has two stages; one for building the application and one for the deployable
image.

The full Dockerfile is below, but notice the platform argument in the
FROM command labeled `production-stage`. I'm specifying that the resulting
image should target the `linux/arm/v7` platform.


```docker
FROM node:12.6.0-alpine as build

ARG BUILDVERSION=0.0.0

WORKDIR /app

# Copy dependency files
COPY ./package.json ./

# Clean install depdenencies
RUN npm i --verbose

# Copy the rest of the files
COPY ./ .

# Update the build version and build the application
# RUN npm version $BUILDVERSION --allow-same-version
RUN npm run build

# Put together the release image with the just build artifacts
FROM --platform=linux/arm/v7 nginx:1.18-alpine as production-stage

WORKDIR /app

# Copy built project
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

## Building the Image

Now that we have a Dockerfile defining the steps to build our image
and a build instance ready to handle our ARM32 platform, we'll need
to tell Buildx to use the instance named `arm32`. Then we can run
the `docker buildx build` command to build our image and it will
create it targeting the platforms we specified.

```powershell
docker buildx use arm32

docker buildx build -t awesumiot.azurecr.io/awesum-vue:1.0.5 --push .
```

Remember, the `docker buildx build` command accepts the same parameters
that `docker build` does. So we can tag/push/etc., during that step
just as we would normally.

## Learn More

Want to know more about Docker Buildx? Below are some links to get
you started.

- [Buildx Docker Documentation](https://docs.docker.com/buildx/working-with-buildx/)
- [Buildx GitHub Repository](https://github.com/docker/buildx/)
