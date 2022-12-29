import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { BodyContainer } from "styles/pages/Dashboard";
import Navbar from "../components/Navbar";
import YourSearch from "components/YourSearch";

const Search = () => {
  const [searchedData, setSearchedData] = useState([]);
  const navigate = useNavigate();
  const { state } = useLocation();
  const allChecklist = useSelector((state) => state.task?.allChecklist);
  const searchedterm = state?.searchedterm;

  useEffect(() => {
    const res = localStorage.getItem("access_token");
    if (!res) navigate("/");
  }, []);

  useEffect(() => {
    if (searchedterm?.length != 0) {
      const res = allChecklist?.filter((item) =>
        item.checklistName.toLowerCase().includes(searchedterm?.toLowerCase())
      );
      setSearchedData(res);
    } else setSearchedData([]);
  }, []);

  return (
    <BodyContainer>
      <Navbar search={false} buttonType="Create List" addButton={true} />
      {searchedData && <YourSearch searchedData={searchedData} />}
    </BodyContainer>
  );
};
export default Search;
