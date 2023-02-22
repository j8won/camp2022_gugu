import React from 'react';
import styled from 'styled-components';
import SearchBar from '../../../../../common/components/SearchBar';
import AddMemberBtn from './AddMemberBtn';
import MemberRow from './MemberRow';

const SearchContainer = styled.div`
  height: 34px;
  padding-bottom: 16px;

  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
`;

function MembersContent() {
  const members = [
    {
      src: null,
      name: '이서현',
      id: '@이서현#1111',
      roleArray: [{ name: '백엔드', color: 'orange' }],
    },
    {
      src: null,
      name: '경주원',
      id: '@경주원#1112',
      roleArray: [{ name: '프론트엔드', color: 'green' }],
    },
    {
      src: null,
      name: '김정인',
      id: '@김정인#1113',
      roleArray: [{ name: '백엔드', color: 'orange' }],
    },
    {
      src: null,
      name: '이윤성',
      id: '@이윤성#1114',
      roleArray: null,
    },
  ];

  return (
    <>
      <SearchContainer>
        <SearchBar
          containerStyle={{ padding: '1px' }}
          inputStyle={{ padding: '8px' }}
          fontSize="16px"
          placeholder="멤버 검색하기"
        />
        <AddMemberBtn />
      </SearchContainer>

      {members.map((member) => (
        <MemberRow key={member.id} name={member.name} id={member.id} />
      ))}
    </>
  );
}

export default MembersContent;
