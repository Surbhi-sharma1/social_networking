import styled from "styled-components";

export const FooterContainer = styled.footer`
position: fixed;
bottom: 0;
left: 0;
width: 100%;
background-color: grey; 
padding: 10px 20px; 
display: flex;
align-items: center; 
justify-content: center; 
color: #fff; 
box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
z-index: 1000;
`;
interface FooterProps {
    text: string;
  }

  const Footer: React.FC<FooterProps> = ({ text }:FooterProps) => {
    return (
        <FooterContainer>
        <p>{text}</p>
      </FooterContainer>
    );
  };
  export default Footer