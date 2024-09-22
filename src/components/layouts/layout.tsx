import { ReactNode } from "react";
import styled from "styled-components";
import background from "../../assets/background.jpg";
type LayoutProps = {
  children: ReactNode;
};
const LayoutContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  width: 30vw;
  margin-left: 35vw;
  position: absolute;
  top: 20vh;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  @media(max-width: 480px){
    width: 80vw; 
    height:80vh;
    top:6vh;
    margin-left: 10vw;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const Header = styled.header`
  margin: 3rem 0 2rem 0;
  font-size: 4rem;
  @media(max-width:480px){
    font-size:1rem;
    margin: 3rem 0 2rem 0;
  }
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className="background"
      style={{
        width: "98vw",
        height: "96vh",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",

        backgroundPosition: "center",
      }}
    >
      <LayoutContainer>
        <Header>IConnect</Header>
        {children}
      </LayoutContainer>
    </div>
  );
};

export default Layout;
