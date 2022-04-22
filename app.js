displayTime = () => {

    //get current time
  var dateTime = new Date();
  var hours = dateTime.getHours();
  var minutes = dateTime.getMinutes();
  var seconds = dateTime.getSeconds();
  var session = document.getElementById("session");

  // if jours less than 12 its PM before its AM
  hours >= 12 ? (session.innerHTML = "PM") : (session.innerHTML = "AM");

  // no military time!!
  if (hours > 12) {
    hours = hours - 12;
  }


// add 0s for cuteness
  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // display time
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
};

// timer IDK
setInterval(displayTime, 10);

addToSchedule = () => {


let scheduleItem = document.createElement("div");
  let itemTime = document.createElement("div");
  
  scheduleItem.className = "scheduleItem"
  itemTime.className = "timeInput";

  let scheduleInput = document.querySelector("#activity").value;
  let timehrsInput = document.querySelector("#timehrs").value;
  let timeminsInput = document.querySelector("#timemins").value;
  let timesessionInput = document.querySelector("#dropdown_session").value;

  let inputTime = timehrsInput + ":" + timeminsInput + timesessionInput;

  scheduleItem.textContent = scheduleInput;
  itemTime.textContent = inputTime;

  if (scheduleInput == "" || timehrsInput == "" || timeminsInput == "") {
    alert("Are you missing something?");
  }

  if (Number(timehrsInput) > 12 || Number(timeminsInput) > 59) {
    return alert("Please enter a valid time");
  }

  if (scheduleInput !== "" && timehrsInput !== "" && timeminsInput !== "") {
    document
      .querySelector("#schedule_items")
      .append(scheduleItem);
      document
      .querySelector("#schedule_time")
      .append(itemTime);
    
    timeCountdown();

    document.querySelector("#activity").value = "";
    document.querySelector("#timehrs").value = "";
    document.querySelector("#timemins").value = "";
  }
};


timeCountdown = () => {
    let timeCountdown = document.createElement("div");
    timeCountdown.className = "timeCountdown"

    document.querySelector("#schedule_countdown").append(timeCountdown)
    
    let timeInputs = document.querySelectorAll(".timeInput")

    timeInputs.forEach(item => {
      
    let time_i = item.innerHTML;

    if (time_i.includes("pm")) {
    time_i = time_i
      .replace("pm", "")
      .split(":")
      .map((item) => Number(item));}
    
      if (time_i[0] < 12) {
      time_i[0] += 12;
    }
  
  if (time_i.includes("am")) {
    time_i = time_i
    .replace("am", "")
    .split(":")
    .map((item) => Number(item))
  }
 console.log(time_i)

  let currTime = new Date();
  let hr = currTime.getHours();
  let min = currTime.getMinutes();

  currTime = hr + ":" + min;
  currTime = currTime.split(":").map((item) => Number(item));

  let currHrs = currTime[0];
  let currMins = currTime[1];
  let inputHrs = time_i[0];
  let inputMins = time_i[1];

  let durationMins = inputMins - currMins;
  let durationHrs = inputHrs - currHrs;



  if (currMins > inputMins) {
    durationHrs = durationHrs - 1;
    durationMins = 60 - currMins + inputMins;
  }
  console.log(durationMins)

  timeCountdown.innerHTML = "in " + durationHrs + " hours and " + durationMins + " minutes"
});
}

document.querySelector("#clear_schedule").addEventListener("click", () => {
    document.querySelector("#schedule_items").textContent = "";
    document.querySelector("#schedule_time").textContent = "";
    document.querySelector("#schedule_countdown").textContent = "";
  });
  