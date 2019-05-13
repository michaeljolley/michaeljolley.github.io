---
layout: post
date: 2018-11-13 18:00
title: "Setting up Raspberry Pi for use in kiosk mode with Chromium"
image: https://user-images.githubusercontent.com/1228996/48371127-af891880-e680-11e8-89aa-2dec4de4ef8a.png
description: Using Chromium on a Raspberry Pi to provide a kiosk experience for users.
comments: true
tags: [raspberry-pi, iot]
---

<figure>
  <img src="https://user-images.githubusercontent.com/1228996/48371127-af891880-e680-11e8-89aa-2dec4de4ef8a.png">
</figure>

Recently one of our clients approached us to develop an application that would run on a Raspberry Pi to use in kiosk's throughout their facilities.  We ended up writing a web app in Angular that they would run via Chromium.  

One of their requirements was the Pi shouldn't go to sleep and appear always-on to their users.  While we've already successfully launched the system, I have a feeling others will want to use this same functionality in the future.  So, without further ado, here are the steps we used in setting up each device to run in kiosk mode:

<!--more-->

### Assumptions

For our purposes, we're going to assume you've got your application running at http://localhost:5000 and deployed just fine.

We'll also be using the Pi's default OS of Raspian.

### Prerequisites

First, let's install some prerequisites.

<pre class="language-bash"><code>sudo apt-get install x11-xserver-utils unclutter</code></pre>


### Launch Chromium

We're going to launch Chromium after boot-up with the following settings:

- Incognito mode (so it doesn't try to restart your last session after you inevitably kill the power)
- Kiosk mode
- Turn off pinch (so users can't zoom in/out)
- Overscroll history navigation (to disable a user from scrolling left/right to go back/forward in the browser)

To do this we'll be editing the **autostart** file in **.config/lxsession/LXDE-pi/**.  So navigate to it with:

<pre class="language-bash"><code>cd /home/pi/.config/lxsession/LXDE-pi/</code></pre>

Then edit it with nano like so:

<pre class="language-bash"><code>sudo nano autostart</code></pre>

Once you’re in there, add this line to the end of the file:

<pre class="language-bash"><code>@chromium-browser --kiosk --incognito --disable-pinch --overscroll-history-navigation=0 http://localhost:5000</code></pre>

This launches Chromium with the settings we mentioned above and directs it immediately to your site at http://localhost:5000.

### Turn off the screen saver and hide the cursor

While you're still editing the **autostart** file, add the following:

<pre class="language-bash"><code>@xset s noblank
@xset s off
@xset -dpms
@unclutter -idle 0.1 -roo
</code></pre>

Then save your changes and exit the **autostart** file.

### Stay awake

Now to keep your Pi from falling asleep we'll edit the **lightdm.conf** file.

<pre class="language-bash"><code>sudo nano /etc/lightdm/lightdm.conf</code></pre>

Modify the **xserver-command** line to read:

<pre class="language-bash"><code>xserver-command= X -s 0 -dpms</code></pre>

Then save and exit.

### Disable power management on WiFi

The Pi's WiFi will also go to sleep if we don't change it.  Modify it by editing the **rc.local** file with:

<pre class="language-bash"><code>sudo nano /etc/rc.local</code></pre>

Add the following line before *exit 0* and save:

<pre class="language-bash"><code>iwconfig wlan0 power off</code></pre>

### You're in business

All that's left is to reboot your Pi.  Once it restarts you'll load directly to Chromium viewing your local application.  

If you find any "gotchas" or improvements to the steps above be sure to leave a comment!
