import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "pages/sign-in";
import CheckList from "pages/check-list";

const Router = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CheckList />} />
        <Route path="sign-In" element={<SignIn />} />
        <Route path="check-list" element={<CheckList />} />
      </Routes>
    </BrowserRouter>
  );

export default Router;
