---
layout: page
title: API
group: primary
---
{% include JB/setup %}

<div id="command-value" />
## value

Replaces the content of `node` with `resolve(arg1)`.

### Example

<pre class="prettyprint example template" data-exname="ex-value">
&lt;span id="ex-value" data-bind="value:winner"&gt;
Atlanta Braves
&lt;/span&gt; 
</pre>

<pre class="prettyprint example data" data-type="json" data-exname="ex-value">
{
  "winner": "Boston Red Sox"
}
</pre>

<pre class="prettyprint example result" data-exname="ex-value">


</pre>

<div id="command-with" />
## with

Pushes `resolve(arg1)` onto the context stack.

### Example

<pre class="prettyprint example template" data-exname="ex-with">
&lt;div data-bind="with:team"&gt;
  &lt;span data-bind="value:name"&gt;
    Braves
  &lt;/span&gt; 
  &lt;span data-bind="value:city"&gt;
    Atlanta
  &lt;/span&gt; 
&lt;/div&gt; 
</pre>

<pre class="prettyprint example data" data-type="json" data-exname="ex-with">
{
  "team": {
    "name": "Red Sox",
    "city": "Boston"
  }
}
</pre>

<pre class="prettyprint example result" data-exname="ex-with">


</pre>

<div id="command-repeat-inner" />
## repeat-inner

*With one argument*: Treats the first child of `node` as the template to repeat for each item in `resolve(arg1)`. Removes all other children from `node`

*With two arguments*: Treats the first `arg1` children of `node` as the template to repeat for each item in `resolve(arg2)`. Removes all other children from `node`

#### Example

<pre class="prettyprint example template" data-exname="ex-loopinner">
&lt;div data-bind="repeat-inner:teams"&gt;
 &lt;li&gt; 
  &lt;span data-bind="value:city"&gt;
    San Francisco
  &lt;/span&gt; 
  &lt;span data-bind="value:name"&gt;
    Giants
  &lt;/span&gt; 
  &lt;/li&gt; 
&lt;/div&gt; 
</pre>

<pre class="prettyprint example data" data-type="json" data-exname="ex-loopinner">
{
  "teams": [
    { "name": "Red Sox",
      "city": "Boston"},

    { "name": "Yankees",
      "city": "New York"}
  ]
}
</pre>

<pre class="prettyprint example result" data-exname="ex-loopinner">


</pre>

<div id="command-if-exist" />
## if-exist 

<p><span class="label label-important">Not yet ported from research code to CATS codebase</span></p>

Makes node visible only if `resolve(arg1)` is not "falsy"

#### Example

Template:

<pre class="prettyprint ">
&lt;div id="ex-with" data-bind="loop-inner:2,team"&gt;
  &lt;span data-bind="value:name"&gt;
    Braves
  &lt;/span&gt; 
  &lt;span data-bind="if-exist:manager"&gt;
    Manager &lt;span data-bind="value:manager" /&gt;
  &lt;/span&gt; 
&lt;/div&gt; 
</pre>

Data:

<pre class="prettyprint ">
{
  "teams": [
    { "name": "Red Sox",
      "city": "Boston",
      "manager": "Some Manager Guy"},

    { "name": "Yankees",
      "city": "New York"}
  ]
}

</pre>

Result:

<div class="result">
</div>

<div id="command-if-nexist" />
## if-nexist 

<p><span class="label label-important">Not yet ported from research code to CATS codebase</span></p>

Makes node visible only if `resolve(arg1)` is "falsy"

#### Example

Template:

<pre class="prettyprint ">
&lt;div id="ex-with" data-bind="loop-inner:3,team"&gt;
  &lt;span data-bind="value:name"&gt;
    Braves
  &lt;/span&gt; 
  &lt;span data-bind="if-exist:manager"&gt;
    Manager &lt;span data-bind="value:manager" /&gt;
  &lt;/span&gt; 
  &lt;span data-bind="if-nexist:manager"&gt;
    (No Manager)
  &lt;/span&gt; 
