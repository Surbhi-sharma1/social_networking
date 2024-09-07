import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";


import React from "react";

import avatars from "../../assets/avatars.jpg";

const Topbar: React.FC = () => {
  return (
    <div className="topbarContainer">
      
      <div className="topbarLeft">
        <span className="logo">IConnect</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
    
        <img src={avatars} alt="Profile" className="topbarImg" />
      </div>
    </div>
  );
};

export default Topbar;
