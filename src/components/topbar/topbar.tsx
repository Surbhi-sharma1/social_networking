import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

import React, { useState } from "react";

import avatars from "../../assets/avatars.jpg";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../provider/theme/theme-provider";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Topbar: React.FC = () => {
  const navigate = useNavigate();
  const handleProfileClick = () => {
    navigate("/profile");
  };

  const notifications = useSelector((state: RootState) => state.notification.notifications);
  const [notificationOpen, setNotificationOpen] = useState(false); // Change initial state to false
  const { toggleTheme } = useTheme();

  const toggleNotificationDropdown = () => {
    setNotificationOpen((prev) => !prev); // Toggle notification dropdown visibility
  };

  const handleNotificationClick = () => {
    setNotificationOpen(false); // Close notification dropdown when clicking on a notification
  };

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
        <div className="topbarIconItem" onClick={toggleNotificationDropdown}>
          <NotificationsIcon className="notificationIcon" />
          <span className="notificationBadge">{notifications.length}</span>
          {notificationOpen && (
            <div className="notificationDropdown">
              <h4>Notifications</h4>
              {notifications.length === 0 ? (
                <p>No new notifications</p>
              ) : (
                <ul>
                  {notifications.map((notification) => (
                    <li key={notification.id} onClick={handleNotificationClick}>
                      {notification.message}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
        <img
          src={avatars}
          alt="Profile"
          className="topbarImg"
          onClick={handleProfileClick}
        />
        <button onClick={toggleTheme}>Switch Theme</button>
      </div>
    </div>
  );
};

export default Topbar;
