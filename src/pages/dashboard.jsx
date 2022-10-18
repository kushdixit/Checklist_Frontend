import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "components/Button";
import { BodyContainer } from "styles/pages/Dashboard";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
const Dashboard = () => {
  const navigate = useNavigate();

  const passwordReset = useSelector(
    (state) => state.auth.userData.isForgotPassword
  );
  console.log(passwordReset);
  const addCheckList = () => {
    navigate("/check-list");
  };

  useEffect(() => {
    const res = localStorage.getItem("access_token");
    if (!res) navigate("/");
  }, []);

  // useEffect(() => {
  //   if (passwordReset) navigate("/ResetPassword");
  // }, [passwordReset]);

  return (
    <BodyContainer>
      <Navbar />
      Your Checklist
      <Button handleClick={addCheckList}>Plus</Button>
      <Card />
    </BodyContainer>
  );
};
export default Dashboard;
