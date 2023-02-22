import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import Label from '../../../../../layout/Label';
import selectedRoleState from '../../../../../recoil/setting/server/selectedRoleState';

const NameBox = styled.div`
  width: 100%;
  padding-bottom: 24px;
  border-bottom: ${(props) => props.theme.border.primary};
`;

const RoleNameInput = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;

  background-color: ${(props) => props.theme.color.inputBg};
  color: ${(props) => props.theme.color.primaryText};
  font-size: 16px;
  font-weight: 400;

  border-radius: 3px;
`;

function DisplayName() {
  const selectedRole = useRecoilValue(selectedRoleState);
  const [name, setName] = useState('');

  useEffect(() => {
    setName(selectedRole.name);
  }, [selectedRole]);
  return (
    <NameBox>
      <Label>
        역할 이름 <span>*</span>
      </Label>
      <RoleNameInput value={name} onChange={(e) => setName(e.target.value)} />
    </NameBox>
  );
}

export default React.memo(DisplayName);
