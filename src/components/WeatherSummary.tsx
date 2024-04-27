import SearchBox from "./weatherSummary/SearchBox";
import CurrentWeather from "./weatherSummary/CurrentWeather";

import { Wrap } from "../styles/WeatherSummary.styled";

function WeatherSummary() {
  return (
    <Wrap
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SearchBox />
      <CurrentWeather />
    </Wrap>
  )
}

export default WeatherSummary;