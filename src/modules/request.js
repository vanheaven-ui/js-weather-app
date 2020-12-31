const getWeatherInfo = async (input) => {
  let requestURL = `http://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=${process.env.OWM_API_KEY}&units=metric`;
  return await (fetch(requestURL, { mode: 'cors'}));
};

const successCB = (posObj) => {
  const lat = posObj.coords.latitude;
  const lon = posObj.coords.longitude;
  console.log(lat, lon);
};

const failCB = (errOb) => {
  document.body.classList.add('bg-info');
};

const getUserLocation = () => {
  navigator.geolocation.getCurrentPosition(successCB, failCB);
};

const defaultContent = () => {
  let defaultURL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${process.env.OWM_API_KEY}`
};

export { getWeatherInfo, getUserLocation };