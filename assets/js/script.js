let ampm = document.getElementById('ampm')

function displayTime() {

    let dateTime = new Date();

    let hr = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();

    if (hr > 12) {
        hr = hr - 12
        ampm.innerHTML = 'PM'
    }
    else{
        ampm.innerHTML = 'AM'
    }

    document.getElementById('hours').innerHTML = zeroAdd(hr)
    document.getElementById('mins').innerHTML = zeroAdd(min)
    document.getElementById('seconds').innerHTML = zeroAdd(sec)
}

function zeroAdd(num) {
    return num < 10 ? "0" + num : num;
}

setInterval(displayTime, 500)

