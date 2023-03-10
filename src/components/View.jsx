import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { getAllTemplate } from "redux/actions/template";
import {
  LandingContainer,
  RightContainer,
  WrapperSection,
  ChecklistSubWrapper,
  Section,
  LeftSection,
  RightSection,
  LeftContentWrapper,
  RightCardWrapper,
  LeftCardWrapper,
  EditImage,
} from "styles/components/View";
import {
  getChecklistBySubcategory,
  editTask,
  editTaskStatus,
} from "redux/actions/task";
import { Controller, useWatch } from "react-hook-form";
import DescriptionTitle from "components/DescriptionTitle";
import ChecklistTitle from "components/ChecklistTitle";
import SubModal from "components/SubModal";
import ImageModal from "components/ImageModal";
import DescriptionSliderModal from "components/DescriptionSliderModal";
import Footer from "components/Footer";
import RightSectionCard from "components/RightSectionCard";
import ShareSectionCard from "components/Share";
import TaskTitle from "components/TaskTitle";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { notification } from "antd";
import TextArea from "components/FormElements/TextArea";

import { addTempChecklist } from "redux/actions/checklist";
import { SET_IS_EDITABLE } from "redux/actions/action_types";
const EmbedCode = () => (
  <RightCardWrapper>
    <SubModal
      title="Embed Code"
      embed='<div id="checkli-embed-63d3ca63a546c" class="checkli-embed" url="https://www.checkli.com/checklists/63cfd4f426835/embed"></div><script defer src="https://checkli.com/js/checkli-embed.js"></script>'
      linkName="Learn more"
    />
  </RightCardWrapper>
);
const ImageHandler = () => {
  const [modal, setModal] = useState(false);

  function toggleab(data) {
    setModal(data);
  }
  return (
    <RightCardWrapper>
      <ImageModal
        modalType="editimage"
        isOpen={modal}
        togglefunction={toggleab}
      />
      <img
        src="https://s3.amazonaws.com/checkli.com/featured/apple.png"
        alt="pic"
        style={{ width: "240px", height: "135px" }}
      />
      <br />
      <EditImage onClick={() => toggleab(true)}>edit image</EditImage>
    </RightCardWrapper>
  );
};
const View = (search, data) => {
  const { handleSubmit, control, reset } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    defaultValues: {
      rememberMe: data?.ischecked,
    },
  });
  const [newmodal, setNewModal] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [checkListDiscriptionId, setCheckListDiscriptionId] = useState();
  function toggleabc(data, descriptionId) {
    setCheckListDiscriptionId(descriptionId);
    // console.log("descriptionId", descriptionId);
    setNewModal(data);
  }
  const watchData = useWatch({ control });
  const TaskUpdateHandler = async () => {
    if (watchData?.checklist) {
      await dispatch(
        editTask(
          watchData?.checklist,
          data?.id,
          data?.isHeading,
          data?.isPriority,
          data?.isSubtask,
          "",
          "",
          "",
          ""
        )
      );
      dispatch(getChecklistBySubcategory(pathId));
    }
    setShowButtons(false);
  };
  const { id: pathId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = useSelector((state) => state.auth?.userData?.email);
  const ChecklistDetail = useSelector((state) =>
    pathId ? state.checklist : null
  );
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    // const token = localStorage.getItem("access_token");
    // if (!token) navigate("/sign-in");
    pathId && dispatch(getChecklistBySubcategory(pathId));
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
        navigate(`/createChecklist/${res?.id}`, {
          state: { showEditable: false, cardType: "user" },
        });
    }
  };
  return (
    <LandingContainer>
      <RightContainer>
        <WrapperSection>
          <LeftContentWrapper>
            <ChecklistTitle />
            <DescriptionTitle />
            <ImageWrapper
              title={pathId ? ChecklistDetail?.checklistName : "untitled"}
            />
            <TaskTitle toggleabc={toggleabc} />
            <TextArea
              autoFocus="autoFocus"
              type="task"
              style={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "27px",
                margin: "6px 0px 0px 0px",
                width: "100%",
                fontFamily: "inherit",
                resize: "none",
                background: "#fff",
                outline: "none",
                borderRadius: "5px",
                border: "1px solid rgb(224,224,224)",
                height: "40px",
              }}
              name="checklist"
              placeholder={``}
              defaultValue={data?.taskName}
              control={control}
              // onFocus={() => setShowButtons(!showButtons)}
              onBlur={() => setShowButtons(false)}
              handleKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.target.blur();
                  TaskUpdateHandler();
                }
              }}
            />
          </LeftContentWrapper>
        </WrapperSection>
      </RightContainer>
    </LandingContainer>
  );
};
const Style = () => {
  return (
    <RightCardWrapper>
      <SubModal
        title="Styles"
        text="Circles with numbers"
        buttonName="Fonts/Colors"
      />
    </RightCardWrapper>
  );
};
const ImageWrapper = ({ title }) => {
  return (
    <div style={{ marginBottom: "30px" }}>
      <img
        src="https://s3.amazonaws.com/checkli.com/featured/apple.png"
        alt="pic"
        style={{ width: "100%", height: "auto" }}
      />
      <div
        style={{
          fontSize: "12px",
          color: "#aaa",
          fontStyle: "italic",
          display: "flex",
        }}
      >
        {title}
      </div>
      <SubModal buttonNew="Description" />
    </div>
  );
};
export default View;
