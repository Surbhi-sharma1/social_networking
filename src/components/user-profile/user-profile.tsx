
import { styled } from "styled-components";
import wall from "../../assets/wall.jpg";
import "./user-profile.css";

import avatars from "../../assets/avatars.jpg";
const ProfileContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  top: 6vh;
  height: 70vh;
position:fixed;
  left: 16vw;

`;

const ProfileComponent = (
  {}
) => {
  return (
    <ProfileContainer >
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={wall}
                alt=""
              />
              <img
                className="profileUserImg"
                src={avatars}
                alt=""
              />
             <div className="topbarIconItem">
            <button className="editProfile">Edit Profile</button>
            <button className="Settings">Settings</button>
          </div>
        
            </div>
  
    </ProfileContainer>
  );
};

export default ProfileComponent;
