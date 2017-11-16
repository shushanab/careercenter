var express = require("express"),
    fs      = require("fs"),
    request = require("request"),
    cheerio = require("cheerio"),
    app     = express(),
    PORT = 8000,
    IP = "localhost";

// var ip = "212.42.202.130";
// var http = require("http");
// var phantom = require("phantom");
app.set("view engine", "ejs");

// ROUTERS //
app.get("/scrape", function(req, res){
    // TODO: Provide an input box for URL 
    // The URL we will scrape from
    // var url = "https://careercenter.am/index.php?/ccdspann.php?id={'\d'}";
    var url = "https://careercenter.am/index.php?/ccdspann.php?id=29976";

    // The structure of request call
    // The first parameter is URL
    // The callback function takes 3 parameters, an error, response status code and the html

    request(url, function(error, response, html){
        if(error) { 
            console.log("ERROR", error);
        } else {
            // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
            var $ = cheerio.load(html);
            var a = $("frame").attr("src");
            console.log("frame ==", html, a);
            // Defineing the variables of scrapping: job metadata
        }
    });

});

app.listen(PORT, IP, function(){
    console.log("Scrapping from URL = http://"+IP+":"+PORT+"/scrape");
});

exports = module.exports = app;

