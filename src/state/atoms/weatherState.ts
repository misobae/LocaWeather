import { atom } from 'recoil';
import { WeatherResult } from '../../types/WeatherTypes';

export const weatherDataState = atom<WeatherResult | null>({
  key: 'weatherDataState',
  default: null,
});