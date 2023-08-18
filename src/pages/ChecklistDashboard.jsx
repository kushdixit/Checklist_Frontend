import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
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
import Completed from "components/Completed";
import Search from "./search";
import { LandingContainer, MainSection } from "styles/pages/ChecklistDashboard";

const ChecklistDashboard = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const userEmail = useSelector((state) => state.auth?.userData?.email);
  const { pathname, state } = useLocation();

  const listUserHelper = async () => {
    const res = await dispatch(saveListByUser(id, userEmail));
    if (res.status === 200) {
      if (state !== null) {
        state.userApi = false;
      }
      dispatch(getAllTemplateByEmail(userEmail));
    }
  };

  useEffect(() => {
    dispatch(getAllTemplateByEmail(userEmail));
    if (state?.userApi) {
      listUserHelper();
    }
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
        {pathname.includes("/completed") && <Completed />}
        {pathname.includes("/progress") && <Completed />}
      </MainSection>
      <Footer />
    </LandingContainer>
  );
};

export default ChecklistDashboard;
