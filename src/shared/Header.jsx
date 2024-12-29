import React, { useState } from "react";
import { HiOutlineChatAlt, HiOutlineBell } from "react-icons/hi";
import { AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import { FiUser, FiLogOut } from "react-icons/fi";
import { BsFolder } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./Header.css"; // Import CSS
import profileImage from "./img/1.png"; // Adjust path as needed

export default function Header() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, message: "New message from manager", read: false },
    { id: 2, message: "The meeting is scheduled for 25th December.", read: false },
    { id: 3, message: "New message from Karan", read: false },


  ]);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Report has been recorded", read: false },
    { id: 2, message: "Successfully completed the task", read: false },

  ]);
  const [showMessages, setShowMessages] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const navigate = useNavigate();

  const toggleProfileMenu = () => {
    setProfileOpen(!profileOpen);
    setShowMessages(false);
    setShowNotifications(false);
  };

  const toggleMessages = () => {
    setShowMessages(!showMessages);
    setShowNotifications(false);
    setProfileOpen(false);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowMessages(false);
    setProfileOpen(false);
  };

  const markMessageAsRead = (id) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === id ? { ...message, read: true } : message
      )
    );
  };

  const markNotificationAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const handleLogout = () => {
    alert("Logged out!");
  };

  return (
    <div className="header-container">
      <div className="header-logo" onClick={() => navigate("/")}>
        Hello, Umaiorubagan
      </div>
      <div className="header-icons">
        <button
          aria-label="Messages"
          className="header-icon-btn"
          onClick={toggleMessages}
        >
          <HiOutlineChatAlt className="header-icon" />
          {messages.filter((m) => !m.read).length > 0 && (
            <span className="notification-badge">
              {messages.filter((m) => !m.read).length}
            </span>
          )}
        </button>
        <button
          aria-label="Notifications"
          className="header-icon-btn"
          onClick={toggleNotifications}
        >
          <HiOutlineBell className="header-icon" />
          {notifications.filter((n) => !n.read).length > 0 && (
            <span className="notification-badge">
              {notifications.filter((n) => !n.read).length}
            </span>
          )}
        </button>
        <div className="header-profile">
          <img
            src={profileImage}
            alt="Profile"
            className="header-profile-img"
            onClick={toggleProfileMenu}
          />
          {profileOpen && (
            <div className="profile-dropdown">
              <ul className="profile-menu">
                <li
                  className="profile-menu-item"
                  onClick={() => navigate("/home")}
                >
                  <AiOutlineHome className="profile-menu-icon" /> Home
                </li>
                <li
                  className="profile-menu-item"
                  onClick={() => navigate("/account")}
                >
                  <FiUser className="profile-menu-icon" /> My Account
                </li>
                <li
                  className="profile-menu-item"
                  onClick={() => navigate("/favorites")}
                >
                  <AiOutlineHeart className="profile-menu-icon" /> Favorites
                </li>
                <li
                  className="profile-menu-item"
                  onClick={() => navigate("/drive")}
                >
                  <BsFolder className="profile-menu-icon" /> Drive
                </li>
                <hr className="profile-divider" />
                <li
                  className="profile-menu-item logout"
                  onClick={handleLogout}
                >
                  <FiLogOut className="profile-menu-icon" /> Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {showMessages && (
        <div className="messages-dropdown">
          <ul className="messages-list">
            {messages.map((message) => (
              <li
                key={message.id}
                className={`messages-item ${
                  message.read ? "read" : "unread"
                }`}
                onClick={() => markMessageAsRead(message.id)}
              >
                {message.message}
              </li>
            ))}
          </ul>
        </div>
      )}
      {showNotifications && (
        <div className="notifications-dropdown">
          <ul className="notifications-list">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className={`notifications-item ${
                  notification.read ? "read" : "unread"
                }`}
                onClick={() => markNotificationAsRead(notification.id)}
              >
                {notification.message}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
