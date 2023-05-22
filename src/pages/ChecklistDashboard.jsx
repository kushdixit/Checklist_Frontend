import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllTemplateByEmail } from "redux/actions/template";
import { saveListByUser } from "redux/actions/checklist";
import { isUser } from "helpers/isUser";
import Footer from "components/Footer";
import Analytic from "components/Analytic";
import View from "components/View";
import SideBar from "components/SideBar";
import Insight from "components/insights";
import Navbar from "components/Navbar";
import CreateList from "components/CreateList";
import Search from "./search";
import { LandingContainer, MainSection } from "styles/pages/ChecklistDashboard";

const ChecklistDashboard = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.auth?.userData?.email);
  const { pathname, state } = useLocation();

  const listUserHelper = async () => {
    const res = await dispatch(saveListByUser(state?.id, userEmail));
    if (res.status === 200) {
      state.userApi = false;
      dispatch(getAllTemplateByEmail(userEmail));
    }
  };

  useEffect(() => {
    dispatch(getAllTemplateByEmail(userEmail));
    if (state?.userApi) listUserHelper();
  }, []);

  return (
    <LandingContainer>
      <Navbar search={true} icon={true} navType="freeTemplate" />
      <MainSection>
        {isUser() && <SideBar />}
        {pathname.includes("/search") && <Search />}
        {pathname === "/process" && <Analytic />}
        {pathname.includes("/dashboard") && <View />}
        {pathname.includes("/create-list") && <CreateList />}
        {pathname.includes("/insight") && <Insight />}
      </MainSection>
      <Footer />
    </LandingContainer>
  );
};

export default ChecklistDashboard;
