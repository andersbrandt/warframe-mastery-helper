module.exports = function (items) {

  const fs = require("fs");
  const cheerio = require("cheerio");
  const pathAlias = require('path-alias');
  const paths = require(("../update-config.js"));

  const html = fs.readFileSync(pathAlias.resolve("@temp/index.html"));
  const $ = cheerio.load(html);
  let versions = {};

  versions.pc = $(".pcVersion").text().trim();
  versions.ps4 = $(".ps4Version").text().trim();
  versions.xbox = $(".xboxVersion").text().trim();
  versions.switch = $(".switchVersion").text().trim();

  // Write the original data to disk
  fs.writeFileSync(pathAlias.resolve(paths.versions.dest), JSON.stringify(versions, null, 2));

  items.version = versions;

  return items;

};
