import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "pages/sign-in";
import SignUp from "pages/sign-up";
import Landing from "pages/landing";
import Search from "pages/search";
import CreateList from "pages/CreateList";
import FreeTemplate from "pages/FreeTemplate";
import Explore from "pages/Explore";
import ViewList from "pages/ViewList";
import ChecklistDashboard from "pages/ChecklistDashboard";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="search/:id" exact element={<Search />} />
        <Route path="createChecklist" exact element={<CreateList />} />
        <Route path="createChecklist/:id" exact element={<CreateList />} />
        <Route path="checklists" exact element={<ViewList />} />
        <Route path="checklists/:id" exact element={<ViewList />} />
        <Route path="landing" element={<Landing />} />
        <Route path="freeTemplate" element={<FreeTemplate />} />
        <Route path="explore" element={<Explore />} />
        <Route path="checklistdashboard" element={<ChecklistDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
