
var startbtn = document.getElementById("start");
var endbtn = document.getElementById("stop");
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var id = 0;

var getRandomColor = function () {
    return '#' +
        (function (color) {
            return (color += '0123456789abcdef'[Math.floor(Math.random() * 16)])
                && (color.length == 6) ? color : arguments.callee(color);
        })('');
}

var reedom = function () {
    id = setInterval(
        function () {
            for (let t = 0; t < arr.length; t++) {
                let element = document.getElementById(arr[t]);
                element.style.background = 'orange';
            }

            var result = arr.sort(function () { return 0.5 - Math.random(); }).slice(0, 3);

            for (let i = 0; i < result.length; i++) {
                let element = document.getElementById(result[i]);
                element.style.background = getRandomColor();
            }
        },
        3000
    );
}

var clearReedom = function () {
    clearInterval(id);
    for (let t = 0; t < arr.length; t++) {
        let element = document.getElementById(arr[t]);
        element.style.background = 'orange';
    }
}





