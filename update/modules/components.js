module.exports = function (items) {

  const fs = require("fs");
  const cheerio = require("cheerio");
  const pathAlias = require('path-alias');
  const paths = require(("../update-config.js"));
  const {utils} = require("../../src/js/utils");

  //
  // Grab the data for "Weapons used as components" and add bool attribute "component"
  //
  const html = fs.readFileSync(pathAlias.resolve("@temp/Weapons_Required_as_Crafting_Ingredients.html"));
  const $ = cheerio.load(html);
  var componentItems = [];
  var componentItemsUnique = [];
  $(".wikitable tr").each(function () {
    $(this).find("td").first().find("a").each(function () {
      componentItems.push($(this).text().trim()); //put elements into array
    });
  });
  // Sort and remove duplicates
  componentItems.sort();
  componentItemsUnique = componentItems.filter(function (item, pos) {
    return componentItems.indexOf(item) == pos;
  });
  // Write the original data to disk
  require('fs').writeFileSync(pathAlias.resolve(paths.warframeComponentData.dest), JSON.stringify(componentItemsUnique, null, 2));

  for (var i = 0; i < items.array.length; i++) {
    if (utils.isInArray(componentItemsUnique, items.array[i].name)) {
      items.array[i].component = true;
    } else {
      items.array[i].component = false;
    }
  }

  return items;

};
