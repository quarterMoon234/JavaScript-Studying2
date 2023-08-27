const API_KEY = "8e609bbbeb59ca23e2f6f4faf529f42a";

function geoOk(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(weatherAPI)
  .then(response => response.json())
  .then(data => {
    const geoName = document.querySelector("#geo span:first-child");
    const geoWeather = document.querySelector("#geo span:last-child");
    geoName.innerText = data.name;
    geoWeather.innerText = `${data.weather[0].main} / ${data.main.temp}C`;
  });
}

function geoError(){
  alert("Error");
}

navigator.geolocation.getCurrentPosition(geoOk, geoError);