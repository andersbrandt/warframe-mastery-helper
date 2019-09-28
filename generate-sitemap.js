var moment = require("moment");
var fs = require("fs");

function generateSitemap() {
    var timeStamp = moment().format("YYYY-MM-DDTHH:mm:ssZ");
    var string = "";
    string += '<?xml version="1.0" encoding="UTF-8"?>\n';
    string += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n';
    string += '<url>\n';
    string += '  <loc>https://warframe-mastery.com/</loc>\n';
    string += '  <lastmod>' + timeStamp + '</lastmod>\n';
    string += '</url>\n';
    string += '<url>\n';
    string += '  <loc>https://warframe-mastery.com/index.php</loc>\n';
    string += '  <lastmod>' + timeStamp + '</lastmod>\n';
    string += '</url>\n';
    string += '</urlset>\n';
    return string;
}

var siteMap = generateSitemap();
fs.writeFileSync("public/sitemap.xml", siteMap);
