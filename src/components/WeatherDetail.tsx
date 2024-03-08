import WeatherHighlight from "./WeatherHighlight";
import WeatherForcast from "./WeatherForcast";

import { Wrap, Title } from "../styles/WeatherDetail.styled";

function WeatherDetail() {
  return (
    <Wrap>
      <Title>Weather Forcast</Title>
      <WeatherForcast />
      
      <Title>Today's Highlight</Title>
      <WeatherHighlight />
    </Wrap>
  )
}

export default WeatherDetail;