import { atom } from 'recoil';

export const favoriteState = atom<string[]>({
  key: 'favoriteState',
  default: [],
});