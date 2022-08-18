import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "pages/sign-in";
import SignOut from "pages/sign-up";

const Router=()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />             
        <Route path="sign-In"  element={<SignIn />} />  
        <Route path="sign-out"  element={<SignOut />} />     
      </Routes>
    </BrowserRouter>
  );
}

export default Router;