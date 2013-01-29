---
layout: page
title: Website Themes
tagline:
---

{% include JB/setup %}

CTS provides a way to apply themes to HTML content that uses [CSS-style
Microformats](http://microformats.org/). Just use the right CSS classes and you
can theme content, even if you aren't using a CMS.

Using a theme requires placing three links in your `HEAD` element:

*  A Javascript link to the CTS library
*  A theme CSS sheet
*  A theme CTS sheet

We're working on building up a collection of themes you can readily apply to
your site.

For now, here is the [Professor example](professor/explore.html) used to
generate the figure in the paper. 

<script>
$(function() {
  SelectPage("PageThemes");
});
</script>
