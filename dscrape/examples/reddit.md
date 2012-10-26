---
layout: page
title: "Reddit - DScrape Example"
group: primary
---

Reddit is a popular link aggregator and discussion forum. This example shows
how a CATS sheet can be used to extract the links, and their metadata, from
the Reddit homepage. 

### Running

1.   Download the [Reddit CATS Sheet](reddit.cts)
2.   Run `dscrape reddit.cts http://www.reddit.com`

### CATS Sheet

<pre class="prettyprint">
#siteTable {
  repeat-inner: 2,links;
}

#siteTable div.thing p.title a.title {
  value:title;
  attr:href,link;
}

#siteTable div.thing p.title span.domain a {
  value:domain;
}

#siteTable div.unvoted div.score.unvoted {
  value:score;
}

#siteTable div.unvoted div.score.dislikes {
  value:downvotes;
}

#siteTable div.unvoted div.score.likes {
  value:upvotes;
}

#siteTable div.thing p.tagline time {
  attr:datetime,datetime;
  value:relativeTime;
}

#siteTable div.thing p.tagline a.author {
  attr:href,author.link;
  value:author.handle;
}

#siteTable div.thing p.tagline a.subreddit {
  attr:href,category.link;
  value:category.name;
}

#siteTable div.thing ul.buttons li.first a.comments {
  attr:href,permalink;
  value:commentCount;
}
</pre>

### Example Output

<pre class="prettyprint">
links: 
  - 
    downvotes:    2572
    score:        2573
    upvotes:      2574
    link:         http://www.medicaldaily.com/news/20120515/9890/nerve-transfer-rewiring-paralyzed-hand-quadriplegia.htm#.T7M6a26JD5o.reddit
    title:        A 71-year-old man who became paralyzed from the waist down and lost all use of both hands in a 2008 car accident has regained motor function in his fingers after doctors rewired his nerves to bypass the damaged ones in a pioneering surgical procedure
    domain:       medicaldaily.com
    datetime:     2012-05-16T15:23:35.599993+00:00
    relativeTime: 3 hours
    author: 
      link:   http://www.reddit.com/user/maxwellhill
      handle: maxwellhill
    category: 
      link: http://www.reddit.com/r/science/
      name: science
    permalink:    http://www.reddit.com/r/science/comments/tq1yk/a_71yearold_man_who_became_paralyzed_from_the/
    commentCount: 164 comments
  - 
    downvotes:    3182
    score:        3183
    upvotes:      3184
    link:         http://1st-ecofriendlyplanet.com/05/hemp-paper/
    title:        TIL that 1 acre of hemp can make as much paper as 4.1 acres of trees, and that hemp fiber to make paper can be yielded in 90 days whereas tree paper comes from trees that take 15-50 years to grow.
    domain:       1st-ecofriendlyplanet.com
    datetime:     2012-05-16T15:14:02.403898+00:00
    relativeTime: 3 hours
    author: 
      link:   http://www.reddit.com/user/mattm4473
      handle: mattm4473
    category: 
      link: http://www.reddit.com/r/todayilearned/
      name: todayilearned
    permalink:    http://www.reddit.com/r/todayilearned/comments/tq1he/til_that_1_acre_of_hemp_can_make_as_much_paper_as/
    commentCount: 882 comments
</pre>
