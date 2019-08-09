module.exports = function (items) {

  for (var i = 0; i < items.array.length; i++) {
    items.array[i].checked = false;
    if (items.array[i].acquisition == "Unobtainable (Founders)") {
      items.array[i].unobtainable = true;
    } else {
      items.array[i].unobtainable = false;
    }
  }

  return items;

};
