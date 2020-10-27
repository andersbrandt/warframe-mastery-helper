const fs = require('fs');
const pathAlias = require('path-alias');
const fetch = require('node-fetch');
const rimraf = require('rimraf');
const colors = require('ansi-colors');

const paths = require("./update-config.js"); 

class Updater {

  constructor() {
    this.items = {
      array: []
    };
    this.fileListUrls = []; // Set with setFileListUrls in constructor
    this.tempFolder = "update/temp/";
  }

  async run() {
    try {

      await
      this.cleanup();

      await
      this.setFileListUrls();

      await
      this.fetchHtmlFile([
        paths.updateData.weaponComponents
      ]);

      await
      this.fetchJsonFile(
        this.fileListUrls
      );

      await
      this.fetchJsonFile(
        [paths.updateData.tierRanking]
      );

      await
      this.populateItems(
        paths.source.files
      );

      await
      this.customRemove();

      await
      this.sort();

      await
      this.acquisition();

      await
      this.setDefaults();

      await
      this.tierList();

      await
      this.components();

      await
      this.customData();

      await
      this.wikiaUrl();

      await
      this.writeItemList()

    } catch (e) {
      console.error(e);
    }

  }

  async clog(string) {
    console.log(colors.cyan('[ \u2714 ]'), colors.cyan(string));
  }

  async cleanup() {
    await
    this.clog("Cleaning up");
    rimraf.sync(this.tempFolder);
    if (!fs.existsSync(this.tempFolder)) {
      fs.mkdirSync(this.tempFolder);
    }
  }

  async setFileListUrls() {
    const files = [];
    await paths.source.files.forEach(file => {
      files.push(`${paths.source.path}${file}`);
    });
    this.fileListUrls = files;
  }

  async fetchJsonFile(url) {
    await
    asyncForEach(url, async (url) => {
      let request = null;
      let json = null;
      let filename = url.split('/')[url.split('/').length - 1].split('.')[0];
      request = await fetch(url);
      json = await request.text();
      json = json.replace(/(?:\\[rn]|[\r\n]+)+/g, '');
      this.clog(`Writing ${url}`);
      try {
        fs.writeFileSync(`${this.tempFolder}${filename}.json`, stringify(JSON.parse(json)));
      } catch (e) {
        throw e;
      }
    });
  }

  async fetchHtmlFile(url) {
    await
    asyncForEach(url, async (url) => {
      let request = null;
      let text = null;
      let filename = url.split('/')[url.split('/').length - 1].split('.')[0];
      request = await fetch(url);
      text = await request.text();
      this.clog(`Writing ${url}`);
      try {
        fs.writeFileSync(`${this.tempFolder}${filename}.html`, text);
      } catch (e) {
        throw e;
      }
    });
  }

