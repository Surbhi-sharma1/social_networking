import { styled } from "styled-components";


export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px; 
  z-index: 1000; 
`;

export const HeaderLeft = styled.div`
 display: flex;
  align-items: center;
`;

export const HeaderRight = styled.div`
  flex: 1;
  display: flex;
  height:80px;
  justify-content: center;
  color: #fff; 
`;

export const HeaderImage = styled.img`
  max-height: 50px;
  margin-right: 10px;
`;
   
type HeaderProps={
    image:{
        src:string,
        alt:string
    };
    children:React.ReactNode
}


const Header = ({ image, children }: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderImage src={image.src} alt={image.alt} />
      </HeaderLeft>
      <HeaderRight>
        {children}
      </HeaderRight>

      </HeaderContainer>
    )
}
export default Header;
