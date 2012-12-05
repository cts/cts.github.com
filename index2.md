---
layout: page
title: Cascading Tree Sheets
tagline:
---
{% include JB/setup %}


<div class="row">
  <div class="span9">
    <h2>You Deserve Better Tools</h2>
  </div>
</div>

<div class="row">
  <div class="span9 threecolumn">
    
    <p>CSS took an important step towards separating the content of an HTML
    document from its presentation. This practice "makes it easier to maintain
    sites, share style sheets across pages, and tailor pages to different
    environments" (<a
    href="http://www.w3.org/standards/webdesign/htmlcss.html">W3C</a>).  But
    significant parts of web page design cannot be described by CSS, and are
    instead defined by <b>design HTML</b> interleaved with <b>content
    HTML</b>.</p>

    <p>This design HTML is stylistic scaffolding, often interleaved with
    Javascript.  It provides anchor points for CSS and controls block-level
    layout beyond CSS's capabilities.  As an example, consider the mass of HTML
    nodes, each holding image fragments, that was needed to place content
    inside a rounded rectangle before CSS3 introduced a single instruction for
    doing so.</p>

    <p>Unlike CSS styles, <b>design HTML</b> cannot be separated from content
    HTML. This makes HTML documents harder to create, maintain, reuse, and
    tailor. Template langauges address symptoms of this problem, but not the
    root. <i>We need a platform-level language to support encapsulation and
    resuse of HTML structure just like we have one for HTML style.</i></p>
    
  </div>
</div>

<img src="/images/recycle.png" style="margin:25px 0px 25px 50px;" />

Cascading Tree Sheets (CATS) are a new way to describe how data and HTML
structure interact on the web. This includes templating and much more.

This site, and the code, are both a bit volatile at the moment.

<script>
$(function() {
  SelectPage("PageHome");
});
</script>
