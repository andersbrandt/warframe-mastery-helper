module.exports = function () {
  var eido_timestamp = 1540015141;
  const UPDATE_INTERVAL = 1000;
  const WARNING_MESSAGE = "Warning: unable to get time for Eidolon Clock. Retrying soon.";

  function defaultGetTimeCallback(t) {
    eido_timestamp = t;
  }

  function pad(s) {
    if (s.toString().length == 1) return '0' + s.toString();
    return s.toString();
  }

  function setTimeFailure(hasIssue) {
    var e = document.getElementById("warning-container");
    if (hasIssue) {
      e.innerHTML = WARNING_MESSAGE;
      setTimeout(this.getCetusTime, 30000, true, defaultGetTimeCallback);
    }
    else
      e.innerHTML = "";
  }

  this.getCetusTime = function (fetch, callback) {
    var timestamp = 1522764301;	//Static timestamp to be returned in case of an error. Correct as of 2018-04-03, for PC version 22.17.0.1. Might not be accurate in the future.
    if (!fetch) {
      callback(timestamp);
      return;
    }

    var worldStateFileUrl = "http://content.warframe.com/dynamic/worldState.php";
    var worldStateCORSUrl = "https://whatever-origin.herokuapp.com/get?callback=?&url=" + encodeURIComponent(worldStateFileUrl);

    $.ajax(
      {
        url: worldStateCORSUrl,
        dataType: "json",
        mimeType: "application/json",
        success: function (data) {
          var worldStateData;
          try {
            worldStateData = JSON.parse(data.contents); //The data is returned as a string inside a JSON response and has to be parsed.
          }
          catch (e) {
            console.warn("Could not fetch Cetus time (", e.message, "). Using static timestamp. Accuracy not guaranteed.");
            callback(timestamp);
            setTimeFailure(true);
            return;
          }
          var syndicate = worldStateData["SyndicateMissions"].find(element => (element["Tag"] == "CetusSyndicate"));
          if (syndicate == undefined) {
            setTimeFailure(true);
            callback(timestamp);
            return;
          }
          setTimeFailure(false);
          timestamp = Math.floor(syndicate["Expiry"]["$date"]["$numberLong"] / 1000);	//The activation time, converted to whole seconds
          callback(timestamp);
        },
        error: function (xhr, status, error) {
          console.warn("Cound not fetch Cetus time:", status, error, ". Using static timestamp. Accuracy not guaranteed.");
          setTimeFailure(true);
          callback(timestamp);
        }
      });
  };

  function updateTime() {
    var d = new Date();
    var time = d.getTime() / 1000;
    // This time is the end of night and start of day
    var start_time = (eido_timestamp - 150 * 60)
    var irltime_m = ((time - start_time) / 60) % 150;  // 100m of day + 50m of night

    var eidotime_in_h = (irltime_m / 6.25) + 6;
    if (eidotime_in_h < 0) eidotime_in_h += 24;
    if (eidotime_in_h > 24) eidotime_in_h -= 24;
    var eidotime_h = Math.floor(eidotime_in_h);
    var eidotime_m = Math.floor((eidotime_in_h * 60) % 60);
    var eidotime_s = Math.floor((eidotime_in_h * 60 * 60) % 60);

    var wrapped_time = eidotime_in_h - 5;
    if (wrapped_time < 0) wrapped_time += 24;
    //var slider_percent = wrapped_time / 24 * 90 + 5
    //$('.slider').css('top', slider_percent + '%');

    var next_interval;

    // Night is from 9pm to 5am
    // Day is from 5am to 9pm
    if (150 - irltime_m > 50) {
      $('#eidolon-clock').addClass('time-is-day').removeClass('time-is-night');
      $('#eidolon-clock .day').addClass('night').removeClass('day');
      $('#eidolon-clock .night').text('night');
      $('#eidolon-clock .current-state').text('day');
      next_interval = 21;
    } else {
      $('#eidolon-clock').addClass('time-is-night').removeClass('time-is-day');
      $('#eidolon-clock .night').addClass('day').removeClass('night');
      $('#eidolon-clock .day').text('day');
      $("#eidolon-clock .current-state").text("night");
      next_interval = 5;
    }

    var eido_until_h = next_interval - (eidotime_h % 24);
    if (eido_until_h < 0) eido_until_h += 24
    var irl_until_in_m = 150 - irltime_m;
    if (irl_until_in_m > 50) irl_until_in_m -= 50

    var irl_until_h = Math.floor(irl_until_in_m / 60);
    var irl_until_m = Math.floor(irl_until_in_m % 60);
    var irl_until_s = Math.floor((irl_until_in_m * 60) % 60);

    $('.time>.big-hour').text(pad(irl_until_h));
    $('.time>.big-minute').text(pad(irl_until_m));
    $('.time>.big-second').text(pad(irl_until_s));
  }

  this.init = function () {
    this.getCetusTime(1, defaultGetTimeCallback);
  };

  this.start = function () {
    updateTime();
    this.interval = setInterval(updateTime, UPDATE_INTERVAL);
  };

  this.stop = function () {
    clearInterval(this.interval);
  };
};

//module.exports = {
//  Clock: Clock
//};
