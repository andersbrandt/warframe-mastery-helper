module.exports = function (items) {
  
  var morghaData = {
    name: "Morgha",
    type: "Archwing Gun",
    uniqueName:
      "/Lotus/Weapons/Tenno/Archwing/Primary/ThanoTechGrenadeLaunch/ThanoTechGrenadeLauncher",
    description:
      "Blast through enemies with a double-barreled shot of energized slugs. This siphons their life essence which is then used to generate the secondary fire's massive air-burst mortar. The ancient Entrati weapon was built for Necramechs but also functions as an Archgun.",
    masteryReq: 15,
    productCategory: "SpaceGuns",
    trigger: "Auto Burst",
    type: "",
    imageName: "morgha.png",
    tradable: false,
    damage: "32.0",
    damageTypes: {
      impact: 32,
    },
    wikiaThumbnail:
      "https://static.wikia.nocookie.net/warframe/images/e/e1/Morgha.png/revision/latest?cb=20201120225855",
    wikiaUrl: "http://warframe.fandom.com/wiki/Morgha",
    disposition: 1,
  };

  items.array.push(morghaData);
  return items;
};
