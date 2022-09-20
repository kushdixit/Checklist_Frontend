import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "pages/sign-in";
import Dashboard from "pages/dashboard";
import CheckList from "pages/check-list";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="sign-In" element={<SignIn />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="check-list" element={<CheckList />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
