module.exports = function () {

    function convertMilliseconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    this.updateTime = function () {
        var nextState;
        var nextPeriod;
        var currentState;
        var cycleStart = 1598873806000; // Vome start, as date +%s
        var longCycleLength = 6000000; // Fass
        var shortCycleLength =  3000000; // Vome
        var currentTime = (Date.now() - cycleStart) % shortCycleLength;
        if (currentTime < shortCycleLength) {
            nextPeriod = shortCycleLength - currentTime;
            nextState = "Vome";
            currentState = "Fass";
            //$('#deimos-clock').addClass('weather-is-warm').removeClass('weather-is-cold');
        } else {
            nextPeriod = longCycleLength - currentTime;
            nextState = "Fass";
            currentState = "Vome";
            //$('#deimos-clock').addClass('weather-is-cold').removeClass('weather-is-warm');
        }
        $('#deimos-clock .next-state').text(nextState);
        $('#deimos-clock .current-state').text(currentState);
        $('#deimos-clock').find('.weather>.big-minute').text(convertMilliseconds(nextPeriod)); //TODO fix time-format
    }
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
