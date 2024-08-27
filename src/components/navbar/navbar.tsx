import React, { useState } from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 999; 
  width: 100%;
  top: 80px; 
  height:60px;
  left: 0;
  color: white;
  position: fixed; 
  margin: 0;
`;

const NavItems = styled.div`
  display: flex;
  gap: 20px;

`;

const NavItem = styled.div<{ isActive?: boolean }>`
  color: ${(props) => (props.isActive ? '#0366d6' : 'black')};
  font-size: 18px;
  cursor: pointer;
  position: relative;
  padding: 5px 10px;

  &:hover {
    color: #0366d6;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: ${(props) => (props.isActive ? '100%' : '0')};
    height: 2px;
    background-color: #0366d6;
    transition: width 0.3s;
  }
`;

const Navbar: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleLoginClick = () => {
    setLoggedIn(true);
    setActiveIndex(0); 
  };

  const handleLogoutClick = () => {
    setLoggedIn(false);
    setActiveIndex(null);
  };

  const navItems = loggedIn
    ? ['Home', 'Profile', 'Messages', 'Notifications']
    : ['Login', 'Sign Up'];

  const handleClick = (index: number) => {
    if (!loggedIn && index === 0) {
      handleLoginClick();
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <NavbarContainer>
      <NavItems>
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            isActive={loggedIn && activeIndex === index}
            onClick={() => handleClick(index)}
          >
            {item}
          </NavItem>
        ))}
        {loggedIn && <NavItem onClick={handleLogoutClick}>Logout</NavItem>}
      </NavItems>
    </NavbarContainer>
  );
};

export default Navbar;
