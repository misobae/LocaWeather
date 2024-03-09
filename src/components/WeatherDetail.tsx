import WeatherHighlight from "./WeatherHighlight";
import WeatherForcast from "./WeatherForcast";

import { Wrap, Title } from "../styles/WeatherDetail.styled";

function WeatherDetail() {
  return (
    <Wrap
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Title>Weather Forcast</Title>
      <WeatherForcast />
      
      <Title>Today's Highlight</Title>
      <WeatherHighlight />
    </Wrap>
  )
}

export default WeatherDetail;