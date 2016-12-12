import axios from 'axios';

const API_KEY = '14c55b8c5a3d0a32fee6dfc175388e0d'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WHEATHER = 'FETCH_WHEATHER'

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url);

  return{
    type: FETCH_WHEATHER,
    payload: request
  };
}