import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "components/Button";
import { BodyContainer } from "styles/pages/Dashboard";

const Dashboard = () => {
  const navigate = useNavigate();
  const {state} = useLocation()

  console.log('state ==========', state.loginData)

  const addCheckList = () => {
    navigate("/check-list");
  };

  

  return (
    <BodyContainer>
      Your Checklist
      <Button handleClick={addCheckList}>Plus</Button>
      
    </BodyContainer>
  );
};
export default Dashboard;
