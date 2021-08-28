module.exports = function (items) {
  
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

  var bhairaHoundData = {
    name: "Bhaira Hound",
    uniqueName: "/Lotus/Custom/BhairaHound",
    description:
      "This model devastates enemies with the Lacerten weapon and comes equiped with the 'Null Audit' precept",
    wikiaUrl: "http://warframe.fandom.com/wiki/Hound_(Companion)",
    tradable: true,
    masteryReq: 5,
    productCategory: "Sentinels",
    type: "Sentinel",
    imageName: "bhaira-hound.png",
    acquisition: "Sisters of Parvos",
    checked: false,
    unobtainable: false,
    tierData: false,
    tierRank: 0,
    component: false,
  };
  items.array.push(bhairaHoundData);

  var dormaHoundData = {
    name: "Dorma Hound",
    uniqueName: "/Lotus/Custom/DormaHound",
    description:
      "This model pierces through enemies with the Batoten weapon and comes equipped with the 'Repo Audit' precept.",
    wikiaUrl: "http://warframe.fandom.com/wiki/Hound_(Companion)",
    tradable: true,
    masteryReq: 5,
    productCategory: "Sentinels",
    type: "Sentinel",
    imageName: "dorma-hound.png",
    acquisition: "Sisters of Parvos",
    checked: false,
    unobtainable: false,
    tierData: false,
    tierRank: 0,
    component: false,
  };
  items.array.push(dormaHoundData);

  var hecHoundData = {
    name: "Hec Hound",
    uniqueName: "/Lotus/Custom/HecHound",
    description:
      "This model eviscerates enemies with the Akaten weapon and comes equipped with the 'Equilibrium Audit' precept.",
    wikiaUrl: "http://warframe.fandom.com/wiki/Hound_(Companion)",
    tradable: true,
    masteryReq: 5,
    productCategory: "Sentinels",
    type: "Sentinel",
    imageName: "hec-hound.png",
    acquisition: "Sisters of Parvos",
    checked: false,
    unobtainable: false,
    tierData: false,
    tierRank: 0,
    component: false,
  };
  items.array.push(hecHoundData);

  return items;
};
