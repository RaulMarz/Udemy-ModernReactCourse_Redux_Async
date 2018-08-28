import axios from 'axios';

const API_KEY = 'c08a301f2fed6c7338b0e70a4da62915';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?us&appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url); // Returns a promise

    //console.log('Request', request);

    return{
        type: FETCH_WEATHER,
        payload: request
    }
}