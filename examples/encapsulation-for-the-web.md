---
layout: page
title: Encapsulation for the Web
group: primary
---
{% include JB/setup %}

Encapsulation is a fundamental practice in computer science that enables code
reuse. If a programmer has some cluster of functionality that is frequently
reused, encapsulating that functionality into some bundle -- lika a class,
module, or API -- enables the *users* of that functionality to be indifferent
to particulars of its implementation.

CSS may be thought of as a form of encapsulation for the web. It enables
developers to define **classes** which represent common stylistic patterns on a
web site and then refer to those classes in HTML. For example, a CSS file may
define what the class **.important** should look like, and then any HTML
element adorned with that class will inhereit that styling.

But **CSS does not go far enough** because it is not capable of describing how
data, the stuff we see on the web page, interacts with the HTML hierarchy that
contains it. 

A simple, yet familiar, example of this problem is rounded corners.

### Evolution of Rounded Corners with CTS

Rounded corners were introduced as a built-in CSS property in CSS 3.0. Prior to
that, designers wishing to implement rounded corners had to use one of a number
of tricks that involved coordination between CSS and a nested HTML structure.

These nested structures often looked similar to this:

<pre class="prettyprint example" data-type="html">
&lt;div class="rounded"&gt;
  &lt;div class="top-left"&gt;&lt;/div&gt;
  &lt;div class="top-right"&gt;&lt;/div&gt;
  &lt;div class="content"&gt;
    Content to have rounded corners goes here
  &lt;/di&gt;
  &lt;div class="bottom-left"&gt;&lt;/div&gt;
  &lt;div class="bottom-right"&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>

and was accompanied by CSS which constructed the illusion of rounded corers
corner by corner.

Fast forward to CSS3, and rounded corners can be applied to any element as a
native capability of CSS; no multi-element structures were required: **the
implementation of rounded corners** changed. If CSS provided adequate
encapsulation no change our HTML would be necessary. But changes are necessary.
Every time our web application uses the above structure of HTML, we must now
rewrite that to read:

<pre class="prettyprint example" data-type="html">
&lt;div class="rounded"&gt;
  Content to have rounded corners goes here
&lt;/div&gt;
</pre>

### Evolution of Rounded Corners with CTS

CTS helps properly encapsulate scenarios such as the one above. In a CTS
document using CSS2, the web designer could have started with a simple,
class-based wrapper called *rounded*

<pre class="prettyprint example" data-type="html">
&lt;div class="rounded"&gt;
  Content to have rounded corners goes here
&lt;/div&gt;
</pre>

and then defined, elsewhere, a template on the page that define the
transformation necessary to coordinate with CSS2 to achieve rounded corners.

<pre class="prettyprint example" data-type="html">
&lt;div id="rounded-template"&gt;
  &lt;div class="top-left"&gt;&lt;/div&gt;
  &lt;div class="top-right"&gt;&lt;/div&gt;
  &lt;div class="content"&gt;&lt;/di&gt;
  &lt;div class="bottom-left"&gt;&lt;/div&gt;
  &lt;div class="bottom-right"&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>

A CTS file, attached like CSS, then declares that any element with the
*rounded* class should be transformed using that template.

<pre class="prettyprint example" data-type="html">
.rounded {
  data: .;
  template: #rounded-template;
}

#rounded-template .content {
  data: .;
}
</pre>

CSS2 allows us to encapsulate away the styling of each **corner** of the
rounded structure. CTS allows us to encapsulate away the transformation of the
HTML element into one wrapped by four such corners.

When CSS3 arrives, with its built-in rounded corners property, no change to our
web content is necessary. We need only remove the CTS rules that specify the
transformation and re-define the CSS accompanying the class *rounded*.
