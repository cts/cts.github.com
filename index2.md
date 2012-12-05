---
layout: page
title: Cascading Tree Sheets
tagline:
---
{% include JB/setup %}


<div class="row">
  <div class="span9">
    <h2>A Next Step for Encapsulation</h2>
  </div>
</div>

<div class="row">
  <div class="span9 threecolumn">
    
    <p>CSS took an important step towards separating the content of an HTML
    document from its presentation. But significant parts of web page's design
    cannot be described by CSS, and are instead defined by <b>design HTML</b>
    interleaved with <b>content HTML</b>.</p>

    <p>This Design HTML is stylistic scaffolding. It provides anchor points for
    CSS and controls block-level layout beyond CSS's capabilities. But unlike
    CSS, it cannot be separated from content HTML. This makes web documents
    harder to create, maintain, and reuse.</p>

    <p>Template langauges address symptoms of this problem, but not the root.
    <i>We need a platform-level language to support encapsulation and resuse of
    HTML structure just like we have one for HTML style.</i></p>
    
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
