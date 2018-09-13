import axios from 'axios';
const API_KEY = '17773253553597468c3c0b490aaa6374';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}