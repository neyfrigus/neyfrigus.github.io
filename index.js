function quarter() {
    window.resizeTo(window.screen.availWidth / 2, window.screen.availHeight / 2);
}

//wAIfu sound

let sound = new Audio('https://github.com/neyfrigus/neyfrigus.github.io/blob/main/button.mp3');
let alarmTime = "0";

//populate the alarm 

function hoursMenu() {

    var select = document.getElementById('alarmhrs');
    var hrs = 24;

    for (i = 0; i <= hrs; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);

    }
}
hoursMenu();

function minMenu() {

    var select = document.getElementById('alarmmins');
    var min = 59;

    for (i = 0; i <= min; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}
minMenu();

function secMenu() {

    var select = document.getElementById('alarmsecs');
    var sec = 59;

    for (i = 0; i <= sec; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}
secMenu();

//set the alarm

function alarmSet() {

    var hr = document.getElementById('alarmhrs');

    var min = document.getElementById('alarmmins');

    var sec = document.getElementById('alarmsecs');


    var selectedHour = hr.options[hr.selectedIndex].value;
    var selectedMin = min.options[min.selectedIndex].value;
    var selectedSec = sec.options[sec.selectedIndex].value;

    alarmTime = `${selectedHour}:${selectedMin}:${selectedSec}`;
    console.log('alarmTime:' + alarmTime);

    document.getElementById('alarmhrs').disabled = true;
    document.getElementById('alarmmins').disabled = true;
    document.getElementById('alarmsecs').disabled = true;

    document.getElementById("reminder").textContent = alarmTime;

}

//set the clock and check if clock == alarm to play sound

function updateClock() {

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = currentTime;

    if (currentTime == alarmTime) {
        sound.play();
    }

}

//clear alarm

function alarmClear() {

    document.getElementById('alarmhrs').disabled = false;
    document.getElementById('alarmmins').disabled = false;
    document.getElementById('alarmsecs').disabled = false;

}

updateClock();


setInterval(updateClock, 1000);
