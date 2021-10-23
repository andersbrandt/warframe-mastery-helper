"use strict";

const {
  utils
} = require("./utils.js");
const warframeData = require("./warframe-data.js");
const config = require("./config.js");

var app = {
  name: "Warframe Mastery Helper",
  version: "3.3.0",
  data: {},
  config: {
    modal: {
      animation: "pop",
      animation_speed: 0
    }
  },
  init: function () {
    app.render.spinner.show();
    utils.tryLocalStorage();
    utils.registerHandlebarHelpers();
    if (utils.readLocalStorage("data") == false) {
      app.tools.firstRun();
    }
    app.data = JSON.parse(JSON.stringify(warframeData));
    app.storage.getData(
      function (data) {
        var i = data.data.length;
        while (i--) {
          // Ugly hack in order to solve backwards compability with old data-sources
          if (data.data[i].indexOf("MK1") == 0) {
            data.data[i] = data.data[i].replace("MK1", "Mk1");
          }
          // Ugly hack to remove Primary Kitgun grips added by mistake
          var itemsToRemove = ["Brash", "Shrewd", "Steadyslam", "Tremor"];
          if (itemsToRemove.indexOf(data.data[i]) > -1) {
            data.data.splice(i, 1);
          }
          // Ugly hack to Founders items that are checked by users
          var foundersItemsToRemove = ["Excalibur Prime", "Lato Prime", "Skana Prime"];
          if (foundersItemsToRemove.indexOf(data.data[i]) > -1) {
            data.data.splice(i, 1);
          }
          // Ugly hack to remove miss-spelled weapons
          var itemsToRemove = ["Prisma Dual Decurion"];
          if (itemsToRemove.indexOf(data.data[i]) > -1) {
            data.data.splice(i, 1);
          }
        }
        utils.writeLocalStorage("data", JSON.stringify(data.data));
        app.tools.mapFromStorage();
        app.render.page.start();
        app.render.spinner.show();
        $(document).foundation();
        app.render.spinner.hide();
        app.render.bind.start();
        app.search.updateIndicator();
      }
    );
  },
  tools: {
    restart: function () {
      window.location.reload();
    },
    firstRun: function () {
      utils.writeLocalStorage("data", "[]");
      app.render.page.help();
    },
    mapFromStorage: function () {
      var checked = app.storage.list();
      if (checked.length) {
        for (var i = 0; i < checked.length; i++) {
          app.item.setState(checked[i], true)
        }
      }
    },
    closeModal: function () {
      $('.reveal-modal').foundation('reveal', 'close');
    },
    closeMenu: function () {
      $('.top-bar').removeClass('expanded');
    },
    statusByType: function (type) {
      var items = {
        ranked: [],
        unranked: []
      }
      var l = app.data.array.length;
      for (var k = 0; k < l; k++) {
        if (app.data.array[k]["type"] == type && app.data.array[k]["checked"] == true) {
          items.ranked.push(app.data.array[k]);
        } else if (app.data.array[k]["type"] == type && app.data.array[k]["checked"] == false) {
          items.unranked.push(app.data.array[k]);
        }
      }
      return items;
    },
    itemCountByType: function (type) {
      var l = app.data.array.length;
      var list = [];
      for (var k = 0; k < l; k++) {
        if (app.data.array[k]["type"] == type) {
          list.push(app.data.array[k]);
        }
      }
      return list.length;
    },
    checkData: function () {
      var missingWikiaUrl = [];
      var missingMasteryReq = [];
      var missingImageName = [];
      app.data.array.forEach(function (item) {
        if (typeof (item.wikiaUrl) == "undefined") {
          missingWikiaUrl.push(item.name);
        }
        if (typeof (item.masteryReq) == "undefined") {
          missingMasteryReq.push(item.name);
        }
        if (typeof (item.imageName) == "undefined") {
          missingImageName.push(item.name);
        }
      });
      console.log("missingWikiaUrl", missingWikiaUrl);
      console.log("missingMasteryReq", missingMasteryReq);
      console.log("missingImageName", missingImageName);
    }
  },
  render: {
    bind: {
      start: function () {
        $(".action-reload").on("click", function () {
          window.location.reload()
        });
        $(".action-render-page").on("click", function () {
          var page = $(this).data("page");
          window["app"]["render"]["page"][page]();
        });
        $(".action-close-modal").on("click", function () {
          app.tools.closeModal();
        });
        $(".action-clear-search").on("click", function () {
          app.search.clear();
        });
        $(".action-activate-filter").on("click", function () {
          app.filter.activate();
        });
        $(".action-toggle-info").on("click", function () {
          var item = $(this).data("item");
          window["app"]["item"]["toggleInfo"](item);
        });
        $(".action-item-check").on("click", function () {
          var item = $(this).data("item-check");
          var state = JSON.parse($(this).data("state"));
          window["app"]["item"]["check"](item, state);
        });
        $(".action-import-list").on("click", function () {
          app.import.list();
        });
      },
      infoModal: function () {
        $(".action-search").on("click", function () {
          var query = $(this).data("query");
          window["app"]["search"]["searchFor"](query);
        });
      }
    },
    views: {
      search: function () {
        var template = require("./../views/search.hbs");
        var html = template();
        $("#search-placeholder").html(html);
        $("#search").bind("keypress", function (e) {
          if (e.which === 13) {
            app.search.done();
          }
        });
      },
      filter: function () {
        var template = require("./../views/filter.hbs");
        var html = template();
        $("#filter-placeholder").html(html);
      },
      allItems: function () {
        var template = require("./../views/all-items.hbs");
        var html = template(app.data.array);
        $("#all-items-placeholder").html(html);
      },
      status: function () {
        var checkedItems = app.storage.list().length;
        var availableItems = app.data.array.length;
        var template = require("./../views/status.hbs");
        var html = template({
          "checkedItems": checkedItems,
          "availableItems": availableItems
        });
        $("#status-placeholder").html(html);
      },
      item: function (name) {
        var data = app.data.array[app.item.getIndexByName(name)];
        var template = require("./../views/item.hbs");
        var html = template(data);
        $('*[data-name="' + name + '"]').replaceWith(html);
      },
      help: function () {
        var template = require("./../views/pages/help.hbs");
        var html = template(app.data);
        $("#help-placeholder").html(html);
        $(".action-close-modal").on("click", function () {
          app.tools.closeModal();
        });
      },
      stats: function () {
        var template = require("./../views/pages/stats.hbs");
        var html = template(app.stats.create());
        $("#stats-placeholder").html(html);
        $(".action-close-modal").on("click", function () {
          app.tools.closeModal();
        });
      },
      user: function () {
        var template = require("./../views/pages/user.hbs");
        var html = template(user);
        $("#user-placeholder").html(html);
        $(".action-modal-import").on("click", function () {
          app.import.showModal();
        });
        $(".action-modal-export").on("click", function () {
          app.export.showModal();
        });
        $(".action-modal-csv").on("click", function () {
          app.export.csv();
        });
      },
      guide: function () {
        var template = require("./../views/beginner-guide.hbs");
        var html = template(app.data);
        $("#guide-placeholder").html(html);
      }
    },
    page: {
      start: function () {
        app.render.reset();
        app.render.views.search();
        app.render.views.filter();
        app.render.views.status();
        app.render.views.allItems();
        app.render.views.help();
        app.search.updateIndicator();
      },
      help: function () {
        app.render.views.help();
        $("#help-modal").foundation("reveal", "open", app.config.modal);
        app.tools.closeMenu();
        // Track event
        gtag('event', 'Open modal: Help', {
          'event_category': 'Open modal',
          'event_label': 'Open modal: Help'
        });
      },
      stats: function () {
        app.render.views.stats();
        $("#stats-modal").foundation("reveal", "open", app.config.modal);
        app.tools.closeMenu();
        // Track event
        gtag('event', 'Open modal: Stats', {
          'event_category': 'Open modal',
          'event_label': 'Open modal: Stats'
        });
      },
      guide: function () {
        app.render.views.guide();
        $("#guide-modal").foundation("reveal", "open", app.config.modal);
        app.tools.closeMenu();
        // Track event
        gtag('event', 'Open modal: Guide', {
          'event_category': 'Open modal',
          'event_label': 'Open modal: Guide'
        });
      },
      news: function () {
        $("#news-modal").foundation("reveal", "open", app.config.modal);
        app.tools.closeMenu();
        // Track event
        gtag('event', 'Open modal: News', {
          'event_category': 'Open modal',
          'event_label': 'Open modal: News'
        });
      },
      user: function () {
        app.render.views.user();
        $("#user-modal").foundation("reveal", "open", app.config.modal);
        app.tools.closeMenu();
        // Track event
        gtag('event', 'Open modal: User', {
          'event_category': 'Open modal',
          'event_label': 'Open modal: User'
        });
      }
    },
    reset: function () {
      $(".view-placeholder").each(function () {
        $(this).html("");
      })
    },
    spinner: {
      show: function () {
        $(".spinner-loaded").hide();
        $("#spinner").show();
      },
      hide: function () {
        $("#spinner").hide();
        $(".spinner-loaded").show();
      }
    }
  },
  storage: {
    list: function () {
      var data = JSON.parse(utils.readLocalStorage("data"));
      return data;
    },
    get: function (item) {
      //TODO rename to itemExist
      var data = this.list();
      if (data.indexOf(item) !== -1) {
        return true
      } else {
        return false;
      }
    },
    add: function (item) {
      var checked = this.list();
      if (checked.indexOf(item) == -1) {
        checked.push(item);
        utils.writeLocalStorage("data", JSON.stringify(checked));
      } else {
        console.log("Item already exists in storage", item);
      }
    },
    remove: function (item) {
      var data = this.list();
      var index = data.indexOf(item);
      if (index !== -1) {
        data.splice(index, 1);
        utils.writeLocalStorage("data", JSON.stringify(data));
      } else {
        console.log("Item do not exist in storage", item);
      }
    },
    clear: function () {
      utils.writeLocalStorage("data", "[]");
    },
    saveData: function (callback) {
      var payload = this.list();
      $.ajax({
        url: "ajax-controller.php?action=save",
        type: "POST",
        data: {
          json: JSON.stringify(payload)
        },
        dataType: "json",
        success: function (data) {
          // ERROR: From ajax-controller if user are not authenticated
          if (typeof data["ERROR"] != "undefined") {
            app.tools.restart();
          }
          // Track new user event
          if (typeof (data) == "object") {
            gtag('event', 'New user: First save', {
              'event_category': 'New user',
              'event_label': 'New user: First save'
            });
          }
          if (typeof callback == "function") {
            callback(data);
          }
        }
      });
    },
    getData: function (callback) {
      $.ajax({
        url: "ajax-controller.php?action=get",
        type: "GET",
        dataType: "json",
        success: function (data) {
          if (typeof callback == "function") {
            callback(data);
          }
        }
      });
    }
  },
  filter: {
    activate: function () {
      app.search.action();
    },
    getStatus: function () {
      return $(".filter-status:checked").val();
    }
  },
  search: {
    done: function () {
      document.activeElement.blur();
      return false;
    },
    action: function () {
      var input, filter, li, name, i, category, type, acquisition;
      var filterStatus = app.filter.getStatus();
      input = document.getElementById("search");
      filter = input.value.toUpperCase();
      li = document.getElementsByClassName("item");
      for (i = 0; i < li.length; i++) {
        name = li[i].getElementsByClassName("name")[0];
        type = li[i].getElementsByClassName("type")[0];
        category = li[i].getElementsByClassName("category")[0];
        acquisition = li[i].getElementsByClassName("acquisition")[0];
        if (name.innerHTML.toUpperCase().indexOf(filter) > -1 ||
          category.innerHTML.toUpperCase().indexOf(filter) > -1 ||
          type.innerHTML.toUpperCase().indexOf(filter) > -1 ||
          acquisition.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
      switch (filterStatus) {
        case "all":
          break;
        case "ranked":
          $(".item.item-unchecked").hide();
          break;
        case "unranked":
          $(".item.item-checked").hide();
          break;
      }
      app.search.updateIndicator();
    },
    updateIndicator: function () {
      var count = $(".item:visible").length;
      var string = $("#search").val();
      if (string.length) {
        $("#search-indicator").find("#search-indicator-string").html("Searching for <b>" + string + "</b>. ");
      } else {
        $("#search-indicator").find("#search-indicator-string").html("");
      }
      $("#search-indicator").find("#search-indicator-value").html(count);
    },
    clear: function () {
      $("#search").val("").focus();
      $(":radio[value=all]").click();
      app.search.action();
    },
    searchFor: function (string) {
      Foundation.libs.reveal.close();
      app.search.clear();
      $("#search").val(string).keyup();
    }
  },
  item: {
    getDataByName: function (name) {
      var index = utils.getIndexOf(app.data.array, "name", name);
      return app.data.array[index];
    },
    getIndexByName: function (name) {
      return utils.getIndexOf(app.data.array, "name", name);
    },
    toggleInfo: function (name) {
      var data = app.item.getDataByName(name);
      var template = require("./../views/item-modal.hbs");
      var html = template(data);
      $("#item-info-placeholder").html(html).foundation("reveal", "open", app.config.modal);
      app.tools.closeMenu();
      app.render.bind.infoModal();
      // Track event
      gtag('event', 'Open modal: Item', {
        'event_category': 'Open modal',
        'event_label': 'Open modal: Item'
      });
    },
    check: function (name, state) {
      if (state) {
        app.storage.add(name);
      } else {
        app.storage.remove(name);
      }
      app.item.setState(name, state);
      app.storage.saveData(function () {
        app.render.views.status();
        app.render.views.item(name);
        app.search.updateIndicator();
        $(".action-item-check[data-item-check='" + name + "']").on("click", function () {
          var item = $(this).data("item-check");
          var state = JSON.parse($(this).data("state"));
          window["app"]["item"]["check"](item, state);
        });
        $(".action-toggle-info[data-item='" + name + "']").on("click", function () {
          var item = $(this).data("item");
          window["app"]["item"]["toggleInfo"](item);
        });
      });
    },
    setState: function (name, state) {
      var objIndex = app.item.getIndexByName(name);
      if (objIndex !== -1 && objIndex !== false) {
        app.data.array[objIndex]["checked"] = state;
      } else {
        // Track event
        gtag('event', 'Error:  Can\'t find item', {
          'event_category': 'Error',
          'event_label': 'Error:  Can\'t find item ' + name
        });
        console.error("Can't find index for " + name);
        alert("Can't find index for " + name);
      }
    },
    checkAll: function () {
      var data = warframeData.array;
      var allItems = [];
      for (var i = 0; i < data.length; i++) {
        allItems.push(data[i]["name"]);
      }
      utils.writeLocalStorage("data", JSON.stringify(allItems));
      app.storage.saveData(
        function () {
          app.tools.restart();
        }
      );
    },
    unCheckAll: function () {
      utils.writeLocalStorage("data", JSON.stringify([]));
      app.storage.saveData(
        function () {
          app.tools.restart();
        }
      );
    }
  },
  stats: {
    create: function () {
      var categories = [{
          "label": "Warframe",
          "types": [
            "Warframe"
          ]
        },
        {
          "label": "Primary",
          "types": [
            "Primary"
          ]
        },
        {
          "label": "Secondary",
          "types": [
            "Secondary"
          ]
        },
        {
          "label": "Melee",
          "types": [
            "Melee",
            "Zaw"
          ]
        },
        {
          "label": "Robotic",
          "types": [
            "Sentinel",
            "Sentinel Weapon"
          ]
        },
        {
          "label": "Companions",
          "types": [
            "Companion"
          ]
        },
        {
          "label": "Vehicles",
          "types": [
            "Vehicle"
          ]
        },
        {
          "label": "Archgun",
          "types": [
            "Archwing Gun"
          ]
        },
        {
          "label": "Archmelee",
          "types": [
            "Archwing Melee"
          ]
        },
        {
          "label": "Amps",
          "types": [
            "Amp"
          ]
        }
      ];
      var data = [];
      var totalItems = 0;
      var totalItemsRanked = 0;
      var totalItemsUnranked = 0;

      for (var key in categories) {
        var typeDataRanked = [];
        var typeDataUnranked = [];
        var typeDataTotal = 0;
        for (var type in categories[key]["types"]) {
          var typeStatus = app.tools.statusByType(categories[key]["types"][type]);
          for (var i = 0; i < typeStatus["unranked"].length; i++) {
            typeDataUnranked.push(typeStatus["unranked"][i]);

            // Kitguns need to added to Primary as well
            if (typeStatus["unranked"][i]["category"] === "Kitgun") {
              data[1]["unranked"].push(typeStatus["unranked"][i]);
              if (categories[key]["types"][0] === "Secondary") {
                data[1].total = data[1].total + 1;
              }
            }
          }
          for (var i = 0; i < typeStatus["ranked"].length; i++) {
            typeDataRanked.push(typeStatus["ranked"][i]);
            // Kitguns need to added to Primary as well
            if (typeStatus["ranked"][i]["category"] === "Kitgun") {
              data[1]["ranked"].push(typeStatus["ranked"][i]);
              if (categories[key]["types"][0] === "Secondary") {
                data[1].total = data[1].total + 1;
              }
            }
          }
        }
        var total = typeDataTotal + (typeDataRanked.length + typeDataUnranked.length);
        var item = {
          "name": categories[key]["label"],
          "ranked": typeDataRanked,
          "unranked": typeDataUnranked,
          "total": total
        };
        data.push(item);
        totalItemsRanked += typeDataRanked.length;
        totalItemsUnranked += typeDataUnranked.length;
        if (categories[key]["types"][0] === "Primary") {
          total = total + 6;
        }
        totalItems += total;
      }
      data.totalItemsRanked = totalItemsRanked;
      data.totalItemsUnranked = totalItemsUnranked;
      data.totalItems = totalItemsRanked + totalItemsUnranked + 6; // Add total amount of kitguns
      return data;
    }
  },
  import: {
    showModal: function () {
      $("#modal-import").foundation('reveal', 'open', app.config.modal)
    },
    list: function () {
      var data = JSON.parse($('#import-data').val());
      console.log("Data to import", data);
      utils.writeLocalStorage("data", JSON.stringify(data));
      app.storage.saveData(null);
      app.tools.restart();
    }
  },
  export: {
    showModal: function () {
      var data = utils.readLocalStorage("data");
      console.log("Data to export", JSON.parse(data));
      $("#export-data-placeholder").html(data);
      $("#modal-export").foundation('reveal', 'open', app.config.modal);
      // Track event
      gtag('event', 'Export data as array', {
        'event_category': 'Export',
        'event_label': 'Export data as array'
      });
    },
    csv: function () {
      var today = new Date().toISOString().slice(0, 10);
      var array = JSON.parse(utils.readLocalStorage("data"));
      var str = 'Ranked items ' + today + ': ' + array.length + '\r\n';
      for (var i = 0; i < array.length; i++) {
        str += array[i] + '\r\n';
      };
      // Track event
      gtag('event', 'Export data as CSV', {
        'event_category': 'Export',
        'event_label': 'Export data as CSV'
      });
      // Open window
      window.open("data:text/csv;charset=utf-8," + escape(str));
    }
  }
};

$(document).ready(function () {
  app.init();
});

window.app = app; 
window.utils = utils; 
window.config = config; 

module.exports = {
  app: app,
  utils: utils,
  config: config
};
