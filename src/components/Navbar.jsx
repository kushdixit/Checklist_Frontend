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
  IconWrapperNew,
  IconInputFieldNew,
  EditSection,
  ButtonEditSection,
} from "styles/components/Navbar";
import Button from "components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { addTempChecklist } from "redux/actions/checklist";
import { useDispatch, useSelector } from "react-redux";
import { SET_IS_EDITABLE, SET_SEARCH } from "redux/actions/action_types";
import Logout from "assets/SVG/Logout";
import AlertModal from "components/AlertModal";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { notification } from "antd";
import { getChecklistBySubcategory } from "redux/actions/task";
import TextInput from "components/FormElements/TextInput";
import SearchNew from "assets/SVG/SearchNew";
import Cancel from "assets/SVG/cancel";

const NavBar = ({ search, buttonType, addButton }) => {
  const wrapperRef = useRef();
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const [logoutModal, setLogoutModal] = useState(false);
  const [iconHandle, setIconHandle] = useState();
  const [searchedData, setSearchedData] = useState([]);
  const [searchedValue, setSearchedValue] = useState("");
  const [updateSearch, SetUpdateSearch] = useState("");
  const [modal, setModal] = useState(false);
  const userEmail = useSelector((state) => state.auth?.userData?.email);
  const taskEditable = useSelector((state) => state.editable?.isEditable);
  const YourTemplates = useSelector((state) => state.task?.allChecklist);
  const firstName = useSelector((state) => state.auth?.userData?.firstName);
  const lastName = useSelector((state) => state.auth?.userData?.lastName);
  const [api, contextHolder] = notification.useNotification();

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

  const openNotification = (message) => {
    api.info({
      message,
    });
  };

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
    const res = await dispatch(
      addTempChecklist(
        `Your Checkslist ${YourTemplates[YourTemplates.length - 1]?.id + 1}`,
        userEmail
      )
    );
    if (res.error) openNotification(res.message);
    else {
      dispatch({ type: SET_IS_EDITABLE, payload: true });
      const re = await dispatch(getChecklistBySubcategory(res?.id));
      re.error == false &&
        navigate(`/check-list/${res?.id}`, {
          state: { showEditable: false, cardType: "user" },
        });
    }
  };

  const handleDataUpdate = (e) => {
    setSearchedValue(e);
    if (e?.length !== 0) {
      const res = YourTemplates?.filter((item) =>
        item.checklistName.toLowerCase().includes(e?.toLowerCase())
      ).map((item) => {
        return {
          value: item.checklistName,
          label: item.checklistName,
          id: item.id,
        };
      });
      setSearchedData(res);
    } else setSearchedData([]);
  };

  const searchData = (data) => {
    dispatch({ type: SET_SEARCH, payload: data?.listSearch });
    navigate("/search", {
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
      {contextHolder}
      <BurgerSection>
        <HeaderWrapper>
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
