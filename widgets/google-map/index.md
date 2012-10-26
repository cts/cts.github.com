---
layout: page
title: Google Map Widget
tagline:
---
{% include JB/setup %}

<p class="intro">The Google Map Widget helps you include a simple Google Map on
your website withoiut any JavaScript. You can add pins, and if you want, custom
markers and popup windows.</p>

<p class="intro">This page guides you through the process of adding a Google
Map Widget to your website. It consists of copying, pasting, and modifying a
few lines of HTML.</p>

<p class="intro">The [result](example.html) of this tutorial is also available
for you to copy and paste.</p>

### Step 1: Link to the library

To start, you'll need to add three lines of HTML to your web page to connect
with the Google Maps library and CTS:

    <script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
    <script type="text/javascript" src="http://treesheets.org/hotlink/cts.js"></script>
    <script type="text/cts" src="http://treeshets.org/hotlink/google-map/google-map.cts"></script>

If you have access to the `HEAD` element of your web page, it's best to add
these lines there. Otherwise, you can add them anywhere you can.

### Step 2: Request a Map

Next, pick the place you want the map to actually appear on your page and add the following HTML:

    <section class="map">
    </section>

This tells the map widget that you'd like a map there. Now we're going to fill
in some data about the map: general map settings and specific points we'd like
on the map.

### Step 3: General Settings for the Map

Copy and paste the HTML below and place it *in between* the `<section
class="map">` and `</section>` tags you just created.

    <ul class="properties">
      <li class="center-lat">42.361335</li>
      <li class="center-lng">-71.089482</li>
      <li class="zoom-level">15</li>
      <li class="width">700px</li>
      <li class="height">500px</li>
    </ul>

This HTML contains settings for your map: where should the map be centered?
(The settings you see above center it on MIT in Cambridge, Massachusetts). How
far zoomed in should the map be? (1 = Astronaut's perspective, 17 = Ant's
perspective) And how large should the map be on your page?

Modify these settings to your liking, or use the defaults you see here.

### Step 4: Add points to the map

