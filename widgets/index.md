---
layout: page
title: Widgets
tagline:
---
{% include JB/setup %}

<p class="intro">CTS lets you easily embed widgets into your web pages -- no
programming skills necessary.</p>

<div class="widgets">
  <div class="widget">
    <a class="image" href="/widgets/google-map/">
      <img src="/images/widgets/google-map.png" />
    </a>
    <a class="caption" href="/widgets/google-map/">Google Map with Pins</a>
  </div>
  <div class="widget">
    <a class="image" href="/widgets/stock-symbol/">
      <img src="/images/widgets/stock-symbol.png" />
    </a>
    <a class="caption" href="/widgets/stock-symbol/">Inline Stock Quotes</a>
  </div>
</div>


<script>
$(function() {
  SelectPage("PageWidgets");
});
</script>
