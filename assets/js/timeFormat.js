// Set time format

let hours = document.getElementById("hour")
let minutes = document.getElementById("minutes")

// Set 12 - hour format
function timeFormat1(){
    localStorage.setItem("Twelve Hour", true)
}

// Set 24 - hour format
function timeFormat2(){
    localStorage.setItem("Twelve Hour", false)
}