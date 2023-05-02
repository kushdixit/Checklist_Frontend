import React, { useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllTemplateByEmail } from "redux/actions/template";
import { saveListByUser } from "redux/actions/checklist";
import { isUser } from "helpers/isUser";
import Search from "./search";
import { LandingContainer, MainSection } from "styles/pages/ChecklistDashboard";

const Footer = lazy(() => import("components/Footer"));
const Analytic = lazy(() => import("components/Analytic"));
const View = lazy(() => import("components/View"));
const SideBar = lazy(() => import("components/SideBar"));
const Insight = lazy(() => import("components/insights"));
const Navbar = lazy(() => import("components/Navbar"));
const CreateList = lazy(() => import("components/CreateList"));

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
      <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
        <Navbar search={true} icon={true} navType="freeTemplate" />
      </Suspense>
      <MainSection>
        {isUser() && (
          <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
            <SideBar />
          </Suspense>
        )}
        {pathname.includes("/search") && (
          <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
            <Search />
          </Suspense>
        )}
        {pathname === "/process" && (
          <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
            <Analytic />
          </Suspense>
        )}
        {pathname.includes("/temp") && (
          <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
            <View />
          </Suspense>
        )}
        {pathname.includes("/create-list") && (
          <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
            <CreateList />
          </Suspense>
        )}
        {pathname.includes("/insight") && (
          <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
            <Insight />
          </Suspense>
        )}
      </MainSection>
      <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
        <Footer />
      </Suspense>
    </LandingContainer>
  );
};

export default ChecklistDashboard;
