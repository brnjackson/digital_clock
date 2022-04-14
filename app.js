displayTime = () => {
    var dateTime = new Date()
    var hours = dateTime.getHours()
    var minutes = dateTime.getMinutes()
    var seconds = dateTime.getSeconds()
    var session = document.getElementById('session')

    hours >= 12 ? session.innerHTML = "PM": session.innerHTML = "AM"

    if (hours > 12) {
        hours = hours - 12
    }

    if (hours < 10) {
        hours = '0' + hours
    }
    
    if (seconds < 10) {
        seconds = '0' + seconds
    }

    document.getElementById('hours').innerHTML = hours
    document.getElementById('minutes').innerHTML = minutes
    document.getElementById('seconds').innerHTML = seconds
    document.getElementById('milliseconds').innerHTML = milliseconds
}

setInterval(displayTime, 10)