&lt;/div&gt; 
</pre>

Data:

<pre class="prettyprint ">
{
  "teams": [
    { "name": "Red Sox",
      "city": "Boston",
      "manager": "Some Manager Guy"},

    { "name": "Yankees",
      "city": "New York"}
  ]
}

</pre>

Result:

<div class="result">
</div>

<div id="command-if-nexist" />
## attr

Sets attribute `arg1` of `node` to `resolve(arg2)`. By default, this
overwrites the attribute. This default behavior may be overridden with
`arg3`, which has the following options:

*   *(empty)* - default behavior (overwrite attribute)
*   *append* - append to attribute
*   *append(n)* - append to attribute with `n` preceeding

#### Example

Template:

<pre class="prettyprint ">
&lt;div id="ex-with" data-bind="loop-inner:3,team"&gt;
  &lt;span data-bind="value:name"&gt;
    Braves
  &lt;/span&gt; 
  &lt;span data-bind="if-exist:manager"&gt;
    Manager &lt;span data-bind="value:manager" /&gt;
  &lt;/span&gt; 
  &lt;span data-bind="if-nexist:manager"&gt;
    (No Manager)
  &lt;/span&gt; 
&lt;/div&gt; 
</pre>

Data:

<pre class="prettyprint ">
{
  "teams": [
    { "name": "Red Sox",
      "city": "Boston",
      "manager": "Some Manager Guy"},

    { "name": "Yankees",
      "city": "New York"}
  ]
}

</pre>

Result:

<div class="result">
</div>



<div id="command-template" />
## template 

Replaces the template of the subtree of `node` with the subtree specified by
`arg`. The value of `arg1` can be:
*   An anchor reference (e.g., #foo) to some node on the page
*   An address into the data context, in which case the resolved value is the template

To reuse the data in the subtree, while swapping out the template, us in
conjunction with the `data` command.

### Example

<pre class="prettyprint example template" data-exname="ex-template">
&lt;div data-bind="template:#header"&gt;
 (to be replaced)
&lt;/div&gt; 

&lt;div style="display:none;"&gt;
  &lt;div id="header"&gt;
   &lt;h1 data-bind="value:site.title"&gt; Title &lt;/h1&gt; 
  &lt;/div&gt; 
&lt;/div&gt; 
</pre>

<pre class="prettyprint example data" data-type="json" data-exname="ex-template">
{
  "site": { 
    "title": "Cascading Tree Sheets"
  }
}
</pre>

<pre class="prettyprint example result" data-exname="ex-template">


</pre>

<div id="command-data" />
## data

Fetches the data from `arg1` and pushes it on the context stack. The value of `arg1` may be:

*  An anchor reference (e.g., #foo) in which case data will be recovered by analizing the DOM in conjunction with CATS tags.
*  A single dot `.` in which case the data will be recovered from `node`

The `data` command preceeds the `template` command in order of operations, so the following statement will first recover data from the current `node` (in the case below there isn't any represented) and then apply the template next.

<pre class="prettyprint ">
&lt;div data-bind="data:.; template:#other" /&gt;
</pre>

### Example

<pre class="prettyprint example template" data-exname="ex-data">
&lt;div data-bind="data:.; template:#wrapped" &gt;
  &lt;h1 data-bind="value:title"&gt; CATS &lt;/h1&gt; 
&lt;/div&gt; 

&lt;div style="display:none;"&gt;
  &lt;div id="wrapped"&gt;
  ::: &lt;span data-bind="value:title"&gt;Title&lt;/span&gt; ::::
  &lt;/div&gt; 
&lt;/div&gt; 
</pre>

<div class="alert alert-block alert-info">
  <h4 class="alert-heading">Note:</h4>
  <p>No data needed for this example -- it's all in the DOM. So leave the data box below as it is.</p>
</div>

<pre class="prettyprint example data" data-type="json" data-exname="ex-data">
{
}
</pre>

<pre class="prettyprint example result" data-exname="ex-data">

</pre>



