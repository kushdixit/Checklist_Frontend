import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "pages/sign-in";
import SignUp from "pages/sign-up";
import Dashboard from "pages/dashboard";
import CheckList from "pages/check-list";
import Landing from "pages/landing";
import Search from "pages/search";
import CreateList from "pages/CreateList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="search" element={<Search />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="createChecklist" exact element={<CreateList />} />
        <Route path="check-list" exact element={<CheckList />} />
        <Route path="check-list/:id" element={<CheckList />} />
        <Route path="landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
