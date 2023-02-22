import Countdown from "./Countdown.js";

let inputDate = document.querySelector("#date");

const days = document.querySelector("#day");
const hours = document.querySelector("#hour");
const minutes = document.querySelector("#minute");
const seconds = document.querySelector("#second");

const actualDate = new Date();

function addDays(date, days) {
  date.setDate(date.getDate() + days);
  return date;
}
const newDate = addDays(actualDate, 7);

let date = newDate.toISOString().slice(0, 10) + "T02:59:59Z";
const cleanDate = newDate.toISOString().slice(0, 10);

inputDate.setAttribute("min", cleanDate);
inputDate.value = cleanDate;

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

let interval = setInterval(initTimer, 1000, date);

function updateInterval() {
  clearInterval(interval);
  date = inputDate.value;
  console.log(date);

  initTimer(date);
  interval = setInterval(initTimer, 1000, date);
  inputDate.blur();
}

inputDate.addEventListener("input", updateInterval);

initTimer(date);
