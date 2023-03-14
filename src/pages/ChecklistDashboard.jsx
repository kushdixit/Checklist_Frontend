import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getAllTemplateByEmail } from "redux/actions/template";
import { LandingContainer, MainSection } from "styles/pages/ChecklistDashboard";
import Footer from "components/Footer";
import SideBar from "components/SideBar";
import Analytic from "components/Analytic";
import View from "components/View";
import { useLocation } from "react-router-dom";

const ChecklistDashboard = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.auth?.userData?.email);
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(getAllTemplateByEmail(userEmail));
  }, []);

  return (
    <LandingContainer>
      <Navbar search={true} icon={true} navType="freeTemplate" />
      <MainSection>
        <SideBar />
        {pathname === "/process" ? <Analytic /> : <View />}
      </MainSection>
      <Footer />
    </LandingContainer>
  );
};

export default ChecklistDashboard;
