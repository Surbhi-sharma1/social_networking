import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";

import React from "react";

import avatars from "../../assets/avatars.jpg";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../provider/theme/theme-provider";


const Topbar: React.FC = () => {
  const navigate = useNavigate();
  const handleAddPostClick = () => {
    navigate("/profile");
  };
  const { toggleTheme } = useTheme();
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
        <img
          src={avatars}
          alt="Profile"
          className="topbarImg"
          onClick={handleAddPostClick}
        />
        <button onClick={toggleTheme} > Switch Theme</button>
      </div>
    </div>
  );
};

export default Topbar;
