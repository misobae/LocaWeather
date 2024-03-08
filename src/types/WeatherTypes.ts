export interface WeatherResult {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: {
    temp: number;
    feels_like: number;
    humidity: number;
    wind_speed: number;
    uvi: number;
    sunrise: number;
    sunset: number;
    weather: {
      id: number;
      description: string;
      icon: string;
    }[];
  };
  daily: {
    dt: number;
    temp: {
      day: number;
      max: number;
      min: number;
    };
    weather: {
      id: number;
    }[];
  }[];
}