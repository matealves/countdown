import Countdown from "./countdown.js";

const date = "31 Mar 2023 23:59:59 GMT-0300";

function initTimer(date) {
  const days = document.querySelector("#day");
  const hours = document.querySelector("#hour");
  const minutes = document.querySelector("#minute");
  const seconds = document.querySelector("#second");

  const validity = new Countdown(date);

  setInterval(() => {
    days.innerText = validity.total.days;
    hours.innerText = validity.total.hours;
    minutes.innerText = validity.total.minutes;
    seconds.innerText = validity.total.seconds;
  }, 1000);
}

initTimer(date);
