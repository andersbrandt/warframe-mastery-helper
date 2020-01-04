const pathAlias = require('path-alias');

//
//  Set path aliases
//
pathAlias.setAlias('root', '.');
pathAlias.setAlias('updateData', 'update/data/');
pathAlias.setAlias('modules', 'update/modules/');
pathAlias.setAlias('temp', 'update/temp/');
pathAlias.setAlias('static', 'update/static/');

//
//  Set paths
//
module.exports = {
    source: {
        path: "https://raw.githubusercontent.com/WFCD/warframe-items/development/data/json/",
        files: [
            'Misc.json',
            'Archwing.json',
            'Arch-Gun.json',
            'Arch-Melee.json',
            'Melee.json',
            'Pets.json',
            'Primary.json',
            'Secondary.json',
            'Sentinels.json',
            'Warframes.json'
        ]
    },
    updateData: {
        tierRanking: "https://www.cephalonwannab.com/js/thelist.json",
        vaultedItems: "http://warframe.wikia.com/wiki/Prime_Vault",
        weaponComponents: "http://warframe.wikia.com/wiki/Weapons_Required_as_Crafting_Ingredients",
        versions: "https://warframe.com/index.php"
    },
    startPageItemList: {
        dest: "@root/public/helper/include/start-page-item-list.html"
    },
    warframeData: {
        dest: "@root/src/js/warframe-data.js"
    },
    warframeItemList: {
        dest: "@updateData/item-list.json"
    },
    warframeTierList: {
        dest: "@updateData/tier-list.json"
    },
    warframeComponentData: {
        dest: "@updateData/component-data.json"
    },
    wikiaVaultedStatus: {
        dest: "@updateData/vaulted-status-wikia.json"
    },
    versions: {
        dest: "@updateData/versions.json"
    }
};
