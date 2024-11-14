import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/AdminPage/Dashboard';
import ManageUsers from '../pages/AdminPage/ManageUser';
import BookAxios from '../pages/AdminPage/bookAxios';
import BookFetch from '../pages/AdminPage/bookFetch';
import LoginForm from '../components/AdminComponent/LoginComponent/LoginForm';


const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="users" element={<ManageUsers />} />
      <Route path="fetch-book" element={<BookFetch />} />
      <Route path="axios-book" element={<BookAxios />} />
      <Route path="login" element={<LoginForm />} />
      <Route path="*" element={<Dashboard />} />
    </Routes>
  );
};

export default AdminRoutes;
