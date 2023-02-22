import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import Content from '../../common/components/Content';
import Heading3 from '../../../layout/Heading3';
import ImageContainer from './components/ImageContainer';
import Label from '../../../layout/Label';
import selectedServerState from '../../../recoil/common/selectedServerState';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ServerNameBox = styled.div`
  width: 100%;
  margin: 0 0 20px 20px;
`;

const NameInput = styled.input`
  width: calc(100% - 30px);
  height: 20px;
  padding: 10px;

  background-color: ${(props) => props.theme.color.inputBg};
  color: ${(props) => props.theme.color.primaryText};
  font-size: 16px;

  border-radius: 3px;
`;

function ServerGeneralContainer() {
  const selectedServer = useRecoilValue(selectedServerState);
  const [name, setName] = useState('');

  useEffect(() => {
    setName(selectedServer);
  }, [selectedServer]);

  return (
    <Content>
      <Heading3>서버 개요</Heading3>
      <Container>
        <ImageContainer />
        <ServerNameBox>
          <Label>서버 이름</Label>
          <NameInput
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </ServerNameBox>
      </Container>
    </Content>
  );
}

export default React.memo(ServerGeneralContainer);
