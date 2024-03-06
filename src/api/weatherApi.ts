import axios from "axios";

const BASE_URL = `https://api.openweathermap.org/data/2.5`;
const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

export interface Location {
  lat: number;
  lon: number;
}

export async function fetchWeatherByLocation(location: Location | undefined) {
  if (location && typeof location === "object") {
    const { lat, lon } = location;

    try {
      const response = await axios.get(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&appid=${API_KEY}`);
      return response.data;
    } catch (error) {
      console.error('날씨 데이터를 가져오는 중 에러 발생:', error);
      throw error;
    }
  } else {
    console.log('위치 정보를 가져올 수 없습니다.');
    throw new Error('위치 정보를 가져올 수 없습니다.');
  }
}

export async function fetchWeatherByCity(cityName: string) {
  try {
    const response = await axios.get(`${BASE_URL}/weather?q=${cityName}&exclude=minutely,hourly&units=metric&appid=${API_KEY}`);
    console.log("city Weather", response.data)
    return response.data;
  } catch (error) {
    console.error('날씨 데이터를 가져오는 중 에러 발생:', error);
    throw error;
  }
}