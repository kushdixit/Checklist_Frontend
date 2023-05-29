import React, { useState, useRef, useEffect, lazy, Suspense } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_SEARCH } from "redux/actions/action_types";
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
  Logintext,
  FreeTemplatetext,
  BlueIcon,
  UseButton,
  LoginSection,
} from "styles/components/Navbar";
import Logout from "assets/SVG/Logout";
import { useForm } from "react-hook-form";
import SearchNew from "assets/SVG/SearchNew";
import Cancel from "assets/SVG/cancel";
import PlusBlue from "assets/SVG/PlusBlue";
import Login from "assets/images/login.png";
import { colors } from "constants/color";
const AlertModal = lazy(() => import("components/AlertModal"));
const TextInput = lazy(() => import("components/FormElements/TextInput"));

const NavBar = ({ search, icon, buttonType, addButton, navType }) => {
  const wrapperRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logoutModal, setLogoutModal] = useState(false);
  const [iconHandle, setIconHandle] = useState();
  const [updateSearch, SetUpdateSearch] = useState("");
  const [modal, setModal] = useState(false);
  const firstName = useSelector((state) => state.auth?.userData?.firstName);
  const lastName = useSelector((state) => state.auth?.userData?.lastName);
  const style = {
    backgroundColor: colors.backgroundColor,
    color: colors.primaryColor,
  };
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
    navigate("/create-list");
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
    if (updateSearch.length !== 0) {
      SetUpdateSearch("");
      dispatch({ type: SET_SEARCH, payload: "" });
      reset({
        listSearch: "",
      });
    }
  };

  return (
    <>
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
                        <h4 style={style}>{firstName[0].toUpperCase()}</h4>
                        <h4 style={style}> {lastName[0].toUpperCase()}</h4>
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
                <LoginSection onClick={() => navigate("/sign-in")}>
                  {" "}
                  <img src={Login} alt="img" />{" "}
                </LoginSection>
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
                  <Suspense fallback={<h1 className="">Loading…</h1>}>
                    <TextInput
                      control={formControl}
                      name="listSearch"
                      type="text"
                      placeholder="Search"
                    />
                  </Suspense>
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
                    <Suspense fallback={<h1 className="">Loading…</h1>}>
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
                    </Suspense>
                  </IconInputField>
                </form>
                <IconWrapper onClick={handleIconClick}>
                  <Button
                    className="button"
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
                        onClick={() => navigate("/create-list")}
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
          <Suspense fallback={<h1 className=""></h1>}>
            <AlertModal
              modalType="logout"
              isOpen={modal}
              togglefunction={toggleab}
              notify={logout}
            />
          </Suspense>
        </SubNavSection>
      </NavSection>
    </>
  );
};
export default NavBar;
