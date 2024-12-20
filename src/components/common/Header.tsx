import React from 'react';
import styled from 'styled-components';
import backIcon from '../../assets/backIcon.svg';

interface HeaderProps {
  headerTitle: string;
  onClick: () => void;
}

const Header = ({ headerTitle, onClick }: HeaderProps) => {
  return (
    <div>
      <CreateRoomTitle>
        <img src={backIcon.src} alt="backIcon" onClick={onClick} />
        <TitleStyle>{headerTitle}</TitleStyle>
      </CreateRoomTitle>
    </div>
  );
};

export default Header;

const CreateRoomTitle = styled.div`
  position: relative;
  height: 52px;
  display: flex;
  align-items: center;
  padding: 0 16px;

  img {
    cursor: pointer;
  }
`;

const TitleStyle = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
