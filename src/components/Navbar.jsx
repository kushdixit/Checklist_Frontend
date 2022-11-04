import React, { useState } from "react";
import {
  NavBarContainer,
  NavSection,
  FirstSection,
  SecondSection,
  SecondSubSection,
  IconInputField,
  Footer,
  Profile,
  Morecontent,
  ContentItem,
  ImageSubSection,
  SubNavSection,
   HeadingText,
   IconWrapper
} from "styles/components/Navbar";
import TextInput from "components/FormElements/TextInput";
import FirstImage from "assets/images/firstimage.jpg";
import { useForm, Controller } from "react-hook-form";
import Search from "assets/SVG/Search";
import Button from "components/Button";
import { useNavigate } from "react-router-dom";
import SearchNew from "assets/SVG/SearchNew";
import Icon from "assets/SVG/LockIcon";
const NavBar = ({ search, buttonType }) => {
  const navigate = useNavigate();
  const [isGood, setIsGood] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    shouldFocusError: true,
  });
  const logout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };
  return (
    // <NavBarContainer/>
    <NavSection>
      <SubNavSection>
      <FirstSection>
        <HeadingText>Checklist</HeadingText>
      </FirstSection>
    
      <SecondSection>
      {search && (
          <IconInputField>
            <TextInput
              name=""
              type="text"
              placeholder="Find Something Hereeee"
              control={control}
            />
            <IconWrapper>
          <SearchNew/>
          </IconWrapper>
          </IconInputField>
           
        )}
         
        <Footer>
          <Button
            className="button"
            handleClick={() => navigate("/check-list")}
          >
            {`+ ${buttonType}`}
          </Button>
        </Footer>
        <ImageSubSection>
          <SecondSubSection>
            <Profile>
              <h4>Admin</h4>
              <h5>Shivam</h5>
            </Profile>
            <button className="button" onClick={() => setIsGood(!isGood)}>
              <img src={FirstImage} alt="FirstImage" />
            </button>
          </SecondSubSection>

          {isGood ? (
            <Morecontent>
              <h5>Welcome !</h5>
              <ContentItem>Profile</ContentItem>
              <ContentItem onClick={logout}>Logout</ContentItem>
            </Morecontent>
          ) : null}
        </ImageSubSection>
        
      </SecondSection>
      </SubNavSection>
    </NavSection>
  );
};
export default NavBar;
