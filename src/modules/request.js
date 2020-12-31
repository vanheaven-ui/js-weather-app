import { updateUI } from './feed-dom';

const getWeatherInfo = async (input) => {
  let requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=${process.env.OWM_API_KEY}&units=metric`;
  return await fetch(requestURL, { mode: "cors" });
};

const successCB = (posObj) => {
  const lat = posObj.coords.latitude;
  const lon = posObj.coords.longitude;
  console.log(lat, lon);
  let defaultURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OWM_API_KEY}&units=metric`;
  fetch(defaultURL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data)
      const iconURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      const descrpt = data.weather[0].description;
      const feels = `Feels like: ${data.main.feels_like}`;
      const humid = `Humidity: ${data.main.humidity}`;
      const cityTemp = `Temp: ${Math.round(data.main.temp)}`;
      updateUI(iconURL, descrpt, feels, humid, cityTemp, data);
      document.querySelector('span.city').textContent = data.name;
      const convertTemp = document.querySelector("span.btn");
      const tempField = document.querySelector("span.h1");
      convertTemp.onclick = () => {
        conTemp(convertTemp, tempField);
      };
    });
};

const failCB = (errOb) => {
  document.body.classList.add("bg-info");
};

const getUserLocation = () => {
  navigator.geolocation.getCurrentPosition(successCB, failCB);
};

const defaultContent = () => {};

export { getWeatherInfo, getUserLocation };
