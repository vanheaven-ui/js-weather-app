import { updateUI, backGroundMgr, alertShow } from './feed-dom';
import { conTemp } from './process';
import { userInput } from './dom-ref';

const OWM_KEY = process.env.OWM_API_KEY || config.MY_OWM_API_KEY;

const getWeatherInfo = (input) => {
  const requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=${OWM_KEY}&units=metric`;
  return fetch(requestURL, { mode: 'cors' });
};

const successCB = (posObj) => {
  const lat = posObj.coords.latitude;
  const lon = posObj.coords.longitude;
  const defaultURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OWM_KEY}&units=metric`;
  fetch(defaultURL)
    .then((res) => res.json())
    .then((data) => {
      userInput.setAttribute('placeholder', `${data.name}`);
      const iconURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      const descrpt = data.weather[0].description;
      const feels = `Feels like: ${data.main.feels_like}`;
      const humid = `Humidity: ${data.main.humidity}`;
      const cityTemp = `Temp: ${Math.round(data.main.temp)}`;
      updateUI(iconURL, descrpt, feels, humid, cityTemp, data);
      document.querySelector('span.city').textContent = data.name;
      const convertTemp = document.querySelector('span.btn');
      const tempField = document.querySelector('span.h1');
      backGroundMgr(descrpt);
      convertTemp.onclick = () => {
        conTemp(convertTemp, tempField);
      };
    });
};

const failCB = (errObj) => {
  alertShow(errObj, userInput, 0);
  document.body.classList.add('bg-info');
  userInput.setAttribute('placeholder', 'Enter your city');
};

const getUserLocation = () => {
  navigator.geolocation.getCurrentPosition(successCB, failCB);
};

export { getWeatherInfo, getUserLocation };
