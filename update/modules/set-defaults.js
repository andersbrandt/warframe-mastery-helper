module.exports = function (items) {

  function scrubName(string) {
    var temp = string.replace(/[^a-zA-Z]+/g, '');
    return temp.replace(/\s/g, '');
  }

  for (var i = 0; i < items.array.length; i++) {
    items.array[i].checked = false;
    items.array[i].shortName = scrubName(items.array[i].name);
    if (items.array[i].acquisition == "Unobtainable (Founders)") {
      items.array[i].unobtainable = true;
    } else {
      items.array[i].unobtainable = false;
    }
  }

  return items;

};
