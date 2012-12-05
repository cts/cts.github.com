---
layout: page
title: Cascading Tree Sheets
tagline:
---
{% include JB/setup %}


<div class="row">
  <div class="span9">
    <h2>The Situation</h2>
  </div>
</div>


<div class="row">
  <div class="span9 threecolumn">

    <p>CSS took an important step towards separating the content of an HTML
    document from its presentation. This practice "makes it easier to maintain
    sites, share style sheets across pages, and tailor pages to different
    environments" (<a
    href="http://www.w3.org/standards/webdesign/htmlcss.html">W3C</a>).  But
    significant parts of a modern web page's design cannot be described by CSS,
    and are instead defined by "presentational" HTML interleaved with "content"
    HTML.</p>

    <p>This presentational HTML is stylistic scaffolding, often interleaved
    with Javascript.  It provides anchor points for CSS and controls
    block-level layout beyond CSS's capabilities. As an example, consider the
    mass of HTML nodes, each holding image fragments, that was needed to place
    content inside a rounded rectangle before CSS3 introduced a single
    instruction for doing so.</p>
    
    <p>Unlike CSS styles, these masses of presentational HTML cannot be
    separated from content HTML, which makes HTML documents harder to create,
    maintain, reuse, and tailor. When an author inspects HTML source, she finds
    large blobs of presentational HTML wrapping (and often obfuscating)
    meaningful content. To resuse markup, she must copy the entire blob, then
    replace pieces of content with her own.  This might work for replicating an
    exemplar layout once, but what happens if an author wants to use the same
    layout repeatedly on many instances---for example, to nicely format each
    publication in a large list?  The labor becomes substantial.</p>
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
