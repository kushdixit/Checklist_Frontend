import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { getAllTemplate } from "redux/actions/template";
import {
  LandingContainer,
  NavSection,
  MainSection,
} from "styles/pages/ChecklistDashboard";
import Footer from "components/Footer";
import SideBar from "components/SideBar";
import Analytic from "components/Analytic";
import View from "components/View";
import { useLocation } from "react-router-dom";

const ChecklistDashboard = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(getAllTemplate());
  }, []);

  return (
    <LandingContainer>
      <Navbar
        search={true}
        // style={{ padding: "0" }}
        icon={true}
        navType="freeTemplate"
      />

      <MainSection>
        <SideBar />
        {pathname === "/process" ? <Analytic /> : <View />}
      </MainSection>
      <Footer />
    </LandingContainer>
  );
};

export default ChecklistDashboard;
