// AdminUser.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const AdminUser = () => {
  return (
    <div>
      <h2>Admin User Module</h2>
      {/* Define your child routes here */}
      <Routes>
        <Route path="profile" element={<UserProfile />} />
        <Route path="settings" element={<UserSettings />} />
      </Routes>
    </div>
  );
};

const UserProfile = () => {
  return <h3>User Profile</h3>;
};

const UserSettings = () => {
  return <h3>User Settings</h3>;
};

export default AdminUser;
