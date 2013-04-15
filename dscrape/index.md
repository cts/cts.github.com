---
layout: page
title: DScrape
subtitle: "Simple declarative web scraping"
group: primary
section: dscrape
---
{% include JB/setup %}

<p align="center">
  <img src="/images/dscrape-twitter-example.png" alt="DScrape Example" />
</p>

DScrape is a declarative web scraping toolkit based on Cascading Tree Sheets.
Given a tree sheet that maps a web page onto an implicit JSON structure,
DScrape will produce that structure for you and output it in a variety of
formats.

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

# Scraper Repository

The [DScrape Github repository](http://www.github.com/cts/dscrape) also
maintains a list of pre-written tree sheets you can use for scraping. If you
only provide a URL to DScrape (and no tree sheet), it will search this scraper
repository for a URL match and use the pre-written scraper if available.

For example, to scrape Reddit, simply say `dscrape http://www.reddit.com` or to
scrape a person's Twitter profile, you might can say `dscrape
http://www.twitter.com/edwardbenson`. Since a Reddit scraper and Twitter
Profile scraper already exists in the repository, DScape will download and use
the appropriate tree sheets for you.

Here's a list of scrapers already written for you to use along with example
invocations:

* Reddit (and subreddits) article listings ([scraper link](https://github.com/cts/dscrape/blob/master/examples/reddit.cts))
    
     dscrape http://www.reddit.com

* Kickstarter project pages ([scraper link](https://github.com/cts/dscrape/blob/master/examples/kickstarter.cts))

     dscrape http://www.kickstarter.com/projects/1068932801/new-york-london

* Twitter profile and latest tweets ([scraper link](https://github.com/cts/dscrape/blob/master/examples/twitter-profile.cts))

     dscrape http://www.twitter.com/edwardbenson

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
