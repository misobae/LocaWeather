import { useRecoilValue } from "recoil";
import { weatherDataState } from "../../state/atoms/weatherState";

import WeatherImg from "../common/WeatherImg";

import { AnimatePresence } from "framer-motion";
import {
  Wrap,
  Item,
  Temp,
} from "../../styles/WeatherForcastList.styled";

function ForcastList() {
  const weatherData = useRecoilValue(weatherDataState);
  const weekForcastData = weatherData?.daily;

  return (
    <AnimatePresence>
      <Wrap
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
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
    </AnimatePresence>
  )
}

export default ForcastList;