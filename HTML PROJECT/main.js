let hours = document.querySelector("#hour");
let mins = document.querySelector("#min");
let sec = document.querySelector("#sec");
let btn = document.querySelector(".clock");
let amPm = document.querySelector("#ampm")
console.log(hours);
console.log(mins);
console.log(sec);
 console.log(amPm);

let is24Hourmode = false;

 function updateClock() {
    let currentTime =new Date();
     let hourValue = currentTime.getHours();

    if(!is24Hourmode){
      
    amPm.innerText = hourValue >= 12 ?"pm":"am";
    hourValue = hourValue % 12 || 12;
   
    }
    else{
      amPm.innerText = "";
    }

    // console.log(currentTime);

    hours.innerHTML = (hourValue<10?"0":"")+hourValue;
    console.log(hours);

    mins.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
   //  console.log(mins);

    sec.innerHTML =  (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
   //  console.log(sec);
   
 };
 let btnColor = true; 
 setInterval(updateClock,1000);
 btn.addEventListener("click",() => {
    is24Hourmode = !is24Hourmode;
    updateClock();
    
    if( btnColor)
    {
    btn.innerText = "set to the 12 hours";
    btn.style.backgroundColor = "red";
    btnColor = false;
    }
    else{
      btn.style.backgroundColor = "green";
      btn.innerText = "set to the 24 hours";
      btnColor = true;
    }
   
 });