import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import Content from '../../common/components/Content';
import Heading3 from '../../../layout/Heading3';
import Label from '../../../layout/Label';
import selectedChannelState from '../../../recoil/common/selectedChannelState';

const ChannelName = styled.input`
  width: calc(100% - 20px);
  height: 20px;
  padding: 10px;

  background-color: ${(props) => props.theme.color.inputBg};
  border-radius: 3px;

  font-size: 16px;
  color: ${(props) => props.theme.color.primaryText};
`;

const Divider = styled.div`
  width: 100%;
  margin: 40px 0;
  border: ${(props) => props.theme.border.primary};
`;

const ChannelTopic = styled.textarea`
  width: calc(100% - 20px);
  height: 65px;
  padding: 10px;

  background-color: ${(props) => props.theme.color.inputBg};
  border-radius: 3px;
  resize: none;

  font-size: 16px;
  color: ${(props) => props.theme.color.primaryText};

  &::placeholder {
    color: ${(props) => props.theme.color.secondaryText};
  }
`;

function ChannelGeneralContainer() {
  const selectedChannel = useRecoilValue(selectedChannelState);
  const [name, setName] = useState('');

  useEffect(() => {
    setName(selectedChannel);
  }, [selectedChannel]);

  return (
    <Content>
      <Heading3>일반</Heading3>
      <Label>채널 이름</Label>
      <ChannelName
        maxlength="100"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Divider />
      <Label>채널 주제</Label>
      <ChannelTopic
        type="text"
        placeholder="이 채널을 어떻게 사용하면 좋을지 모두에게 알려줍시다!"
        maxlength="1024"
        rows="3"
      />
    </Content>
  );
}

export default ChannelGeneralContainer;
