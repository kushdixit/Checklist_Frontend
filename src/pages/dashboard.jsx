import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "components/Button";
import { BodyContainer } from "styles/pages/Dashboard";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
const Dashboard = () => {
  const navigate = useNavigate();

  const addCheckList = () => {
    navigate("/check-list");
  };

  return (
    <BodyContainer>
      <Navbar/>
      {/* Your Checklist
      <Button handleClick={addCheckList}>Plus</Button> */}
      <Card />
    </BodyContainer>
  );
};
export default Dashboard;
