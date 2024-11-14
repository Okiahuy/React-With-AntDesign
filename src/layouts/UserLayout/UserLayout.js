import React from 'react';
import { Outlet } from 'react-router-dom'; // Outlet để render các trang con trong layout
import UserHeader from '../../components/UserComponent/UserHeader';


const UserLayout = () => {
  return (
    <div className="user-layout">
      {/* Header */}
      <UserHeader />

      {/* Nội dung trang sẽ được render ở đây */}
      <main className="user-content">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
