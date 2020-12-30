import { getWeatherInfo } from './request';
import { userInput } from './dom-ref';
import updateUI from './feed-dom';

const conTemp = (btn, tempField) => {
  btn.onclick = (e) => {
    console.log(e.target);
  };
};

const processWeatherJson = () => {
  userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const response = getWeatherInfo(userInput.value);
      response.then(res => {
        if (res.ok) {
        return res.json();
        } else {
          console.log('City you entered is not found');
        } 
      })
      .then(data => {
        const iconURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        const descrpt = data.weather[0].description;
        const feels = `Feels like: ${data.main.feels_like}`;
        const humid = `Humidity: ${data.main.humidity}`;
        const cityTemp = `Temp: ${data.main.temp}`;
        updateUI(iconURL, descrpt, feels, humid, cityTemp);
        const convertTemp = document.querySelector('span.btn');
        conTemp(convertTemp);
      })
      .catch(err => {
        console.log(err);
      });
    }
  });
}

export default processWeatherJson;