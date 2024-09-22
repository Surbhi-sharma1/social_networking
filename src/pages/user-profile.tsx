import wall from "../assets/wall.jpg";
import "./user-profile.css";
import avatars from "../assets/avatars.jpg";
import LayoutComponent from "../components/layouts/common-layout";
interface ProfileComponentProps {
  name: string;
  companyName: string;
  email: string;
}
const ProfileComponent: React.FC<ProfileComponentProps> = ({
  name,
  companyName,
  email,
}: ProfileComponentProps) => {
  return (
    <>
      <LayoutComponent>
        <div className="profileCover">
          <img className="profileCoverImg" src={wall} alt="" />
          <img className="profileUserImg" src={avatars} alt="" />
          <div className="topbarIconItem">
            <button className="editProfile">Edit Profile</button>
            <button className="Settings">Settings</button>
          </div>
          <div className="userInfo">
            <h2>{name}</h2>
            <p>{companyName}</p>
            <a href={`${email}`} target="_blank" rel="noopener noreferrer">
              {email}
            </a>
          </div>
        </div>
      </LayoutComponent>
    </>
  );
};

export default ProfileComponent;
