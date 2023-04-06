//get necessary element and assign it to variable
let digit = document.getElementsByClassName("digit")
let hourShow = document.getElementById("h")
let minShow = document.getElementById("m")
let secShow = document.getElementById("s")
let ampmShow = document.getElementById("ampm")

const setTime = () =>{
    // get-time 
    date = new Date()
    //set time variable
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let ampm = ""
    // 12 hour time format
    ampm = hour < 12 ? "AM" : (hour < 24 ? "PM" : "AM");
    hour = hour % 12 
    hour = hour ? hour : 12
    min = min < 10 ? "0"+ min : min
    sec = sec < 10 ? "0"+ sec : sec
    // show time in document 
    hourShow.innerText = hour
    minShow.innerText = min
    secShow.innerText = sec
    ampmShow.innerText = ampm
}
//update time in every sec. 
setInterval(setTime,1000)

