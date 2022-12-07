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
import YourSearch from "components/YourSearch";

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const [searchedData, setSearchedData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.auth?.userData?.email);
  const searchedValue = useSelector((state) => state.search?.search);
  const templateData = useSelector((state) => state.Template?.yourTemplate);
  const allChecklist = useSelector((state) => state.task?.allChecklist);

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

  const allTemplate = useSelector((state) => state.Template?.allTemplate);
  useEffect(() => {
    if (passwordReset) toggleab(true);
  }, [passwordReset]);

  useEffect(() => {
    if (searchedValue?.length != 0) {
      const res = allChecklist?.filter((item) =>
        item.checklistName.toLowerCase().includes(searchedValue?.toLowerCase())
      );
      setSearchedData(res);
    } else setSearchedData([]);
  }, [searchedValue]);

  return (
    <BodyContainer>
      <ResetPassword isOpen={modal} togglefunction={toggleab} />
      <Navbar search={true} buttonType="Create List" />
      {searchedValue && <YourSearch searchedData={searchedData} />}
      {templateData != null && <YourTemplate />}
      {allTemplate?.map((item, id) => (
        <ChecklistCards key={id} item={item} />
      ))}
    </BodyContainer>
  );
};
export default Dashboard;
