const express          = require("express"),
      fs               = require("fs"),
      app              = express(),
      curl             = require('curlrequest'),
      jsdom            = require("jsdom"),
      jsonDocumentPath = "../application/src/assets/static/data.json",
      mainURL          = "https://careercenter.am",
      targetURL        = "/index.php?/ccdspann.php?id=",
      IP               = process.env.HOST || "localhost",
      PORT             = process.env.PORT || 8000,
      { JSDOM }        = jsdom,
      START            = 29970,
      COUNT            = 45;

const range = (start, count) => {
  return Array.apply(0, Array(count)).map((el, index) => (index + start));
}

const beautify = (html, id, company) => {
    var single = { 
      "id" : Number(id), 
      "company": company 
    } 
    for (const p of html) {
        var [meta, data] = p.split(":</b>");
        if (data == undefined || meta == "") meta = "N/A", data = "N/A";
        else {
            meta = meta.replace(/<\/?[^>]+(>|$)/g, "")
                  .replace("&nbsp;&nbsp;", "")
                  .replace("&amp;", "&")
                  .replace(/\\"/g , '"')
                  .replace(/(\n)|(\t)/g, '')
                  .replace(/(\s)|(\/\s)/, '_')
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
    for (var id  of range(START, COUNT)) {
        var options = {
            url: mainURL + targetURL + id
        }; // url, method, data, timeout etc can be passed as options 
        var json = [];
        curl.request(options, (err, response) => {
            if(err) console.log("Sorry. Something goes wrong...")
            else {
                var dom = new JSDOM(response);
                var targetPart = dom.window.document.body.querySelectorAll("frame")[2].src;
                var options = {
                    url: mainURL + targetPart
                }
                curl.request(options, (err, response) => {
                    if(err) console.log("Sorry. Something goes wrong...")
                    else { 
                       dom = new JSDOM(response);
                       if (dom.window.document.body.querySelector("h1") != undefined) id++
                        else {
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
                    }
                    id++;
                });
            }
        });
    }
    res.send(`Please wait...<p>Generated json document will be stored at the following path: ${jsonDocumentPath}</p>`);
});

app.get('*', (req, res) => {
    res.send("<p>This page is not available.</p><p> Go to <a href='http://" + IP + ":" + PORT + "/scrape'>http://" + IP + ":" + PORT + "/scrape</a>")
});

app.listen(PORT, IP, () => {
    console.log(`Server started at URL http://${IP}:${PORT}/scrape`);
});
