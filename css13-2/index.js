
var playing = false;

$(".play").click(function(){
    if(playing){
        playing = false;
        document.getElementById('MyPlay').pause();
    }else{
        playing = true;
        document.getElementById('MyPlay').play();
    }

})

