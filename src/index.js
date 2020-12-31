import 'bootstrap/dist/css/bootstrap.min.css'; // eslint
import './styles/custom.css';
import processWeatherJson from './modules/process';
import { getUserLocation } from './modules/request';

processWeatherJson();
getUserLocation();