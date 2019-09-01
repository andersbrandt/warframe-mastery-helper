"use strict";

const {utils} = require("./utils.js");
const warframeData = require("./warframe-data.js");
const ClockEidolon = require("./clock-eidolon.js");
const ClockOrbvallis = require("./clock-orbvallis.js");

var app = {
  name: "Warframe Mastery Helper",
  version: "2.4.6",
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
    app.clocks.init();
    if (utils.readLocalStorage("data") == false) {
      app.tools.firstRun();
    }
    app.data = JSON.parse(JSON.stringify(warframeData));
    app.storage.getData(
      function (data) {
        // Ugly hack in order to solve backwards compability with old data-sources
        for (var i = 0; i < data.data.length; i++) {
          if (data.data[i].indexOf("MK1") == 0) {
            data.data[i] = data.data[i].replace("MK1", "Mk1");
          }
        }
        utils.writeLocalStorage("data", JSON.stringify(data.data));
        app.tools.mapFromStorage();
        app.render.page.start();
        app.render.spinner.show();
        $(document).foundation();
        app.render.spinner.hide();
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
    checkData: function(){
      var missingWikiaUrl = [];
      var missingMasteryReq = [];
      var missingImageName = [];
      app.data.array.forEach(function(item){
        if (typeof(item.wikiaUrl) == "undefined") {
          missingWikiaUrl.push(item.name);
        }
        if (typeof(item.masteryReq) == "undefined") {
          missingMasteryReq.push(item.name);
        }
        if (typeof(item.imageName) == "undefined") {
          missingImageName.push(item.name);
        }
      });
      console.log("missingWikiaUrl", missingWikiaUrl);
      console.log("missingMasteryReq", missingMasteryReq);
      console.log("missingImageName", missingImageName);
    }
  },
  render: {
    views: {
      search: function () {
        var template = require("./../views/search.hbs");
        var html = template();
        $("#search-placeholder").html(html);
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
      },
      stats: function () {
        var template = require("./../views/pages/stats.hbs");
        var html = template(app.stats.create());
        $("#stats-placeholder").html(html);
      },
      user: function () {
        var template = require("./../views/pages/user.hbs");
        var html = template(user);
        $("#user-placeholder").html(html);
      },
      clock: function () {
        var template = require("./../views/clock-modal.hbs");
        var html = template();
        $("#clock-placeholder").html(html);
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
        app.render.views.clock();
        app.render.views.help();
        app.search.updateIndicator();
      },
      help: function () {
        app.render.views.help();
        $("#help-modal").foundation("reveal", "open", app.config.modal);
        app.tools.closeMenu();
      },
      stats: function () {
        app.render.views.stats();
        $("#stats-modal").foundation("reveal", "open", app.config.modal);
        app.tools.closeMenu();
      },
      clock: function () {
        $("#clock-modal").foundation("reveal", "open", app.config.modal);
        app.tools.closeMenu();
      },
      guide: function () {
        app.render.views.guide();
        $("#guide-modal").foundation("reveal", "open", app.config.modal);
        app.tools.closeMenu();
      },
      user: function () {
        app.render.views.user();
        $("#user-modal").foundation("reveal", "open", app.config.modal);
        app.tools.closeMenu();
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
      var data = app.storage.list();
      if (data.indexOf(item) !== -1) {
        return true
      } else {
        return false;
      }
    },
    add: function (item) {
      var checked = app.storage.list();
      if (checked.indexOf(item) == -1) {
        checked.push(item);
        utils.writeLocalStorage("data", JSON.stringify(checked));
      } else {
        console.log("Item already exists in storage", item);
      }
    },
    remove: function (item) {
      var data = app.storage.list();
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
      var payload = app.storage.list();
      $.ajax({
        url: "ajax-controller.php?action=save",
        type: "POST",
        data: {
          json: JSON.stringify(payload)
        },
        dataType: "json",
        success: function (data) {
          if (typeof data["ERROR"] !="undefined"){
            app.tools.restart();            
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
    activate: function (status) {
      app.search.action();
    },
    getStatus: function () {
      return $(".filter-status:checked").val();
    },
    setBodyClass: function (status) {
      if (status) {
        $("body").addClass("filter-active");
      } else {
        $("body").removeClass("filter-active");
      }
    }
  },
  search: {
    action: function () {
      var input, filter, li, name, i, category, type, acquisition;
      var filterStatus = app.filter.getStatus();
      app.filter.setBodyClass(filterStatus);
      input = document.getElementById("search");
      filter = input.value.toUpperCase();
      li = document.getElementsByClassName("item");
      for (i = 0; i < li.length; i++) {
        name = li[i].getElementsByClassName("name")[0];
        type = li[i].getElementsByClassName("type")[0];
        category = li[i].getElementsByClassName("category")[0];
        acquisition = li[i].getElementsByClassName("acquisition")[0];
        if (name.innerHTML.toUpperCase().indexOf(filter) > -1
          || category.innerHTML.toUpperCase().indexOf(filter) > -1
          || type.innerHTML.toUpperCase().indexOf(filter) > -1
          || acquisition.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
      switch (filterStatus) {
        case "all":
          app.filter.setBodyClass(false);
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
      var filterStatus = app.filter.getStatus();
      if (filterStatus == "unranked" || filterStatus == "ranked") {
        $("#search-indicator").addClass("search-indicator-filtered");
        app.filter.setBodyClass(true);
      } else {
        $("#search-indicator").removeClass("search-indicator-filtered");
        app.filter.setBodyClass(false);
      }
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
      });
    },
    setState: function (name, state) {
      var objIndex = app.item.getIndexByName(name);
      if (objIndex !== -1 && objIndex !== false) {
        app.data.array[objIndex]["checked"] = state;
      } else {
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
      //var types = app.data.constants.TYPES;
      var categories = [
        {
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
          for (var i=0; i < typeStatus["unranked"].length; i++) {
            typeDataUnranked.push(typeStatus["unranked"][i]);
          }
          for (var i=0; i < typeStatus["ranked"].length; i++) {
            typeDataRanked.push(typeStatus["ranked"][i]);
          }
        }
        var total = typeDataTotal + (typeDataRanked.length + typeDataUnranked.length);;
        var item = {
          "name": categories[key]["label"],
          "ranked": typeDataRanked,
          "unranked": typeDataUnranked,
          "total": total
        };
        data.push(item);
        totalItems += total;
        totalItemsRanked += typeDataRanked.length;
        totalItemsUnranked += typeDataUnranked.length;
      }
      data.totalItemsRanked = totalItemsRanked;
      data.totalItemsUnranked = totalItemsUnranked;
      data.totalItems = totalItems;
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
      $("#modal-export").foundation('reveal', 'open', app.config.modal)
    },
    csv: function () {
      var today = new Date().toISOString().slice(0, 10);
      var array = JSON.parse(utils.readLocalStorage("data"));
      var str = 'Ranked items ' + today + ': ' + array.length + '\r\n';
      for (var i = 0; i < array.length; i++) {
        str += array[i] + '\r\n';
      }
      window.open("data:text/csv;charset=utf-8," + escape(str))
    }
  },
  clocks: {
    init: function () {
      var clockEidolon = new ClockEidolon();
      var clockOrbvallis = new ClockOrbvallis();
      clockEidolon.init();
      clockOrbvallis.init();
      $("#clock-modal").bind('closed.fndtn.reveal', function () {
        clockEidolon.stop();
        clockOrbvallis.stop();
      });
      $("#clock-modal").bind('open.fndtn.reveal', function () {
        clockEidolon.start();
        clockOrbvallis.updateTime();
        clockOrbvallis.start();
      });
    }
  }
};

$(document).ready(function () {
  app.init();
});

window.app = app; //TODO delete or not?

module.exports = {
  app: app
};
