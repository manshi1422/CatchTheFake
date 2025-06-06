

import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from '../Signin';
import StartGame from '../components/StartGame';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/home" element={<StartGame />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;
