$(function () {
    function setDefault() {
        $('#inputnumber').val(4);
        $('#customRange2').val(4);
        changedisplay(4);
    }
    function checkValue() {
        var number = Number($('#inputnumber').val());
        if (Number.isInteger(number) && number >= 4 && number <= 18) {
            return true;
        } else {
            $('#exampleModal').modal();
            setDefault();
            return false;
        }
    }
    function checkKey() {
        var key = {};
        key.killerkey = $('#killerkey').val();
        key.peoplekey = $('#peoplekey').val();
        if (key.killerkey == '') {
            $('#exampleModal2').modal();
        } else {
            if (key.peoplekey == '') {
                $('#exampleModal2').modal();
            } else {
                window.localStorage.setItem("key", JSON.stringify(key));
            }
        }
    }
    function saveOrder() {

        var cache = {};
        var order = [];
        cache.number =  Number($('#inputnumber').val());
        $(".visible").each(function(index){
            order.push(Number($(this).css("order")));
        });
        cache.order = order;
        window.localStorage.setItem("cache",JSON.stringify(cache));
    }

    // 4 ---- 1
    // 5 ---- 1
    // 6 ---- 2
    // 7 ---- 2
    // 8 ---- 2
    // 9 ---- 3
    // 10 ---- 3
    // 11 ---- 3
    // 12 ---- 4
    // 13 ---- 4
    // 14 ---- 4
    // 15 ---- 4
    // 16 ---- 5
    // 17 ---- 5
    // 18 ---- 5


    const ruler = ["#ruler1", "#ruler2", "#ruler3", "#ruler4", "#ruler5"];
    const people = ["#people1", "#people2", "#people3", "#people4", "#people5", "#people6", "#people7", "#people8", "#people9", "#people10", "#people11", "#people12", "#people13"];

    function reedomNumber() {
        return ("-" + Math.floor((Math.random() * (99 - 4) + 4)));
    }



    function setnormal() {
        for (let i = 0; i < ruler.length; i++) {
            $(ruler[i]).removeClass("visible").addClass("unvisible").css("order", "0");
        }
        for (let i = 0; i < people.length; i++) {
            $(people[i]).removeClass("visible").addClass("unvisible").css("order", "0");
        }
    }

    function changedisplay(n) {
        setnormal();
        let rulernumber;
        if (n >= 4 && n <= 5) {
            rulernumber = 1;
        } else if (n >= 6 && n <= 8) {
            rulernumber = 2;
        } else if (n >= 9 && n <= 11) {
            rulernumber = 3;
        } else if (n >= 12 && n <= 15) {
            rulernumber = 4;
        } else {
            rulernumber = 5;
        }

        let peoplenumber = n - rulernumber;

        for (let i = 0; i < rulernumber; i++) {
            $(ruler[i]).removeClass("unvisible").addClass("visible").css("order", "-2" + i);
        }
        for (let i = 0; i < peoplenumber; i++) {
            $(people[i]).removeClass("unvisible").addClass("visible").css("order", "-1" + i);
        }

    }

    function reedom() {
        $(".visible").each(function () {
            $(this).css("order", reedomNumber());
        });
    }

    $('#customRange2').bind('input', function () {
        $("#inputnumber").val($(this).val());
        changedisplay($(this).val());
    })

    $("#inputnumber").change(function (e) {
        if (checkValue()) {
            $('#customRange2').val($(this).val());
            console.log($(this).val());
            changedisplay(Number($('#inputnumber').val()));
        }
    });

    $('#ok').click(function () {
        reedom();
    });

    $("#nextstep").click(function () {
        checkValue();
        checkKey();
        saveOrder();

    })
})

