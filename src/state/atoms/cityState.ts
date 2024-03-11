import { atom } from 'recoil';

export const cityState = atom<string>({
  key: 'cityState',
  default: "",
});