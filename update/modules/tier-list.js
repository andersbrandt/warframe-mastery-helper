module.exports = function (items) {

  const util = require('util');
  const fs = require('fs');
  const pathAlias = require('path-alias');
  const paths = require(("../update-config.js"));

  function getTierRank(tier) {
    if (tier == "Top") {
      return 3;
    } else if (tier == "Contender") {
      return 2;
    } else if (tier == "Viable") {
      return 1;
    } else {
      return 0;
    }
  }

  //const tierData = JSON.parse(fs.readFileSync(pathAlias.resolve("@static/theList.json")));
  const tierData = JSON.parse(fs.readFileSync(pathAlias.resolve("@temp/theList.json")));

  // Save version-string
  items.version.tier = tierData.version;

  // Remove unwanted objects
  delete tierData.alerts;
  delete tierData.version;
  delete tierData.Schools;
  delete tierData.Tiers;
  delete tierData.Frames;

  // Map data
  for (var group in tierData) {
    for (var item in tierData[group]) {
      for (var i = 0; i < items.array.length; i++) {
        if (items.array[i].name == tierData[group][item]["name"]) {
          items.array[i].tierData = true;
          items.array[i].tier = tierData[group][item]["tier"];
          items.array[i].notes = tierData[group][item]["notes"];
          items.array[i].dmg = tierData[group][item]["dmg"];
          items.array[i].tierRank = getTierRank(tierData[group][item]["tier"]);
          if (typeof tierData[group][item]["wepnotes"] != "undefined") {
            items.array[i].weaponNotes = tierData[group][item]["wepnotes"]
          }
          if (typeof tierData[group][item]["firing"] != "undefined") {
            items.array[i].firing = tierData[group][item]["firing"]
          }
          if (typeof tierData[group][item]["stance"] != "undefined") {
            items.array[i].stance = tierData[group][item]["stance"]
          }
          if (typeof tierData[group][item]["stancenotes"] != "undefined") {
            items.array[i].stanceNotes = tierData[group][item]["stancenotes"]
          }
          if (typeof tierData[group][item]["dmgLink"] != "undefined") {
            items.array[i].buildLink = tierData[group][item]["dmgLink"]
            let buildLinkDomain = tierData[group][item]["dmgLink"].match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
            items.array[i].buildLinkDomain = buildLinkDomain[1];
          }
          if (typeof tierData[group][item]["combo"] != "undefined") {
            items.array[i].combo = tierData[group][item]["combo"]
          }
          if (typeof tierData[group][item]["use"] != "undefined") {
            items.array[i].use = tierData[group][item]["use"]
          }
          if (typeof tierData[group][item]["abilities"] != "undefined") {
            items.array[i].abilities = tierData[group][item]["abilities"]
          }
        }
      }
    }
  }

  // Find the no match, add data
  for (var i = 0; i < items.array.length; i++) {
    if (typeof items.array[i].tier == "undefined") {
      //console.log(items.array[i].name);
      items.array[i].tierData = false;
      items.array[i].tierRank = 0;
    }
  }

  return items;

};
