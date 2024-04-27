import { useState } from "react";
import { useSetRecoilState } from "recoil";

import { Location } from "../../types/LocationTypes";
import { fetchWeatherByCity, fetchWeatherByLocation } from "../../api/weatherApi";
import { weatherDataState } from "../../state/atoms/weatherState";

import {
  Form,
  SearchBtn,
  Input
} from "../../styles/SearchBox.styled";

function SearchBox() {
  const [cityName, setCityName] = useState("");
  const setWeatherData = useSetRecoilState(weatherDataState);

  // 도시 이름 입력값이 변경될 때마다 호출되는 함수
  const handleCityNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(e.target.value);
  }; 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const cityData = await fetchWeatherByCity(cityName);
      const location: Location = {
        lat: cityData.coord.lat,
        lon: cityData.coord.lon
      };
      const searchedWeatherData = await fetchWeatherByLocation(location);
      setWeatherData(searchedWeatherData);
      setCityName("");
    } catch (error) {
      console.error("Error fetching weather data by city:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SearchBtn type="submit" />
      <Input
        whileFocus={{ scale: 1.15 }}
        type="text"
        value={cityName}
        onChange={handleCityNameChange}
        placeholder="Search for cities ..."
      />
    </Form>
  )
}

export default SearchBox;