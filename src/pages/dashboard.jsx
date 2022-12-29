import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BodyContainer } from "styles/pages/Dashboard";
import ChecklistCards from "../components/ChecklistCards";
import Navbar from "../components/Navbar";
import ResetPassword from "../components/resetPassword";
import { getAllTemplate, getAllTemplateByEmail } from "redux/actions/template";
import { SET_SEARCH } from "redux/actions/action_types";
import YourTemplate from "components/YourTemplate";

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.auth?.userData?.email);
  const templateData = useSelector((state) => state.Template?.yourTemplate);
  const allTemplate = useSelector((state) => state.Template?.allTemplate);

  function toggleab(data) {
    setModal(data);
  }

  const passwordReset = useSelector(
    (state) => state.auth?.userData?.isForgotPassword
  );

  useEffect(() => {
    const res = localStorage.getItem("access_token");
    if (!res) navigate("/");
    dispatch(getAllTemplateByEmail(userEmail));
    dispatch(getAllTemplate());
    dispatch({ type: SET_SEARCH, payload: "" });
  }, []);

  useEffect(() => {
    if (passwordReset) toggleab(true);
  }, [passwordReset]);

  return (
    <BodyContainer>
      <ResetPassword isOpen={modal} togglefunction={toggleab} />
      <Navbar search={true} buttonType="Create List" addButton={true} />
      {templateData != null && <YourTemplate />}
      {allTemplate?.map((item, id) => (
        <ChecklistCards key={id} item={item} />
      ))}
    </BodyContainer>
  );
};
export default Dashboard;
