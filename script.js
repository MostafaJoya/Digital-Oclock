"use strict";
//FUNCTIONALLITY FOR OCLOCK
const oclock = function () {
  //current Date,hour,minute and seconds
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  //select current Day
  const day = now.getDay();
  const today = document.querySelector(`span[data-day = '${day}']`);
  today.classList.add("active");

  //format for 12 hour AM or PM
  let day_night = "AM";
  if (hours > 12) {
    day_night = "PM";
    hours = hours - 12;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }

  //create time format
  const strOclock = `${hours}:${minutes}:${seconds} ${day_night}`;
  time.textContent = strOclock;
};

setInterval(oclock, 1000);
