let express = require("express"),
    fs = require("fs"),
    app = express(),
    curl = require('curlrequest'),
    jsdom = require("jsdom"),
    IP = process.env.HOST || "localhost",
    PORT = process.env.PORT || 8000;

const {
    JSDOM
  } = jsdom;

// SCRAPING ROUTERS //
app.get('/scrape', (req, res) => {
    let mainURL = 'https://careercenter.am';
    var options = {
        url: mainURL + "/index.php?/ccdspann.php?id=29976"
    } // url, method, data, timeout,data, etc can be passed as options 
    curl.request(options, (err, response) => {
        var dom = new JSDOM(response);
        var targetPart = dom.window.document.body.querySelectorAll("frame")[2].src;
        var options = {
            url: mainURL + targetPart
        }
        curl.request(options, (err, response) => {
            var dom = new JSDOM(response);
            var paragraps = dom.window.document.body.querySelectorAll("p");
            for (var i = 0; i < paragraps.length; i++) {
                console.log(paragraps[i].outerHTML);
            }
        });
    });
});

app.listen(PORT, IP, () => {
    console.log("Scraping with URL = http://" + IP + ":" + PORT + "/scrape");
});
