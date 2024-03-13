import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import { weatherDataState } from "../state/atoms/weatherState";
import { favoriteState } from "../state/atoms/favoriteState";
import { cityState } from "../state/atoms/cityState";
import { dropboxState } from "../state/atoms/dropboxState";
import { Location } from "../types/LocationTypes";
import { fetchWeatherByCity, fetchWeatherByLocation } from "../api/weatherApi";

import {
  Wrap,
  FavoriteBtn,
  FavoriteBtnHeart,
  SelectBox,
  SelectBtn,
  OptionList,
  Option,
  NoOption
} from "../styles/Favorite.styled";


function Favorite() {
  const [favorites, setFavorites] = useRecoilState(favoriteState);
  const setWeatherData = useSetRecoilState(weatherDataState);
  const cityName = useRecoilValue(cityState);

  const isFavorite = favorites.includes(cityName);
  const handleAddFavs = () => {
    if (isFavorite) {
      setFavorites(favorites.filter(city => city !== cityName));
    } else {
      setFavorites([...favorites, cityName]);
    }
  }

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
    <Wrap>
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

      <FavoriteBtn onClick={handleAddFavs}>
        <FavoriteBtnHeart
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="16" height="16" fill={isFavorite ? "#ff5b37" :"#ddd"}><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"/></svg>
        </FavoriteBtnHeart>
      </FavoriteBtn>
    </Wrap>
  )
}

export default Favorite;