---
layout: page
title: CTS Development
group: primary
---

This page contains instructions intended to help you set up a development environment to contribute to CTS. You might also want to check out the [develpment page for the CTS-UI](http://www.treesheets.org/cts-ui/development.html).

## Cloning and Building CTS

CTS is hosted at [cts/cts-ui](http://github.com/cts/cts-js) on GitHub.

Next install all the required NPM packages by running `npm install` in the local directory.

We use Grunt for our build system. To build the project, just type `grunt` at the package root. The build results will be placed in `release/cts.js`

## Running the Development Server

To test while you develop, run the development server included in the project root:

     python dev-server.py

This will open up an HTTP server on port 9000 with [CORS headers](http://enable-cors.org/) enabled.

## Using the Development Bookmarklet

Next, drag the button below onto your toolbar. **With the development server running**, you should be able to click this button to load the CTS on any website. *Note that https sites will still refuse to load it*: 

<p><a class="btn btn-success" href="javascript:var s=document.createElement('script');s.setAttribute('src','http://localhost:9000/release/cts.js');document.getElementsByTagName('body')[0].appendChild(s);">CTS (Dev)</a></p>

