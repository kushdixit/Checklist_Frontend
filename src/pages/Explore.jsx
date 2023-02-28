import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { getAllTemplate } from "redux/actions/template";
import {
  LandingContainer,
  NavSection,
  IconInputFieldNew,
  SearchSection,
  LeftSection,
  RightSection,
  Listeners,
  SubMainSection,
  ImageSection,
  Text,
  Border,
} from "styles/pages/Explore";
import TextInput from "components/FormElements/TextInput";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SET_SEARCH } from "redux/actions/action_types";
import CheckliCardWrapper from "components/CheckliCardWrapper";
import Google from "assets/images/google.png";
import Person from "assets/images/person.png";
import Flower from "assets/images/flower.jpg";
import Footer from "components/Footer";

const Explore = (search) => {
  const dispatch = useDispatch();
  const [updateSearch, SetUpdateSearch] = useState("");
  const navigate = useNavigate();
  const allTemplate = useSelector((state) => state.Template?.allTemplate);

  useEffect(() => {
    dispatch(getAllTemplate());
  }, []);

  const { handleSubmit: submitData, control: formControl } = useForm({
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
      <p>
        Explore thousands of free checklist and business process templates.
        Copy, complete, or download for free.
      </p>
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
      <SubMainSection>
        <LeftSection>
          {allTemplate?.map((item) => (
            <CheckliCardWrapper data={item} />
          ))}
        </LeftSection>
        {/* <CheckliCard /> */}
        <RightSection>
          <Listeners>
            <h4>Top Publishers</h4>
            <ImageSection>
              <img src={Google} alt="Google" />
            </ImageSection>
            <ImageSection>
              <img src={Flower} alt="Flower" />
            </ImageSection>
            <ImageSection>
              <img src={Person} alt="Person" />
            </ImageSection>
            <ImageSection>
              <button className="button">Become a Publisher</button>
            </ImageSection>
            <ImageSection>
              <h4>Categories</h4>
            </ImageSection>
            <Text>Education</Text>
            <Text>Bussiness</Text>
            <Text>Digital Marketing</Text>
            <Text>Tech</Text>

            <Text>Health and Fitness</Text>
            <Text>Lifestyle</Text>
            <Text>Gaming</Text>
            <Text>Startup</Text>
            <Text>Productivity</Text>
            <Text>Travel</Text>
            <Border></Border>
            <Text>New</Text>
            <Text>Popular</Text>
            <ImageSection>
              <button className="button">See More</button>
            </ImageSection>
          </Listeners>
        </RightSection>
      </SubMainSection>
      <Footer />
    </LandingContainer>
  );
};

export default Explore;
