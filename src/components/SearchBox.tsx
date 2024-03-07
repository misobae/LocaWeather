import { useState } from "react";

import { useSetRecoilState } from "recoil";

import { weatherDataState } from "../state/atoms/weatherState";
import { fetchWeatherByCity } from "../api/weatherApi";

import {
  Form,
  SearchBtn,
  Input
} from "../styles/SearchBox.styled";


function SearchBox() {
  // Recoil 상태, 상태 업데이트 함수
  const setWeatherData = useSetRecoilState(weatherDataState);

  const [cityName, setCityName] = useState("");

  // 도시 이름 입력값이 변경될 때마다 호출되는 함수
  const handleCityNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(e.target.value);
  }; 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await fetchWeatherByCity(cityName);
      setWeatherData(data);
      setCityName("");
    } catch (error) {
      console.error("Error fetching weather data by city:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SearchBtn type="submit" />
      <Input
        type="text"
        value={cityName}
        onChange={handleCityNameChange}
        placeholder="Search for cities ..."
      />
    </Form>
  )
}

export default SearchBox;