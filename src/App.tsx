import { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilState } from 'recoil';

import { getUserLocation } from "./api/userLocationApi";
import { Location, fetchWeatherByLocation } from "./api/weatherApi";
import { WeatherResult } from "./types/WeatherTypes";
import { weatherDataState } from "./state/atoms/weatherState";

import WeatherSummary from "./components/WeatherSummary";
import WeatherDetail from "./components/WeatherDetail";

import { Wrap, Loader } from "./styles/App.styled";

function App() {
  // Recoil 상태, 상태 업데이트 함수
  const [weatherData, setWeatherData] = useRecoilState(weatherDataState);

  // 사용자 위치 정보 가져오기
  const { data: userLocation } = useQuery<Location | undefined>('userLocation', getUserLocation);

  // 사용자 위치 정보로 날씨 데이터 fetching
  const { data: fetchedWeatherData, status } = useQuery<WeatherResult>('weather', () => fetchWeatherByLocation(userLocation), {
    enabled: !!userLocation // userLocation이 존재할 때만 실행
  });


  useEffect(() => {
    if (status === 'success' && fetchedWeatherData) {
      setWeatherData(fetchedWeatherData);
    }
  }, [status, fetchedWeatherData, setWeatherData]);

  
  if (status === 'loading') return <Loader />;
  if (status === 'error') return <div>Error fetching weather data</div>;

  return (
    <div>
      {weatherData && (
        <Wrap>
          <WeatherSummary />
        </Wrap>
      )}
    </div>
  );
}

export default App;
