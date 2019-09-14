module.exports = function (items) {

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

    return itemsByType;
};
