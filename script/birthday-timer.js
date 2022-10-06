/*-------------------- TIMERS NUMBER ----------------------------------------------------*/

var birthday = new Date("November 12 2022 00:00:00").getTime();

var func = setInterval(function () {
    var now = new Date().getTime();

    var distance = birthday - now;

    var mounts = Math.floor(distance / 1000 / 60 / 60 / 24 / 31);
    var days = Math.floor(distance / 1000 / 60 / 60 / 24) % 31;
    var hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    var minutes = Math.floor(distance / 1000 / 60) % 60;
    var seconds = Math.floor(distance / 1000) % 60;
    var mili_seconds = Math.floor(distance) % (1000*60);

    document.querySelector(".one_bt").style.strokeDashoffset = 394 - ((394/12)*mounts);
    if (mounts < 10){
        document.getElementById("mount").innerHTML = "0" + mounts;
    }else{
        document.getElementById("mount").innerHTML = mounts;
    }

    document.querySelector(".two_bt").style.strokeDashoffset = 394 - ((394/31)*days);
    if (days < 10){
        document.getElementById("day").innerHTML = "0" + days;
    }else{
        document.getElementById("day").innerHTML = days;
    }
    
    document.querySelector(".three_bt").style.strokeDashoffset = 394 - ((394/24)*hours);
    if (hours < 10){
        document.getElementById("hour").innerHTML = "0" + hours;
    }else{
        document.getElementById("hour").innerHTML = hours;
    }

    document.querySelector(".four_bt").style.strokeDashoffset = 394 - ((394/60)*minutes);
    if (minutes < 10){
        document.getElementById("minute").innerHTML = "0" + minutes;
    }else{
        document.getElementById("minute").innerHTML = minutes;
    }
    
    document.querySelector(".five_bt").style.strokeDashoffset = 394 - ((394/(1000*60))*mili_seconds);
    if (seconds < 10){
        document.getElementById("second").innerHTML = "0" + seconds;
    }else{
        document.getElementById("second").innerHTML = seconds;
    }

})

/*-------------------- TIMERS CIRCLE ----------------------------------------------------*/

