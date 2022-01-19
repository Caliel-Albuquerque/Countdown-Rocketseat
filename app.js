const daysEl = document.getElementById("dias");
const hoursEl = document.getElementById("horas");
const minutesEl = document.getElementById("minutos");
const secondsEl = document.getElementById("segundos");




const launchWebSite = "17 feb 2022";

function countdown() {

    const launchWebSiteDate = new Date(launchWebSite);
    const currentDate = new Date();

    const totalSeconds = (launchWebSiteDate - currentDate) / 1000; 

    const days = Math.floor(totalSeconds / 3600 / 24); 
    const hour = Math.floor(totalSeconds / 3600) % 24;
    const min = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    

    daysEl.innerHTML = days;
    hoursEl.innerHTML =  formatTIme(hour);
    minutesEl.innerHTML = formatTIme(min);
    secondsEl.innerHTML = formatTIme(seconds);

    

}



function formatTIme(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();



setInterval(countdown, 1000)