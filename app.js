console.log('Hello World!');

var rec = 0;
var hours = 0;
var minutes = 0;
var count = 0;
var len = count.length;

const recBtn = document.querySelector(".record-btn");
const recTime = document.querySelector("#rec-time");
const recDot = document.querySelector(".dot");
const camMode = document.getElementsByClassName(".cam-p")

recBtn.classList.add("active");

setInterval(logger, 1000)

function logger () {
    console.log("Hello World!");
    count++;
    console.log(count);
    
    if (rec === 0) {
        recTime.innerText="Nothing to see here...";
        recDot.classList.remove("active");
    } else {
        recTime.innerText = "recording..."+ hours +":"+ minutes +":"+ count;
        recDot.classList.toggle("active");
    }

    if (count > 59) {count = 0; minutes++;}
    if (minutes > 59) {minutes = 0; hours++;}
}

recBtn.addEventListener("click", () =>{
    recBtn.classList.toggle("active")
    hours = 0; minutes = 0; count = 0;
    if (rec === 0) {
        recTime.innerText = "Nothing to see here...";
        rec = 1;
    } else {
        recTime.innerText = "recording..."+ count;
        rec = 0;
    }
})

var header = document.getElementById("camera-modes");
var btns = header.getElementsByClassName("cam-p");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].classList.remove("active");
  this.classList.add("active");
  });
}