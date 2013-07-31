---
layout: page
title: CTS UI Development
group: primary
---

## Cloning and Building CTS-UI

CTS-UI is hosted at [cts/cts-ui](http://github.com/cts/cts-ui) on GitHub.

Next install all the required NPM packages by running `npm install` in the local directory.

We use Grunt for our build system. To build the project, just type `grunt` at the package root. The build results will be placed in `release/cts-ui.js`

## Running the Development Server

To test while you develop, run the development server included in the project root:

     python dev-server.py

This will open up an HTTP server on port 8000 with [CORS headers](http://enable-cors.org/) enabled.

## Using the Development Bookmarklet

Next, drag the button below onto your toolbar. **With the development server running**, you should be able to click this button to load the CTS-UI sidebar on any website. *Note that https sites will still refuse to load it*: 

<p><a class="btn btn-success" href="javascript:var s=document.createElement('script');s.setAttribute('src','http://localhost:8000/release/cts-ui.js');document.getElementsByTagName('body')[0].appendChild(s);">CTS-UI (Dev)</a>

