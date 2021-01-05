module.exports = function (items) {

  for (var i = 0; i < items.array.length; i++) {
    var type = items.array[i]["type"];
    var category = items.array[i]["category"];
    var name = items.array[i]["name"];

    // Add " Strike" to all Zaws
    if (category == "Zaw") {
      items.array[i]["name"] = items.array[i]["name"] + " Strike";
    }

    // Rename type and category for Kubrow
    if (type === "Pets") {
      items.array[i]["type"] = "Companion";
      items.array[i]["category"] = "Kubrow";
    }

    // Rename type and category for Kavat
    if (name.includes("Kavat")) {
      items.array[i]["type"] = "Companion";
      items.array[i]["category"] = "Kavat";
    }

    // Add 'Kitgun' as type to modular secondary
    if (
      name == "Catchmoon" ||
      name == "Rattleguts" ||
      name == "Tombfinger" ||
      name == "Gaze" ||
      name == "Sporelacer" ||
      name == "Vermisplicer"
    ) {
      items.array[i]["type"] = "Secondary";
      items.array[i]["category"] = "Kitgun";
    }

    // Rename type and remove category for Amps
    if (category === "Amp") {
      items.array[i]["type"] = "Amp";
      delete items.array[i]["category"];
    }

    // Add a note to Excalibur Umbra that item are fully ranked when obtained
    if (name == "Excalibur Umbra") {
      items.array[i]["specialNote"] = "Item are fully ranked when obtained.";
    }

    // Add a note to Skiajati that item are fully ranked when obtained
    if (name == "Skiajati") {
      items.array[i]["specialNote"] = "Item are fully ranked when obtained.";
    }

    // Add a note to Ignis Wraith that item are limited
    if (name == "Ignis Wraith") {
      items.array[i]["specialNote"] = "Item are limited.";
    }

    // Add a note to Multron that is found in Fortuna
    if (name == "Multron") {
      items.array[i]["acquisition"] =
        items.array[i]["acquisition"] + " (Fortuna)";
    }

    // Change the Kuva Ayanga to a Archwing Gun
    if (name == "Kuva Ayanga") {
      items.array[i]["type"] = "Archwing Gun";
    }

    // Inaros update weapons are mislabeled
    if (name == "Karyst Prime") {
      items.array[i]["category"] = "Dagger";
    }
    if (name == "Panthera Prime") {
      items.array[i]["category"] = "Rifle";
    }

    // Dark Split-Sword are mislabeled
    if (name == "Dark Split-Sword") {
      items.array[i]["category"] = "Dual Swords";
    }

    // Cortege are mislabeled
    if (name == "Cortege") {
      items.array[i]["type"] = "Archwing Gun";
    }

    // Mausolon are mislabeled
    if (name == "Mausolon") {
      items.array[i]["type"] = "Archwing Gun";
    }

    // Label Vulpaphyla as Kavats
    if (items.array[i]["name"].includes("Vulpaphyla")) {
      items.array[i]["category"] = "Kavat";
    }

    // Label Bonewidow as Vehicle / Necramech & add maxLevelCap
    if (name == "Bonewidow") {
      items.array[i]["type"] = "Vehicle";
      items.array[i]["category"] = "Necramech";
      items.array[i]["maxLevelCap"] = 40;
    }

    // Label Voidrig as Vehicle / Necramech & add maxLevelCap, rename
    if (name == "Voidrig") {
      items.array[i]["name"] = "Voidrig Necramech";
      items.array[i]["type"] = "Vehicle";
      items.array[i]["category"] = "Necramech";
      items.array[i]["imageName"] = "voidrig-necramech.png";
      items.array[i]["maxLevelCap"] = 40;
    }

    // Label Morgha
    if (name == "Morgha") {
      items.array[i]["type"] = "Archwing Gun";
      delete items.array[i]["category"];
    }
  }
  return items;

};
