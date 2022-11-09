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
import { addTempChecklist } from "redux/actions/checklist";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavBar = ({ search, buttonType }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.auth?.userData?.email);
  const templateDataLength = useSelector(
    (state) => state.Template?.yourTemplate[0]?.checklists.length
  );

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

  const newTemplateHandler = async () => {
    const res = await dispatch(
      addTempChecklist(`Your Checklist ${templateDataLength + 1}`, userEmail)
    );
    if (res.error) toast(res.message);
    else navigate("/check-list");
  };
  return (
    <NavSection>
      <ToastContainer />
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
                handleClick={() => newTemplateHandler()}
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
