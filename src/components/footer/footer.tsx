import styled from "styled-components";
import { useTheme } from "../../provider/theme/theme-provider";
interface Props {
  colors?: {
    primary: string;
    bg: string;
    text: string;  
    black: string;  
    white:string;
  };
  fontSize?: string;  
}
export const FooterContainer= styled.footer<Props>`
position: fixed;
bottom: 0;
left: 0;
width: 100%;
background-color: ${props => props.colors?.bg};
padding: 10px 20px; 
display: flex;
align-items: center; 
justify-content: center; 
color: ${props => props.colors?.text};
height:2vh;
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

const Footer: React.FC<FooterProps> = ({ text }: FooterProps) => {
const {theme}=useTheme()
  return (
    <FooterContainer className="footer" {...theme}>
      <p>{text}</p>
    </FooterContainer>
  );
};
export default Footer;
