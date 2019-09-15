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

    itemsByTypeString = "";
    for (let group in itemsByType) {
        itemsByTypeString += "<p><b>" + group + "</b><br>";
        itemsByType[group].forEach( (item, index) => {
            itemsByTypeString += item.name;
            if (index !== itemsByType[group].length -1) {
                itemsByTypeString += ", ";
            }
        });
        itemsByTypeString += "</p>";
    }

    return itemsByTypeString;
};
