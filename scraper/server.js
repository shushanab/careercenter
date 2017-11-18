let express = require("express"),
    fs = require("fs"),
    app = express(),
    curl = require('curlrequest'),
    jsdom = require("jsdom"),
    jsonDocumentPath = "../application/static/data.json",
    IP = process.env.HOST || "localhost",
    PORT = process.env.PORT || 8000;

const {
    JSDOM
  } = jsdom;

function beautify(html, id, company) {
    var single = {};
    single["id"] = Number(id);
    single["company"] = company;
    for (const p of html) {
        var meta = p.split(":</b>")[0],
            data = p.split(":</b>")[1];
        if (data == undefined || meta == "") meta = "N/A", data = "N/A";
        else {
        meta = meta.replace(/<\/?[^>]+(>|$)/g, "")
                  .replace("&nbsp;&nbsp;", "")
                  .replace("&amp;", "&")
                  .replace(/\\"/g , '"')
                  .replace(/(\n)|(\t)/g, '')
                  .replace("----------------------------------", "")
                  .trim()
                  .toLowerCase();
           data = data.replace(/(<\/p>)|(<br>)|(\n)|(\t)/g, "")
                  .replace("&nbsp;&nbsp;", "")
                  .replace(/\\"/g , '"')
                  .trim();
        }
        if (meta != "N/A" && data != "N/A") single[meta] = data;
    }
    return single; 
}

// SCRAPING ROUTERS //
app.get("/scrape", (req, res) => {
    let mainURL = "https://careercenter.am";
    let targetURL = "/index.php?/ccdspann.php?id=";
    // This is a hardcoded real job_ides array from careercenter.am
    var range = [30008, 30003, 29991, 29968, 29979, 29996, 29990, 29992, 29950, 29977, 29940, 29934, 29928, 29882, 29910, 29834, 29842, 30001, 29961, 29922, 29911, 29752, 29754, 29755].sort();
    for (var id of range) {
        var options = {
            url: mainURL + targetURL + id
        }; // url, method, data, timeout etc can be passed as options 
        var json = [];
        curl.request(options, (err, response) => {
            if(err) res.send("Sorry. Something goes wrong...")
            else {
                var dom = new JSDOM(response);
                var targetPart = dom.window.document.body.querySelectorAll("frame")[2].src;
                var options = {
                    url: mainURL + targetPart
                }
                curl.request(options, (err, response) => {
                    if(err) res.send("Sorry. Something goes wrong...")
                    else { 
                        dom = new JSDOM(response);
                        var company = dom.window.document.body.querySelectorAll("font b")[0].innerHTML;
                        var paragraps = dom.window.document.body.querySelectorAll("p");

                        var html = [];
                        for (const p of paragraps) html.push(p.outerHTML);
                        html = beautify(html, id, company)
                        json.push(html);
                        // jsonDocument automaticly will be saved under static dir of application
                        fs.writeFile(jsonDocumentPath, JSON.stringify(json), (err) => {
                            if(err) return console.log(err);
                        }); 
                    }
                });
            }
        });
    }
    res.send("Please wait...")
});

app.get('*', (req, res) => {
    res.send("<p>This page is not available.</p><p> Go to <a href='http://" + IP + ":" + PORT + "/scrape'>http://" + IP + ":" + PORT + "/scrape</a>")
});

app.listen(PORT, IP, () => {
    console.log("Server started at URL = http://" + IP + ":" + PORT + "/scrape");
});
