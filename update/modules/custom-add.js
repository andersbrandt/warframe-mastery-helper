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

  var mausolonData = {
    acquisition: "Comes with Necramech",
    category: "",
    component: false,
    description: "An ancient weapon designed by the Entrati for use by their Necramechs. Primary fire siphons life essence from the target to fuel a devastating secondary fire. Punishing automatic primary fire and a secondary mode that charges up to unleash a destructive beam of energy with a large explosion at point of impact.",
    imageName: "mausolon.png",
    masteryReq: 14,
    name: "Mausolon",
    productCategory: "SpaceGuns",
    projectile: "Hitscan",
    tierData: false,
    tierRank: 0,
    tradable: false,
    trigger: "Auto",
    type: "Archwing Gun",
    uniqueName: "/Lotus/Weapons/Tenno/Archwing/Primary/ThanoTechArchLongGun/ThanoTechLongGun",
    unobtainable: false,
    wikiaUrl: "http://warframe.fandom.com/wiki/Mausolon"   
  }
  items.array.push(mausolonData);

  var plexusData = {
    acquisition: "Comes with Railjack",
    category: "Railjack",
    component: false,
    description: "The Plexus allows you to use your Railjack mod selection with any Railjack you crew upon.",
    imageName: "railjack.png",
    masteryReq: 3,
    name: "Plexus",
    tierData: false,
    tierRank: 0,
    tradable: false,
    trigger: "Auto",
    type: "Vehicle",
    uniqueName: "/Lotus/Tenno/Plexus",
    unobtainable: false,
    wikiaUrl: "http://warframe.fandom.com/wiki/Plexus",
  };
  items.array.push(plexusData);

  var kuvaGrattlerData = {
      "name": "Kuva Grattler",
      "uniqueName": "/Lotus/Weapons/Grineer/KuvaLich/HeavyWeapons/Grattler/KuvaGrattler",
      "description": "Reconfigured for maximum lethality, the Kuva Grattler still shatters targets with explosive shells, but now reaches maximum fire-rate instantaneously.",
      "masteryReq": 15,
      "productCategory": "SpaceGuns",
      "maxLevelCap": 40,
      "trigger": "Auto",
      "type": "Archwing Gun",
      "imageName": "kuva-grattler.png",
      "category": "Arch-Gun",
      "tradable": false,
      "wikiaUrl": "http://warframe.fandom.com/wiki/Kuva_Grattler",
      "acquisition": "Kuva Lich",
      "checked": false,
      "unobtainable": false,
      "tierData": false,
      "tierRank": 0,
      "component": false
  };
  items.array.push(kuvaGrattlerData);


  return items;
};
