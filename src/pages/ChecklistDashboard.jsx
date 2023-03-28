import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllTemplateByEmail } from "redux/actions/template";
import { isUser } from "helpers/isUser";
import Footer from "components/Footer";
import Analytic from "components/Analytic";
import View from "components/View";
import SideBar from "components/SideBar";
import Insight from "components/insights";
import Navbar from "components/Navbar";
import Search from "./search";
import { LandingContainer, MainSection } from "styles/pages/ChecklistDashboard";

const ChecklistDashboard = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.auth?.userData?.email);
  const { pathname, state } = useLocation();

  console.log("state", state);

  useEffect(() => {
    dispatch(getAllTemplateByEmail(userEmail));
  }, []);

  return (
    <LandingContainer>
      <Navbar search={true} icon={true} navType="freeTemplate" />
      <MainSection>
        {isUser() && <SideBar />}
        {pathname.includes("/search") && <Search />}
        {pathname === "/process" && <Analytic />}
        {pathname.includes("/temp") && <View />}
        {pathname.includes("/insight") && <Insight />}
      </MainSection>
      <Footer />
    </LandingContainer>
  );
};

export default ChecklistDashboard;
