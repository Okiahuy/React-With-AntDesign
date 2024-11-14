import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/UserPage/Home';
import Profile from '../pages/UserPage/Profile';
import About from '../pages/UserPage/About';
import LoginForm from '../components/AdminComponent/LoginComponent/LoginForm';
const UserRoutes = () => {
  return (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<LoginForm />} />
      </Routes>
  );
};

export default UserRoutes;
