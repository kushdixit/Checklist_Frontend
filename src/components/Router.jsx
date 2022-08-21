import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "pages/sign-in";
import SignOut from "pages/sign-up";
import CheckList from "pages/check-list";

const Router=()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignOut />} />             
        <Route path="sign-In"  element={<SignIn />} />  
        <Route path="sign-out"  element={<SignOut />} />    
        <Route path="check-list"  element={<CheckList />} />    
      </Routes>
    </BrowserRouter>
  );
}

export default Router;