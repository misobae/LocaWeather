import { useState } from "react";

import ForcastList from "./WeatherForcastList";
import ForcastChart from "./WeatherForcastChart";

import {
  Tab
} from "../styles/WeatherForcast.styled";


function WeatherForcast() {
  const [crntTab, setCrntTab] = useState(0);
  const handleSelectTab = (i: number) => {
    setCrntTab(i)
  }

  return (
    <>
      <Tab>
        <h3 onClick={() => handleSelectTab(0)}>List</h3>
        <h3 onClick={() => handleSelectTab(1)}>Chart</h3>
      </Tab>

      {crntTab === 0 ? <ForcastList /> : <ForcastChart />}
    </>
  )
}

export default WeatherForcast;