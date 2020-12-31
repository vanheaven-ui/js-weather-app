import { getWeatherInfo } from "./request";
import { userInput, searchSect } from "./dom-ref";
import { updateUI, resetAllColumns, alertShow } from "./feed-dom";

const conTemp = (btn, tempField) => {
  let btnValue = btn.textContent;
  let tempStr = tempField.textContent.slice(6, 8);
  const classArr = Array.from(btn.classList);
  if (btnValue.includes("°F")) {
    let fahValue = Math.round((parseInt(tempStr) * 9) / 5 + 32);
    tempField.textContent = `Temp: ${fahValue}°F`;
    btn.textContent = "Get °C";
    classArr.splice(classArr.indexOf('bg-success'), 1, 'bg-danger');
    btn.setAttribute('class', classArr.join(' '));
  } else if (btnValue.includes("°C")) {
    let celsValue = Math.round(((parseInt(tempStr) - 32) * 5) / 9);
    tempField.textContent = `Temp: ${celsValue}°C`;
    btn.textContent = "Get °F";
    classArr.splice(classArr.indexOf('bg-danger'), 1, 'bg-success');
    btn.setAttribute('class', classArr.join(' '));
  }
};

const processWeatherJson = () => {
  userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      resetAllColumns();
      e.preventDefault();
      const response = getWeatherInfo(userInput.value);
      response
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            alertShow("The city you entered is not found", userInput);
          }
        })
        .then((data) => {
          const iconURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
          const descrpt = data.weather[0].description;
          const feels = `Feels like: ${data.main.feels_like}`;
          const humid = `Humidity: ${data.main.humidity}`;
          const cityTemp = `Temp: ${Math.round(data.main.temp)}`;        
          updateUI(iconURL, descrpt, feels, humid, cityTemp);
          const convertTemp = document.querySelector("span.btn");
          const tempField = document.querySelector("span.h1");
          convertTemp.onclick= () => {
            conTemp(convertTemp, tempField);
          }
          
        })
        .catch((err) => {
          alertShow(err, searchSect, 0);
        });
    }
  });
};

export default processWeatherJson;