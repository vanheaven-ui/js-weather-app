const getWeatherInfo = async (input) => {
  let requestURL = `http://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=${process.env.OWM_API_KEY}&units=metric`;
  return await (fetch(requestURL, { mode: 'cors'}));
};

export { getWeatherInfo };