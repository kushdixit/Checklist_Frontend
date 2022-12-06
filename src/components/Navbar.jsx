import React, { useState, useRef, useEffect } from "react";
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
  LogoSection,
  LogoSearchSection,
  WrapperSize,
  InitialsWrapperNew,
  HeaderWrapper,
  SearchSection,
  IconWrapperNew,
  IconInputFieldNew
} from "styles/components/Navbar";
import TextInput from "components/FormElements/TextInput";
import Button from "components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import SearchNew from "assets/SVG/SearchNew";
import Cancel from "assets/SVG/cancel";
import { addTempChecklist } from "redux/actions/checklist";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SET_IS_EDITABLE, SET_SEARCH } from "redux/actions/action_types";
import Logout from "assets/SVG/Logout";
import AlertModal from "components/AlertModal";
import { useForm } from "react-hook-form";

const NavBar = ({ search, buttonType }) => {
  const wrapperRef = useRef();
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const [logoutModal, setLogoutModal] = useState(false);
  const [iconHandle, setIconHandle] = useState();
  const [updateSearch, SetUpdateSearch] = useState("");
  const [modal, setModal] = useState(false);
  const userEmail = useSelector((state) => state.auth?.userData?.email);
  const taskEditable = useSelector((state) => state.editable?.isEditable);
  const YourTemplates = useSelector((state) => state.task?.allChecklist);
  const firstName = useSelector((state) => state.auth?.userData?.firstName);
  const lastName = useSelector((state) => state.auth?.userData?.lastName);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current?.contains(event?.target)) {
        setLogoutModal(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  function toggleab(data) {
    setModal(data);
  }

  const {
    handleSubmit: submitData,
    control: formControl,
    watch,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  useEffect(() => {
    const subscription = watch((value) =>
      setIconHandle(value?.listSearch.length)
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    if (updateSearch == "") {
      dispatch({ type: SET_SEARCH, payload: "" });
    } else dispatch({ type: SET_SEARCH, payload: updateSearch });
  }, [updateSearch]);

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

  const searchData = (data) => {
    dispatch({ type: SET_SEARCH, payload: data?.listSearch });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      SetUpdateSearch((prev) => prev.slice(0, -1));
    }
  };

  return (
    <NavSection>
   
      <BurgerSection>
        <HeaderWrapper>
          <ImageSubSection>
            <SecondSubSection>
              <button
                className="button"
                onClick={() => setLogoutModal(!logoutModal)}
              >
                <InitialsWrapperNew>
                  <WrapperSize>
                    <h4>{firstName[0].toUpperCase()}</h4>
                    <h4> {lastName[0].toUpperCase()}</h4>
                  </WrapperSize>
                </InitialsWrapperNew>
              </button>
            </SecondSubSection>
            {logoutModal ? (
              <Morecontent onClick={() => toggleab(true)}>
                <Logout
                  style={{
                    width: "15px",
                    marginRight: "0.25rem",
                  }}
                />
                <ContentItem>Logout</ContentItem>
              </Morecontent>
            ) : null}
          </ImageSubSection>
          <LogoSearchSection>
            <LogoSection>Checklist</LogoSection>
          </LogoSearchSection>
          {search && (
            <Footer>
              <Button
                className="button"
                handleClick={() => newTemplateHandler()}
              >
                +
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
        </HeaderWrapper>
        <SearchSection>
          {search && (
            <form onSubmit={submitData(searchData)}>
              <IconInputFieldNew>
                <TextInput
                  control={formControl}
                  name="listSearch"
                  type="text"
                  placeholder="Search"
                  handlekeyPress={(e) => searchData()}
                />
              </IconInputFieldNew>
            </form>
          )}
        </SearchSection>
      </BurgerSection>
     
      <SubNavSection>
        <FirstSection>
          <HeadingText onClick={() => navigate("/")}>Checklist</HeadingText>
        </FirstSection>
        <SecondSection>
          {search && (
            <IconInputField>
              <form
                style={{ width: "100%", display: "flex" }}
                onSubmit={submitData(searchData)}
              >
                <IconInputField>
                  <TextInput
                    name="listSearch"
                    type="text"
                    placeholder="Search"
                    control={formControl}
                    handleKeyDown={handleKeyDown}
                    handlekeyPress={(e) => {
                      SetUpdateSearch((prev) => prev + e.key);
                    }}
                  />
                </IconInputField>
                <IconWrapper>
                  <Button
                    style={{
                      background: "transparent",
                      border: "none",
                      boxShadow: "none",
                    }}
                  >
                    <SearchNew />
                  </Button>
                </IconWrapper>
              </form>
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
                <h4>
                  {firstName[0].toUpperCase() + firstName.slice(1)}{" "}
                  {lastName[0].toUpperCase() + lastName.slice(1)}
                </h4>
              </Profile>
              <button
                className="button"
                onClick={() => setLogoutModal(!logoutModal)}
                ref={wrapperRef}
              >
                <InitialsWrapper>
                  <div>
                    {firstName[0].toUpperCase()} {lastName[0].toUpperCase()}
                  </div>
                </InitialsWrapper>
                {logoutModal ? (
                  <Morecontent onClick={() => toggleab(true)}>
                    <Logout
                      style={{
                        width: "15px",
                        marginRight: "0.25rem",
                      }}
                    />
                    <ContentItem>Logout</ContentItem>
                  </Morecontent>
                ) : null}
              </button>
            </SecondSubSection>
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
