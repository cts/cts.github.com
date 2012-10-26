# Hello, CTS

CTS (pronounced "Cats") is a declarative template language designed to annotate
HTML pages just like CSS, using selectors. CTS preserves the structure or your
data and the structure of your template when it renders, making the structure
of your web content more reusable, the way it should be.

# Attaching CTS to your web page

CTS enables your HTML mockups to serve as the final production templates. No
chop-shopping and filling in with escape sequences necessary.

CTS template properties attach just like CSS:

   * Attach CTS to directly DOM elements, using the `data-cts` attribute
   * Attach CTS via an *internal CTS sheet*
   
    <style type="text/cts">
     .. CTS instructions here ..
    </style>

   * Attach CTS via an *external CTS sheet*

    <link rel="cts" type="text/cts" href="template.cts" />

# Structure of a CTS Property

CTS properties come in key-value pairs, like CSS. Each key takes the form:

    PROPERTY(TARGET)-VARIANT

in which the target and variant are optional. Here's an example of how a CTS
sheet might describe links on a blog sidebar, for example:

    #categories {
      repeat(child): blog_categories_var;
    }

    #categories a {
      value: category_name;
      value(href): category_link;
    }

The above block says to repeat the first child of the `#categories` element for
each item in some variable named `blog_categories_var`. For each `a` element in
`#categories`, set the text of that element to the `category_name` property on
the iterated item and the `href` attribute to the `category_link` property of
the iterated item.

Let's try this live to get a feel for it. Below, you'll find the above example,
along with the HTML and data to accompany it. Click the `Render` button to
render the CTS sheet.



