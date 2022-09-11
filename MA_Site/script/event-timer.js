/*-------------------- TIMERS NUMBER ----------------------------------------------------*/

document.querySelector('#reload').onclick = () => {
        window.location.reload();
};

const getDateButton = document.querySelector('#getDateButton');
const date_time = document.querySelector('#date_time');
const error = document.querySelector('#error');

getDateButton.addEventListener('click', () => {

    if (!date_time.value) {
        document.getElementById("mount_tim").innerHTML = '00';
        document.getElementById("day_tim").innerHTML = '00';
        document.getElementById("hour_tim").innerHTML = '00';
        document.getElementById("minute_tim").innerHTML = '00';
        document.getElementById("second_tim").innerHTML = '00';
        error.innerHTML = "Введіть дату та час<br>Input date and time";
        return
    }

    error.innerHTML = " ";
    localStorage.setItem('date_time', date_time.value);

    var birthday = new Date(`${localStorage.getItem('date_time')}`).getTime();

    var func = setInterval(function () {
        var now = new Date().getTime();
        var distance = birthday - now;
        var mounts = Math.floor(distance / 1000 / 60 / 60 / 24 / 31);
        var days = Math.floor(distance / 1000 / 60 / 60 / 24) % 31;
        var hours = Math.floor(distance / 1000 / 60 / 60) % 24;
        var minutes = Math.floor(distance / 1000 / 60) % 60;
        var seconds = Math.floor(distance / 1000) % 60;
        var mili_seconds = Math.floor(distance) % (1000*60);

        document.querySelector(".one_bt_tim").style.strokeDashoffset = 394 - ((394/12)*mounts);
        if (mounts < 10){
            document.getElementById("mount_tim").innerHTML = "0" + mounts;
        }else{
            document.getElementById("mount_tim").innerHTML = mounts;
        }

        document.querySelector(".two_bt_tim").style.strokeDashoffset = 394 - ((394/31)*days);
        if (days < 10){
            document.getElementById("day_tim").innerHTML = "0" + days;
        }else{
            document.getElementById("day_tim").innerHTML = days;
        }
        
        document.querySelector(".three_bt_tim").style.strokeDashoffset = 394 - ((394/24)*hours);
        if (hours < 10){
            document.getElementById("hour_tim").innerHTML = "0" + hours;
        }else{
            document.getElementById("hour_tim").innerHTML = hours;
        }

        document.querySelector(".four_bt_tim").style.strokeDashoffset = 394 - ((394/60)*minutes);
        if (minutes < 10){
            document.getElementById("minute_tim").innerHTML = "0" + minutes;
        }else{
            document.getElementById("minute_tim").innerHTML = minutes;
        }
        
        document.querySelector(".five_bt_tim").style.strokeDashoffset = 394 - ((394/(1000*60))*mili_seconds);
        if (seconds < 10){
            document.getElementById("second_tim").innerHTML = "0" + seconds;
        }else{
            document.getElementById("second_tim").innerHTML = seconds;
        }

    })
});

/*-------------------- TIMERS CIRCLE ----------------------------------------------------*/

