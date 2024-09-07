import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.black}; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 999;
  width: 100%;
  top: 0;
  left: 0;
  color: black;
  position: fixed;
  margin: 0;
  padding: 0 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    padding: 10px;
    top: 10vh;
  }
`;

// const NavItems = styled.div<{ isOpen: boolean }>`
//   display: flex;
//   gap: 20px;
// justify-content:center;
//   @media (max-width: 480px) {
//     flex-direction: column;
//     width: 100%;
//     display: ${(props) => (props.isOpen ? 'flex' : 'none')};
//   }
// `;

// const NavItem = styled.div<{ isActive?: boolean }>`
//   color: ${(props) => (props.isActive ? '#0366d6' : 'black')};
//   font-size: 18px;
 
//   cursor: pointer;
//   position: relative;
//   padding: 5px 10px;
// align-items:center;
//   &:hover {
//     color: #0366d6;
//   }

//   &::after {
//     content: '';
//     position: absolute;
//     left: 0;
//     bottom: -2px;
//     width: ${(props) => (props.isActive ? '100%' : '0')};
//     height: 2px;
//     background-color: #0366d6;
//     transition: width 0.3s;
//   }

//   @media (max-width: 480px) {
//     font-size: 16px;
//     padding: 8px 0;
//     width: 100%;
//     text-align: left;
//     font-weight:bold;
//     &::after {
//       bottom: 0;
//     }
//   }
// `;

// const ProfileContainer = styled.div`
//   display: flex;
//   align-items: center;
//   cursor: pointer;
// `;

// const HamburgerIcon = styled.div`
//   display: none;
//   cursor: pointer;

//   @media (max-width: 480px) {
//     display: block;
//     font-size: 5vh;
//     color: black;
//   }
// `;

// const ProfilePicture = styled.img`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   margin-left: 20px;
// `;
const Navbar: React.FC = () => {
//   const [loggedIn, setLoggedIn] = useState<boolean>(false);
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);
//   const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

//   const handleLoginClick = () => {
//     setLoggedIn(true);
//     setActiveIndex(0);
//   };

//   const handleLogoutClick = () => {
//     setLoggedIn(false);
//     setActiveIndex(null);
//   };

//   const navItems = loggedIn
//     ? ['Home', 'Messages', 'Notifications']
//     : ['Login', 'Sign Up'];

//   const handleClick = (index: number) => {
//     if (!loggedIn && index === 0) {
//       handleLoginClick();
//     } else {
//       setActiveIndex(index);
//     }
//   };

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

  return (
    <NavbarContainer>
      {/* <HamburgerIcon onClick={toggleNav}>
        &#9776;
      </HamburgerIcon>
      <NavItems isOpen={isNavOpen}>
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
      <ProfileContainer>
      
          <ProfilePicture src="/home/surbhi.sharma1/React/social-networking/social-networking/src/assets/avatar.png" alt="Profile" />
        </ProfileContainer> */}
    </NavbarContainer>
  );
};

export default Navbar;
