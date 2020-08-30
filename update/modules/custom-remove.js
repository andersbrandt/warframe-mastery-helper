module.exports = function (items) {

  var i = items.array.length;
  while (i--) {

    // Remove 'Prisma Machete'
    if (items.array[i]["name"] === "Prisma Machete") {
      items.array.splice(i, 1);
    }

    // Remove 'Deck 12 Scene'
    if (items.array[i]["name"] === "Deck 12 Scene") {
      items.array.splice(i, 1);
    }

    // Remove Kitgun parts
    if (items.array[i]["uniqueName"].includes("ClipPart")) {
      items.array.splice(i, 1);
    }
    if (items.array[i]["uniqueName"].includes("\/Handle\/")) {
      items.array.splice(i, 1);
    }
    if (items.array[i]["uniqueName"].includes("\/Grip\/")) {
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
    if (items.array[i]["uniqueName"].includes("Archwing/Primary") && items.array[i]["type"] == "Primary") {
      items.array.splice(i, 1);
    }

  }

  return items;

};
