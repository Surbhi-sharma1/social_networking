import styled from "styled-components";

export const FooterContainer = styled.footer`
position: fixed;
bottom: 0;
left: 0;
width: 100%;
background-color:#4c93f1; 
padding: 10px 20px; 
display: flex;
align-items: center; 
justify-content: center; 
color: white;
height:2vh
font-size:3.2em 
box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
z-index: 1000;
font-weight-bold
@media (max-width: 768px) {
  flex-direction: column; 
  padding: 20px 10px;
  text-align: center;
  font-size:2,2em
}


@media (max-width: 480px) {
  padding: 15px 5px;
  font-size: 1.2em;
  height:3vh
}
`;
interface FooterProps {
    text: string;
  }

  const Footer: React.FC<FooterProps> = ({ text }:FooterProps) => {
    return (
        <FooterContainer className="footer">
        <p>{text}</p>
      </FooterContainer>
    );
  };
  export default Footer