---
layout: page
title: Google Map Widget
tagline:
---
{% include JB/setup %}

The Google Map CTS Widget helps you include a simple Google Map on your website
withoiut any JavaScript. You can add pins, and if you want, custom markers and
popup windows. 

To start, you'll need to add three lines of HTML to your web page to connect
with the Google Maps library and CTS:

    <script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
    <script type="text/javascript" src="http://treesheets.org/hotlink/cts.js"></script>
    <script type="text/cts" src="http://treeshets.org/hotlink/google-map/google-map.cts"></script>

the `HEAD` section of your
HTML page. This is the part between the `<head>....</head>` tags toward the
beginning of the document.
