import { getWeatherInfo } from './request';
import { userInput } from './dom-ref';
import updateUI from './feed-dom';

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
        updateUI(iconURL);  
        const dupContainers = document.querySelectorAll('#display-area .container');
        console.log(dupContainers);
        dupContainers.forEach((container, index ) =>  {
          if (index < dupContainers.length - 1) {
            console.log(container);
          }
        });   
      })
      .catch(err => {
        console.log(err);
      });
    }
  });
}

export default processWeatherJson;