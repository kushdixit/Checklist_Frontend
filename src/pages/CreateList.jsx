import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import { notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getChecklistBySubcategory } from "redux/actions/task";
import { addTempChecklist } from "redux/actions/checklist";
import { SET_IS_EDITABLE } from "redux/actions/action_types";
import {
  BodyWrapper,
  ChecklistMainWrapper,
  ChecklistSubWrapper,
  Section,
  LeftSection,
  RightSection,
  LeftContentWrapper,
  RightCardWrapper,
  RightContentWrapper,
  ChecklistTitleWrapper,
  ChecklistTaskWrapper,
} from "styles/pages/EditChecklist";
import Navbar from "components/Navbar";
import TextArea from "components/FormElements/TextArea";
import {
  ShortBy,
  SortWrapper,
  ModalContainer,
  SortTextDiv,
} from "styles/components/ModalContainer";
import Plus from "assets/SVG/Plus";
import Delete from "assets/SVG/Delete";

const CreateList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = useSelector((state) => state.auth?.userData?.email);
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) navigate("/sign-in");
  }, []);

  const { control: checklistFormControl, getValues } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    defaultValues: {
      checklist: "",
      description: "",
    },
  });

  const openNotification = (message) => {
    api.info({
      message,
    });
  };

  const getPayload = async () => {
    const multipleValues = getValues(["checklist", "description"]);
    const res = await dispatch(
      addTempChecklist(multipleValues[0], multipleValues[1], userEmail)
    );
    if (res.error) openNotification(res.message);
    else {
      dispatch({ type: SET_IS_EDITABLE, payload: true });
      const re = await dispatch(getChecklistBySubcategory(res?.id));
      re.error === false &&
        navigate(`/check-list/${res?.id}`, {
          state: { showEditable: false, cardType: "user" },
        });
    }
  };

  return (
    <Section>
      {contextHolder}
      <BodyWrapper>
        <Navbar
          search={false}
          addButton={false}
          getPayload={getPayload}
          createList={true}
        />
      </BodyWrapper>
      <ChecklistMainWrapper>
        <ChecklistSubWrapper>
          <LeftSection>
            <LeftContentWrapper>
              <ChecklistTitle />
              <DescriptionTitle />
              <TaskTitle />
              <TaskTitle />
            </LeftContentWrapper>
          </LeftSection>
          <RightSection>
            <RightSectionCard />
            <RightSectionCard />
          </RightSection>
        </ChecklistSubWrapper>
      </ChecklistMainWrapper>
    </Section>
  );
};
export default CreateList;

const TaskTitle = () => {
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [modal, setModal] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const wrapperRef = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current?.contains(event?.target)) {
        setIsOpenSort(false);
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
  const { handleSubmit, control } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });
  const DescriptionHandler = async (data) => {
    console.log("data", data);
  };
  return (
    <ChecklistTaskWrapper
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <form
        style={{
          display: "flex",
          padding: "0px 60px !important",
        }}
        onSubmit={handleSubmit(DescriptionHandler)}
      >
        <div style={{ width: "100%" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <ModalContainer
              ref={wrapperRef}
              onClick={() => {
                setIsOpenSort(!isOpenSort);
              }}
            >
              <ShortBy>
                <Plus onClick={() => toggleab(!modal)} />
                {isOpenSort && (
                  <SortWrapper>
                    <SortTextDiv>
                      <Delete /> Delete
                    </SortTextDiv>
                  </SortWrapper>
                )}
              </ShortBy>
            </ModalContainer>
            <TextArea
              style={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                margin: "5px 0px 0px 0px",
                width: "90%",
                border: "none",
                fontFamily: "inherit",
                resize: "none",
                background: "inherit",
              }}
              name="checklist"
              placeholder={`Save and share this checklist with your Digital Marketing`}
              defaultValue={`Save and share this checklist with your Digital Marketing`}
              control={control}
            />
          </div>
        </div>
      </form>
    </ChecklistTaskWrapper>
  );
};

const RightSectionCard = () => {
  return (
    <RightCardWrapper>
      <RightContentWrapper>
        <div
          style={{
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "24px",
            marginBottom: "10px",
          }}
        >
          <strong>40</strong> Task Left
        </div>
        <button
          style={{
            marginBottom: "10px",
            paddingBottom: "10px",
            paddingTop: "10px",
            border: 0,
            background: "white",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: "14px",
              borderRadius: "5px",
              background: "#ec4e20",
              minWidth: "160px",
              padding: "15px 25px",
              border: 0,
            }}
          >
            Save
          </div>
        </button>
        <div>
          Unlock recurring team processes, task descriptions, embedding,
          publishing, PDFs, colloborating, and more.
        </div>
        <div style={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <button
            style={{
              marginBottom: "10px",
              paddingBottom: "5px",
              paddingTop: "5px",
              border: 0,
              borderRadius: "10px",
              backgroundColor: "#f5f5f5",
            }}
          >
            <div
              style={{
                padding: "8px",
                textDecoration: "none",
                fontSize: "13px",
                color: "#333",
              }}
            >
              duplicate
            </div>
          </button>
          <button
            style={{
              marginBottom: "10px",
              paddingBottom: "5px",
              paddingTop: "5px",
              border: 0,
              borderRadius: "10px",
              backgroundColor: "#f5f5f5",
            }}
          >
            <div
              style={{
                padding: "8px",
                textDecoration: "none",
                fontSize: "13px",
                color: "#333",
              }}
            >
              pdf
            </div>
          </button>
        </div>
      </RightContentWrapper>
    </RightCardWrapper>
  );
};

const ChecklistTitle = () => {
  const { handleSubmit, control } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });
  const DescriptionHandler = async (data) => {
    console.log("data", data);
  };
  return (
    <ChecklistTitleWrapper>
      <form
        style={{
          display: "flex",
          padding: "0px 60px !important",
        }}
        onSubmit={handleSubmit(DescriptionHandler)}
      >
        <div style={{ width: "100%" }}>
          <div>
            <TextArea
              style={{
                width: "100%",
                fontWeight: "600",
                fontSize: "40px",
                lineHeight: "44px",
                border: "none",
                fontFamily: "inherit",
                resize: "none",
              }}
              name="checklist"
              placeholder={
                "Digital Marketing Assistant Daily, Weekly, Monthly Checklist "
              }
              defaultValue={
                "Digital Marketing Assistant Daily, Weekly, Monthly Checklist "
              }
              control={control}
            />
          </div>
        </div>
      </form>
    </ChecklistTitleWrapper>
  );
};

const DescriptionTitle = () => {
  const { handleSubmit, control } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  const DescriptionHandler = async (data) => {
    console.log("data", data);
  };
  return (
    <ChecklistTitleWrapper>
      <form
        style={{
          display: "flex",
          padding: "0px 60px !important",
        }}
        onSubmit={handleSubmit(DescriptionHandler)}
      >
        <div style={{ width: "100%" }}>
          <div>
            <TextArea
              style={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                marginBottom: "40px",
                marginTop: "15px",
                width: "100%",
                border: "none",
                fontFamily: "inherit",
                resize: "none",
              }}
              name="checklist"
              placeholder={`Save and share this checklist with your Digital Marketing
                Assistant to help you build your brand online or help build your
                client's brand. Edit/add to this checklist as needed.`}
              defaultValue={`Save and share this checklist with your Digital Marketing Assistant to help you build your brand online or help build your client's brand. Edit/add to this checklist as needed.`}
              control={control}
            />
          </div>
        </div>
      </form>
    </ChecklistTitleWrapper>
  );
};
