function realTimeDisplay() {
    
    const realTimeClock = new Date();

    let hours = realTimeClock.getHours();
    let minutes = realTimeClock.getMinutes();
    let seconds = realTimeClock.getSeconds();

    const amPm = ( hours < 12 ) ? "AM" : "PM";

    hours = (hours > 12) ? hours - 12 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById('time').innerHTML = 
        hours + "  :  " + minutes + "  :  " + seconds + " " + amPm;
    const t = setTimeout(realTimeDisplay, 500);

}

realTimeDisplay();
