import { useEffect, useMemo } from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import { weatherDataState } from "../state/atoms/weatherState";

import { getCityName } from "../api/weatherApi";

import WeatherImg from "./WeatherImg";
import SearchBox from "./SearchBox";

import {
  Wrap,
  WeatherImgWrap,
  CurrentTemp,
  CurrentDate,
  CurrentCity,
  CurrentInfo,
  CurrentInfoItem
} from "../styles/WeatherSummary.styled";
import { cityState } from "../state/atoms/cityState";

function WeatherSummary() {
  const weatherData = useRecoilValue(weatherDataState);
  const [cityName, setCityName] = useRecoilState(cityState);
  
  // 도시 이름 가져오기
  useEffect(() => {
    if (weatherData?.lat && weatherData?.lon) {
      getCityName(weatherData.lat, weatherData.lon)
        .then(cityName => {
          setCityName(cityName);
        })
        .catch(error => {
          console.error('도시 이름을 가져오는 중 오류가 발생했습니다:', error);
        });
    }
  }, [weatherData, setCityName]);

  const daysOfWeek = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  
  const today = useMemo(() => new Date(), []);
  const currentDayOfWeek = today.getDay();

  return (
    <Wrap
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {weatherData && (
        <>
          <SearchBox />
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
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}.png`}
                alt={weatherData.current.weather[0].description}
              />
              {weatherData.current.weather[0].description}
            </CurrentInfoItem>
            <CurrentInfoItem>
              <img className="icon--feelslike" src={process.env.PUBLIC_URL + '/images/icon_feelslike.svg'} alt="wind chll icon" />
              Feels like {Math.round(weatherData.current.feels_like)}°
            </CurrentInfoItem>
          </CurrentInfo> 
        </>
      )}
    </Wrap>
  )
}

export default WeatherSummary;