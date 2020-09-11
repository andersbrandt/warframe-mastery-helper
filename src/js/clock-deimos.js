module.exports = function () {

    function convertMilliseconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

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
        .text(convertMilliseconds(nextPeriod)); //TODO fix time-format
    };;
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
