---
layout: page
title: DScrape
subtitle: "Simple declarative web scraping"
group: primary
section: dscrape
---
{% include JB/setup %}

<div class="row" style="margin-top: 20px; margin-bottom:20px">
  <div class="span8 well">
    <div class="row">
  <div class="span4">
    <h3>Download and Use</h3>
    <p><i>Install DScrape using the <a href="http://npmjs.org/">Node Package Manager</a></i>:</p>
    <code style="margin-left: 15px">npm install dscrape</code>
  </div>
  <div class="span4">
    <h3>Contribute</h3>
    <a href="http://github.com/webcats/dscrape" class="btn btn-success">DScrape on GitHub</a>
  </div>
</div></div></div>

DScrape is a declarative web scraping toolkit based on Cascading Tree Sheets.
Given a tree sheet that maps a web page onto an implicit JSON structure,
DScrape will produce that structure for you and output it in a variety of
formats.

![DScrape Example](/images/dscrape-example.png)

## Scraper Repository

The [DScrape Github repository](http://www.github.com/cts/dscrape) also
maintains a list of pre-written tree sheets you can use for scraping. If you
only provide a URL to DScrape (and no tree sheet), it will search this scraper
repository for a URL match and use the pre-written scraper if available.

For example, to scrape Reddit, simply say:

<code>
dscrape http://www.reddit.com
</code>

Or to scrape a person's Twitter profile, you might say:

<code>
dscrape http://www.twitter.com/edwardbenson
</code>

Since a Reddit scraper and Twitter Profile scraper already exists in the
repository, DScape will download and use the appropriate tree sheets for you. 

## Contributing a Scraper

To contribute a scraper to our repository, fork it on Github and add your tree
sheet to the `/examples` folder. You will also need to add an entry for your
scraper in the `/examples/directory.json` file. Then submit a pull request and
we will review and incorporate it.

<script>
$(function() {
  SelectPage("PageScraping");
});
</script>
