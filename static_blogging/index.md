---
layout: page
title: Static Blogging with CTS 
tagline:
---
{% include JB/setup %}

<p class="intro">CTS helps you write your <i>content</i> in simple HTML pages
and then project that content into your blog tempalte at run-time.</p>

## Introduction

Static site authors usually use one of two methods today. Either they use a
static HTML generation framework like [Jekyll](http://jekyllrb.com/) or [Github
Pages](http://pages.github.com/), or they manually edit HTML files. The former
method works well for constrained purposes like blogging, but it requires the
author to learn how to modify a framework in order to veer from the defaults.
The latter method provides the author with framework-free simplicity, but it
conflates the content being written with the scaffolding which makes the
content look nice.

CTS offers a middle-ground between these two approaches.

<script>
$(function() {
  SelectPage("StaticBlogging");
});
</script>
