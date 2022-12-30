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
  const allTemplate = useSelector((state) => state.Template?.allTemplate);
  const yourTemplate = useSelector((state) => state.Template?.yourTemplate);
  const searchedterm = state?.searchedterm;

  useEffect(() => {
    const res = localStorage.getItem("access_token");
    if (!res) navigate("/");
  }, []);

  useEffect(() => {
    if (searchedterm?.length != 0) {
      const userCreated = yourTemplate[0].checklists
        ?.filter((item) => {
          return item.checklistName
            .toLowerCase()
            .includes(searchedterm?.toLowerCase());
        })
        .map((item) => {
          return { ...item, cardType: "user" };
        });

      const default1 = allTemplate[0].checklists
        ?.filter((item) => {
          return item.checklistName
            .toLowerCase()
            .includes(searchedterm?.toLowerCase());
        })
        .map((item) => {
          return { ...item, cardType: "default" };
        });

      const default2 = allTemplate[1].checklists
        ?.filter((item) => {
          return item.checklistName
            .toLowerCase()
            .includes(searchedterm?.toLowerCase());
        })
        .map((item) => {
          return { ...item, cardType: "default" };
        });

      setSearchedData([...default1, ...default2, ...userCreated]);
    } else setSearchedData([]);
  }, []);

  return (
    <BodyContainer>
      <Navbar search={false} buttonType="Create List" addButton={true} />
      {searchedData && (
        <YourSearch searchedData={searchedData} searchedterm={searchedterm} />
      )}
    </BodyContainer>
  );
};
export default Search;
