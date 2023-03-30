import React, { useState, useRef, useEffect } from "react";
import {
  DataWrapper,
  Heading,
  ButtonWrapper,
  ModalButton,
  IconWrapper,
  IconInputField,
} from "styles/pages/MoveModal";
import Button from "components/Button";
import { SET_IS_EDITABLE, SET_SEARCH } from "redux/actions/action_types";
import { useDispatch, useSelector } from "react-redux";
import { MoveChecklist } from "redux/actions/checklist/index";
import { getAllTemplateByEmail, getAllTemplate } from "redux/actions/template";
import { notification } from "antd";
import TextInput from "components/FormElements/TextInput";
import SearchNew from "assets/SVG/SearchNew";
import Cancel from "assets/SVG/cancel";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
const MoveModal = ({ notify, togglefunction, checklistId, templateName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = useSelector((state) => state.auth?.userData?.email);
  const templateData = useSelector((state) => state.Template?.yourTemplate);
  const allTemplate = useSelector((state) => state.Template?.allTemplate);
  const [api, contextHolder] = notification.useNotification();
  const [iconHandle, setIconHandle] = useState();
  const [updateSearch, SetUpdateSearch] = useState("");
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
  const handleChecklistMove = async (id) => {
    const res = await dispatch(MoveChecklist(checklistId, id));
    if (res?.error == false) {
      dispatch(getAllTemplateByEmail(userEmail));
      dispatch(getAllTemplate());
      openNotification("Moved");
      togglefunction(false);
    } else openNotification(res?.message || "Error");
  };

  return (
    <DataWrapper>
      {contextHolder}
      <Heading>Assign Category</Heading>

      <form style={{ display: "flex" }} onSubmit={submitData(searchData)}>
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
      </form>

      <ButtonWrapper>
        {/* {templateData
          ?.filter((item) => item?.templateName !== templateName)
          ?.map((item) => (
            <ModalButton onClick={() => handleChecklistMove(item?.id)}>
              {item?.templateName}
            </ModalButton>
          ))} */}
        {/* {allTemplate
          ?.filter((item) => item?.templateName !== templateName)
          ?.map((item) => (
            <ModalButton onClick={() => handleChecklistMove(item?.id)}>
              {item?.templateName}
            </ModalButton>
          ))} */}
        <ModalButton>+ </ModalButton>
      </ButtonWrapper>
    </DataWrapper>
  );
};

export default MoveModal;
