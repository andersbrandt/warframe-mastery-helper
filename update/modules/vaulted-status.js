module.exports = function (items) {

  const fs = require("fs");
  const cheerio = require("cheerio");
  const pathAlias = require('path-alias');
  const paths = require("../update-config.js");
  const {utils} = require("../../src/js/utils");

  const html = fs.readFileSync(pathAlias.resolve("@temp/Prime_Vault.html"));
  const $ = cheerio.load(html);
  var vaultedItems = [];
  $(".article-table.sortable tr").each(function () {
    $(this).find("td").first().find("a").eq(1).each(function () {
      vaultedItems.push($(this).text().trim());
    });
  });
  vaultedItems.sort();

  // Write the original data to disk
  fs.writeFileSync(pathAlias.resolve(paths.wikiaVaultedStatus.dest), JSON.stringify(vaultedItems, null, 2));

  for (var i = 0; i < items.array.length; i++) {
    if (utils.isInArray(vaultedItems, items.array[i].name)) {
      items.array[i].vaulted = true;
      items.array[i].acquisition = items.array[i].acquisition + " (Vaulted)";
    } else {
      items.array[i].vaulted = false;
    }
  }

  return items;

};
