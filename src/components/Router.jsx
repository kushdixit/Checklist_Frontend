import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "pages/sign-in";
import SignUp from "pages/sign-up";
import Dashboard from "pages/dashboard";
import CheckList from "pages/check-list";
import ResetPassword from "pages/resetPassword";

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("access_token"));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Dashboard /> : <SignIn />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="check-list" element={<CheckList />} />
        <Route path="resetPassword" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
