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
  InitialsWrapper,
  BurgerSection,
  BurgerSubSection
} from "styles/components/Navbar";
import TextInput from "components/FormElements/TextInput";
import Button from "components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import SearchNew from "assets/SVG/SearchNew";
import { addTempChecklist } from "redux/actions/checklist";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SET_IS_EDITABLE } from "redux/actions/action_types";
import Logout from "assets/SVG/Logout";
import AlertModal from "components/AlertModal";
import { useForm } from "react-hook-form";
import Burger from "assets/images/burger.png";
const NavBar = ({ search, buttonType }) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.auth?.userData?.email);
  const taskEditable = useSelector((state) => state.editable?.isEditable);
  const YourTemplates = useSelector((state) => state.task?.allChecklist);
  const firstName = useSelector((state) => state.auth?.userData?.firstName);
  const lastName = useSelector((state) => state.auth?.userData?.lastName);

  const [isGood, setIsGood] = useState(false);
  const [modal, setModal] = useState(false);

  function toggleabc(data) {
    setModal(data);
  }
  function toggleab(data) {
    setModal(data);
  }

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
      addTempChecklist(
        `Your Checkslist ${YourTemplates[YourTemplates.length - 1]?.id + 1}`,
        userEmail
      )
    );
    if (res.error) toast(res.message);
    else {
      dispatch({ type: SET_IS_EDITABLE, payload: true });
      navigate("/check-list", {
        state: { id: res?.id, showEditable: false },
      });
    }
  };

  return (
    <NavSection>
      <ToastContainer />
      <BurgerSection  onClick={() => {toggleabc(true); }}>
        <img src={Burger} alt="Burger" />
      
      </BurgerSection>
      
      <SubNavSection>
        <FirstSection>
          <HeadingText onClick={() => navigate("/")}>Checklist</HeadingText>
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
          {state?.showEditable && (
            <div>
              <Button
                handleClick={() =>
                  dispatch({ type: SET_IS_EDITABLE, payload: !taskEditable })
                }
              >
                {`${taskEditable ? "Done" : "Edit"}`}
              </Button>
            </div>
          )}
          <ImageSubSection>
            <SecondSubSection>
              <Profile>
                <h4>{firstName}</h4>
              </Profile>
              <button className="button" onClick={() => setIsGood(!isGood)}>
                <InitialsWrapper>
                  <div>
                    {firstName[0]} {lastName[0]}
                  </div>
                </InitialsWrapper>
              </button>
            </SecondSubSection>
            {isGood ? (
              <Morecontent>
                <Logout style={{ width: "15px", marginRight: "0.25rem" }} />
                <ContentItem onClick={() => toggleab(true)}>Logout</ContentItem>
              </Morecontent>
            ) : null}
          </ImageSubSection>
        </SecondSection>
        <AlertModal
          modalType="logout"
          isOpen={modal}
          togglefunction={toggleab}
          notify={logout}
        />
      </SubNavSection>
    </NavSection>
  );
};
export default NavBar;
