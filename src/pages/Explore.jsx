import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { getAllTemplate } from "redux/actions/template";
import ChecklistCards from "../components/ChecklistCards";
import { LandingContainer, NavSection,IconInputFieldNew,SearchSection,LeftSection,RightSection } from "styles/pages/Explore";
import TextInput from "components/FormElements/TextInput";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { SET_IS_EDITABLE, SET_SEARCH } from "redux/actions/action_types";
import CheckliCard from "components/CheckliCard";
const Explore = ( search) => {
  const dispatch = useDispatch();
  const [updateSearch, SetUpdateSearch] = useState("");
  const navigate = useNavigate();
  const allTemplate = useSelector((state) => state.Template?.allTemplate);
  useEffect(() => {
    dispatch(getAllTemplate());
  }, []);
  const {
    handleSubmit: submitData,
    control: formControl,
    watch,
    reset,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });
  const searchData = (data) => {
    dispatch({ type: SET_SEARCH, payload: data?.listSearch });
    navigate(`/search/${data?.listSearch}`, {
      state: { searchedterm: data?.listSearch },
    });
  };
  useEffect(() => {
    if (updateSearch === "") {
      dispatch({ type: SET_SEARCH, payload: "" });
    } else dispatch({ type: SET_SEARCH, payload: updateSearch });
  }, [updateSearch]);
  return (
    <LandingContainer>
      <NavSection>
        <Navbar search={true} navType="freeTemplate" />
      </NavSection>
     <h1>Free Template Library</h1>
     <p>Explore thousands of free checklist and business process templates. Copy, complete, or download for free.</p>
     <SearchSection>
          {search && (
            <form onSubmit={submitData(searchData)}>
              <IconInputFieldNew>
                <TextInput
                  control={formControl}
                  name="listSearch"
                  type="text"
                  placeholder="i.e blog posts"
                />
              </IconInputFieldNew>
            </form>
          )}
        </SearchSection>
        
        <LeftSection>  <h4>Popular Checklist</h4><CheckliCard/></LeftSection>
        <RightSection></RightSection>
    </LandingContainer>
  );
};

export default Explore;
