//
//  All possible acquisitons
//

// Enemy (Boss)
ALAD_V = 'Alad V (Boss)';
AMBULAS = 'Ambulas (Boss)';
DREKAR_TROOPERS = 'Drekar Troopers';
EXIMUS_ENEMIES = 'Eximus Enemies';
GRUSTRAG_THREE = 'The Grustrag Three';
HEAVY_GUNNERS = 'Heavy Gunners';
HYENA_PACK = 'Hyena Pack (Boss)';
JACKAL = 'Jackal (Boss)';
JORDAS_GOLEM = 'Jordas Golem (Boss)';
KELA_DE_THAYM = 'Kela De Thaym (Boss)';
LECH_KRILL = 'Lieutenant Lech Kril (Boss)';
LEPHANTIS = 'Lephantis (Boss)';
MANICS = 'Manics';
MUTALIST_ALAD_V = 'Mutalist Alad V (Boss)';
PHORID = 'Phorid (Boss)';
SARGAS_RUK = 'General Sargas Ruk (Boss)';
STALKER = 'Stalker';
THE_RAPTORS = 'The Raptors (Boss)';
THE_SERGEANT = 'The Sergeant (Boss)';
TYL_REGOR = 'Tyl Regor (Boss)';
VAY_HEK = 'Councilor Vay Hek (Boss)';
VOR = 'Captain Vor (Boss)';
VOR_AND_KRILL = 'Captain Vor and Lieutenant Lech Kril (Boss Duo)';
WOLF = 'Wolf of Saturn Six'
ROPALOLYST = 'Ropalolyst'
KUVA_LICH = 'Kuva Lich';

// Faction Reward
ARBITERS_OF_HEXIS = 'Arbiters of Hexis (Maxim)';
CEPHALON_SUDA = 'Cephalon Suda (Genius)';
NEW_LOKA = 'New Loka (Flawless)';
RED_VEIL = 'Red Veil (Exalted)';
STEEL_MERIDIAN = 'Steel Meridian (General)';
THE_PERRIN_SEQUENCE = 'The Perrin Sequence (Partner)';
NIGHTWAVE = 'Nightwave';

// Location
BARO_KITEER = 'Baro Ki\'Teer (Relay)';
CEPHALON_SIMARIS = 'Cephalon Simaris (Relay)';
DOJO_BIO_LAB = 'Bio Lab (Dojo)';
DOJO_CHEM_LAB = 'Chem Lab (Dojo)';
DOJO_ENERGY_LAB = 'Energy Lab (Dojo)';
DOJO_OROKIN_LAB = 'Orokin Lab (Dojo)';
DOJO_TENNO_LAB = 'Tenno Lab (Dojo)';
HOKS_ANVIL = 'Hok\'s Anvil (Cetus)';
INCUBATOR_SEGMENT = 'Incubator Segment (Orbiter)';
INCUBATOR_UPGRADE_KAVAT = 'Kavat Incubator Upgrade Segment (Orbiter)';
MARKET = 'Market (Orbiter)';
THE_QUILLS = 'The Quills (Cetus)';
RUDE_ZUUD = 'Rude Zuud (Fortuna)';
LEGS = 'Legs (Fortuna)';
VENT_KID = 'Roky (Fortuna)';
THE_BUSINESS = 'The Business (Fortuna)';
LITTLE_DUCK = 'Little Duck (Fortuna)';
ARBITRATION_HONORS = 'Arbitration Honors Vendor';

// Quests
CHAINS_OF_HARROW = 'Chains of Harrow (Quest)';
HIDDEN_MESSAGES = 'Hidden Messages (Quest)';
OCTAVIAS_ANTHEM = 'Octavia\'s Anthem (Quest)';
SANDS_OF_INAROS = 'Sands of Inaros (Quest)';
SAYAS_VIGIL = 'Saya\'s Vigil (Quest)';
THE_ARCHWING = 'The Archwing (Quest)';
THE_GLAST_GAMBIT = 'The Glast Gambit (Quest)';
THE_LIMBO_THEOREM = 'The Limbo Theorem (Quest)';
THE_NEW_STRANGE = 'The New Strange (Quest)';
THE_SACRIFICE = 'The Sacrifice (Quest)';
THE_SECOND_DREAM = 'The Second Dream (Quest)';
THE_SILVER_GROVE = 'The Silver Grove (Quest)';
THE_WAR_WITHIN = 'The War Within (Quest)';
MASK_OF_THE_LOST_ONE = 'Mask of the Lost One (Quest)';
THE_PYRYS_PROJECT = "The Pyrys Project (Quest)";
CHIMERA_PROLOGUE = "Chimera Prologue (Quest)";
VOX_SOLARIS = "Vox Solaris (Quest)";
BURIED_DEBTS = "Buried Debts (Quest)"

// Rewards
ANNIVERSARY = 'Anniversary';
CETUS_BOUNTY_GHOUL = 'Cetus Bounty (Ghoul)';
CETUS_BOUNTY_40_60 = 'Cetus Bounty (Levels 40 - 60)';
FOMORIAN_SABOTAGE = 'Fomorian Sabotage';
INVASIONS = 'Invasions';
LOGIN_REWARD = 'Login Reward';
OPERATION_PLAGUE_STAR = 'Operation Plague Star (Cetus)';
RAZORBACK_ARMADA = 'Razorback Armada';
RELICS = 'Relics';
SANCTUARY_ONSLAUGHT = 'Sanctuary Onslaught';
SPY_MISSIONS = 'Spy Missions';
HOSTILE_MERGERS = "Operation: Hostile Mergers",
DISRUPTION = "Disruption";
EMISSARY = "Emissary Derelict Assassinate";
EMPYREAN = 'Empyrean';

// Misc
SENTINEL = 'Comes with Companion';
UNOBTAINABLE = 'Unobtainable (Founders)';
CHINESE_VERSION = 'Chinese version only';
TUSK_THUMPER = 'Tusk Thumper (Plains of Eidolon)'
SYMBILYSTS = 'Symbilyst (Railjack Anomaly)';
UNKNOWN = "Acquisition: Unknown";

