import 'bootstrap/dist/css/bootstrap.min.css'; // eslint
import './styles/custom.css';
import processWeatherJson from './modules/process';
import { getUserLocation } from './modules/request';
import myImg from './images/clearsky.jpg';
import myImg1 from './images/clearskynight.jpg';
import myImg2 from './images/fewcloud.jpeg';
import myImg3 from './images/fewcloudsnight.jpg';
import myImg4 from './images/mist.jpeg';
import myImg5 from './images/mistnight.jpeg';
import myImg6 from './images/nightrain.jpeg';
import myImg7 from './images/nightsnow.jpg';
import myImg8 from './images/nightthunderstom.jpeg';
import myImg9 from './images/rain.jpeg';
import myImg10 from './images/scatteredcloud.jpeg';
import myImg11 from './images/scatterenight.jpeg';
import myImg12 from './images/snow.jpeg';
import myImg13 from './images/thunderstorm.jpeg';

// let img = new Image();
// img.src = clrSky;
// console.log(img);

processWeatherJson();
getUserLocation();