import React from 'react';
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import PeopleIcon from '@mui/icons-material/People';

const SidebarContainer = styled.div`
  width: 16vw;
  height: 100vh;
  position: fixed; 
  top: 6vh;
  left: 0;
  background-color: white;
  padding: 20px;
  box-sizing: border-box;
  
  @media (max-width: 480px) {
    width: 2vw; 
    top: 2;
    left: 0;
   
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);/
    height: auto;
  }
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  padding: 10px;
  border-radius: 8px;
  
  &:hover {
    background-color: #f0f0f0;
    color: #007bff;
  }
  @media (max-width: 480px) {
    width:2vw;
    font-size: 1em;
 align-items:left;
 padding:2px;
    margin-bottom: 10px; 
  }
`;

const IconWrapper = styled.div`
  margin-right: 10px;
  font-size: 24px;
   
  @media (max-width: 480px) {
    font-size: 20px; 
    margin-right:4px
  }
`;
const TextWrapper = styled.span`
  @media (max-width: 480px) {
    display: none; 
  }
`;
const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarItem>
        <IconWrapper><HomeIcon /></IconWrapper>
        <TextWrapper>Home</TextWrapper>
      </SidebarItem>
      <SidebarItem>
        <IconWrapper><ChatIcon /></IconWrapper>
        <TextWrapper>Chats</TextWrapper>
      </SidebarItem>
      <SidebarItem>
        <IconWrapper><PeopleIcon /></IconWrapper>
        <TextWrapper>Friends</TextWrapper>
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
