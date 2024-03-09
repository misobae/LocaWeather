import { useState } from "react";

import ForcastList from "./WeatherForcastList";
import ForcastChart from "./WeatherForcastChart";

import {
  Tab,
  Title,
  TitleBar
} from "../styles/WeatherForcast.styled";


function WeatherForcast() {
  const [crntTab, setCrntTab] = useState(0);
  const handleSelectTab = (i: number) => {
    setCrntTab(i)
  }

  return (
    <>
      <Tab>
        <Title onClick={() => handleSelectTab(0)}>
          List
          {crntTab === 0 && <TitleBar layoutId="circle" initial={{ width: 0 }} animate={{ width: "100%" }} />}
        </Title>
        <Title onClick={() => handleSelectTab(1)}>
          Chart
          {crntTab === 1 && <TitleBar layoutId="circle" initial={{ width: 0 }} animate={{ width: "100%" }} />}
        </Title>
      </Tab>

      {crntTab === 0 ? <ForcastList /> : <ForcastChart />}
    </>
  )
}

export default WeatherForcast;