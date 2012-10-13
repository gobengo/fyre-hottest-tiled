# fyre-hottest-tiled

A Livefyre StreamHub App that dynamically displays the 5 hottest Collections within a Network

If you provide an EMBEDLEY_API_KEY in `main.js`, relevant images will automagically be fetched for you!

# screenshot

## Default images

![fyre-hottest-tile example](http://gobengo.github.com/fyre-hottest-tiled/images/screenshot.png)

## Engadget
![fyre-hottest-tile engadget](http://gobengo.github.com/fyre-hottest-tiled/images/screenshot-engadget.png)

# instructions
The example page is in `public/index.html`. It must be served over HTTP for CORS to work.

    cd fyre-hottest-tiled/public
    python -m SimpleHTTPServer 8888
    open "http://localhost:8888"

And served over port 80 for embedly to work. (I also set up an /etc/hosts entry for port80.com to avoid 'localhost')

    sudo python -m SimpleHTTPServer 80

The HTML and CSS for this have been blatantly copied from Engadget.com.
