---
layout: page
title: Cascading Tree Sheets
tagline:
---
{% include JB/setup %}


<div class="row">
  <div class="span9">
    <h2>We need better Encapsulation</h2>
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

<div class="row">
  <p align="center">
    <img src="/images/recycle.png" style="width: 500px;" />
  </p>
</div>

<div class="row">
  <h2>Enabling Content Resue</h2>
</div>

<div class="span9 threecolumn">
  <p>Cascading Tree Sheets (CTS) is a light-weight language for describing the
  presentational parts of page design that CSS cannot represent. CTS looks just
  like CSS, but it describes the way HTML fragments should bind with, and
  replace, other HTML fragments.</p>

  <p>Tree Sheets are attached externally, like CSS. This means your web
  templates are actually fully-functioning mockups. A tree sheet transforms the
  mockup into a page with custom content.</p>

  <p>When used to map just fragments of a page, CTS can enable rich widget
  invocation from just a simple HTML table or list. This provides a generic
  platform on which widget authors can offer functionality without requireing
  knowledge of Javascript.</p>
</div>

<script>
$(function() {
  SelectPage("PageHome");
});
</script>
