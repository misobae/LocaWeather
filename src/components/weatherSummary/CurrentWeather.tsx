import { useRecoilState, useRecoilValue } from "recoil";
import { getCityName } from "../../api/weatherApi";
import { weatherDataState } from "../../state/atoms/weatherState";
import { cityState } from "../../state/atoms/cityState";

import WeatherImg from "../common/WeatherImg";

import {
  WeatherImgWrap,
  CurrentTemp,
  CurrentDate,
  CurrentCity,
  CurrentInfo,
  CurrentInfoItem
} from "../../styles/WeatherSummary.styled";


function CurrentWeather() {
  const weatherData = useRecoilValue(weatherDataState);
  const [cityName, setCityName] = useRecoilState(cityState);
  
  // 도시 이름 가져오기
  if (weatherData) {
    getCityName(weatherData.lat, weatherData.lon)
    .then(cityName => {
      setCityName(cityName);
    })
    .catch(error => {
      console.error('도시 이름을 가져오는 중 오류가 발생했습니다:', error);
    });
  }

  const daysOfWeek = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  
  const today = new Date();
  const currentDayOfWeek = today.getDay();

  return (
    <>
    {weatherData && (
      <>
        <WeatherImgWrap>
          <WeatherImg conditionCode={weatherData.current.weather[0].id} />
        </WeatherImgWrap>
        <CurrentTemp>
          <strong>{Math.round(weatherData.current.temp)}</strong>
          <span>°</span>
        </CurrentTemp>
        <CurrentDate>{daysOfWeek[currentDayOfWeek]}</CurrentDate>
        <CurrentCity>{cityName}</CurrentCity>
        <CurrentInfo>
          <CurrentInfoItem>
            <div className="img-wrapper">
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}.png`}
                alt={weatherData.current.weather[0].description}
              />
            </div>
            <span>{weatherData.current.weather[0].description}</span>
          </CurrentInfoItem>
          <CurrentInfoItem>
            <div className="img-wrapper">
              <img className="icon--feelslike" src={process.env.PUBLIC_URL + '/images/icon_feelslike.svg'} alt="wind chll icon" />
            </div>
            <span>Feels like {Math.round(weatherData.current.feels_like)}°</span>
          </CurrentInfoItem>
        </CurrentInfo> 
      </>
    )}
  </>
  )
}

export default CurrentWeather;