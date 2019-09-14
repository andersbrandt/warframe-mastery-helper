module.exports = function (items) {

    const pathAlias = require('path-alias');
    const paths = require(("../update-config.js"));
    const {utils} = require("../../src/js/utils");

    var namesOnly = [];
    for (let index = 0; index < items.array.length; index++) {
        var item = {
            name: items.array[index]["name"],
            type: items.array[index]["type"]
        }
        namesOnly.push(item);
    }
    const groupByType = utils.groupBy('type');
    let itemsByType = groupByType(namesOnly);
    itemsByType = utils.sortObject(itemsByType);

    require('fs').writeFileSync(pathAlias.resolve(paths.startPageItemList.dest), JSON.stringify(itemsByType));
};
