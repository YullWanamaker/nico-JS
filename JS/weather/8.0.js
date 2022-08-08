//api.openweathermap.org/data/2.5/weather?lat=36.2037&lon=127.0797&appid=707496ccdcfe18b3027b9778452f402c

https: function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("you live in", lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.jason())
    .then((date) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      const API_KEY = "707496ccdcfe18b3027b9778452f402c";

      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}/ ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
