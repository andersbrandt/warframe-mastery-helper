module.exports = function () {

    function convertMillisecondsToTime(duration) {
      var timeString = "";
      var milliseconds = parseInt((duration % 1000) / 100);
      var seconds = Math.floor((duration / 1000) % 60);
      var minutes = Math.floor((duration / (1000 * 60)) % 60);
      var hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
      hours = (hours < 10) ? "0" + hours : hours;
      minutes = (minutes < 10) ? "0" + minutes : minutes;
      seconds = (seconds < 10) ? "0" + seconds : seconds;
      if (hours !== "00") {
        timeString += hours + ":";
      }
      timeString += minutes + ":" + seconds;
      return timeString;
    };

    this.updateTime = function () {
      var nextState;
      var currentState;
      var nextPeriod;
      var cycleStart = 1598873791000; // Vome start,  +/- 5sec
      var longCycleLength = 6000000; // Fass
      var shortCycleLength = 3000000; // Vome
      var totalCycleLength = longCycleLength + shortCycleLength;

      var currentTime = (Date.now() - cycleStart) % totalCycleLength;
      if (currentTime < shortCycleLength) {
        nextPeriod = shortCycleLength - currentTime;
        nextState = "Fass";
        currentState = "Vome";
      } else {
        nextPeriod = totalCycleLength - currentTime;
        nextState = "Vome";
        currentState = "Fass";
      }

      $("#deimos-clock .next-state").text(nextState);
      $("#deimos-clock .current-state").text(currentState);
      $("#deimos-clock")
        .find(".weather>.big-minute")
        .text(convertMillisecondsToTime(nextPeriod));
    };

    this.init = function () {
        this.updateTime();
    };

    this.start = function () {
        this.interval = setInterval(this.updateTime, 1000);
    };

    this.stop = function () {
        clearInterval(this.interval);
    };
}
