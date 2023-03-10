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

const ChecklistDashboard = (search) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTemplate());
  }, []);

  return (
    <LandingContainer>
      <NavSection>
        <Navbar search={true} navType="freeTemplate" />
      </NavSection>
      <MainSection>
        <SideBar />
        <Analytic />
      </MainSection>
      <Footer />
    </LandingContainer>
  );
};

export default ChecklistDashboard;
