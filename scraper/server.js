var express = require("express"),
    fs = require("fs"),
    app = express(),
    phantom = require("phantom"),
    IP = "localhost",
    PORT = 8000;

// Exit Phantom  //
function quit(reason, value) {
    console.log("QUIT: " + reason);
    phantom.exit(value);
}

// ROUTERS //
app.get('/scrape', function(req, res) {
    var phantom = require("phantom");
    var _ph, _page;
    phantom.create().then(function(ph) {
        _ph = ph;
        return _ph.createPage();
    }).then(function(page) {
        _page = page;
        var url = "https://careercenter.am/index.php?/ccdspann.php?id=29976";
        return _page.open(url);
    }).then(function(status) {
        var value = '';
        if (status === 'success') {
            value = _page.evaluate(function() {
                return document;
            });
            console.log("SUCCESS", value);
        }
        return value;
    }).then(function(value) {
        res.json({
            data: value
        });
        _page.close();
        _ph.exit();
    }).catch(function(e) {
        res.json({
            data: 'Sorry, something goes wrong:(',
            error: e
        });
    });
});

app.listen(PORT, IP, function() {
    console.log("Scrapping from URL = http://" + IP + ":" + PORT + "/scrape");
});

exports = module.exports = app;
