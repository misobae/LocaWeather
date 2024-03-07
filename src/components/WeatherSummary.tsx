import { useEffect, useMemo, useState } from "react";

import { WeatherResult } from "../types/WeatherTypes";
import { TimeOptions } from "../types/TimeTypes";

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


function WeatherSummary(weatherData: WeatherResult) {

  const daysOfWeek = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  const timeOptions: TimeOptions = useMemo(() => ({
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }), []);

  const today = useMemo(() => new Date(), []);
  const currentDayOfWeek = today.getDay();
  const [crtTime, setCrtTime] = useState(today.toLocaleTimeString("en-US", timeOptions));
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCrtTime(today.toLocaleTimeString("en-US", timeOptions));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeOptions, today]); 

  return (
    <Wrap>
      <SearchBox />
      <WeatherImgWrap>
        <WeatherImg conditionCode={weatherData.weather[0].id} />
      </WeatherImgWrap>
      <CurrentTemp>
        <strong>{Math.round(weatherData.main.temp)}</strong>
        <span>°</span>
      </CurrentTemp>
      <CurrentDate>{daysOfWeek[currentDayOfWeek]}, <span>{crtTime}</span></CurrentDate>
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
    </Wrap>
  )
}

export default WeatherSummary;