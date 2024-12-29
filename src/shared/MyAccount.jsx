import React from "react";
import "./MyAccount.css";
import profileImage from './img/1.png'; // Adjust path as needed

export default function MyAccount() {
  const accountDetails = {
    name: "Umaiorubagan",
    email: "umaiorubaganv@gmail.com",
    phone: "+1 234 567 8901",
    address: "123, Main Street, Dindigul, Tamil Nadu, India",
  };

  return (
    <div className="account-container">
      <div className="account-header">
        <h1>My Account</h1>
      </div>
      <div className="account-content">
        <div className="profile-card">
          <div className="profile-image">
            {/* Display imported profile image */}
            <img src={profileImage} alt="Profile" />
          </div>
          <div className="account-details">
            <h2>{accountDetails.name}</h2>
            <p><strong>Email:</strong> {accountDetails.email}</p>
            <p><strong>Phone:</strong> {accountDetails.phone}</p>
            <p><strong>Address:</strong> {accountDetails.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
