$(function () {

    //ReOrder Arroy
    function sortarray(arr) {
        return Array.prototype.slice.call(arr).sort(function (a, b) { return a - b; });
    }
    //check null
    const key = JSON.parse(window.localStorage.getItem("key"));
    const cache = JSON.parse(window.localStorage.getItem("cache"));
    if (key == null) {
        alert("未设置关键词，请返回上一页");
    } else if (cache == null) {
        alert("未设置参与人数，请返回上一页");
    }



    function calculate() {
        const number = cache.number;
        const order = cache.order;
        const neworder = sortarray(order);
        var arr = new Array(number);
        for (var n = 0; n < number; n++) { arr[n] = 1; };
        let ruler;
        if (number >= 4 && number <= 5) {
            ruler = 1;
        } else if (number >= 6 && number <= 8) {
            ruler = 2;
        } else if (number >= 9 && number <= 11) {
            ruler = 3;
        } else if (number >= 12 && number <= 15) {
            ruler = 4;
        } else {
            ruler = 5;
        }
        for (let index = 0; index < ruler; index++) {
            arr[neworder.indexOf(order[index])] = 2;
        }
        return arr;
    }

    let arr = calculate();

    


})