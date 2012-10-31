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
templates don't need to have variables and dummy values. A CTS template is
just an ordinary HTML page, alone with a CTS sheet that annotates which
regions of the page should be bound to your data.</p>
  </li>
  <li>
    <p><b>An "only type the important stuff" page</b>, which contains just the content you want to edit.</p>
    <p>This "<i>OTIS</i>" page is written in the style of the early web: barebones HTML used just to mark document sections and paragraphs. All content and no fluff, letting you easily focus on the task of writing and editing. In the browser, CTS will project this content into the mockup.</p>
  </li>
</ul>

## Example

Here is an example you can download and use.

<div class="row" style="margin-top: 20px; margin-bottom:20px">
  <div class="span8 well">
    <div class="row">
      <div class="span4">
        <h3>Download</h3>
        <p>TODO: add download link</p>
      </div>
      <div class="span4">
        <h3>Contribute</h3>
        <a href="http://github.com/cts/static-blog-starter" class="btn btn-success">Source on GitHub</a>
      </div>
    </div>
  </div>
</div>



<script>
$(function() {
  SelectPage("StaticBlogging");
});
</script>
