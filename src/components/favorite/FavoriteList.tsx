import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import { weatherDataState } from "../../state/atoms/weatherState";
import { favoriteState } from "../../state/atoms/favoriteState";
import { dropboxState } from "../../state/atoms/dropboxState";
import { Location } from "../../types/LocationTypes";
import { fetchWeatherByCity, fetchWeatherByLocation } from "../../api/weatherApi";

import {
  SelectBox,
  SelectBtn,
  OptionList,
  Option,
  NoOption
} from "../../styles/Favorite.styled";

function FavoriteList() {
  const favorites = useRecoilValue(favoriteState);
  const setWeatherData = useSetRecoilState(weatherDataState);

  const [isOpen, setOpen] = useRecoilState(dropboxState);
  const handleDropDown = () => {
    setOpen(!isOpen);
  }

  const loadFavoriteCityData = async (clickedCityName: string) => {
    try {
      const cityData = await fetchWeatherByCity(clickedCityName);
      const location: Location = {
        lat: cityData.coord.lat,
        lon: cityData.coord.lon
      }
      const searchedWeatherData = await fetchWeatherByLocation(location);
      setWeatherData(searchedWeatherData);
      setOpen(false);
    } catch (error) {
      console.error("Error fetching weather data by city:", error);
    }
  };

  return (
    <SelectBox>
      <SelectBtn
        onClick={handleDropDown}
        $isOpen={isOpen}>
          Favorite Cities
      </SelectBtn>
      <OptionList
        animate={{
          maxHeight: isOpen ? 150 : 0,
          border: isOpen ? "1px solid #222" : "1px solid #EDEEEF"
        }}
      >
        {
          favorites.length === 0 ? (
            <NoOption>No favorite cities</NoOption>
          ) : (
          favorites.map((item, i) => (
            <Option
              key={item + i}
              onClick={() => loadFavoriteCityData(item)}
            >
              {favorites[i]}
            </Option>
          )))
        }
      </OptionList>
    </SelectBox>
  )
}

export default FavoriteList;