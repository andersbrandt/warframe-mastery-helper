module.exports = function (items) {

  var i = items.array.length;
  while (i--) {
    // Remove 'Deck 12 Scene'
    if (items.array[i]["name"] === "Deck 12 Scene") {
      items.array.splice(i, 1);
    }

    // Remove Kitgun parts
    if (items.array[i]["uniqueName"].includes("ClipPart")) {
      items.array.splice(i, 1);
    }
    if (items.array[i]["uniqueName"].includes("/Handle/")) {
      items.array.splice(i, 1);
    }
    if (items.array[i]["uniqueName"].includes("/Grip/")) {
      items.array.splice(i, 1);
    }

    // Remove Amp parts
    if (items.array[i]["name"].includes("Scaffold")) {
      items.array.splice(i, 1);
    }

    // Remove Zaw parts
    if (items.array[i]["uniqueName"].includes("Balance")) {
      items.array.splice(i, 1);
    }

    // Remove PvP variants of Zaws
    if (items.array[i]["uniqueName"].includes("PvPVariant")) {
      items.array.splice(i, 1);
    }

    // Remove Archguns duplicated as primary weapon
    if (
      items.array[i]["uniqueName"].includes("Archwing/Primary") &&
      items.array[i]["type"] == "Primary"
    ) {
      items.array.splice(i, 1);
    }

    // Remove Founders Items
    if (items.array[i]["name"] === "Excalibur Prime") {
      items.array.splice(i, 1);
    }
    if (items.array[i]["name"] === "Lato Prime") {
      items.array.splice(i, 1);
    }
    if (items.array[i]["name"] === "Skana Prime") {
      items.array.splice(i, 1);
    }

    // Mausolon are added 3 times, remove all and add in custom-add.js
    if (items.array[i]["name"] === "Mausolon") {
      items.array.splice(i, 1);
    }

    // Kuva Grattler are added 2 times, remove and add in custom-add.js
    if (items.array[i]["name"] === "Kuva Grattler") {
      items.array.splice(i, 1);
    }

    // Remove Prime sentinel weapons that are unreleased
    if (items.array[i]["name"] === "Burst Laser Prime") {
      items.array.splice(i, 1);
    }
    if (items.array[i]["name"] === "Stinger Prime") {
      items.array.splice(i, 1);
    }
    if (items.array[i]["name"] === "Vulklok Prime") {
      items.array.splice(i, 1);
    }

  }

  return items;

};
