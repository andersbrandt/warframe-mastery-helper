module.exports = function () {

    function convertMilliseconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    this.updateTime = function () {
        var nextState;
        var nextPeriod;
        var tStart = 1542132024000;
        var cycleLength = 1600000;
        var warmLength = 400000;
        var currentTime = (Date.now() - tStart) % cycleLength;
        if (currentTime < warmLength) {
            nextPeriod = warmLength - currentTime;
            nextState = "cold";
            $('#orbvallis-clock').addClass('weather-is-warm').removeClass('weather-is-cold');
        } else {
            nextPeriod = cycleLength - currentTime;
            nextState = "warm";
            $('#orbvallis-clock').addClass('weather-is-cold').removeClass('weather-is-warm');
        }
        $('#orbvallis-clock .next-period').text(nextState);
        $('.weather>.big-minute').text(convertMilliseconds(nextPeriod));
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
