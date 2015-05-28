var countdown = function (end,elements,callback) {
    var second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
    var end = new Date(end),
        timer,
        calculate = function () {
            var now = new Date(),
                remaining = end.getTime() - now.getTime(),
                data;
            if (isNaN(end)) {
                console.log("Invalid date!");
                return
            }
            if (remaining <= 0) {
                clearInterval(timer);
                if (typeof callback === 'function') {
                    callback();
                }
            } else {
                if (!timer) {
                    timer = setInterval(calculate, second);
                }
                data = {
                    'days': Math.floor(remaining / day),
                    'hours': Math.floor((remaining % day) / hour),
                    'minutes': Math.floor((remaining % hour) / minute),
                    'seconds': Math.floor((remaining % minute) / second)
                };
                if (elements.length) {
                    for (x in elements) {
                        var x = elements[x];
                        data[x] = ('00' + data[x]).slice(-2);
                        document.getElementById(x).innerHTML = data[x];
                    }
                }
            }


        };
    calculate();
}