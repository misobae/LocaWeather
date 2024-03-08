import { useEffect } from "react";
import { useQuery } from "react-query";
import { useSetRecoilState } from 'recoil';

import { getUserLocation } from "./api/userLocationApi";
import { fetchWeatherByLocation} from "./api/weatherApi";

import { Location } from "./types/LocationTypes";
import { WeatherResult } from "./types/WeatherTypes";
import { weatherDataState } from "./state/atoms/weatherState";

import WeatherSummary from "./components/WeatherSummary";
import WeatherDetail from "./components/WeatherDetail";

import { Wrap, Loader } from "./styles/App.styled";

function App() {
  // Weather Data 상태 업데이트 함수
  const setWeatherData = useSetRecoilState(weatherDataState);

  // 사용자 위치 정보 가져오기
  const { data: userLocation, status: locationStatus } = useQuery<Location | undefined>('userLocation', getUserLocation);

  // 사용자 위치 정보로 날씨 데이터 fetching
  const { data: fetchedWeatherData, status: dataStatus } = useQuery<WeatherResult>('weather', () => fetchWeatherByLocation(userLocation), {
    enabled: !!userLocation // userLocation이 존재할 때만 실행
  });

  useEffect(() => {
    if (dataStatus === 'success' && fetchedWeatherData) {
      setWeatherData(fetchedWeatherData);
    }
  }, [dataStatus, fetchedWeatherData, setWeatherData]);

  
  if (locationStatus === 'loading' || dataStatus === 'loading') return <Loader />;
  if (locationStatus === 'error' || dataStatus === 'error') return <div>Error fetching weather data</div>;

  return (
    <div>
      <Wrap>
        <WeatherSummary />
        <WeatherDetail />
      </Wrap>
    </div>
  );
}

export default App;