  async populateItems(path) {
    await
    asyncForEach(path, async (path) => {
      let fileContent = null;
      this.clog(`Adding ${path}`)
      try {
        fileContent = await fs.readFileSync(`${this.tempFolder}${path}`, 'utf8');
        const json = JSON.parse(fileContent);
        for (let i = 0; i < json.length; i += 1) {
          delete json[i]["components"];
          delete json[i]["abilities"];
          delete json[i]["areaAttack"];
          delete json[i]["damagePerShot"];
          delete json[i]["damagePerSecond"];
          delete json[i]["secondsPerShot"];
          delete json[i]["damageTypes"];
          delete json[i]["channelingDrain"];
          delete json[i]["channelingDamageMultiplier"];
          delete json[i]["criticalMultiplier"];
          delete json[i]["criticalChance"];
          delete json[i]["buildPrice"];
          delete json[i]["buildTime"];
          delete json[i]["skipBuildTimePrice"];
          delete json[i]["buildQuantity"];
          delete json[i]["consumeOnBuild"];
          delete json[i]["procChance"];
          delete json[i]["fireRate"];
          delete json[i]["chargeAttack"];
          delete json[i]["spinAttack"];
          delete json[i]["leapAttack"];
          delete json[i]["polarities"];
          delete json[i]["stancePolarity"];
          delete json[i]["ammo"];
          delete json[i]["magazineSize"];
          delete json[i]["reloadTime"];
          delete json[i]["health"];
          delete json[i]["shield"];
          delete json[i]["armor"];
          delete json[i]["stamina"];
          delete json[i]["power"];
          delete json[i]["tags"];
          delete json[i]["marketCost"];
          delete json[i]["patchlogs"];
          delete json[i]["disposition"];
          delete json[i]["slot"];
          delete json[i]["totalDamage"];
          delete json[i]["omegaAttenuation"];
          delete json[i]["wallAttack"];
          delete json[i]["accuracy"];
          delete json[i]["sentinel"];
          delete json[i]["channeling"];
          delete json[i]["noise"];
          delete json[i]["damage"];
          delete json[i]["sprintSpeed"];
          delete json[i]["passiveDescription"];
          delete json[i]["aura"];
          delete json[i]["conclave"];
          delete json[i]["color"];
          delete json[i]["sex"];
          delete json[i]["sprint"];
          delete json[i]["introduced"];
          delete json[i]["flight"];
          delete json[i]["statusChance"];
          delete json[i]["secondary"];
          delete json[i]["vaultDate"];
          delete json[i]["estimatedVaultDate"];
          delete json[i]["itemCount"];
          delete json[i]["parents"];
          delete json[i]["wikiaThumbnail"];
          delete json[i]["secondaryArea"];
          delete json[i]["blockingAngle"];
          delete json[i]["comboDuration"];
          delete json[i]["followThrough"];
          delete json[i]["slamAttack"];
          delete json[i]["range"];
          delete json[i]["slamRadialDamage"];
          delete json[i]["slamRadius"];
          delete json[i]["slideAttack"];
          delete json[i]["heavyAttackDamage"];
          delete json[i]["heavySlamAttack"];
          delete json[i]["heavySlamRadialDamage"];
          delete json[i]["heavySlamRadius"];
          delete json[i]["windUp"];
          delete json[i]["multishot"];
          delete json[i]["drops"];
          let newType = json[i]["category"];
          json[i]["category"] = json[i]["type"];
          json[i]["type"] = newType;
          if (path === "Arch-Gun.json") {
            if (json[i]["uniqueName"].includes('Primary')) {
              json[i]["type"] = "Archwing Gun";
              delete json[i]["category"];
            }
          }
          if (path === "Arch-Melee.json") {
            if (json[i]["uniqueName"].includes('Melee')) {
              json[i]["type"] = "Archwing Melee";
              delete json[i]["category"];
            }
          }
          if (path === "Archwing.json") {
            if (json[i]["uniqueName"].includes('Powersuits')) {
              json[i]["type"] = "Vehicle";
              json[i]["category"] = "Archwing";
            }
          }
          if (path === "Misc.json") {
            if (json[i]["uniqueName"].includes('Tip')) {
              json[i]["type"] = "Melee";
              json[i]["category"] = "Zaw";
              const wikiSlug = json[i]["name"].replace(/ /g, '_').replace(/'/g, '%27');
              json[i]["wikiaUrl"] = `http://warframe.wikia.com/wiki/${wikiSlug}`;
            }
            if (json[i]["uniqueName"].includes('Deck')) {
              json[i]["type"] = "Vehicle";
              json[i]["category"] = "K-Drive";
            }
            if (
              !json[i]["uniqueName"].includes('Barrel') &&
              !json[i]["uniqueName"].includes('Deck') &&
              !json[i]["uniqueName"].includes('Tip')
            ) {
              delete json[i];
            }
          }
          if (path === "Pets.json") {
            if (json[i]["uniqueName"].includes('MoaPetHead')) {
              json[i]["type"] = "Sentinel";
              delete json[i]["category"];
            }
            if (
              !json[i]["uniqueName"].includes('PetPowerSuit') && 
              !json[i]["uniqueName"].includes('MoaPetHead')
              ) {
              delete json[i];
            }
          }
          if (path === "Primary.json") {
            if (json[i]["productCategory"] == "SentinelWeapons") {
              json[i]["type"] = "Sentinel Weapon";
            }
            if (json[i]["uniqueName"].includes('ArchGun')) {
              json[i]["type"] = "Archwing Gun";
            }
            if (json[i]["uniqueName"].includes('ArchLongGun')) {
              json[i]["type"] = "Archwing Gun";
            }
            // Larkspur are duplicated as Primary, will be removed in custom-remove.js
            if (json[i]["uniqueName"].includes('TnShieldFrameArchGun')) {
              json[i]["type"] = "Primary";
            }
          }
          if (path === "Secondary.json") {
            if (json[i]["uniqueName"].includes('SentinelWeapon')) {
              json[i]["type"] = "Sentinel Weapon";
              delete json[i]["category"];
            }
            if (json[i]["uniqueName"].includes('MoaPetComponents')) {
              json[i]["type"] = "Sentinel Weapon";
              delete json[i]["category"];
            }



            // TEMPORARY should be in check for melee
            if (json[i]["uniqueName"].includes("\/Tip\/")) {
              json[i]["type"] = "Melee";
              json[i]["category"] = "Zaw";
            }
            if (json[i]["uniqueName"].includes("\/Tips\/")) {
              json[i]["type"] = "Melee";
              json[i]["category"] = "Zaw";
            }



          }
          if (path === "Sentinels.json") {
            json[i]["type"] = "Sentinel";
            delete json[i]["category"];
          }
          if (path === "Warframes.json") {
            json[i]["type"] = "Warframe";
            delete json[i]["category"];
          }
        }
        await json.forEach(async item => {
          await this.items.array.push(item);
        });
      } catch (e) {
        throw e;
      }
    });
  }

  async customRemove() {
    this.items = require(pathAlias.resolve("@modules/custom-remove"))(this.items);
    this.clog("Removed items");
  }

  async sort() {
    this.items = require(pathAlias.resolve("@modules/sort"))(this.items);
    this.clog("Sorted item-list");
  }

  async acquisition() {
    this.items = require(pathAlias.resolve("@modules/acquisition"))(this.items);
    this.clog("Added acquisition data");
  }

  async setDefaults() {
    this.items = require(pathAlias.resolve("@modules/set-defaults"))(this.items);
    this.clog("Set default values");
  }

  async tierList() {
    this.items = require(pathAlias.resolve("@modules/tier-list"))(this.items);
    this.clog("Added tier ranking");
  }

  async components() {
    this.items = require(pathAlias.resolve("@modules/components"))(this.items);
    this.clog("Updated weapon-component list");
  }

  async wikiaUrl() {
    this.items = require(pathAlias.resolve("@modules/wikia-url"))(this.items);
    this.clog("Added Wikia URLs");
  }

  async customData() {
    this.items = require(pathAlias.resolve("@modules/custom-data"))(this.items);
    this.clog("Added custom data");
  }

  async writeItemList() {
    const count = this.items.array.length
    this.clog(`Writing ${count} items`);
    try {
      var warframeData = "module.exports = " + JSON.stringify(this.items, null, 2);
      require('fs').writeFileSync(pathAlias.resolve(paths.warframeData.dest), warframeData);
    } catch (e) {
      throw e;
    }
  }

  async logItems() {
    await this.items.array.forEach(async item => {
      console.log(item["name"]);
      console.log(item);
    });
  }

}

const asyncForEach = async (a, cb) => {
  for (let i = 0; i < a.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await cb(a[i], i, a);
  }
};

const stringify = (object) => {
  const isPrimitive = obj => obj === null || ['string', 'number', 'boolean'].includes(typeof obj);
  const isArrayOfPrimitive = obj => Array.isArray(obj) && obj.every(isPrimitive);
  const format = arr => `^^^[ ${arr.map(val => JSON.stringify(val)).join(', ')} ]`;
  const replacer = (key, value) => (isArrayOfPrimitive(value) ? format(value) : value);
  const expand = str => str.replace(/(?:"\^\^\^)(\[ .* \])(?:")/g, (match, a) => a.replace(/\\"/g, '"'));
  return expand(JSON.stringify(object, replacer, 2));
};

const update = new Updater();
update.run();
