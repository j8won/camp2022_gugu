import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import settingMainContentState from '../recoil/setting/common/settingMainContentState';
import settingTypeState from '../recoil/setting/common/settingTypeState';
import SETTING_TYPES from './constant/SETTING_TYPES';
import selectedChannelState from '../recoil/common/selectedChannelState';
import selectedServerState from '../recoil/common/selectedServerState';

const OptionList = styled.div`
  width: 20%;
  max-width: 250px;
  padding: 20px;
  background-color: ${(props) => props.theme.color.secondaryBg};
  color: #b8babd;
  overflow-y: scroll;
`;

const SettingType = styled.div`
  margin: 2rem 0;
  font-size: 0.9rem;
`;

const OptionTitle = styled.div`
  font-size: 0.7rem;
  padding: 0.2rem 0;
`;

const Item = styled.li`
  padding: 6px 10px;
  list-style: none;
  margin: 0.2rem 0;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.hoverBg};
    color: ${(props) => props.theme.color.hoverText};
  }
`;

const Seperator = styled.hr`
  border-color: rgba(184, 186, 189, 0.25);
`;

const Category = styled.div``;

function SideBar({ sidebar }) {
  const setMainContent = useSetRecoilState(settingMainContentState);
  const settingType = useRecoilValue(settingTypeState);
  const selectedChannel = useRecoilValue(selectedChannelState);
  const selectedServer = useRecoilValue(selectedServerState);

  const settingTypeSelector = (type) => {
    switch (type) {
      case SETTING_TYPES.CHANNEL:
        return selectedChannel;
      case SETTING_TYPES.SERVER:
        return selectedServer;
      case SETTING_TYPES.USER:
        return '';
      default:
        return '';
    }
  };
  return (
    <OptionList>
      <SettingType>{settingTypeSelector(settingType)}</SettingType>
      {sidebar.categories.map((category) => (
        <Category key={category.title}>
          <OptionTitle>{category.title}</OptionTitle>
          <ul>
            {category.list.map((e) => (
              <Item
                key={e.title}
                onClick={() => {
                  setMainContent(e.content);
                }}
              >
                {e.title}
              </Item>
            ))}
          </ul>
          <Seperator />
        </Category>
      ))}
    </OptionList>
  );
}

SideBar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  sidebar: PropTypes.object,
};

SideBar.defaultProps = {
  sidebar: {},
};

export default React.memo(SideBar);
