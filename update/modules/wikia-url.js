module.exports = function (items) {
    for (var i = 0; i < items.array.length; i++) {
        if (typeof(items.array[i]["wikiaUrl"]) === "undefined"){
            const wikiSlug = items.array[i]["name"].replace(/ /g, '_').replace(/'/g, '%27');
            items.array[i]["wikiaUrl"] = `http://warframe.wikia.com/wiki/${wikiSlug}`;
        }
    }
    return items;
}
