---
layout: page
title: Stock Quote Widget
tagline:
---
{% include JB/setup %}

<p class="intro">The Stock Quote widget helps you include a live stock quote in
the style of popular online finance reporting.

<p class="intro"><a href="example.html">View a completed example</a></p>

## 1. Link to the library

Add the CTS library and widget link to your web page:

    <script type="text/javascript" src="http://www.treesheets.org/hotlink/cts.js"></script>
    <script type="text/cts" src="http://www.treeshets.org/hotlink/stock-symbol/stock-symbol.cts"></script>

It's best to add this to the `HEAD` element, but anywhere will work.

## 2. Request a Stock Quote

Anywhere in your web page, when you enclose a `span` of text with the class
`ticker` that contains a stock symbol, it will be replaced by the stock quote.

For example, if I type the sentence:

    <p>Today Google (<span class="ticker">GOOG</span>) announced the
       new Nexus 7.</p>

It will be rendered like this:
