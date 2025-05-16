// src/routes/Router.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from '../Signin';
import StartGame from '../components/StartGame';
import { useAuth } from '../context/authcontext';

const Router = () => {
  // const { userLoggedIn}= useAuth();
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/home" element={<StartGame />} />
      {/* <Route path="/signup" element={<SignUp />} /> */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;
