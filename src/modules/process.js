import { getWeatherInfo, conTemp } from './request';
import { userInput, searchSect, spinner } from './dom-ref';
import {
  updateUI, resetAllColumns, alertShow, clearInput, backGroundMgr,
} from './feed-dom';

const processWeatherJson = () => {
  userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      spinner.style.display = 'block';
      resetAllColumns();
      clearInput();
      e.preventDefault();
      const response = getWeatherInfo(userInput.value);
      response
        .then((res) => {
          spinner.style.display = 'none';
          if (res.ok) {
            return res.json();
          }
          alertShow('The city you entered is not found', userInput, 3000);
          return new Error();
        })
        .then((data) => {
          const iconURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
          const descrpt = data.weather[0].description;
          const feels = `Feels like: ${Math.round(data.main.feels_like)}`;
          const humid = `Humidity: ${data.main.humidity}`;
          const cityTemp = `Temp: ${Math.round(data.main.temp)}`;
          updateUI(iconURL, descrpt, feels, humid, cityTemp, data.sys.country);
          const convertTemp = document.querySelector('span.btn');
          const tempField = document.querySelector('span.h1');
          backGroundMgr(descrpt);
          convertTemp.onclick = () => {
            conTemp(convertTemp, tempField);
          };
        })
        .catch((err) => {
          alertShow(err, searchSect, 0);
        });
    }
  });
};

export default processWeatherJson;
