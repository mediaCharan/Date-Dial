const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const year = document.getElementById("year");
const loading = document.getElementById("loading");



function updateCountdown() {
  const month=document.getElementById("monthh").value;
  const dt=document.getElementById("datee").value;
  const yearr=document.getElementById("yearr").value;
  const newYearTime = new Date(`${month} ${dt} ${yearr} 00:00:00`);

  const currentTime = new Date();
  const difference = newYearTime - currentTime;
  const currentDays = Math.floor(difference / 1000 / 60 / 60 / 24);
  const currentHours = Math.floor(difference / 1000 / 60 / 60) % 24;
  const currentMinutes = Math.floor(difference / 1000 / 60) % 60;
  const currentSeconds = Math.floor(difference / 1000) % 60;
  days.innerText = currentDays;
  hours.innerText = currentHours < 10 ? "0" + currentHours : currentHours;
  minutes.innerText =
    currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;
  seconds.innerText =
    currentSeconds < 10 ? "0" + currentSeconds : currentSeconds;
}

setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);

setInterval(updateCountdown, 1000);

year.innerText = nextYear;
