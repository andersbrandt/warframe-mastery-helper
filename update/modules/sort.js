module.exports = function (items) {

  const moment = require("moment");

  function sortByName(a, b) {
    if (a["name"] === b["name"]) {
      return 0;
    }
    else {
      return (a["name"] < b["name"]) ? -1 : 1;
    }
  }

  items.array = items.array.sort(sortByName);
  delete items.objects;
  items.fetched = moment().format('YYYY.MM.DD hh:mm:ss [CET]Z');

  return items;

};
