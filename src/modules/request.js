import { updateUI, backGroundMgr, alertShow } from './feed-dom';
import { userInput } from './dom-ref';

const conTemp = (btn, tempField, feelValue) => {
  const btnValue = btn.textContent;
  const tempStr = tempField.textContent.slice(6, 8);
  const classArr = Array.from(btn.classList);
  const feelFieldStr = feelValue.textContent.slice(12, 14);
  if (btnValue.includes('°F')) {
    const fahValue = Math.round((parseInt(tempStr, 10) * 9) / 5 + 32);
    const feelFahValue = Math.round((parseInt(feelFieldStr, 10) * 9) / 5 + 32);
    tempField.textContent = `Temp: ${fahValue}°F`;
    feelValue.textContent = `Feels like: ${feelFahValue}°F`;
    btn.textContent = 'Get °C';
    classArr.splice(classArr.indexOf('bg-success'), 1, 'bg-danger');
    btn.setAttribute('class', classArr.join(' '));
  } else {
    const celsValue = Math.round(((parseInt(tempStr, 10) - 32) * 5) / 9);
    const feelCelsValue = Math.round(((parseInt(feelFieldStr, 10) - 32) * 5) / 9);
    tempField.textContent = `Temp: ${celsValue}°C`;
    feelValue.textContent = `Feels like: ${feelCelsValue}°C`;
    btn.textContent = 'Get °F';
    classArr.splice(classArr.indexOf('bg-danger'), 1, 'bg-success');
    btn.setAttribute('class', classArr.join(' '));
  }
};

const getWeatherInfo = (input) => {
  const requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=${process.env.OWM_API_KEY}&units=metric`;
  return fetch(requestURL, { mode: 'cors' });
};

const successCB = (posObj) => {
  const lat = posObj.coords.latitude;
  const lon = posObj.coords.longitude;
  const defaultURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OWM_API_KEY}&units=metric`;
  fetch(defaultURL)
    .then((res) => res.json())
    .then((data) => {
      userInput.setAttribute('placeholder', `${data.name}`);
      const iconURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      const descrpt = data.weather[0].description;
      const feels = `Feels like: ${Math.round(data.main.feels_like)}`;
      const humid = `Humidity: ${data.main.humidity}`;
      const cityTemp = `Temp: ${Math.round(data.main.temp)}`;
      updateUI(iconURL, descrpt, feels, humid, cityTemp);
      document.querySelector('span.city').textContent = `${data.name}, ${data.sys.country}`;
      const convertTemp = document.querySelector('span.btn');
      const tempField = document.querySelector('span.h1');
      const feelVal = document.querySelector('.feel');
      backGroundMgr(descrpt);
      convertTemp.onclick = () => {
        conTemp(convertTemp, tempField, feelVal);
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

export { getWeatherInfo, getUserLocation, conTemp };
