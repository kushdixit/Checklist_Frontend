import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "components/Button";
import { BodyContainer } from "styles/pages/Dashboard";
import ChecklistCards from "../components/ChecklistCards";
import Navbar from "../components/Navbar";
import ResetPassword from "../components/resetPassword";

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  function toggleab(data) {
    setModal(data);
  }

  const passwordReset = useSelector(
    (state) => state.auth.userData.isForgotPassword
  );
  const addCheckList = () => {
    navigate("/check-list");
  };

  useEffect(() => {
    const res = localStorage.getItem("access_token");
    if (!res) navigate("/");
  }, []);

  useEffect(() => {
    if (passwordReset) toggleab(true);
  }, [passwordReset]);

  return (
    <BodyContainer>
      <ResetPassword isOpen={modal} togglefunction={toggleab} />
      <Navbar search={true} buttonType="Create List" />
      <ChecklistCards />
    </BodyContainer>
  );
};
export default Dashboard;
