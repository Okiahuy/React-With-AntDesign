import React from 'react';
import { Link } from 'react-router-dom';

const UserHeader = () => {
  return (
    <header className="user-header">
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <div className="user-info">
        {/* Hiển thị thông tin người dùng hoặc nút logout */}
        <span>Welcome, User</span>
      </div>
    </header>
  );
};

export default UserHeader;
