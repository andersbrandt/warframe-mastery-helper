const config = require("./config.js");
const Handlebars = require('handlebars/runtime');

var utils = {

  isInArray: function (arr, obj) {
    return (arr.indexOf(obj) != -1);
  },

  getIndexOf: function (array, key, value) {
    var l = array.length;
    for (var k = 0; k < l; k++) {
      if (array[k][key] == value) {
        return k;
      }
    }
    return false;
  },

  groupBy: key => array =>
    array.reduce((objectsByKeyValue, obj) => {
      const value = obj[key];
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
      return objectsByKeyValue;
    }, {}),

  scrubName: function (string) {
    var temp = string.replace(/[^a-zA-Z]+/g, '');
    return temp.replace(/\s/g, '');
  },

  formatNumber: function(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
  },

  sortNumber: function(a, b) {
    return b - a;
  },

  sortByName: function (a, b) {
    if (a["name"] === b["name"]) {
      return 0;
    } else {
      return (a["name"] < b["name"]) ? -1 : 1;
    }
  },

  sortObject: function(obj) {
    return Object.keys(obj).sort().reduce(function (result, key) {
      result[key] = obj[key];
      return result;
    }, {});
  },

  //
  //  Localstorage
  //
  supportsLocalStorage: function () {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
      return false;
    }
  },

  privateModeEnabled: function () {
    try {
      localStorage.setItem(config["localstorage"]["domain"] + "localstorage.test", "data");
    } catch (e) {
      if (/QUOTA_?EXCEEDED/i.test(e.name)) {
        return false;
      }
    }
    localStorage.removeItem(config["localstorage"]["domain"] + "localstorage.test");
    return true;
  },

  tryLocalStorage: function () {
    if (!utils.supportsLocalStorage()) {
      window.localStorageEnabled = false;
      return false;
    } else if (!utils.privateModeEnabled()) {
      window.localStorageEnabled = false;
      return false;
    } else {
      window.localStorageEnabled = true;
      return true;
    }
  },

  LocalStorage: function () {
    if (window.localStorageEnabled) {
      return true;
    } else {
      return false;
    }
  },

  writeLocalStorage: function (key, value) {
    if (utils.LocalStorage()) {
      localStorage[config["localstorage"]["domain"] + key] = JSON.stringify(value);
    }
  },

  readLocalStorage: function (key) {
    if (utils.LocalStorage()) {
      if (localStorage[config["localstorage"]["domain"] + key]) {
        var data = JSON.parse(localStorage[config["localstorage"]["domain"] + key]);
        return data;
      } else {
        return false;
      }
    }
  },

  //
  //  Handlebars
  //
  registerHandlebarHelpers: function () {
    Handlebars.registerHelper('config', function (obj) {
      var str = arguments[0];
      if (str.indexOf(".") !== -1) {
        var strPart = str.split(".");
        return J.config[strPart[0]][strPart[1]];
      } else {
        return J.config[str];
      }
    });
    Handlebars.registerHelper('escape', function(variable) {
      if (typeof(variable) != "undefined"){
        return variable.replace(/(['"])/g, '\\$1');
      }
    });
    Handlebars.registerHelper('unescape', function (obj) {
      var doc = new DOMParser().parseFromString(arguments[0], "text/html");
      return doc.documentElement.textContent;
    });
    Handlebars.registerHelper("ifValue", function (conditional, options) {
      if (conditional == options.hash.equals) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    });
    Handlebars.registerHelper("replace", function (str, a, b) {
      // Example: {{{replace ImageUrl.Url "small" "medium"}}}
      if (str && typeof str === 'string') {
        if (!a || typeof a !== 'string') return str;
        if (!b || typeof b !== 'string') b = '';
        return str.split(a).join(b);
      }
    });
    Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
      switch (operator) {
        case '==':
          return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
          return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '!=':
          return (v1 != v2) ? options.fn(this) : options.inverse(this);
        case '!==':
          return (v1 !== v2) ? options.fn(this) : options.inverse(this);
        case '<':
          return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
          return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
          return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
          return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
          return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
          return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
          return options.inverse(this);
      }
    });
  }

};

module.exports = {
  utils: utils
};
