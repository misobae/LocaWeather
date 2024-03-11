import { atom } from 'recoil';

export const dropboxState = atom<boolean>({
  key: 'dropboxState',
  default: false,
});