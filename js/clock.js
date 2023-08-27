const clock = document.querySelector("h2#clock");

function timeset(){
  const hours = String(new Date().getHours()).padStart(2, "0");    
  const minutes = String(new Date().getMinutes()).padStart(2, "0");
  const seconds = String(new Date().getSeconds()).padStart(2, "0");
  const h2clock = `${hours}:${minutes}:${seconds}`;
  clock.innerText = h2clock;
}

setInterval(timeset, 1000);

