---
layout: page
title: CTS UI
group: primary
---

<p>Bookmark the following link to your toolbar to inject CTS, along with a UI widget, into any site:</p>

<ul>
<li><a class="btn btn-success" href="javascript:var s=document.createElement('script');s.setAttribute('src','http://localhost:8000/release/cts-ui.js');document.getElementsByTagName('body')[0].appendChild(s);">CTS-UI (Development)</a><br />This will look for ctsui.js on localhost:8000/release/ctsui.js</li>

<li><a class="btn btn-success" href="javascript:var s=document.createElement('script');s.setAttribute('src','http://localhost:9000/release/cts.js?autoload=false');document.getElementsByTagName('body')[0].appendChild(s);">CTS (Development)</a><br />This will look for cts.js on localhost:9000/release/cts.js</li>
</ul>
