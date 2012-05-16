---
layout: page
title: "A Blog Index - DScrape Example"
group: primary
---

Here's an example of using CATS and DScrape to scrape [Ted's blog
index](http://www.edwardbenson.com/blog). It has a very simple structure: we'll
be pulling out the title, permalink, and date of each post.

### Running

1.   Download the [CATS Sheet for Ted's blog](tedsblog.cts)
2.   Run `dscrape tedsblog.cts http://www.edwardbenson.com/blog`

### CATS Sheet

<pre class="prettyprint">
div.related ul {
  repeat-inner: posts;
}

div.related ul li span {
  value: date;
}

div.related ul li a {
  attr: href,permalink;
  value: title;
}
</pre>

### Example Output

<pre class="prettyprint">
posts: 
  - 
    date:      March 27, 2012
    permalink: /2012/03/democracy-pressure-release/
    title:     Democracy has a Built in Pressure Release Valve
  - 
    date:      March 14, 2012
    permalink: /2012/03/who-occipies/
    title:     Who Occupies Wall Street?
  - 
    date:      March  6, 2012
    permalink: /2012/03/thoughts-on-nicar/
    title:     NICAR, from a Programmer's Eyes
</pre>
