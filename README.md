Vis-à-vis web-viewer for the MPDS data
==========

Standalone and self-contained HTML5 widget, based on the D3 and Plotly libs.

As a part of the MPDS desktop GUI, being used in an **iframe**, tries to access the `window.parent` and `window.parent.wmgui`, as well as the methods therein.

Run with any web-server _e.g._:

`php -S localhost:5555`

and then type in the web-browser address bar: `http://localhost:5555`