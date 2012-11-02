---
layout: page
title: Twitter Bootstrap and Broken Encapsulation
group: primary
---

One nice feature of Bootstrap is a set of form layouts for different size
screens and visual styles. For example, the "Horizontal" variant of this layout
looks like this:

<img src="form-element.png" />

To use this form layout, form author must do two things:

*  Conform to a particular HTML structure
*  Decorate that structure with a particular set of CSS classes

With [Version 1 of
Bootstrap](https://github.com/twitter/bootstrap/blob/1905a992d9cc8f1160930edad6ec5d52eaf06d85/docs/index.html),
the HTML code to produce the above screen grab was:

    <form>
      <fieldset>
        <div class="clearfix">
          <label for="email">Email</label>
          <div class="input">
            <input name="email" type="text" placeholder="Email" />
          </div>
        </div>
      </fieldset>
    </form>

But with Version 2, both the required HTML structure and the required CSS
classes changed to the following:

    <form class="form-horizontal">
      <div class="control-group">
        <label class="control-label" for="email">Email</label>
        <div class="controls">
          <input name="email" type="text" placeholder="Email">
        </div>
      </div>
    </form>

Anyone who updated their CSS and Javascript hotlinks to Twitter without also
searching and fixing *every form* in their web code would see a misrendered
form, like the following:

Here is a table with IFrames of the three possibilities:

<table>
 <tr>
   <td>Bootstrap Version</td>
   <td>1</td>
   <td rowspan="2">
     <iframe src="bootstrap-v1-v1.html" style="width: 300px; height: 100px;" />
   </td>
 </tr>
 <tr>
   <td>HTML Style</td>
   <td>1</td>
 </tr>
 <tr>
   <td>Bootstrap Version</td>
   <td>2</td>
   <td rowspan="2">
     <iframe src="bootstrap-v2-v2.html" style="width: 300px; height: 100px;" />
   </td>
 </tr>
 <tr>
   <td>HTML Style</td>
   <td>2</td>
 </tr>
 <tr>
   <td>Bootstrap Version</td>
   <td style="background-color: #FA5858">2</td>
   <td rowspan="2">
     <iframe src="bootstrap-v1-v2.html" style="width: 300px; height: 100px;" />
   </td>
 </tr>
 <tr>
   <td>HTML Style</td>
   <td style="background-color: #FA5858">1</td>
 </tr>
</table>





