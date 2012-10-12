# fyre-hottest-tiled

A Livefyre StreamHub App that dynamically displays the 5 hottest Collections within a Network

Note: This is a proof of concept. Notable limitation: The background images are fixed an likely irrelevant, but look cool. What do you think I should do?

# screenshot

![fyre-hottest-tile example](http://gobengo.github.com/fyre-hottest-tiled/images/screenshot.png)

# instructions
The example page is in `public/index.html`. It must be served over HTTP for CORS to work.

    cd fyre-hottest-tiled/public
    python -m SimpleHTTPServer 8888
    open "http://localhost:8888"

The HTML and CSS for this have been blatantly copied from Engadget.com.
