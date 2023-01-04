import React, { useState, useRef, useEffect } from "react";
import {
  NavSection,
  FirstSection,
  SecondSection,
  SecondSubSection,
  Footer,
  Profile,
  Morecontent,
  ContentItem,
  ImageSubSection,
  SubNavSection,
  HeadingText,
  InitialsWrapper,
  BurgerSection,
  LogoSection,
  LogoSearchSection,
  WrapperSize,
  InitialsWrapperNew,
  HeaderWrapper,
  SearchSection,
  IconInputField,
  IconWrapper,
  IconInputFieldNew,
  EditSection,
  ButtonEditSection,
} from "styles/components/Navbar";
import Button from "components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_IS_EDITABLE, SET_SEARCH } from "redux/actions/action_types";
import Logout from "assets/SVG/Logout";
import AlertModal from "components/AlertModal";
import { useForm } from "react-hook-form";
import TextInput from "components/FormElements/TextInput";
import SearchNew from "assets/SVG/SearchNew";
import Cancel from "assets/SVG/cancel";

const NavBar = ({
  search,
  buttonType,
  addButton,
  createList,
  getPayload,
  showProfile,
}) => {
  const wrapperRef = useRef();
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const [logoutModal, setLogoutModal] = useState(false);
  const [iconHandle, setIconHandle] = useState();
  const [updateSearch, SetUpdateSearch] = useState("");
  const [modal, setModal] = useState(false);
  const taskEditable = useSelector((state) => state.editable?.isEditable);
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
    reset,
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
    if (updateSearch === "") {
      dispatch({ type: SET_SEARCH, payload: "" });
    } else dispatch({ type: SET_SEARCH, payload: updateSearch });
  }, [updateSearch]);

  const logout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };

  const newTemplateHandler = async () => {
    navigate("/createChecklist");
  };

  const searchData = (data) => {
    dispatch({ type: SET_SEARCH, payload: data?.listSearch });
    navigate(`/search/${data?.listSearch}`, {
      state: { searchedterm: data?.listSearch },
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      SetUpdateSearch((prev) => prev.slice(0, -1));
    }
  };

  const handleIconClick = () => {
    console.log("is here");
    if (updateSearch.length !== 0) {
      SetUpdateSearch("");
      dispatch({ type: SET_SEARCH, payload: "" });
      reset({
        listSearch: "",
      });
    }
  };

  return (
    <NavSection>
      <BurgerSection>
        <HeaderWrapper>
          {!showProfile && (
            <ImageSubSection>
              <SecondSubSection>
                <button
                  className="button"
                  ref={wrapperRef}
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
                <Morecontent
                  onClick={() => {
                    toggleab(true);
                  }}
                >
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
          )}
          <LogoSearchSection>
            <LogoSection onClick={() => navigate("/dashboard")}>
              Checklist
            </LogoSection>
          </LogoSearchSection>
          {addButton && (
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
            <ButtonEditSection>
              <Button
                style={{ padding: "0.5rem 1rem" }}
                handleClick={() =>
                  dispatch({ type: SET_IS_EDITABLE, payload: !taskEditable })
                }
              >
                {`${taskEditable ? "Done" : "Edit"}`}
              </Button>
            </ButtonEditSection>
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
                />
              </IconInputFieldNew>
            </form>
          )}
        </SearchSection>
      </BurgerSection>

      <SubNavSection>
        <FirstSection>
          <HeadingText onClick={() => navigate("/dashboard")}>
            Checklist
          </HeadingText>
        </FirstSection>
        <SecondSection>
          {search && (
            <IconInputField style={{ display: "flex" }}>
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
              </form>
              <IconWrapper onClick={handleIconClick}>
                <Button
                  style={{
                    background: "transparent",
                    border: "none",
                    boxShadow: "none",
                    cursor: "text",
                  }}
                >
                  {updateSearch.length == 0 ? <SearchNew /> : <Cancel />}
                </Button>
              </IconWrapper>
            </IconInputField>
          )}
          {addButton && (
            <Footer>
              <Button
                className="button"
                handleClick={() => newTemplateHandler()}
              >
                {`+ ${buttonType}`}
              </Button>
            </Footer>
          )}
          {createList && (
            <Button
              className="button"
              style={{ padding: "0.5rem 1rem" }}
              handleClick={() => getPayload()}
            >
              Save
            </Button>
          )}
          {state?.showEditable && (
            <EditSection>
              <Button
                className="button"
                style={{ padding: "0.5rem 1rem" }}
                handleClick={() =>
                  dispatch({ type: SET_IS_EDITABLE, payload: !taskEditable })
                }
              >
                {`${taskEditable ? "Done" : "Edit"}`}
              </Button>
            </EditSection>
          )}
          {!showProfile && (
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
                    <div>{firstName[0].toUpperCase()}</div>
                    <div> {lastName[0].toUpperCase()}</div>
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
          )}
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
