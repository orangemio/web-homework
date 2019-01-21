$(function () {

    //Golbal 
    let hidden = true;
    let currentStep = 1;

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

    function storage() {

    }

    let arr = calculate();

    $('#nextstep').click(function () {

        if(currentStep == arr.length + 1){

            window.location.href="www.baidu.com";
        }

        if (hidden) {
            $("#hidden").addClass("unvisible");
            $("#user").removeClass("unvisible");
            $("#message").removeClass("unvisible").text(function(){
                if(arr[currentStep-1] == 2){
                    return "杀手"
                }else{
                    return "平民"
                }
            });
            $('#index').text(currentStep.toString());
            $('#nextstep').text(
                function(){
                    if(currentStep==arr.length){
                        return ("法官查看");
                    }else{
                        return ("隐藏并传达给" + (currentStep + 1) + "号");
                    }
                    
                }
                
            );
            currentStep++;
            hidden = false;
        } else {
            if(currentStep == arr.length + 1){
                window.location.href="https://www.baidu.com";
            }else{
            $("#user").addClass("unvisible");
            $("#message").addClass("unvisible");
            $("#hidden").removeClass("unvisible");
            $('#index').text(currentStep.toString());
            $('#nextstep').text("查看" + currentStep + "号身份");
            hidden = true;
            }
        }
        storage();
    });


})