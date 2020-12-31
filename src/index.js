import './styles/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import processWeatherJson from './modules/process';
import { getUserLocation } from './modules/request';

processWeatherJson();
getUserLocation();