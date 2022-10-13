//const { padStart } = require("lodash");

 function convert(valNum) {
    var z = document.forms["myForm"]["num"].value;
    console.log("check: " + z)
    if(/\D/.test(z)) {
      alert("Enter number please!");
      } else {
        document.getElementById("outputGrams").innerHTML = Math.round(valNum/ 0.0022046, 0);
        document.getElementById("outputGramsChild").innerHTML = Math.round(valNum/ 0.0022046, 0);
        console.log("check:" + valNum)
        document.getElementById("outputOz").innerHTML = Math.round(valNum * 35.274, 0);
        document.getElementById("outputLbs").innerHTML = Math.round(valNum * 2.20462, 0);
      };
 }

const displayTime = () =>{
  let date = new Date;
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let amPm = '';

  if(hour < 12) {
    amPm = 'AM'
  } else {
    amPM = 'PM';
    hour = hour - 12;
  }

  let padHour = String(hour).padStart(2,0)
  let padMinute = String(minute).padStart(2,0)
  let padSecond = String(second).padStart(2,0)
  
  time.textContent = `${hour}:${padMinute}:${padSecond} ${amPM}`;
  requestAnimationFrame(displayTime);
  
}

displayTime();

 function change() {
  
 }
