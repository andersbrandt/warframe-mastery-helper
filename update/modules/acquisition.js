module.exports = function (items) {

  const fs = require('fs');
  const pathAlias = require('path-alias');
  const paths = require(("../update-config.js"));

  const acquisitionData = require(pathAlias.resolve("@root/update/acquisition-data.js")).items;
  for (var i = 0; i < items.array.length; i++) {
    for (var j = 0; j < acquisitionData.length; j++) {
      if (items.array[i]["uniqueName"] == acquisitionData[j]["id"]) {
        items.array[i]["acquisition"] = acquisitionData[j]["acquisition"];
      }
    }
  }

  for (var i = 0; i < items.array.length; i++) {
    // Add acquisition-state if missing
    if (typeof items.array[i]["acquisition"] == "undefined") {
      items.array[i]["acquisition"] = "Acquisition: Unknown";
      console.log("Missing item in acquisition-data.js:");
      console.log(items.array[i]["name"]);
      console.log(items.array[i]["uniqueName"]);
      console.log("");
      var tempString = `

//  {
//    "name": "`+items.array[i]["name"]+`",
//    "acquisition": UNKNOWN,
//    "id": "`+items.array[i]["id"]+`"
//  },
      `;

      fs.appendFileSync(pathAlias.resolve("@root/update/acquisition-data.js"), tempString, 'utf8');
    }
  }

  return items;

};
