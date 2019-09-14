module.exports = function (items) {

  const moment = require("moment");
  const {utils} = require("../../src/js/utils");

  sortByName = utils.sortByName;

  items.array = items.array.sort(sortByName);
  delete items.objects;
  items.fetched = moment().format('YYYY.MM.DD hh:mm:ss [CET]Z');

  return items;

};
