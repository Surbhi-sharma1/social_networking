import { styled } from "styled-components";

import { ReactNode } from "react";
import Topbar from "../topbar/topbar";
import Sidebar from "../sidebar/sidebar";
import Footer from "../footer";
import { useTheme } from "../../provider/theme/theme-provider";
type LayoutProps = {
  children: ReactNode;
};
const LayoutContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  top: 6vh;
  height: 70vh;
  position: fixed;
  left: 16vw;

  @media (max-width: 480px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    top: 6vh;
    height: 50vh;
    position: fixed;
    left: 20vw;
  }
`;
const LayoutWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bgcolor};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
`;

const LayoutComponent = ({ children }: LayoutProps) => {
  const { theme } = useTheme();

  return (
    <LayoutWrapper theme={theme}>
      <Topbar />
      <Sidebar />
      <Footer text="© 2024 Social Networking App. All rights reserved." />
      <LayoutContainer theme={theme}>{children}</LayoutContainer>
    </LayoutWrapper>
  );
};

export default LayoutComponent;
