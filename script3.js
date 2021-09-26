
let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let displaymiliseconds = 0;
let displayseconds = 0;
let displayminutes = 0;
let interval = null;
let status = "stopped";
function stopWatch(){

    miliseconds++;
    if(miliseconds / 100 === 1){
        miliseconds = 0;
        seconds++;

        if(seconds / 60 === 1){
            seconds = 0;
            minutes++;
        }

    }
    if(miliseconds < 10){
        displaymiliseconds = "0" + miliseconds.toString();
    }
    else{
        displaymiliseconds = miliseconds;
    }

    if(seconds < 10){
        displayseconds = "0" + seconds.toString();
    }
    else{
        displayseconds = seconds;
    }

    if(minutes < 10){
        displayminutes = "0" + minutes.toString();
    }
    else{
        displayminutes = minutes;
    }

    document.getElementById("timer").innerHTML = displayminutes + ":" + displayseconds + ":" + displaymiliseconds;
    
}



function startStop(){

    if(status === "stopped"){

        
        interval = window.setInterval(stopWatch, 10);
        document.getElementById("startstop").innerHTML = "Stop";
        status = "started";
        $('.display1').addClass("anim");
        $('.anim').css("animation-play-state","running");
    }
    else{

        window.clearInterval(interval);
        document.getElementById("startstop").innerHTML = "Start";
        status = "stopped";
        //$('.display1').removeClass("anim");
        $('.anim').css("animation-play-state","paused");
    }

}
function reset(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("timer").innerHTML = "00:00:00";
    document.getElementById("startstop").innerHTML = "Start";
    $('.display1').removeClass("anim");
}