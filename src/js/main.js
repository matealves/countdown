import Countdown from "./Countdown.js";

const date = "31 Dec 2023 23:59:59 GMT-0300";

const days = document.querySelector("#day");
const hours = document.querySelector("#hour");
const minutes = document.querySelector("#minute");
const seconds = document.querySelector("#second");

function initTimer(date) {
  const validity = new Countdown(date);

  function zeroFormatter(time) {
    return validity.total[time] < 10
      ? `0${validity.total[time]}`
      : validity.total[time];
  }

  days.innerText = zeroFormatter("days");
  hours.innerText = zeroFormatter("hours");
  minutes.innerText = zeroFormatter("minutes");
  seconds.innerText = zeroFormatter("seconds");
}

setInterval(initTimer, 1000, date);
initTimer(date);
