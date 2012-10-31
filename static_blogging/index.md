---
layout: page
title: Static Blogging with CTS 
tagline:
---
{% include JB/setup %}

<p class="intro">CTS helps you write your <i>content</i> in simple HTML pages
and then project that content into your blog tempalte at run-time.</p>

## Introduction

Static site authors usually use one of two methods: either they use a static
blogging framework like [Jekyll](http://jekyllrb.com/) or [Github
Pages](http://pages.github.com/), or they manually edit HTML files. The former
method provides a simple solution for constrained purposes like blogging, but
it requires the author to learn how to modify a framework in order to veer from
the defaults.  The latter method provides the author with framework-free
simplicity, but it conflates the content being written with the scaffolding
which makes the content look nice.

CTS offers a middle-ground between these two approaches. It provides a simple
way to merge two static HTML pages into each other in the browser:

<ul>
  <li>
    <p><b>A mockup</b>, which shows how you want your blog to <i>look</i>.</p>
    <p>Most people would call the CTS mockup a template, which it is. But CTS
templates don't need to have dummy values `{{like_this}}`. A CTS template is
just an ordinary HTML page, attached to a CTS sheet that annotates which
regions of the page should be bound to your data.</p>
  </li>
  <li>
    <p><b>An <b>"only type the important stuff"</b> page, which contains simplified HTML that describes your content and nothing more.</p>
  </li>
</ul>

<script>
$(function() {
  SelectPage("StaticBlogging");
});
</script>
