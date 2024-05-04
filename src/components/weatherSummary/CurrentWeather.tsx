import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { getCityName } from "../../api/weatherApi";
import { weatherDataState } from "../../state/atoms/weatherState";
import { cityState } from "../../state/atoms/cityState";

import WeatherImg from "../common/WeatherImg";
import { ReactComponent as IconFeelsLike } from '../../assets/images/icon_feelslike.svg';

import {
  WeatherImgWrap,
  Temp,
  TempValue,
  TempDegree,
  Weekday,
  City,
  Info,
  InfoItem,
  InfoImg,
  InfoTxt
} from "../../styles/WeatherSummary.styled";


function CurrentWeather() {
  const weatherData = useRecoilValue(weatherDataState);
  const [cityName, setCityName] = useRecoilState(cityState);
  
  // 도시 이름 가져오기
  useEffect(() => {
    if (weatherData) {
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
  
  const today = new Date();
  const currentDayOfWeek = today.getDay();

  return (
    <>
    {weatherData && (
      <>
        <WeatherImgWrap>
          <WeatherImg conditionCode={weatherData.current.weather[0].id} />
        </WeatherImgWrap>
        <Temp>
          <TempValue>{Math.round(weatherData.current.temp)}</TempValue>
          <TempDegree>°</TempDegree>
        </Temp>
        <Weekday>{daysOfWeek[currentDayOfWeek]}</Weekday>
        <City>{cityName}</City>

        <Info>
          <InfoItem>
            <InfoImg>
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}.png`}
                alt={weatherData.current.weather[0].description}
              />
            </InfoImg>
            <InfoTxt>{weatherData.current.weather[0].description}</InfoTxt>
          </InfoItem>
          <InfoItem>
            <InfoImg>
              <IconFeelsLike />
            </InfoImg>
            <InfoTxt>Feels like {Math.round(weatherData.current.feels_like)}°</InfoTxt>
          </InfoItem>
        </Info> 
      </>
    )}
  </>
  )
}

export default CurrentWeather;