import wall from "../assets/wall.jpg";
import "./user-profile.css";
import avatars from "../assets/avatars.jpg";
import LayoutComponent from "../components/layouts/common-layout";
import { useState } from "react";
import EditProfile from "../components/form/edit-profile";
import { Modal } from "../components/form/modal";

import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
// import Posts from "../components/posts/posts";

const ProfileComponent = () => {
  const { name, companyName, email } = useSelector((state: RootState) => state.userProfile);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <LayoutComponent>
        <div className="profileCover">
          <img className="profileCoverImg" src={wall} alt="" />
          <img className="profileUserImg" src={avatars} alt="" />
          <div className="topbarIconItem">
          <button className="editProfile" onClick={openModal}>
              {isModalOpen? 'Cancel' : 'Edit Profile'}
            </button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
            <EditProfile onClose={closeModal}/>
          </Modal>
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
