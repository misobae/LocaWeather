import axios from "axios";
import { Location } from "../types/LocationTypes";

const BASE_URL = `https://api.openweathermap.org`;
const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

// 사용자 위치 정보로 오늘 날씨 가져오기
export async function fetchWeatherByLocation(location: Location | undefined) {
  if (location && typeof location === "object") {
    const { lat, lon } = location;

    try {
      const response = await axios.get(`${BASE_URL}/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&appid=${API_KEY}`);

      return response.data;
    } catch (error) {
      console.error('날씨 데이터를 가져오는 중 에러 발생:', error);
      throw error;
    }
  } else {
    console.log('위치 정보를 가져올 수 없습니다.');
    throw new Error('위치 정보를 가져올 수 없습니다.');
  }
};

// 도시 이름 구하기
export async function getCityName(lat: number | undefined, lon: number | undefined) {
  try {
    const response = await axios.get(`${BASE_URL}/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`);
    const cityName = response.data[0]?.name ?? "Unknown";

    return cityName;
  } catch (error) {
    console.error('도시 이름을 가져올 수 없습니다:', error);
    throw error;
  }
};

// 검색된 도시 이름으로 오늘 날씨 가져오기
export async function fetchWeatherByCity(cityName: string) {
  try {
    const response = await axios.get(`${BASE_URL}/data/2.5/weather?q=${cityName}&exclude=minutely,hourly&units=metric&appid=${API_KEY}`);
    
    return response.data;
  } catch (error) {
    alert('Sorry, the city name you entered is invalid. Please try again.');
    throw error;
  }
};