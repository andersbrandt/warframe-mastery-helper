module.exports = function (items) {

  for (var i = 0; i < items.array.length; i++) {

    // Remove 'Prisma Machete'
    if (items.array[i]["name"] === "Prisma Machete") {
      items.array.splice(i, 1);
    }

    // Remove 'Deck 12 Scene'
    if (items.array[i]["name"] === "Deck 12 Scene") {
      items.array.splice(i, 1);
    }

  }
  return items;

};
