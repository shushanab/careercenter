# Scraper

Simple web scraper to get a data from careercenter.am and save to json document.
The basic flow will be as follows:

- Launch web server
- Visit a URL that activates the web scraper: http://localhost/scrape
- The scraper will make a request to the careercenter.am website
- The request will capture the HTML of website and pass it along to server
- Traverse the DOM and extract the information we want
- Format the extracted data into a JSON
- Save to document

