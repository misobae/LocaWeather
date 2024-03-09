import { useRecoilValue } from "recoil";
import { weatherDataState } from "../state/atoms/weatherState";

import WeatherImg from "./WeatherImg";

import {
  Wrap,
  Item,
  Temp,
} from "../styles/WeatherForcastList.styled";

function ForcastList() {
  const weatherData = useRecoilValue(weatherDataState);
  const weekForcastData = weatherData?.daily;

  return (
    <Wrap>
      {weekForcastData && (
        weekForcastData.map((day, index) => {
          const date = new Date(day.dt * 1000);
          let dayLabel;
          if (index === 0) {
            dayLabel = "Today";
          } else {
            dayLabel = date.toLocaleDateString('en-US', { weekday: 'long' });
          }

          return (
            <Item key={"day" + index}>
              <p>{dayLabel}</p>
              <WeatherImg conditionCode={day.weather[0].id} />
              <Temp>
                <strong>{Math.round(day.temp.max)}°</strong>
                <span>{Math.round(day.temp.min)}°</span>
              </Temp>
            </Item>
          );
        })
      )}
    </Wrap>
  )
}

export default ForcastList;