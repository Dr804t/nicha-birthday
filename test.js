setInterval(time,1000);
function time()
{   
    let clock = new Date();
    let hbd = new Date("2024,7,19");
    let display = hbd-clock;
    const d =1000*60*60*24;
    const hr =  1000*60*60;
    const min = 1000*60;
    const sec = 1000;
    day = Math.floor(display / (d));
    hour = Math.floor((display - (day*d))/hr)
    minute = Math.floor((display - ((day*d)+(hour*hr)))/min)
    second = Math.floor((display - (day*d) - (hour*hr) - (minute*min))/sec)
    document.getElementById("p1").innerHTML = day;
    document.getElementById("p2").innerHTML = hour;
    document.getElementById("p3").innerHTML = minute;
    document.getElementById("p4").innerHTML = second;
    document.getElementById("display").innerHTML = day + " day " + hour + " hrs " + minute + " min "
}

time()