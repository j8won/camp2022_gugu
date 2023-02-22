import { atom } from 'recoil';

const selectedServerState = atom({
  key: 'selectedServerState',
  default: null,
});

export default selectedServerState;
