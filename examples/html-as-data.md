---
layout: page
title: HTML As Data
group: primary
---
{% include JB/setup %}

We often have simple information that we want to display in a not-so-simple
manner. Consider an academic's publication list. This is a relatively
straightforward set of information: title, author, conference, year, and so on.

But when Professor Whitebeard goes to enter this information his homepage, he
has to embed it in a big HTML wrapper. Some of this wrapper helps dilineate the
boundaries of information, but a lot of it is purely for aesthetics: those
elements of style that CSS alone can't style without an accompanying blob of
HTML.

CATS lets you write *simple HTML*, for the purpose of conveying data structure,
and then transform it into *complicated HTML* at runtime. This makes for a
simplified development process (less copy-paste means less error-prone surface
area) and it also provides a form of encapsulation that lets you easily change
the way your data is displayed at a laster date.

Here is an example *simple* HTML structure that Professor Whitebeard might use to maintain his paperlist:

<pre class="prettyprint example data" data-simple="yes" data-type="html" data-exname="htmlasdata">
&lt;ul data-bind="repeat-inner:papers"&gt;
  &lt;li&gt;
    &lt;h1 data-bind="value:title"&gt;A Lower Bound for Bogosort&lt;/h1&gt;
    &lt;h3 data-bind="value:authors"&gt;Linda Beaker and Dudbury Whitebeard&lt;/h3&gt;
    &lt;div data-bind="value:conference"&gt;Workshop on Inefficient Sorting&lt;/div&gt;
    &lt;div data-bind="value:year"&gt;2012&lt;/div&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;h1 data-bind="value:title"&gt;Lossy OLTP&lt;/h1&gt;
    &lt;h3 data-bind="value:authors"&gt;Sam Bitbucket and Dudbury Whitebeard&lt;/h3&gt;
    &lt;div data-bind="value:conference"&gt;Journal of Good Enough Databases&lt;/div&gt;
    &lt;div data-bind="value:year"&gt;2011&lt;/div&gt;
  &lt;/li&gt;
&lt;/ul&gt;
</pre>

This HTML structure is meant to convey information in a way that is:
*  Easy to edit (hey, it's HTML!)
*  Viewable in the absense of anything fancy (hey, it's HTML!)
*  Indexible by search engines (hey, it's HTML!)
*  Simply structured: we'll worry about styling this up later

Next we combine this data-laden HTML blob with a template that will make it look nice.

<pre class="prettyprint example template" data-simple="yes" data-exname="htmlasdata">
&lt;div id="paper-template"&gt;
  &lt;div data-bind="repeat-inner:papers"&gt;
    &lt;p&gt;
      &lt;b data-bind="value:title"&gt;&lt;/b&gt;&lt;br/&gt;
      &lt;i data-bind="value:authors"&gt;&lt;/i&gt;&lt;br/&gt;
      &lt;span data-bind="value:conference"&gt;&lt;/span&gt;, &lt;span data-bind="value:year"&gt;&lt;/span&gt;
    &lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

For the sake of having a clean example to show, the one above isn't too
complicated, but the **recasting** of the data could grow arbitrarily
complex, involving large, multilevel HTML subtrees. No matter how complex
the template, it only needs to be expressed once. 

To apply this template to the paper list, just wrap it in a `div` with two
additional CATS commands that say "use the data from here,
but with the template from over there".

<pre class="prettyprint">
&lt;div id="my-papers" data-bind="data:.; template:#paper-template"&gt;
&lt;/div&gt;
</pre>

CATS then extracts the data from one subtree, and then reapplies it to the
template from the other DOM subtree for the following result.

<div class="row">
  <div class="span1">
    <button class="btn" id="showres">Render</button>
  </div>
  <div class="span7" style="border: 2px solid grey; padding: 5px;" id="result">
  </div>
</div>

Go ahead and play around with the data and template above: change them,
click "Save", and then click the "Render" button to see the new result.

<script>
$(function() {
  $('#showres').click(function() {
  var wrapper = $("<div data-bind='data:.; template:#paper-template' />");
  var hidden = $("<div style='display:none' />");
  var template = window.ExTemplate('htmlasdata').text();
  hidden.append(template);
  var data = window.ExData('htmlasdata').text();
  wrapper.append(data);
  $('body').append(hidden);
  var cats = new CATS.Engine();
  cats.render(wrapper, {});
  $(result).html(wrapper);
  hidden.remove();
  });
});
</script>
