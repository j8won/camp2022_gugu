import { atom } from 'recoil';

const selectedChannelState = atom({
  key: 'selectedChannelState',
  default: null,
});

export default selectedChannelState;
