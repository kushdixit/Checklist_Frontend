import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { getAllTemplate } from "redux/actions/template";
import ChecklistCards from "../components/ChecklistCards";
import { LandingContainer, NavSection } from "styles/pages/Landing";

const FreeTemplate = () => {
  const dispatch = useDispatch();
  const allTemplate = useSelector((state) => state.Template?.allTemplate);
  useEffect(() => {
    dispatch(getAllTemplate());
  }, []);

  return (
    <LandingContainer>
      <NavSection>
        <Navbar search={true} navType="freeTemplate" />
      </NavSection>
      {allTemplate?.map((item, id) => (
        <ChecklistCards key={id} item={item} />
      ))}
    </LandingContainer>
  );
};

export default FreeTemplate;
