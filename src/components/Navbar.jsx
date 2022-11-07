import React, { useState } from "react";
import {
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
  IconWrapper,
} from "styles/components/Navbar";
import TextInput from "components/FormElements/TextInput";
import FirstImage from "assets/images/firstimage.jpg";
import { useForm } from "react-hook-form";
import Button from "components/Button";
import { useNavigate } from "react-router-dom";
import SearchNew from "assets/SVG/SearchNew";
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
                placeholder="Find Something Here"
                control={control}
              />
              <IconWrapper>
                <SearchNew />
              </IconWrapper>
            </IconInputField>
          )}
          {search && (
            <Footer>
              <Button
                className="button"
                handleClick={() => navigate("/check-list")}
              >
                {`+ ${buttonType}`}
              </Button>
            </Footer>
          )}
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
