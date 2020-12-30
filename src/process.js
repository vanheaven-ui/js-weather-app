import { getWeatherInfo } from "./request";
import { userInput } from "./dom-ref";
import updateUI from "./feed-dom";

const conTemp = (btn, tempField) => {
  let btnValue = btn.textContent;
  let tempStr = tempField.textContent.slice(6, 8);
  if (btnValue.includes("°F")) {
    let fahValue = Math.round((parseInt(tempStr) * 9) / 5 + 32);
    tempField.textContent = `Temp: ${fahValue}°F`;
    btn.textContent = "Get °C";
  } else if (btnValue.includes("°C")) {
    let celsValue = Math.round(((parseInt(tempStr) - 32) * 5) / 9);
    tempField.textContent = `Temp: ${celsValue}°C`;
    btn.textContent = "Get °F";
  }
};

const processWeatherJson = () => {
  userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const response = getWeatherInfo(userInput.value);
      response
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            console.log("City you entered is not found");
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
          console.log(err);
        });
    }
  });
};

export default processWeatherJson;
