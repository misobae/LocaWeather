import { useMemo } from "react";

import WeatherImg from "./WeatherImg";
import SearchBox from "./SearchBox";

import { useRecoilValue } from "recoil";
import { weatherDataState } from "../state/atoms/weatherState";

import {
  Wrap,
  WeatherImgWrap,
  CurrentTemp,
  CurrentDate,
  CurrentCity,
  CurrentInfo,
  CurrentInfoItem
} from "../styles/WeatherSummary.styled";

function WeatherSummary() {
  const weatherData = useRecoilValue(weatherDataState);

  const daysOfWeek = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  
  const today = useMemo(() => new Date(), []);
  const currentDayOfWeek = today.getDay();

  return (
    <Wrap>
      {weatherData && (
        <>
          <SearchBox />
          <WeatherImgWrap>
            <WeatherImg conditionCode={weatherData.weather[0].id} />
          </WeatherImgWrap>
          <CurrentTemp>
            <strong>{Math.round(weatherData.main.temp)}</strong>
            <span>°</span>
          </CurrentTemp>
          <CurrentDate>{daysOfWeek[currentDayOfWeek]}</CurrentDate>
          <CurrentCity>{weatherData.name}</CurrentCity>
          <CurrentInfo>
            <CurrentInfoItem>
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                alt={weatherData.weather[0].description}
              />
              {weatherData.weather[0].description}
            </CurrentInfoItem>
            <CurrentInfoItem>
              <img className="icon--feelslike" src={process.env.PUBLIC_URL + '/images/icon_feelslike.svg'} alt="wind chll icon" />
              Feels like {Math.round(weatherData.main.feels_like)}°
            </CurrentInfoItem>
          </CurrentInfo> 
        </>
      )}
    </Wrap>
  )
}

export default WeatherSummary;