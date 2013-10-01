---
layout: page
title: How to Use Treesheet Web Themes
header: Pages
expandPage: PageDocs
selectPage: PageDocsThemes
---

Treesheets talk about structure the same way CSS talks about style. One way you
can use them is like "super CSS" to make and publish themes for the web.

Let's say you want to make a simple page:

    <h1>Ted Benson</h1>

    <main>
      <section>
        <h1>About Me</h1>
        <div>
          This is all the stuff about me.
        </div>
      </section>

      <section>
        <h1>Links</h1>
        <div>
          <ul>
            <li>Link 1</li>
          </ul>
        </div>
      </section>
    </main>

If you rendered this page, you would see [this](simple-page.html).

CSS can only style a page like this so much. It can "paint" the HTML as you've
written it, but it can't rearrange elements, embed them in rich structure, and
add Javascript.

But a Treesheet can. Here is the same page with only two lines added to the
`HEAD` element:

    <script src="http://www.treesheets.org/cts.js"></script>
    <link style="treesheet" src="demo-theme/demo-theme.cts" />

The first line includes the CTS library, and the second line links to a
treesheet which packages up:

*  Links to any CSS resources needed for the theme
*  Links to any JS resources needed for the theme
*  Links to any HTML resources needed for the theme
*  The relations that map between this simple page and the theme

You can view the result [here](themed-page.html).

<script>
$(function() {
  SelectPage("PageDocs");
});
</script>
