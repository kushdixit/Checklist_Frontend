import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_SEARCH } from "redux/actions/action_types";
import AlertModal from "components/AlertModal";
import TextInput from "components/FormElements/TextInput";
import Button from "components/Button";
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
  Logintext,
  FreeTemplatetext,
  BlueIcon,
  UseButton,
} from "styles/components/Navbar";
import Logout from "assets/SVG/Logout";
import { useForm } from "react-hook-form";
import SearchNew from "assets/SVG/SearchNew";
import Cancel from "assets/SVG/cancel";
import PlusBlue from "assets/SVG/PlusBlue";

const NavBar = ({ search, icon, buttonType, addButton, navType }) => {
  const wrapperRef = useRef();
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const [logoutModal, setLogoutModal] = useState(false);
  const [iconHandle, setIconHandle] = useState();
  const [updateSearch, SetUpdateSearch] = useState("");
  const [modal, setModal] = useState(false);
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

  const access_token = localStorage.getItem("access_token");

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
    navigate("/temp");
  };

  const searchData = (data) => {
    dispatch({ type: SET_SEARCH, payload: data?.listSearch });
    navigate(`/search/${data?.listSearch}`, {
      state: { searchedterm: data?.listSearch, tagTerm: "" },
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
          {access_token ? (
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
          ) : (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Logintext onClick={() => navigate("/sign-in")}>Login</Logintext>
            </div>
          )}
          <LogoSearchSection>
            <LogoSection
              onClick={() =>
                access_token ? navigate("/process") : navigate("/")
              }
            >
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
          {navType === "home" && (
            <FreeTemplatetext onClick={() => navigate("/explore")}>
              Free Template
            </FreeTemplatetext>
          )}
        </HeaderWrapper>
        <SearchSection>
          {access_token && search && (
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
          <HeadingText
            onClick={() =>
              access_token ? navigate("/process") : navigate("/")
            }
          >
            Checklist
          </HeadingText>
        </FirstSection>
        <SecondSection>
          {access_token && search && (
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              minHeight: "63px",
            }}
          >
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
            {navType === "home" && (
              <FreeTemplatetext onClick={() => navigate("/explore")}>
                Free Template
              </FreeTemplatetext>
            )}
            {access_token ? (
              <ImageSubSection>
                <SecondSubSection>
                  {icon && (
                    <BlueIcon
                      onClick={() => navigate("/temp")}
                      style={{ cursor: "pointer" }}
                    >
                      <PlusBlue />
                    </BlueIcon>
                  )}
                  <Profile>
                    <h4 style={{ textTransform: "capitalize" }}>
                      {firstName} {lastName}
                    </h4>
                  </Profile>
                  <button
                    style={{ cursor: "pointer" }}
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
            ) : (
              <div style={{ display: "flex", alignItems: "center" }}>
                <Logintext onClick={() => navigate("/sign-in")}>
                  Login
                </Logintext>
                <UseButton>
                  <Link
                    to={"/sign-up"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Use for free
                  </Link>
                </UseButton>
              </div>
            )}
          </div>
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