//
//  Add new items to the end of array
//  id are used for matching, not name
//  name are left for sanity purpose since id (developer name) can be confuzing
//  Unmatched id's will have acquisition set to UNKNOWN
//
var items = [{
    "name": "Granmu Prism",
    "acquisition": THE_QUILLS,
    "id": "/Lotus/Weapons/Sentients/OperatorAmplifiers/Set1/Barrel/SentAmpSet1BarrelPartC"
  },
  {
    "name": "Mote Prism",
    "acquisition": THE_QUILLS,
    "id": "/Lotus/Weapons/Sentients/OperatorAmplifiers/SentTrainingAmplifier/SentAmpTrainingBarrel"
  },
  {
    "name": "Rahn Prism",
    "acquisition": THE_QUILLS,
    "id": "/Lotus/Weapons/Sentients/OperatorAmplifiers/Set2/Barrel/SentAmpSet2BarrelPartA"
  },
  {
    "name": "Raplak Prism",
    "acquisition": THE_QUILLS,
    "id": "/Lotus/Weapons/Sentients/OperatorAmplifiers/Set1/Barrel/SentAmpSet1BarrelPartA"
  },
  {
    "name": "Shwaak Prism",
    "acquisition": THE_QUILLS,
    "id": "/Lotus/Weapons/Sentients/OperatorAmplifiers/Set1/Barrel/SentAmpSet1BarrelPartB"
  },
  {
    "name": "Amesha",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Powersuits/Archwing/SupportJetPack/SupportJetPack"
  },
  {
    "name": "Elytron",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Powersuits/Archwing/DemolitionJetPack/DemolitionJetPack"
  },
  {
    "name": "Itzal",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Powersuits/Archwing/StealthJetPack/StealthJetPack"
  },
  {
    "name": "Odonata",
    "acquisition": THE_ARCHWING,
    "id": "/Lotus/Powersuits/Archwing/StandardJetPack/StandardJetPack"
  },
  {
    "name": "Odonata Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Powersuits/Archwing/PrimeJetPack/PrimeJetPack"
  },
  {
    "name": "Corvas",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Archwing/Primary/LaunchGrenade/ArchCannon"
  },
  {
    "name": "Cyngas",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Archwing/Primary/ArchBurstGun/ArchBurstGun"
  },
  {
    "name": "Dual Decurion",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Archwing/Primary/ArchwingHeavyPistols/ArchHeavyPistols"
  },
  {
    "name": "Fluctus",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/Archwing/Primary/RocketArtillery/ArchRocketCrossbow"
  },
  {
    "name": "Grattler",
    "acquisition": DOJO_CHEM_LAB,
    "id": "/Lotus/Weapons/Tenno/Archwing/Primary/RepurposedGrineerAntiAircraftGun/ArchGRNAAGun"
  },
  {
    "name": "Imperator",
    "acquisition": THE_ARCHWING,
    "id": "/Lotus/Weapons/Tenno/Archwing/Primary/FoldingMachineGun/ArchMachineGun"
  },
  {
    "name": "Imperator Vandal",
    "acquisition": FOMORIAN_SABOTAGE,
    "id": "/Lotus/Weapons/Tenno/Archwing/Primary/FoldingMachineGun/ArchMachineGunVandal"
  },
  {
    "name": "Phaedra",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Archwing/Primary/ArchLongRifle/ArchLongRifle"
  },
  {
    "name": "Velocitus",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/Archwing/Primary/Railgun/ArchRailgun"
  },
  {
    "name": "Agkuza",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Archwing/Melee/ArchSwordHook/ArchHookSwordWeapon"
  },
  {
    "name": "Centaur",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Archwing/Melee/Archswordandshield/ArchSwordShield"
  },
  {
    "name": "Kaszas",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Archwing/Melee/ArchScythe/ArchScythe"
  },
  {
    "name": "Knux",
    "acquisition": DOJO_CHEM_LAB,
    "id": "/Lotus/Weapons/Tenno/Archwing/Melee/GrnArchHand/GrnArchHandWeapon"
  },
  {
    "name": "Onorix",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Archwing/Melee/Archaxe/ArchAxeWeapon"
  },
  {
    "name": "Prisma Veritux",
    "acquisition": BARO_KITEER,
    "id": "/Lotus/Weapons/Tenno/Archwing/Melee/VoidTraderArchsword/VTArchSwordWeapon"
  },
  {
    "name": "Rathbone",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Archwing/Melee/ArchHammer/ArchHammer"
  },
  {
    "name": "Veritux",
    "acquisition": THE_ARCHWING,
    "id": "/Lotus/Weapons/Tenno/Archwing/Melee/Archsword/ArchSwordWeapon"
  },
  {
    "name": "Adarza Kavat",
    "acquisition": INCUBATOR_UPGRADE_KAVAT,
    "id": "/Lotus/Types/Game/CatbrowPet/MirrorCatbrowPetPowerSuit"
  },
  {
    "name": "Smeeta Kavat",
    "acquisition": INCUBATOR_UPGRADE_KAVAT,
    "id": "/Lotus/Types/Game/CatbrowPet/CheshireCatbrowPetPowerSuit"
  },
  {
    "name": "Chesa Kubrow",
    "acquisition": INCUBATOR_SEGMENT,
    "id": "/Lotus/Types/Game/KubrowPet/RetrieverKubrowPetPowerSuit"
  },
  {
    "name": "Helminth Charger",
    "acquisition": INCUBATOR_SEGMENT,
    "id": "/Lotus/Types/Game/KubrowPet/ChargerKubrowPetPowerSuit"
  },
  {
    "name": "Huras Kubrow",
    "acquisition": INCUBATOR_SEGMENT,
    "id": "/Lotus/Types/Game/KubrowPet/FurtiveKubrowPetPowerSuit"
  },
  {
    "name": "Raksa Kubrow",
    "acquisition": INCUBATOR_SEGMENT,
    "id": "/Lotus/Types/Game/KubrowPet/GuardKubrowPetPowerSuit"
  },
  {
    "name": "Sahasa Kubrow",
    "acquisition": INCUBATOR_SEGMENT,
    "id": "/Lotus/Types/Game/KubrowPet/AdventurerKubrowPetPowerSuit"
  },
  {
    "name": "Sunika Kubrow",
    "acquisition": INCUBATOR_SEGMENT,
    "id": "/Lotus/Types/Game/KubrowPet/HunterKubrowPetPowerSuit"
  },
  {
    "name": "Carrier",
    "acquisition": MARKET,
    "id": "/Lotus/Types/Sentinels/SentinelPowersuits/CarrierPowerSuit"
  },
  {
    "name": "Carrier Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Types/Sentinels/SentinelPowersuits/PrimeCarrierPowerSuit"
  },
  {
    "name": "Dethcube",
    "acquisition": MARKET,
    "id": "/Lotus/Types/Sentinels/SentinelPowersuits/DethCubePowerSuit"
  },
  {
    "name": "Diriga",
    "acquisition": MARKET,
    "id": "/Lotus/Types/Sentinels/SentinelPowersuits/ArcDronePowerSuit"
  },
  {
    "name": "Djinn",
    "acquisition": DOJO_BIO_LAB,
    "id": "/Lotus/Types/Sentinels/SentinelPowersuits/GubberPowerSuit"
  },
  {
    "name": "Helios",
    "acquisition": DOJO_ENERGY_LAB,
    "id": "/Lotus/Types/Sentinels/SentinelPowersuits/MeleePetPowerSuit"
  },
  {
    "name": "Helios Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Types/Sentinels/SentinelPowersuits/PrimeHeliosPowerSuit"
  },
  {
    "name": "Prisma Shade",
    "acquisition": BARO_KITEER,
    "id": "/Lotus/Types/Sentinels/SentinelPowersuits/PrismaShadePowerSuit"
  },
  {
    "name": "Shade",
    "acquisition": MARKET,
    "id": "/Lotus/Types/Sentinels/SentinelPowersuits/ShadePowerSuit"
  },
  {
    "name": "Taxon",
    "acquisition": MARKET,
    "id": "/Lotus/Types/Sentinels/SentinelPowersuits/TnSentinelCrossPowerSuit"
  },
  {
    "name": "Wyrm",
    "acquisition": MARKET,
    "id": "/Lotus/Types/Sentinels/SentinelPowersuits/WyrmPowerSuit"
  },
  {
    "name": "Wyrm Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Types/Sentinels/SentinelPowersuits/PrimeWyrmPowerSuit"
  },
  {
    "name": "Artax",
    "acquisition": SENTINEL,
    "id": "/Lotus/Types/Sentinels/SentinelWeapons/Gremlin"
  },
  {
    "name": "Burst Laser",
    "acquisition": SENTINEL,
    "id": "/Lotus/Types/Sentinels/SentinelWeapons/BurstLaserPistol"
  },
  {
    "name": "Deconstructor",
    "acquisition": SENTINEL,
    "id": "/Lotus/Types/Sentinels/SentinelWeapons/SentGlaiveWeapon"
  },
  {
    "name": "Deconstructor Prime",
    "acquisition": SENTINEL,
    "id": "/Lotus/Types/Sentinels/SentinelWeapons/DeconstructorPrime/PrimeHeliosGlaiveWeapon"
  },
  {
    "name": "Deth Machine Rifle",
    "acquisition": SENTINEL,
    "id": "/Lotus/Types/Sentinels/SentinelWeapons/DethMachineRifle"
  },
  {
    "name": "Laser Rifle",
    "acquisition": SENTINEL,
    "id": "/Lotus/Types/Sentinels/SentinelWeapons/LaserRifle"
  },
  {
    "name": "Prime Laser Rifle",
    "acquisition": SENTINEL,
    "id": "/Lotus/Types/Sentinels/SentinelWeapons/PrimeLaserRifle"
  },
  {
    "name": "Prisma Burst Laser",
    "acquisition": SENTINEL,
    "id": "/Lotus/Types/Sentinels/SentinelWeapons/PrismaBurstLaserPistol"
  },
  {
    "name": "Stinger",
    "acquisition": SENTINEL,
    "id": "/Lotus/Types/Sentinels/SentinelWeapons/SentBioWeapon"
  },
  {
    "name": "Sweeper",
    "acquisition": SENTINEL,
    "id": "/Lotus/Types/Sentinels/SentinelWeapons/SentShotgun"
  },
  {
    "name": "Sweeper Prime",
    "acquisition": SENTINEL,
    "id": "/Lotus/Types/Sentinels/SentinelWeapons/PrimeSentShotgun"
  },
  {
    "name": "Vulklok",
    "acquisition": SENTINEL,
    "id": "/Lotus/Types/Sentinels/SentinelWeapons/SentElecRailgun"
  },
  {
    "name": "Ash",
    "acquisition": MANICS,
    "id": "/Lotus/Powersuits/Ninja/Ninja"
  },
  {
    "name": "Ash Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Powersuits/Ninja/AshPrime"
  },
  {
    "name": "Atlas",
    "acquisition": JORDAS_GOLEM,
    "id": "/Lotus/Powersuits/Brawler/Brawler"
  },
  {
    "name": "Banshee",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Powersuits/Banshee/Banshee"
  },
  {
    "name": "Banshee Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Powersuits/Banshee/BansheePrime"
  },
  {
    "name": "Chroma",
    "acquisition": THE_NEW_STRANGE,
    "id": "/Lotus/Powersuits/Dragon/Dragon"
  },
  {
    "name": "Ember",
    "acquisition": SARGAS_RUK,
    "id": "/Lotus/Powersuits/Ember/Ember"
  },
  {
    "name": "Ember Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Powersuits/Ember/EmberPrime"
  },
  {
    "name": "Equinox",
    "acquisition": TYL_REGOR,
    "id": "/Lotus/Powersuits/YinYang/YinYang"
  },
  {
    "name": "Excalibur",
    "acquisition": LECH_KRILL,
    "id": "/Lotus/Powersuits/Excalibur/Excalibur"
  },
  {
    "name": "Excalibur Prime",
    "acquisition": UNOBTAINABLE,
    "id": "/Lotus/Powersuits/Excalibur/ExcaliburPrime"
  },
  {
    "name": "Excalibur Umbra",
    "acquisition": THE_SACRIFICE,
    "id": "/Lotus/Powersuits/Excalibur/ExcaliburUmbra"
  },
  {
    "name": "Frost",
    "acquisition": VOR_AND_KRILL,
    "id": "/Lotus/Powersuits/Frost/Frost"
  },
  {
    "name": "Frost Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Powersuits/Frost/FrostPrime"
  },
  {
    "name": "Gara",
    "acquisition": SAYAS_VIGIL,
    "id": "/Lotus/Powersuits/Glass/Glass"
  },
  {
    "name": "Harrow",
    "acquisition": CHAINS_OF_HARROW,
    "id": "/Lotus/Powersuits/Priest/Priest"
  },
  {
    "name": "Hydroid",
    "acquisition": VAY_HEK,
    "id": "/Lotus/Powersuits/Pirate/Pirate"
  },
  {
    "name": "Hydroid Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Powersuits/Pirate/HydroidPrime"
  },
  {
    "name": "Inaros",
    "acquisition": SANDS_OF_INAROS,
    "id": "/Lotus/Powersuits/Sandman/Sandman"
  },
  {
    "name": "Ivara",
    "acquisition": SPY_MISSIONS,
    "id": "/Lotus/Powersuits/Ranger/Ranger"
  },
  {
    "name": "Khora",
    "acquisition": SANCTUARY_ONSLAUGHT,
    "id": "/Lotus/Powersuits/Khora/Khora"
  },
  {
    "name": "Limbo",
    "acquisition": THE_LIMBO_THEOREM,
    "id": "/Lotus/Powersuits/Magician/Magician"
  },
  {
    "name": "Limbo Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Powersuits/Magician/LimboPrime"
  },
  {
    "name": "Loki",
    "acquisition": HYENA_PACK,
    "id": "/Lotus/Powersuits/Loki/Loki"
  },
  {
    "name": "Loki Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Powersuits/Loki/LokiPrime"
  },
  {
    "name": "Mag",
    "acquisition": THE_SERGEANT,
    "id": "/Lotus/Powersuits/Mag/Mag"
  },
  {
    "name": "Mag Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Powersuits/Mag/MagPrime"
  },
  {
    "name": "Mesa",
    "acquisition": MUTALIST_ALAD_V,
    "id": "/Lotus/Powersuits/Cowgirl/Cowgirl"
  },
  {
    "name": "Mirage",
    "acquisition": HIDDEN_MESSAGES,
    "id": "/Lotus/Powersuits/Harlequin/Harlequin"
  },
  {
    "name": "Mirage Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Powersuits/Harlequin/MiragePrime"
  },
  {
    "name": "Nekros",
    "acquisition": LEPHANTIS,
    "id": "/Lotus/Powersuits/Necro/Necro"
  },
  {
    "name": "Nekros Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Powersuits/Necro/NekrosPrime"
  },
  {
    "name": "Nezha",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Powersuits/Nezha/Nezha"
  },
  {
    "name": "Nidus",
    "acquisition": THE_GLAST_GAMBIT,
    "id": "/Lotus/Powersuits/Infestation/Infestation"
  },
  {
    "name": "Nova",
    "acquisition": THE_RAPTORS,
    "id": "/Lotus/Powersuits/AntiMatter/Anti"
  },
  {
    "name": "Nova Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Powersuits/AntiMatter/NovaPrime"
  },
  {
    "name": "Nyx",
    "acquisition": PHORID,
    "id": "/Lotus/Powersuits/Jade/Jade"
  },
  {
    "name": "Nyx Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Powersuits/Jade/NyxPrime"
  },
  {
    "name": "Oberon",
    "acquisition": EXIMUS_ENEMIES,
    "id": "/Lotus/Powersuits/Paladin/Paladin"
  },
  {
    "name": "Oberon Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Powersuits/Paladin/PaladinPrime"
  },
  {
    "name": "Octavia",
    "acquisition": OCTAVIAS_ANTHEM,
    "id": "/Lotus/Powersuits/Bard/Bard"
  },
  {
    "name": "Revenant",
    "acquisition": MASK_OF_THE_LOST_ONE,
    "id": "/Lotus/Powersuits/Revenant/Revenant"
  },
  {
    "name": "Rhino",
    "acquisition": JACKAL,
    "id": "/Lotus/Powersuits/Rhino/Rhino"
  },
  {
    "name": "Rhino Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Powersuits/Rhino/RhinoPrime"
  },
  {
    "name": "Saryn",
    "acquisition": KELA_DE_THAYM,
    "id": "/Lotus/Powersuits/Saryn/Saryn"
  },
  {
    "name": "Saryn Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Powersuits/Saryn/SarynPrime"
  },
  {
    "name": "Titania",
    "acquisition": THE_SILVER_GROVE,
    "id": "/Lotus/Powersuits/Fairy/Fairy"
  },
  {
    "name": "Trinity",
    "acquisition": AMBULAS,
    "id": "/Lotus/Powersuits/Trinity/Trinity"
  },
  {
    "name": "Trinity Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Powersuits/Trinity/TrinityPrime"
  },
  {
    "name": "Valkyr",
    "acquisition": ALAD_V,
    "id": "/Lotus/Powersuits/Berserker/Berserker"
  },
  {
    "name": "Valkyr Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Powersuits/Berserker/ValkyrPrime"
  },
  {
    "name": "Vauban",
    "acquisition": NIGHTWAVE,
    "id": "/Lotus/Powersuits/Trapper/Trapper"
  },
  {
    "name": "Vauban Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Powersuits/Trapper/TrapperPrime"
  },
  {
    "name": "Volt",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Powersuits/Volt/Volt"
  },
  {
    "name": "Volt Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Powersuits/Volt/VoltPrime"
  },
  {
    "name": "Wukong",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Powersuits/MonkeyKing/MonkeyKing"
  },
  {
    "name": "Zephyr",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Powersuits/Tengu/Tengu"
  },
  {
    "name": "Zephyr Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Powersuits/Tengu/ZephyrPrime"
  },
  {
    "name": "Amprex",
    "acquisition": DOJO_ENERGY_LAB,
    "id": "/Lotus/Weapons/Corpus/LongGuns/ChainLightningGun/ChainLightningRifle"
  },
  {
    "name": "Arca Plasmor",
    "acquisition": DOJO_ENERGY_LAB,
    "id": "/Lotus/Weapons/Corpus/LongGuns/CrpShotgun/CrpShotgun"
  },
  {
    "name": "Argonak",
    "acquisition": DOJO_CHEM_LAB,
    "id": "/Lotus/Weapons/Grineer/LongGuns/LaserAimRifle/LaserAimRifle"
  },
  {
    "name": "Astilla",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/LongGuns/TnGlassShotgun/TnGlassShotgunGun"
  },
  {
    "name": "Attica",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/LongGuns/TnoPrmryXbow/TnoPrmryXbowWeapon"
  },
  {
    "name": "Baza",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/LongGuns/TnSMG/TnSMGWeapon"
  },
  {
    "name": "Boar",
    "acquisition": DREKAR_TROOPERS,
    "id": "/Lotus/Weapons/Tenno/Shotgun/FullAutoShotgun"
  },
  {
    "name": "Boar Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Shotgun/PrimeBoar"
  },
  {
    "name": "Boltor",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Rifle/BoltoRifle"
  },
  {
    "name": "Boltor Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/LongGuns/PrimeBoltor/PrimeBoltor"
  },
  {
    "name": "Braton",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Rifle/Rifle"
  },
  {
    "name": "Braton Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Rifle/BratonPrime"
  },
  {
    "name": "Braton Vandal",
    "acquisition": SANCTUARY_ONSLAUGHT,
    "id": "/Lotus/Weapons/Tenno/Rifle/VIPRifle"
  },
  {
    "name": "Burston",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Rifle/BurstRifle"
  },
  {
    "name": "Burston Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/LongGuns/PrimeBurston/PrimeBurston"
  },
  {
    "name": "Buzlok",
    "acquisition": DOJO_CHEM_LAB,
    "id": "/Lotus/Weapons/Grineer/LongGuns/GrnGorgSniperRifle/GrnGorgSniperRifle"
  },
  {
    "name": "Cernos",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Bows/AntlerBow/AntlerBow"
  },
  {
    "name": "Cernos Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Bows/PrimeCernos/PrimeCernos"
  },
  {
    "name": "Convectrix",
    "acquisition": DOJO_ENERGY_LAB,
    "id": "/Lotus/Weapons/Corpus/LongGuns/CrpSplitLaser/CrpSplitLaser"
  },
  {
    "name": "Corinth",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/LongGuns/TnHeavyShotgun/TnHeavyShotgunGun"
  },
  {
    "name": "Daikyu",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/Bows/AsymetricalBow/AsymetricalBow"
  },
  {
    "name": "Dera",
    "acquisition": DOJO_ENERGY_LAB,
    "id": "/Lotus/Weapons/ClanTech/Energy/EnergyRifle"
  },
  {
    "name": "Dera Vandal",
    "acquisition": INVASIONS,
    "id": "/Lotus/Weapons/ClanTech/Energy/DeraVandal"
  },
  {
    "name": "Dex Sybaris",
    "acquisition": ANNIVERSARY,
    "id": "/Lotus/Weapons/Tenno/LongGuns/DexTheThird/DexTheThird"
  },
  {
    "name": "Drakgoon",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Grineer/LongGuns/GrineerFlakCannon/FlakCannon"
  },
  {
    "name": "Dread",
    "acquisition": STALKER,
    "id": "/Lotus/Weapons/Tenno/Bows/StalkerBow"
  },
  {
    "name": "Ferrox",
    "acquisition": DOJO_ENERGY_LAB,
    "id": "/Lotus/Weapons/Corpus/LongGuns/Spears/Railgun/CorpusRailgun"
  },
  {
    "name": "Flux Rifle",
    "acquisition": DOJO_ENERGY_LAB,
    "id": "/Lotus/Weapons/ClanTech/Energy/CrpLaserRifle"
  },
  {
    "name": "Glaxion",
    "acquisition": DOJO_ENERGY_LAB,
    "id": "/Lotus/Weapons/Corpus/LongGuns/CrpFreezeRay/CrpFreezeRayRifle"
  },
  {
    "name": "Gorgon",
    "acquisition": HEAVY_GUNNERS,
    "id": "/Lotus/Weapons/Tenno/Rifle/HeavyRifle"
  },
  {
    "name": "Gorgon Wraith",
    "acquisition": RAZORBACK_ARMADA,
    "id": "/Lotus/Weapons/Grineer/LongGuns/WraithGorgon/WraithGorgon"
  },
  {
    "name": "Grakata",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Grineer/LongGuns/GrineerAssaultRifle/GrnAssaultRifle"
  },
  {
    "name": "Grinlok",
    "acquisition": DOJO_CHEM_LAB,
    "id": "/Lotus/Weapons/Grineer/LongGuns/GrineerLeverActionRifle/GLARifle"
  },
  {
    "name": "Harpak",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Grineer/LongGuns/GrnHarpoonGun/GrnHarpoonGun"
  },
  {
    "name": "Hek",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Shotgun/QuadShotgun"
  },
  {
    "name": "Hema",
    "acquisition": DOJO_BIO_LAB,
    "id": "/Lotus/Weapons/Infested/LongGuns/InfWFAccompanyingPri/InfestedBurstRifle"
  },
  {
    "name": "Hind",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Grineer/LongGuns/BurstRifle/GrnBurstRifle"
  },
  {
    "name": "Ignis",
    "acquisition": DOJO_CHEM_LAB,
    "id": "/Lotus/Weapons/ClanTech/Chemical/FlameThrower"
  },
  {
    "name": "Ignis Wraith",
    "acquisition": DOJO_CHEM_LAB,
    "id": "/Lotus/Weapons/ClanTech/Chemical/FlameThrowerWraith"
  },
  {
    "name": "Javlok",
    "acquisition": DOJO_CHEM_LAB,
    "id": "/Lotus/Weapons/Grineer/LongGuns/GrnFlameSpear/GrnFlameSpear"
  },
  {
    "name": "Karak",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Grineer/LongGuns/GrineerM16Homage/GrineerM16Rifle"
  },
  {
    "name": "Karak Wraith",
    "acquisition": INVASIONS,
    "id": "/Lotus/Weapons/Grineer/LongGuns/GrineerM16Homage/KarakWraith"
  },
  {
    "name": "Kohm",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Grineer/LongGuns/GrnSpark/GrnSparkRifle"
  },
  {
    "name": "Lanka",
    "acquisition": DOJO_ENERGY_LAB,
    "id": "/Lotus/Weapons/ClanTech/Energy/Railgun"
  },
  {
    "name": "Latron",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Rifle/SemiAutoRifle"
  },
  {
    "name": "Latron Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Rifle/LatronPrime"
  },
  {
    "name": "Latron Wraith",
    "acquisition": INVASIONS,
    "id": "/Lotus/Weapons/Tenno/LongGuns/WraithLatron/WraithLatron"
  },
  {
    "name": "Lenz",
    "acquisition": DOJO_ENERGY_LAB,
    "id": "/Lotus/Weapons/Corpus/Bow/Longbow/CrpBow"
  },
  {
    "name": "MK1-Braton",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Rifle/StartingRifle"
  },
  {
    "name": "MK1-Paris",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/MK1Series/MK1Paris"
  },
  {
    "name": "MK1-Strun",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/MK1Series/MK1Strun"
  },
  {
    "name": "Miter",
    "acquisition": VOR_AND_KRILL,
    "id": "/Lotus/Weapons/Grineer/LongGuns/GrineerSawbladeGun/SawBladeGun"
  },
  {
    "name": "Mutalist Cernos",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Infested/Bow/InfCernosBow/InfCernos"
  },
  {
    "name": "Mutalist Quanta",
    "acquisition": DOJO_BIO_LAB,
    "id": "/Lotus/Weapons/Infested/LongGuns/InfCrpShockSwarm/InfCrpShockSwarmRifle"
  },
  {
    "name": "Ogris",
    "acquisition": DOJO_CHEM_LAB,
    "id": "/Lotus/Weapons/ClanTech/Chemical/RocketLauncher"
  },
  {
    "name": "Opticor",
    "acquisition": DOJO_ENERGY_LAB,
    "id": "/Lotus/Weapons/Corpus/LongGuns/CrpBFG/CrpBFG"
  },
  {
    "name": "Panthera",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/LongGuns/Miter/TnoMiter"
  },
  {
    "name": "Paracyst",
    "acquisition": DOJO_BIO_LAB,
    "id": "/Lotus/Weapons/Infested/LongGuns/QuantaFullyInfested/InfQuantaRifle"
  },
  {
    "name": "Paris",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Bows/HuntingBow"
  },
  {
    "name": "Paris Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Bows/PrimeHuntingBow"
  },
  {
    "name": "Penta",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Corpus/LongGuns/GrenadeLauncher/GrenadeLauncher"
  },
  {
    "name": "Phage",
    "acquisition": DOJO_BIO_LAB,
    "id": "/Lotus/Weapons/Infested/LongGuns/Tentacluster/InfestedShotgun"
  },
  {
    "name": "Phantasma",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/LongGuns/RevenantShotgun/RevenantShotgun"
  },
  {
    "name": "Prisma Gorgon",
    "acquisition": BARO_KITEER,
    "id": "/Lotus/Weapons/Grineer/LongGuns/VoidTraderGorgon/VTGorgon"
  },
  {
    "name": "Prisma Grakata",
    "acquisition": BARO_KITEER,
    "id": "/Lotus/Weapons/VoidTrader/PrismaGrakata"
  },
  {
    "name": "Prisma Tetra",
    "acquisition": BARO_KITEER,
    "id": "/Lotus/Weapons/Corpus/LongGuns/CorpusUMP/PrismaCorpusUMP"
  },
  {
    "name": "Quanta",
    "acquisition": DOJO_ENERGY_LAB,
    "id": "/Lotus/Weapons/Corpus/LongGuns/CrpShockRifle/CrpShockRifle"
  },
  {
    "name": "Quanta Vandal",
    "acquisition": BARO_KITEER,
    "id": "/Lotus/Weapons/Corpus/LongGuns/CrpShockRifle/QuantaVandal"
  },
  {
    "name": "Quartakk",
    "acquisition": CETUS_BOUNTY_GHOUL,
    "id": "/Lotus/Weapons/Grineer/LongGuns/GrnFourBarrelRifle/GrnFourBarrelRifleWeapon"
  },
  {
    "name": "Rakta Cernos",
    "acquisition": RED_VEIL,
    "id": "/Lotus/Weapons/Syndicates/RedVeil/Bows/RVCernos"
  },
  {
    "name": "Rubico",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/LongGuns/FiveShotSniper/FiveShotSniper"
  },
  {
    "name": "Sancti Tigris",
    "acquisition": NEW_LOKA,
    "id": "/Lotus/Weapons/Syndicates/NewLoka/LongGuns/NLTigris"
  },
  {
    "name": "Scourge",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/LongGuns/TnPriestSpear/TnPriestSpearGun"
  },
  {
    "name": "Secura Penta",
    "acquisition": THE_PERRIN_SEQUENCE,
    "id": "/Lotus/Weapons/Syndicates/PerrinSequence/LongGuns/PSPenta"
  },
  {
    "name": "Simulor",
    "acquisition": CEPHALON_SIMARIS,
    "id": "/Lotus/Weapons/Cephalon/Primary/CephPrimary/CephPrimary"
  },
  {
    "name": "Snipetron",
    "acquisition": OPERATION_PLAGUE_STAR,
    "id": "/Lotus/Weapons/Tenno/Rifle/SniperRifle"
  },
  {
    "name": "Snipetron Vandal",
    "acquisition": INVASIONS,
    "id": "/Lotus/Weapons/Tenno/Rifle/VandalSniperRifle"
  },
  {
    "name": "Sobek",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Shotgun/DoubleBarrelShotgun"
  },
  {
    "name": "Soma",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Rifle/TennoAR"
  },
  {
    "name": "Soma Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/LongGuns/PrimeSoma/PrimeSomaRifle"
  },
  {
    "name": "Stradavar",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/LongGuns/TennoTommyGun/TennoTommyGunRifle"
  },
  {
    "name": "Strun",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Shotgun/Shotgun"
  },
  {
    "name": "Strun Wraith",
    "acquisition": INVASIONS,
    "id": "/Lotus/Weapons/Tenno/Shotgun/ShotgunVandal"
  },
  {
    "name": "Supra",
    "acquisition": DOJO_ENERGY_LAB,
    "id": "/Lotus/Weapons/ClanTech/Energy/CrpHeavyRifle"
  },
  {
    "name": "Supra Vandal",
    "acquisition": BARO_KITEER,
    "id": "/Lotus/Weapons/Corpus/LongGuns/Machinegun/SupraVandal"
  },
  {
    "name": "Sybaris",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/LongGuns/TnoLeverAction/TnoLeverActionRifle"
  },
  {
    "name": "Sybaris Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/LongGuns/PrimeSybaris/PrimeSybarisRifle"
  },
  {
    "name": "Synapse",
    "acquisition": DOJO_BIO_LAB,
    "id": "/Lotus/Weapons/Infested/LongGuns/InfestedRifle"
  },
  {
    "name": "Synoid Simulor",
    "acquisition": CEPHALON_SUDA,
    "id": "/Lotus/Weapons/Syndicates/CephalonSuda/LongGuns/CSSimulor"
  },
  {
    "name": "Telos Boltor",
    "acquisition": ARBITERS_OF_HEXIS,
    "id": "/Lotus/Weapons/Syndicates/ArbitersOfHexis/LongGuns/AHBoltor"
  },
  {
    "name": "Tenora",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/LongGuns/TnBardRifle/TnBardRifle"
  },
  {
    "name": "Tetra",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Corpus/LongGuns/CorpusUMP/CorpusUMP"
  },
  {
    "name": "Tiberon",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/LongGuns/DrakeRifle/DrakeRifle"
  },
  {
    "name": "Tiberon Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/LongGuns/PrimeTiberon/PrimeTiberonRifle"
  },
  {
    "name": "Tigris",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/LongGuns/DoubleBarrelShotgun/TennoDoubleBarrelShotgun"
  },
  {
    "name": "Tigris Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/LongGuns/PrimeTigris/PrimeTigris"
  },
  {
    "name": "Tonkor",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Grineer/LongGuns/GrnGrenadeLauncher/GrnGrenadeLauncher"
  },
  {
    "name": "Torid",
    "acquisition": DOJO_BIO_LAB,
    "id": "/Lotus/Weapons/ClanTech/Bio/BioWeapon"
  },
  {
    "name": "Vaykor Hek",
    "acquisition": STEEL_MERIDIAN,
    "id": "/Lotus/Weapons/Syndicates/SteelMeridian/LongGuns/SMHek"
  },
  {
    "name": "Vectis",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Rifle/TennoSniperRifle"
  },
  {
    "name": "Vectis Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/LongGuns/PrimeVectis/PrimeVectisRifle"
  },
  {
    "name": "Veldt",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/LongGuns/TnRevolverRifle/TnRevolverRifleGun"
  },
  {
    "name": "Vulkar",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Grineer/LongGuns/GrineerSniperRifle/GrnSniperRifle"
  },
  {
    "name": "Vulkar Wraith",
    "acquisition": BARO_KITEER,
    "id": "/Lotus/Weapons/Grineer/LongGuns/GrineerSniperRifle/VulkarWraith"
  },
  {
    "name": "Zarr",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Grineer/LongGuns/GrnCannon/GrnCannonWeapon"
  },
  {
    "name": "Zenith",
    "acquisition": LOGIN_REWARD,
    "id": "/Lotus/Weapons/Tenno/LongGuns/LoginPrimary/SundialRifle"
  },
  {
    "name": "Zhuge",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/LongGuns/RepeatingCrossbow/RepeatingCrossbow"
  },
  {
    "name": "Acrid",
    "acquisition": DOJO_BIO_LAB,
    "id": "/Lotus/Weapons/ClanTech/Bio/AcidDartPistol"
  },
  {
    "name": "Afuris",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Akimbo/AkimboAutoPistols"
  },
  {
    "name": "Akbolto",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Akimbo/AkimboBolto"
  },
  {
    "name": "Akbolto Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Pistols/PrimeAkbolto/PrimeAkBoltoWeapon"
  },
  {
    "name": "Akbronco",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Akimbo/AkimboShotGun"
  },
  {
    "name": "Akbronco Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Akimbo/PrimeAkimboShotGun"
  },
  {
    "name": "Akjagara",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Pistols/TigrisRedeemerSetPistol/TnoBladedPistols"
  },
  {
    "name": "Aklato",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Akimbo/AkimboPistol"
  },
  {
    "name": "Aklex",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Akimbo/AkLexPistols"
  },
  {
    "name": "Aklex Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Akimbo/AkLexPrimePistols"
  },
  {
    "name": "Akmagnus",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Akimbo/DualMagnus"
  },
  {
    "name": "Aksomati",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Pistols/SomaSidearm/AkimboSomaPistols"
  },
  {
    "name": "Akstiletto",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/Pistols/TennoUzi/TennoUzi"
  },
  {
    "name": "Akstiletto Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Pistols/PrimeAkstiletto/PrimeAkstiletto"
  },
  {
    "name": "Akvasto",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Akimbo/DualVastos"
  },
  {
    "name": "Akzani",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Pistols/HarlequinGun/HarlequinPistols"
  },
  {
    "name": "Angstrum",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Corpus/Pistols/CrpHandRL/CorpusHandRocketLauncher"
  },
  {
    "name": "Arca Scisco",
    "acquisition": DOJO_ENERGY_LAB,
    "id": "/Lotus/Weapons/Corpus/Pistols/SniperPistol/CrpScopeGun"
  },
  {
    "name": "Atomos",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Grineer/Pistols/HeatGun/GrnHeatGun"
  },
  {
    "name": "Azima",
    "acquisition": LOGIN_REWARD,
    "id": "/Lotus/Weapons/Tenno/Pistols/SundialGun/SundialPistol"
  },
  {
    "name": "Ballistica",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Pistols/AutomaticHandCrossbow/AutoCrossBow"
  },
  {
    "name": "Ballistica Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Pistols/PrimeBallistica/PrimeBallistica"
  },
  {
    "name": "Bolto",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Pistol/CrossBow"
  },
  {
    "name": "Brakk",
    "acquisition": GRUSTRAG_THREE,
    "id": "/Lotus/Weapons/Grineer/Pistols/GrineerHandShotgun/GrineerHandCannon"
  },
  {
    "name": "Bronco",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Pistol/HandShotGun"
  },
  {
    "name": "Bronco Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Pistol/BroncoPrime"
  },
  {
    "name": "Castanas",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/ThrowingWeapons/StickyBomb/StickyBombs"
  },
  {
    "name": "Cestra",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Corpus/Pistols/CorpusMinigun/CorpusMinigun"
  },
  {
    "name": "Cycron",
    "acquisition": DOJO_ENERGY_LAB,
    "id": "/Lotus/Weapons/Corpus/Pistols/CrpChargeGun/CrpChargeGun"
  },
  {
    "name": "Despair",
    "acquisition": STALKER,
    "id": "/Lotus/Weapons/Tenno/ThrowingWeapons/StalkerKunai"
  },
  {
    "name": "Detron",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Corpus/Pistols/CorpusHandShotgun/CorpusHandCannon"
  },
  {
    "name": "Dex Furis",
    "acquisition": ANNIVERSARY,
    "id": "/Lotus/Weapons/Tenno/Pistols/DexFuris/DexFuris"
  },
  {
    "name": "Dual Cestra",
    "acquisition": DOJO_ENERGY_LAB,
    "id": "/Lotus/Weapons/Corpus/Pistols/CorpusMinigun/DualCorpusMinigun"
  },
  {
    "name": "Dual Toxocyst",
    "acquisition": DOJO_BIO_LAB,
    "id": "/Lotus/Weapons/Infested/Pistols/InfVomitGun/InfVomitGunWep"
  },
  {
    "name": "Embolist",
    "acquisition": DOJO_BIO_LAB,
    "id": "/Lotus/Weapons/Infested/Pistols/InfestedPistol"
  },
  {
    "name": "Euphona Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Pistols/AllNew1hSG/AllNew1hSG"
  },
  {
    "name": "Furis",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Pistol/AutoPistol"
  },
  {
    "name": "Fusilai",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/ThrowingWeapons/GlassKunai/GlassKunaiWeapon"
  },
  {
    "name": "Gammacor",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Syndicates/CephalonSuda/Pistols/CSDroidArray"
  },
  {
    "name": "Hikou",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/ThrowingWeapons/TennoStars"
  },
  {
    "name": "Hikou Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/ThrowingWeapons/PrimeThrowingStar/PrimeHikou"
  },
  {
    "name": "Hystrix",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Pistols/QuillDartgun/QuillDartGunWeapon"
  },
  {
    "name": "Knell",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Pistols/TnPriestPistolScope/TnPriestPistolWeapon"
  },
  {
    "name": "Kohmak",
    "acquisition": DOJO_CHEM_LAB,
    "id": "/Lotus/Weapons/Grineer/Pistols/GrnKohmPistol/GrnKohmPistol"
  },
  {
    "name": "Kraken",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Grineer/GrineerPistol/GrnHeavyPistol"
  },
  {
    "name": "Kulstar",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Grineer/Pistols/GrnTorpedoPistol/GrnTorpedoPistol"
  },
  {
    "name": "Kunai",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/ThrowingWeapons/Kunai"
  },
  {
    "name": "Lato",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Pistol/Pistol"
  },
  {
    "name": "Lato Prime",
    "acquisition": UNOBTAINABLE,
    "id": "/Lotus/Weapons/Tenno/Pistol/LatoPrime"
  },
  {
    "name": "Lato Vandal",
    "acquisition": SANCTUARY_ONSLAUGHT,
    "id": "/Lotus/Weapons/Tenno/Pistol/LatoVandal"
  },
  {
    "name": "Lex",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Pistol/HeavyPistol"
  },
  {
    "name": "Lex Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Pistols/PrimeLex/PrimeLex"
  },
  {
    "name": "MK1-Furis",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/MK1Series/MK1Furis"
  },
  {
    "name": "MK1-Kunai",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/MK1Series/MK1Kunai"
  },
  {
    "name": "Magnus",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Pistols/Magnum/Magnum"
  },
  {
    "name": "Mara Detron",
    "acquisition": BARO_KITEER,
    "id": "/Lotus/Weapons/VoidTrader/VTDetron"
  },
  {
    "name": "Marelok",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Grineer/Pistols/GrineerLeverActionPistol/GLAPistol"
  },
  {
    "name": "Nukor",
    "acquisition": DOJO_CHEM_LAB,
    "id": "/Lotus/Weapons/Grineer/Pistols/GrineerMicrowavegun/GrnMicrowavePistol"
  },
  {
    "name": "Pandero",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Pistols/TnBardPistol/TnBardPistolGun"
  },
  {
    "name": "Pox",
    "acquisition": DOJO_BIO_LAB,
    "id": "/Lotus/Weapons/Infested/Pistols/InfProximityStars/InfProximityStars"
  },
  {
    "name": "Prisma Angstrum",
    "acquisition": BARO_KITEER,
    "id": "/Lotus/Weapons/Corpus/Pistols/CrpHandRL/PrismaAngstrum"
  },
  {
    "name": "Prisma Twin Gremlins",
    "acquisition": BARO_KITEER,
    "id": "/Lotus/Weapons/Grineer/Pistols/GrineerBulbousSMG/Prisma/PrismaTwinGremlinsWeapon"
  },
  {
    "name": "Pyrana",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/Pistols/SawnOffShotgun/TennoHandShotgun"
  },
  {
    "name": "Pyrana Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Pistols/PrimePyrana/PrimePyranaPistol"
  },
  {
    "name": "Rakta Ballistica",
    "acquisition": RED_VEIL,
    "id": "/Lotus/Weapons/Syndicates/RedVeil/Pistols/RVBallistica"
  },
  {
    "name": "Sancti Castanas",
    "acquisition": NEW_LOKA,
    "id": "/Lotus/Weapons/Syndicates/NewLoka/Pistols/NLCastanas"
  },
  {
    "name": "Secura Dual Cestra",
    "acquisition": THE_PERRIN_SEQUENCE,
    "id": "/Lotus/Weapons/Syndicates/PerrinSequence/Pistols/PSDualCestra"
  },
  {
    "name": "Seer",
    "acquisition": VOR,
    "id": "/Lotus/Weapons/Grineer/GrineerPistol/GrnScopedPistolPlayer"
  },
  {
    "name": "Sicarus",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Pistol/BurstPistol"
  },
  {
    "name": "Sicarus Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Pistols/PrimeSicarus/PrimeSicarusPistol"
  },
  {
    "name": "Sonicor",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Corpus/Pistols/CrpAirPistol/CrpAirPistolArray"
  },
  {
    "name": "Spectra",
    "acquisition": DOJO_ENERGY_LAB,
    "id": "/Lotus/Weapons/ClanTech/Energy/CrpLaserPistol"
  },
  {
    "name": "Spira",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/ThrowingWeapons/LiDagger/LiDagger"
  },
  {
    "name": "Spira Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/ThrowingWeapons/PrimeLiDagger/PrimeLiDagger"
  },
  {
    "name": "Staticor",
    "acquisition": DOJO_ENERGY_LAB,
    "id": "/Lotus/Weapons/Corpus/Pistols/CrpElectroMag/CrpElectroMag"
  },
  {
    "name": "Stubba",
    "acquisition": CETUS_BOUNTY_GHOUL,
    "id": "/Lotus/Weapons/Grineer/Pistols/GrnUzi/GrnUziWeapon"
  },
  {
    "name": "Stug",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Grineer/Pistols/GrineerCrossbow/GrineerGooGun"
  },
  {
    "name": "Synoid Gammacor",
    "acquisition": CEPHALON_SUDA,
    "id": "/Lotus/Weapons/Syndicates/CephalonSuda/Pistols/CSSynoidGammacor"
  },
  {
    "name": "Talons",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/ThrowingWeapons/U18ThrowingKnives/U18throwingknives"
  },
  {
    "name": "Telos Akbolto",
    "acquisition": ARBITERS_OF_HEXIS,
    "id": "/Lotus/Weapons/Syndicates/ArbitersOfHexis/Pistols/AHAkbolto"
  },
  {
    "name": "Twin Grakatas",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Grineer/LongGuns/GrineerAssaultRifle/TwinGrakatas"
  },
  {
    "name": "Twin Gremlins",
    "acquisition": VOR_AND_KRILL,
    "id": "/Lotus/Weapons/Grineer/GrineerPistol/GrineerAkimboPistol"
  },
  {
    "name": "Twin Kohmak",
    "acquisition": KELA_DE_THAYM,
    "id": "/Lotus/Weapons/Grineer/Pistols/GrnDWUniques/GrnTwinKohmaks"
  },
  {
    "name": "Twin Rogga",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Grineer/Pistols/GrnQueenGuardDualPistol/GrnQueenGuardDualPistols"
  },
  {
    "name": "Twin Vipers",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Akimbo/AkimboViperPistols"
  },
  {
    "name": "Twin Vipers Wraith",
    "acquisition": INVASIONS,
    "id": "/Lotus/Weapons/Grineer/Pistols/WraithTwinVipers/WraithTwinVipers"
  },
  {
    "name": "Tysis",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Infested/Pistols/InfestedDartPistol/InfestedDartPistol"
  },
  {
    "name": "Vasto",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Pistol/RevolverPistol"
  },
  {
    "name": "Vasto Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Pistols/PrimeVasto/PrimeVastoPistol"
  },
  {
    "name": "Vaykor Marelok",
    "acquisition": STEEL_MERIDIAN,
    "id": "/Lotus/Weapons/Syndicates/SteelMeridian/Pistols/SMMarelok"
  },
  {
    "name": "Viper",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Grineer/GrineerPistol/GrineerLightPistol"
  },
  {
    "name": "Viper Wraith",
    "acquisition": BARO_KITEER,
    "id": "/Lotus/Weapons/Grineer/Pistols/WraithSingleViper/WraithSingleViper"
  },
  {
    "name": "Zakti",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/Pistols/TnGuandoPistol/TnGuandoPistolGun"
  },
  {
    "name": "Ack & Brunt",
    "acquisition": DOJO_CHEM_LAB,
    "id": "/Lotus/Weapons/Grineer/Melee/GrineerTylAxeAndBoar/RegorAxeShield"
  },
  {
    "name": "Amphis",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Staff/GrnStaff"
  },
  {
    "name": "Anku",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/Melee/Scythe/ParisScythe/ParisScythe"
  },
  {
    "name": "Ankyros",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Gauntlet/Gauntlet"
  },
  {
    "name": "Ankyros Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Melee/Gauntlet/PrimeAnkyros/PrimeAnkyros"
  },
  {
    "name": "Arca Titron",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Corpus/Melee/Hammer/CorpusHammerWeapon"
  },
  {
    "name": "Atterax",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Grineer/Melee/GrineerWhip/GrineerWhip"
  },
  {
    "name": "Bo",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Staff/Staff"
  },
  {
    "name": "Bo Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Melee/Staff/PrimeBo/PrimeBoWeapon"
  },
  {
    "name": "Boltace",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Tonfa/Boltonfa/Boltonfa"
  },
  {
    "name": "Broken Scepter",
    "acquisition": THE_WAR_WITHIN,
    "id": "/Lotus/Weapons/Grineer/Melee/GrnQueenSceptre/GrnQueenSceptreWeapon"
  },
  {
    "name": "Broken War",
    "acquisition": THE_SECOND_DREAM,
    "id": "/Lotus/Weapons/Tenno/Melee/Swords/StalkerTwo/StalkerTwoSmallSword"
  },
  {
    "name": "Cassowar",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/Melee/Polearms/TnHalberdPolearm/TnHalberdPolearmWeapon"
  },
  {
    "name": "Caustacyst",
    "acquisition": DOJO_BIO_LAB,
    "id": "/Lotus/Weapons/Infested/Melee/InfEmbolistScythe/InfestedScythe"
  },
  {
    "name": "Ceramic Dagger",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Dagger/CeramicDagger"
  },
  {
    "name": "Cerata",
    "acquisition": DOJO_BIO_LAB,
    "id": "/Lotus/Weapons/Infested/Melee/Glaives/PunctureGlaive/PunctureGlaiveWeapon"
  },
  {
    "name": "Cronus",
    "acquisition": VOR,
    "id": "/Lotus/Weapons/Tenno/Melee/CronusSword/CronusLongSword"
  },
  {
    "name": "Dakra Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Melee/CronusSword/PrimeCronusLongSword"
  },
  {
    "name": "Dark Dagger",
    "acquisition": NIGHTWAVE,
    "id": "/Lotus/Weapons/Tenno/Melee/Dagger/DarkDagger"
  },
  {
    "name": "Dark Split-Sword",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/Melee/Swords/DarkSword/DarkSwordDaggerHybridWeapon"
  },
  {
    "name": "Dark Sword",
    "acquisition": NIGHTWAVE,
    "id": "/Lotus/Weapons/Tenno/Melee/Swords/DarkSword/DarkLongSword"
  },
  {
    "name": "Destreza",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Swords/TnoRapier/TnoRapier"
  },
  {
    "name": "Destreza Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Melee/Swords/PRapier/DestrezaPrime"
  },
  {
    "name": "Dex Dakra",
    "acquisition": ANNIVERSARY,
    "id": "/Lotus/Weapons/Tenno/Melee/Swords/DexTheSecond/DexTheSecond"
  },
  {
    "name": "Dragon Nikana",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Swords/KatanaAndWakizashi/LowKatana"
  },
  {
    "name": "Dual Cleavers",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Grineer/Melee/GrineerMachetteAndCleaver/DualCleaverWeapon"
  },
  {
    "name": "Dual Ether",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/DualShortSword/DualEtherSword"
  },
  {
    "name": "Dual Heat Swords",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/DualShortSword/DualHeatSwords"
  },
  {
    "name": "Dual Ichor",
    "acquisition": DOJO_BIO_LAB,
    "id": "/Lotus/Weapons/Tenno/Melee/Axe/DualInfestedAxesWeapon"
  },
  {
    "name": "Dual Kamas",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/DualKamas/DualKamas"
  },
  {
    "name": "Dual Kamas Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Melee/PrimeDualKamas/PrimeDualKamas"
  },
  {
    "name": "Dual Keres",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Swords/QuillSword/QuillDualSwords"
  },
  {
    "name": "Dual Raza",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/Melee/Soma/SomaDualKamas"
  },
  {
    "name": "Dual Skana",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/DualShortSword/DualShortSword"
  },
  {
    "name": "Dual Zoren",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Axe/DualAxeWeapon"
  },
  {
    "name": "Endura",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/Melee/Swords/ThreeLeaf/ThreeLeaf"
  },
  {
    "name": "Ether Daggers",
    "acquisition": OPERATION_PLAGUE_STAR,
    "id": "/Lotus/Weapons/Tenno/Melee/DualDagger/DualEtherDagger"
  },
  {
    "name": "Ether Reaper",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Scythe/EtherScytheWeapon"
  },
  {
    "name": "Ether Sword",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/LongSword/EtherSword"
  },
  {
    "name": "Fang",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/DualDagger/DualDagger"
  },
  {
    "name": "Fang Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Melee/DualDagger/FangPrimeDagger"
  },
  {
    "name": "Fragor",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Hammer/HammerWeapon"
  },
  {
    "name": "Fragor Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Melee/PrimeFragor/PrimeFragor"
  },
  {
    "name": "Furax",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Fist/Fist"
  },
  {
    "name": "Furax Wraith",
    "acquisition": CETUS_BOUNTY_40_60,
    "id": "/Lotus/Weapons/Tenno/Melee/Fist/FuraxWraith"
  },
  {
    "name": "Galatine",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Swords/GreatSword/TennoGreatSword"
  },
  {
    "name": "Galatine Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Melee/Swords/PrimeGalatine/PrimeGalatine"
  },
  {
    "name": "Gazal Machete",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/Melee/PersianMachete/DjinnMachete"
  },
  {
    "name": "Glaive",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Glaives/LightGlaive/LightGlaiveWeapon"
  },
  {
    "name": "Glaive Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Melee/Glaives/PrimeGlaive/PrimeGlaiveWeapon"
  },
  {
    "name": "Gram",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/GreatSword/GreatSword"
  },
  {
    "name": "Guandao",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/Melee/Polearms/TnGuandaoPolearm/TnGuandaoPolearmWeapon"
  },
  {
    "name": "Gunsen",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/Melee/Warfan/WarfanWeapon"
  },
  {
    "name": "Halikar",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Grineer/Melee/GrnBoomerang/GrnBoomerang"
  },
  {
    "name": "Hate",
    "acquisition": STALKER,
    "id": "/Lotus/Weapons/Tenno/Melee/Scythe/StalkerScytheWeapon"
  },
  {
    "name": "Heat Dagger",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Dagger/Dagger"
  },
  {
    "name": "Heat Sword",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Swords/HeatSword/HeatLongSword"
  },
  {
    "name": "Heliocor",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Cephalon/Melee/Hammer/CephHammerWeapon"
  },
  {
    "name": "Hirudo",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Infested/Melee/InfWFAccompanyingSparring/InfestedKogake"
  },
  {
    "name": "Jat Kittag",
    "acquisition": DOJO_CHEM_LAB,
    "id": "/Lotus/Weapons/Grineer/Melee/GrineerJetPoweredPolearm/GrineerJetPolearm"
  },
  {
    "name": "Jat Kusar",
    "acquisition": DOJO_CHEM_LAB,
    "id": "/Lotus/Weapons/Grineer/Melee/GrnKusarigama/GrnKusarigamaWeapon"
  },
  {
    "name": "Jaw Sword",
    "acquisition": NIGHTWAVE,
    "id": "/Lotus/Weapons/Tenno/Melee/Swords/JawSword/JawLongSword"
  },
  {
    "name": "Kama",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/DualKamas/SingleKama"
  },
  {
    "name": "Karyst",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Swords/KrisDagger/KrisDagger"
  },
  {
    "name": "Kesheg",
    "acquisition": DOJO_CHEM_LAB,
    "id": "/Lotus/Weapons/Grineer/Melee/GrineerHalberd/GrnHalberd"
  },
  {
    "name": "Kestrel",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Glaives/Boomerang/BoomerangWeapon"
  },
  {
    "name": "Kogake",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/BrassKnuckles/BrassKnuckles"
  },
  {
    "name": "Kogake Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Melee/PrimeKogake/KogakePrimeKnuckles"
  },
  {
    "name": "Krohkur",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Grineer/Melee/GrnEgyptSwd/GrnEgyptSwdWeapon"
  },
  {
    "name": "Kronen",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Tonfa/TonfaContestWinner/TennoTonfa"
  },
  {
    "name": "Kronen Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Melee/Tonfa/TonfaContestWinnerPrime/TonfaContestWinnerPrimeWeapon"
  },
  {
    "name": "Lacera",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/Melee/Swords/StalkerMios/StalkerMios"
  },
  {
    "name": "Lecta",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Corpus/Melee/Whip/CorpusWhipWeapon"
  },
  {
    "name": "Lesion",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Infested/Melee/TipedoStaff/InfTipedoStaff"
  },
  {
    "name": "MK1-Bo",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/MK1Series/MK1Bo"
  },
  {
    "name": "MK1-Furax",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/MK1Series/MK1Furax"
  },
  {
    "name": "Machete",
    "acquisition": LOGIN_REWARD,
    "id": "/Lotus/Weapons/Grineer/Melee/GrineerMachetteAndCleaver/Machete"
  },
  {
    "name": "Machete Wraith",
    "acquisition": BARO_KITEER,
    "id": "/Lotus/Weapons/Grineer/Melee/GrineerMachetteAndCleaver/WraithMacheteWeapon"
  },
  {
    "name": "Magistar",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Maces/PaladinMace/PaladinMaceWeapon"
  },
  {
    "name": "Mios",
    "acquisition": DOJO_BIO_LAB,
    "id": "/Lotus/Weapons/Infested/Melee/Swords/Mios/Mios"
  },
  {
    "name": "Mire",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Infested/Melee/Swords/Mire/MireSword"
  },
  {
    "name": "Nami Skyla",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/Melee/Swords/CutlassAndPoignard/CutlassPoignardSwords"
  },
  {
    "name": "Nami Skyla Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Melee/Swords/PrimeNamiSkyla/PrimeNamiSkyla"
  },
  {
    "name": "Nami Solo",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Swords/CutlassAndPoignard/TennoCutlass"
  },
  {
    "name": "Nikana",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/Melee/Swords/KatanaAndWakizashi/Katana"
  },
  {
    "name": "Nikana Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Melee/Swords/PrimeKatana/PrimeNikana"
  },
  {
    "name": "Ninkondi",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Nunchaku/Nunchaku/Nunchaku"
  },
  {
    "name": "Obex",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Corpus/Melee/KickAndPunch/KickPunchWeapon"
  },
  {
    "name": "Ohma",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Corpus/Melee/CrpTonfa/CrpTonfa"
  },
  {
    "name": "Okina",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/Melee/Swords/TennoSai/TennoSais"
  },
  {
    "name": "Orthos",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Polearms/PolearmWeapon"
  },
  {
    "name": "Orthos Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Melee/Polearms/PrimePolearmWeapon"
  },
  {
    "name": "Orvius",
    "acquisition": THE_WAR_WITHIN,
    "id": "/Lotus/Weapons/Tenno/Melee/Glaives/TeshinGlaive/TnTeshinGlaiveWep"
  },
  {
    "name": "Pangolin Sword",
    "acquisition": NIGHTWAVE,
    "id": "/Lotus/Weapons/Tenno/Melee/Swords/PangolinSword/PangolinLongSword"
  },
  {
    "name": "Plasma Sword",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Swords/PlasmaSword/PlasmaLongSword"
  },
  {
    "name": "Prisma Dual Cleavers",
    "acquisition": BARO_KITEER,
    "id": "/Lotus/Weapons/Grineer/Melee/GrineerMachetteAndCleaver/PrismaDualCleavers"
  },
  {
    "name": "Prisma Obex",
    "acquisition": BARO_KITEER,
    "id": "/Lotus/Weapons/Corpus/Melee/KickAndPunch/PrismaObex"
  },
  {
    "name": "Prisma Skana",
    "acquisition": BARO_KITEER,
    "id": "/Lotus/Weapons/VoidTrader/PrismaSkana"
  },
  {
    "name": "Prova",
    "acquisition": DOJO_ENERGY_LAB,
    "id": "/Lotus/Weapons/ClanTech/Energy/ElectroProd"
  },
  {
    "name": "Prova Vandal",
    "acquisition": BARO_KITEER,
    "id": "/Lotus/Weapons/ClanTech/Energy/VandalElectroProd"
  },
  {
    "name": "Rakta Dark Dagger",
    "acquisition": RED_VEIL,
    "id": "/Lotus/Weapons/Syndicates/RedVeil/Melee/RVDarkDagger"
  },
  {
    "name": "Reaper Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Melee/Scythe/ReaperWeapon"
  },
  {
    "name": "Redeemer",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Gunblade/TnoGunblade"
  },
  {
    "name": "Ripkas",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Grineer/Melee/GrineerClaws/GrnClaws"
  },
  {
    "name": "Sancti Magistar",
    "acquisition": NEW_LOKA,
    "id": "/Lotus/Weapons/Syndicates/NewLoka/Melee/NLMagistar"
  },
  {
    "name": "Sarpa",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Gunblade/GunbladeAutomatic/TnoGunbladeAutomatic"
  },
  {
    "name": "Scindo",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Axe/AxeWeapon"
  },
  {
    "name": "Scindo Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Melee/Axe/PrimeScindo/PrimeScindoWeapon"
  },
  {
    "name": "Scoliac",
    "acquisition": DOJO_BIO_LAB,
    "id": "/Lotus/Weapons/Infested/Melee/Whip/InfestedWhip/InfestedWhipWeapon"
  },
  {
    "name": "Secura Lecta",
    "acquisition": THE_PERRIN_SEQUENCE,
    "id": "/Lotus/Weapons/Syndicates/PerrinSequence/Melee/PSLecta"
  },
  {
    "name": "Serro",
    "acquisition": DOJO_ENERGY_LAB,
    "id": "/Lotus/Weapons/Corpus/Melee/Polearm/CorpusPolearm01/CorpusPolearmWeapon"
  },
  {
    "name": "Shaku",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/Melee/Nunchaku/TnoNunchaku/TnoNunchaku"
  },
  {
    "name": "Sheev",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Grineer/Melee/GrineerCombatKnife/GrineerCombatKnife"
  },
  {
    "name": "Sibear",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Hammer/IceHammer/IceHammer"
  },
  {
    "name": "Sigma & Octantis",
    "acquisition": LOGIN_REWARD,
    "id": "/Lotus/Weapons/Tenno/Melee/SwordsAndBoards/SundialSwordBoard/SundialBoardSword"
  },
  {
    "name": "Silva & Aegis",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/Melee/SwordsAndBoards/MeleeContestWinnerOne/TennoSwordShield"
  },
  {
    "name": "Silva & Aegis Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Melee/PrimeSilvaAegis/PrimeSilvaAegis"
  },
  {
    "name": "Skana",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/LongSword/LongSword"
  },
  {
    "name": "Skana Prime",
    "acquisition": UNOBTAINABLE,
    "id": "/Lotus/Weapons/Tenno/Melee/LongSword/SkanaPrime"
  },
  {
    "name": "Skiajati",
    "acquisition": THE_SACRIFICE,
    "id": "/Lotus/Weapons/Tenno/Melee/Swords/UmbraKatana/UmbraKatana"
  },
  {
    "name": "Sydon",
    "acquisition": DOJO_CHEM_LAB,
    "id": "/Lotus/Weapons/Grineer/Melee/GrnTrident/GrnTridentWeapon"
  },
  {
    "name": "Synoid Heliocor",
    "acquisition": CEPHALON_SUDA,
    "id": "/Lotus/Weapons/Syndicates/CephalonSuda/Melee/CSHeliocor"
  },
  {
    "name": "Tekko",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Gauntlet/BrawlerKnuckles/BrawlerKnuckles"
  },
  {
    "name": "Telos Boltace",
    "acquisition": ARBITERS_OF_HEXIS,
    "id": "/Lotus/Weapons/Syndicates/ArbitersOfHexis/Melee/AHBoltace"
  },
  {
    "name": "Tipedo",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Staff/MonkSpade/TnoMonkStaff"
  },
  {
    "name": "Tonbo",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/Melee/Polearms/FlowerPowerPolearm/FlowerPowerPolearmWep"
  },
  {
    "name": "Twin Basolk",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Grineer/Melee/GrnDualFireAxe/GrnDualFireAxe"
  },
  {
    "name": "Twin Krohkur",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Grineer/Melee/GrnEgyptSwd/DualGrnEgyptSwdWeapon"
  },
  {
    "name": "Vaykor Sydon",
    "acquisition": STEEL_MERIDIAN,
    "id": "/Lotus/Weapons/Syndicates/SteelMeridian/Melee/SMSydon"
  },
  {
    "name": "Venka",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/Melee/Claws/TennoClaws"
  },
  {
    "name": "Venka Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Melee/PrimeVenKa/PrimeVenkaClaws"
  },
  {
    "name": "Volnus",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Hammer/GlassHammer/GlassHammer"
  },
  {
    "name": "War",
    "acquisition": THE_SECOND_DREAM,
    "id": "/Lotus/Weapons/Tenno/Melee/Swords/StalkerTwo/StalkerTwoGreatSword"
  },
  {
    "name": "Zenistar",
    "acquisition": LOGIN_REWARD,
    "id": "/Lotus/Weapons/Tenno/Melee/SunDialAxe/SundialAxeWeapon"
  },
  {
    "name": "Balla",
    "acquisition": HOKS_ANVIL,
    "id": "/Lotus/Weapons/Ostron/Melee/ModularMelee01/Tip/TipOne"
  },
  {
    "name": "Cyath",
    "acquisition": HOKS_ANVIL,
    "id": "/Lotus/Weapons/Ostron/Melee/ModularMelee01/Tip/TipFour"
  },
  {
    "name": "Dehtat",
    "acquisition": HOKS_ANVIL,
    "id": "/Lotus/Weapons/Ostron/Melee/ModularMelee01/Tip/TipFive"
  },
  {
    "name": "Dokrahm",
    "acquisition": HOKS_ANVIL,
    "id": "/Lotus/Weapons/Ostron/Melee/ModularMelee02/Tip/TipEleven"
  },
  {
    "name": "Kronsh",
    "acquisition": HOKS_ANVIL,
    "id": "/Lotus/Weapons/Ostron/Melee/ModularMelee01/Tip/TipSix"
  },
  {
    "name": "Mewan",
    "acquisition": HOKS_ANVIL,
    "id": "/Lotus/Weapons/Ostron/Melee/ModularMelee01/Tip/TipThree"
  },
  {
    "name": "Ooltha",
    "acquisition": HOKS_ANVIL,
    "id": "/Lotus/Weapons/Ostron/Melee/ModularMelee01/Tip/TipTwo"
  },
  {
    "name": "Plague Keewar",
    "acquisition": OPERATION_PLAGUE_STAR,
    "id": "/Lotus/Weapons/Ostron/Melee/ModularMeleeInfested/Tips/InfestedTipTwo"
  },
  {
    "name": "Plague Kripath",
    "acquisition": OPERATION_PLAGUE_STAR,
    "id": "/Lotus/Weapons/Ostron/Melee/ModularMeleeInfested/Tips/InfestedTipOne"
  },
  {
    "name": "Rabvee",
    "acquisition": HOKS_ANVIL,
    "id": "/Lotus/Weapons/Ostron/Melee/ModularMelee02/Tip/TipTen"
  },
  {
    "name": "Sepfahn",
    "acquisition": HOKS_ANVIL,
    "id": "/Lotus/Weapons/Ostron/Melee/ModularMelee02/Tip/TipNine"
  },
  {
    "name": "Prisma Machete",
    "acquisition": CHINESE_VERSION,
    "id": "/Lotus/Weapons/Grineer/Melee/GrineerMachetteAndCleaver/PrismaMachete"
  },
  {
    "name": "Zylok",
    "acquisition": THE_PYRYS_PROJECT,
    "id": "/Lotus/Weapons/Tenno/Pistols/ConclaveLeverPistol/ConclaveLeverPistol"
  },
  {
    "name": "Gram Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Melee/Swords/PrimeGram/PrimeGram"
  },
  {
    "name": "Rubico Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/LongGuns/RubicoPrime/RubicoPrimeWeapon"
  },
  {
    "name": "Chroma Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Powersuits/Dragon/ChromaPrime"
  },
  {
    "name": "Falcor",
    "acquisition": DOJO_ENERGY_LAB,
    "id": "/Lotus/Weapons/Corpus/Melee/Glaive/CrpGlaive/CrpGlaive"
  },
  {
    "name": "Paracesis",
    "acquisition": CHIMERA_PROLOGUE,
    "id": "/Lotus/Weapons/Orokin/BallasSword/BallasSwordWeapon"
  },
  {
    "name": "Pupacyst",
    "acquisition": DOJO_BIO_LAB,
    "id": "/Lotus/Weapons/Infested/Melee/Staff/InfStaff/InfStaff"
  },
  // Fortuna Update
  {
    "name": "Battacor",
    "acquisition": DOJO_ENERGY_LAB,
    "id": "/Lotus/Weapons/Corpus/LongGuns/CrpSentExperimentRifle/CrpSentExperimentRifle"
  },
  {
    "name": "Cryotra",
    "acquisition": LEGS,
    "id": "/Lotus/Types/Friendly/Pets/MoaPets/MoaPetComponents/CryoxionWeapon"
  },
  {
    "name": "Garuda",
    "acquisition": VOX_SOLARIS,
    "id": "/Lotus/Powersuits/Garuda/Garuda"
  },
  {
    "name": "Kreska",
    "acquisition": DOJO_ENERGY_LAB,
    "id": "/Lotus/Weapons/Corpus/Melee/CrpVenusHatchet/CrpVenusHatchet"
  },
  {
    "name": "Multron",
    "acquisition": SENTINEL,
    "id": "/Lotus/Types/Friendly/Pets/MoaPets/MoaPetComponents/HextraWeapon"
  },
  {
    "name": "Nagantaka",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/LongGuns/GarudaCrossbow/GarudaCrossbow"
  },
  {
    "name": "Ocucor",
    "acquisition": DOJO_ENERGY_LAB,
    "id": "/Lotus/Weapons/Corpus/Pistols/CrpSentExperimentPistol/CrpSentExperimentPistol"
  },
  {
    "name": "Oxylus",
    "acquisition": THE_BUSINESS,
    "id": "/Lotus/Types/Sentinels/SentinelPowersuits/RadarPowerSuit"
  },
  {
    "name": "Tazicor",
    "acquisition": LEGS,
    "id": "/Lotus/Types/Friendly/Pets/MoaPets/MoaPetComponents/TazronWeapon"
  },
  {
    "name": "Vulcax",
    "acquisition": LEGS,
    "id": "/Lotus/Types/Friendly/Pets/MoaPets/MoaPetComponents/ThermocorMoaWeapon"
  },
  {
    "name": "Catchmoon",
    "acquisition": RUDE_ZUUD,
    "id": "/Lotus/Weapons/SolarisUnited/Secondary/SUModularSecondarySet1/Barrel/SUModularSecondaryBarrelAPart"
  },
  {
    "name": "Gaze",
    "acquisition": RUDE_ZUUD,
    "id": "/Lotus/Weapons/SolarisUnited/Secondary/SUModularSecondarySet1/Barrel/SUModularSecondaryBarrelDPart"
  },
  {
    "name": "Lambeo Moa",
    "acquisition": LEGS,
    "id": "/Lotus/Types/Friendly/Pets/MoaPets/MoaPetParts/MoaPetHeadLambeo"
  },
  {
    "name": "Oloro Moa",
    "acquisition": LEGS,
    "id": "/Lotus/Types/Friendly/Pets/MoaPets/MoaPetParts/MoaPetHeadOloro"
  },
  {
    "name": "Para Moa",
    "acquisition": LEGS,
    "id": "/Lotus/Types/Friendly/Pets/MoaPets/MoaPetParts/MoaPetHeadPara"
  },
  {
    "name": "Rattleguts",
    "acquisition": RUDE_ZUUD,
    "id": "/Lotus/Weapons/SolarisUnited/Secondary/SUModularSecondarySet1/Barrel/SUModularSecondaryBarrelCPart"
  },
  {
    "name": "Tombfinger",
    "acquisition": RUDE_ZUUD,
    "id": "/Lotus/Weapons/SolarisUnited/Secondary/SUModularSecondarySet1/Barrel/SUModularSecondaryBarrelBPart"
  },

  {
    "name": "Bad Baby",
    "acquisition": VENT_KID,
    "id": "/Lotus/Types/Vehicles/Hoverboard/HoverboardParts/PartComponents/HoverboardSolarisA/HoverboardSolarisADeck"
  },
  {
    "name": "Flatbelly",
    "acquisition": VENT_KID,
    "id": "/Lotus/Types/Vehicles/Hoverboard/HoverboardParts/PartComponents/HoverboardCorpusA/HoverboardCorpusADeck"
  },
  {
    "name": "Needlenose",
    "acquisition": VENT_KID,
    "id": "/Lotus/Types/Vehicles/Hoverboard/HoverboardParts/PartComponents/HoverboardCorpusB/HoverboardCorpusBDeck"
  },
  // Hotfix addition
  {
    "name": "Akvasto Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Pistols/PrimeVasto/AkPrimeVasto/AkPrimeVastoPistol"
  },
  // Mesa Prime
  {
    "name": "Akjagara Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Pistols/PrimeAkjagara/AkJagaraPrime"
  },
  {
    "name": "Mesa Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Powersuits/Cowgirl/MesaPrime"
  },
  {
    "name": "Redeemer Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Melee/Gunblade/RedeemerPrime/RedeemerPrimeWep"
  },
  // Second Fortuna update
  {
    "name": "Baruuk",
    "acquisition": LITTLE_DUCK,
    "id": "/Lotus/Powersuits/Pacifist/Pacifist"
  },
  {
    "name": "Cantic Prism",
    "acquisition": LITTLE_DUCK,
    "id": "/Lotus/Weapons/Corpus/OperatorAmplifiers/Set1/Barrel/CorpAmpSet1BarrelPartA"
  },
  {
    "name": "Exergis",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Corpus/LongGuns/CrpShapeBlast/CrpShapeBlastShotgun"
  },
  {
    "name": "Galvacord",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Corpus/Melee/Whips/CrpShockGrip/CrpShockGripWhipWeapon"
  },
  {
    "name": "Klamora Prism",
    "acquisition": LITTLE_DUCK,
    "id": "/Lotus/Weapons/Corpus/OperatorAmplifiers/Set1/Barrel/CorpAmpSet1BarrelPartC"
  },
  {
    "name": "Lega Prism",
    "acquisition": LITTLE_DUCK,
    "id": "/Lotus/Weapons/Corpus/OperatorAmplifiers/Set1/Barrel/CorpAmpSet1BarrelPartB"
  },
  {
    "name": "Plinx",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Corpus/Pistols/CrpSonificBlastor/CrpBlastorWeapon"
  },
  {
    "name": "Cobra & Crane",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/SwordsAndBoards/PacifistShieldAndSword/PacifistShieldSword"
  },
  // Buried Debts
  {
    "name": "Hildryn",
    "acquisition": MARKET,
    "id": "/Lotus/Powersuits/IronFrame/IronFrame"
  },
  {
    "name": "Larkspur",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/Archwing/Primary/TnShieldframeArchGun/TnShieldFrameArchGun"
  },
  {
    "name": "Opticor Vandal",
    "acquisition": BURIED_DEBTS,
    "id": "/Lotus/Weapons/Corpus/LongGuns/CrpBFG/Vandal/VandalCrpBFG"
  },
  {
    "name": "Prisma Grinlok",
    "acquisition": BARO_KITEER,
    "id": "/Lotus/Weapons/Grineer/LongGuns/GrineerLeverActionRifle/PrismaGrinlokWeapon"
  },
  {
    "name": "Runway",
    "acquisition": VENT_KID,
    "id": "/Lotus/Types/Vehicles/Hoverboard/HoverboardParts/PartComponents/HoverboardCorpusC/HoverboardCorpusCDeck"
  },
  {
    "name": "Tatsu",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/Melee/Swords/TnTwoHandedKatana/TnTwoHandedKatana"
  },
  // Equinox Prime Update
  {
    "name": "Equinox Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Powersuits/YinYang/EquinoxPrime"
  },
  {
    "name": "Stradavar Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/LongGuns/PrimeStradavar/PrimeStradavarGun"
  },
  {
    "name": "Tipedo Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Melee/Staff/TipedoPrime/TipedoPrimeWeapon"
  },
  // Planes of Eidolon refresh
  {
    "name": "Korrudo",
    "acquisition": TUSK_THUMPER,
    "id": "/Lotus/Weapons/Grineer/Melee/GrnSparring/GrnSpiderSparring/GrnSpiderSparring"
  },
  // Nightwave Season 1
  {
    "name": "Wolf Sledge",
    "acquisition": WOLF,
    "id": "/Lotus/Weapons/Tenno/Melee/Hammer/ThrowingHammer"
  },
  // The Jovian Concord
  {
    "name": "Cyanex",
    "acquisition": DOJO_ENERGY_LAB,
    "id": "/Lotus/Weapons/Corpus/Pistols/CrpSentAmalgPistol/CrpSentAmalgPistol"
  },
  {
    "name": "Fulmin",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Tenno/LongGuns/TnWispRifle/TnWispRifle"
  },
  {
    "name": "Glaxion Vandal",
    "acquisition": HOSTILE_MERGERS,
    "id": "/Lotus/Weapons/Corpus/LongGuns/CrpFreezeRay/Vandal/CrpFreezeRayVandalRifle"
  },
  {
    "name": "Komorex",
    "acquisition": DOJO_ENERGY_LAB,
    "id": "/Lotus/Weapons/Corpus/LongGuns/CrpSentAmlgSniper/CrpSentAmlgSniper"
  },
  {
    "name": "Spectra Vandal",
    "acquisition": HOSTILE_MERGERS,
    "id": "/Lotus/Weapons/Corpus/Pistols/CorpusModularPistol/Vandal/CrpLaserPistolVandal"
  },
  {
    "name": "Wisp",
    "acquisition": ROPALOLYST,
    "id": "/Lotus/Powersuits/Wisp/Wisp"
  },
  // Wukong Prime update
  {
    "name": "Ninkondi Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Melee/PrimeNinkondi/PrimeNikondi"
  },
  {
    "name": "Wukong Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Powersuits/MonkeyKing/WukongPrime"
  },
  {
    "name": "Zhuge Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/LongGuns/PrimeZhuge/PrimeZhugeCrossbow"
  },
  // Update 25.0
  {
    "name": "Quatz",
    "acquisition": MARKET,
    "id": "/Lotus/Weapons/Grineer/Pistols/GrnAmphisPistol/GrnAmphisPistol"
  },
  // Gauss
  {
    "name": "Gauss",
    "acquisition": MARKET,
    "id": "/Lotus/Powersuits/Runner/Runner"
  },
  {
    "name": "Acceltra",
    "acquisition": DISRUPTION,
    "id": "/Lotus/Weapons/Tenno/LongGuns/SapientPrimary/SapientPrimaryWeapon"
  },
  {
    "name": "Akarius",
    "acquisition": DISRUPTION,
    "id": "/Lotus/Weapons/Tenno/Pistols/SapientPistol/SapientPistol"
  },
  // Pathocyst (Hotfix 25.7.7)
  {
    "name": "Pathocyst",
    "acquisition": EMISSARY,
    "id": "/Lotus/Weapons/Infested/Melee/InfBoomerang/InfBoomerangWeapon"
  },
  // Atlas Prime
  {
    "name": "Atlas Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Powersuits/Brawler/AtlasPrime"
  },
  {
    "name": "Deth Machine Rifle Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Types/Sentinels/SentinelWeapons/PrimeDethMachineRifle"
  },
  {
    "name": "Dethcube Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Types/Sentinels/SentinelPowersuits/PrimeDethCubePowerSuit"
  },
  {
      "name": "Tekko Prime",
      "acquisition": RELICS,
      "id": "/Lotus/Weapons/Tenno/Melee/PrimeTekko/PrimeTekko"
  },
  // The Old Blood
  {
    "name": "Grendel",
    "acquisition": ARBITRATION_HONORS,
    "id": "/Lotus/Powersuits/Devourer/Devourer"
  },
  {
    "name": "Kuva Ayanga",
    "acquisition": KUVA_LICH,
    "id": "/Lotus/Weapons/Grineer/HeavyWeapons/GrnHeavyGrenadeLauncher"
  },

  {
    "name": "Kuva Brakk",
    "acquisition": KUVA_LICH,
    "id": "/Lotus/Weapons/Grineer/KuvaLich/Secondaries/Brakk/KuvaBrakk"
  },

  {
    "name": "Kuva Chakkhurr",
    "acquisition": KUVA_LICH,
    "id": "/Lotus/Weapons/Grineer/LongGuns/GrnKuvaLichRifle/GrnKuvaLichRifleWeapon"
  },

  {
    "name": "Kuva Drakgoon",
    "acquisition": KUVA_LICH,
    "id": "/Lotus/Weapons/Grineer/KuvaLich/LongGuns/Drakgoon/KuvaDrakgoon"
  },

  {
    "name": "Kuva Karak",
    "acquisition": KUVA_LICH,
    "id": "/Lotus/Weapons/Grineer/KuvaLich/LongGuns/Karak/KuvaKarak"
  },

  {
    "name": "Kuva Kohm",
    "acquisition": KUVA_LICH,
    "id": "/Lotus/Weapons/Grineer/KuvaLich/LongGuns/Kohm/KuvaKohm"
  },

  {
    "name": "Kuva Kraken",
    "acquisition": KUVA_LICH,
    "id": "/Lotus/Weapons/Grineer/KuvaLich/Secondaries/Kraken/KuvaKraken"
  },

  {
    "name": "Kuva Ogris",
    "acquisition": KUVA_LICH,
    "id": "/Lotus/Weapons/Grineer/KuvaLich/LongGuns/Ogris/KuvaOgris"
  },

  {
    "name": "Kuva Quartakk",
    "acquisition": KUVA_LICH,
    "id": "/Lotus/Weapons/Grineer/KuvaLich/LongGuns/Quartakk/KuvaQuartakk"
  },

  {
    "name": "Kuva Seer",
    "acquisition": KUVA_LICH,
    "id": "/Lotus/Weapons/Grineer/KuvaLich/Secondaries/Seer/KuvaSeer"
  },

  {
    "name": "Kuva Shildeg",
    "acquisition": KUVA_LICH,
    "id": "/Lotus/Weapons/Grineer/Melee/GrnKuvaLichScythe/GrnKuvaLichScytheWeapon"
  },

  {
    "name": "Kuva Tonkor",
    "acquisition": KUVA_LICH,
    "id": "/Lotus/Weapons/Grineer/KuvaLich/LongGuns/Tonkor/KuvaTonkor"
  },
  {
    "name": "Vasca Kavat",
    "acquisition": INCUBATOR_UPGRADE_KAVAT,
    "id": "/Lotus/Types/Game/CatbrowPet/VampireCatbrowPetPowerSuit"
  },
  {
    "name": "Kuva Twin Stubbas",
    "acquisition": KUVA_LICH,
    "id": "/Lotus/Weapons/Grineer/KuvaLich/Secondaries/Stubba/KuvaStubba"
  },
  {
    "name": "Masseter",
    "acquisition": DOJO_TENNO_LAB,
    "id": "/Lotus/Weapons/Tenno/Melee/Swords/TnChiselKanabo/TnChiselKanabo"
  },
  // Update 27
  {
    "name": "Pennant",
    "acquisition": EMPYREAN,
    "id": "/Lotus/Weapons/Tenno/Melee/Swords/TnRailjackGreatKatana/TnRailJackGreatKatanaWeapon"
  },
  {
    "name": "Quellor",
    "acquisition": EMPYREAN,
    "id": "/Lotus/Weapons/Tenno/LongGuns/TnRailjackRifle/RailjackRifleGun"
  },
  {
    "name": "Shedu",
    "acquisition": SYMBILYSTS,
    "id": "/Lotus/Weapons/Sentients/Shedu/SheduHeavyWeapon"
  },
  //  Ivara Prime update
  {
    "name": "Ivara Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Powersuits/Ranger/IvaraPrime"
  },
  {
    "name": "Aksomati Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/Pistols/PrimeAksomati/PrimeAksomati"
  },
  {
    "name": "Baza Prime",
    "acquisition": RELICS,
    "id": "/Lotus/Weapons/Tenno/LongGuns/PrimeBaza/PrimeBazaGun"
  },
  // Kuva Lich update
  {
    "name": "Kuva Bramma",
    "acquisition": KUVA_LICH,
    "id": "/Lotus/Weapons/Grineer/Bows/GrnBow/GrnBowWeapon"
  },
  {
    "name": "Kuva Hind",
    "acquisition": KUVA_LICH,
    "id": "/Lotus/Weapons/Grineer/KuvaLich/LongGuns/Hind/KuvaHind"
  },
  {
    "name": "Kuva Nukor",
    "acquisition": KUVA_LICH,
    "id": "/Lotus/Weapons/Grineer/KuvaLich/Secondaries/Nukor/KuvaNukor"
  },

];

module.exports = {
  items: items
};
