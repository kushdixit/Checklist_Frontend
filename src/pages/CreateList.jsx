import React, { useEffect, useState, useRef } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getChecklistBySubcategory, GetImage } from "redux/actions/task";
import { addTempChecklist } from "redux/actions/checklist";
import { SET_IS_EDITABLE } from "redux/actions/action_types";

import {
  ChecklistMainWrapper,
  ChecklistSubWrapper,
  Section,
  LeftSection,
  RightSection,
  LeftContentWrapper,
  RightCardWrapper,
  LeftCardWrapper,
  EditImage,
} from "styles/pages/EditChecklist";
import Navbar from "components/Navbar";

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
const CreateList = () => {
  const [newmodal, setNewModal] = useState(false);
  const [checkListDiscriptionId, setCheckListDiscriptionId] = useState();
  function toggleabc(data, descriptionId) {
    setCheckListDiscriptionId(descriptionId);
    // console.log("descriptionId", descriptionId);
    setNewModal(data);
  }

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

  console.log("asf");

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
    <Section>
      <DescriptionSliderModal
        modalType="description"
        isOpen={newmodal}
        togglefunction={toggleabc}
        checklistDiscriptionId={checkListDiscriptionId}
      />
      {contextHolder}
      <Navbar
        search={false}
        addButton={false}
        getPayload={getPayload}
        createList={true}
      />
      <ChecklistMainWrapper>
        <ChecklistSubWrapper>
          <LeftSection>
            <LeftContentWrapper>
              <ChecklistTitle />
              <DescriptionTitle />
              <ImageWrapper
                title={pathId ? ChecklistDetail?.checklistName : "untitled"}
                imageId={ChecklistDetail?.checklistImageId}
              />
              <TaskTitle toggleabc={toggleabc} />
            </LeftContentWrapper>
          </LeftSection>
          <RightSection>
            <RightSectionCard pathId={pathId} />
            <ShareSectionCard />
            <Style />
            <EmbedCode />
            <ImageHandler />
          </RightSection>
        </ChecklistSubWrapper>
      </ChecklistMainWrapper>
      <Footer />
    </Section>
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

const ImageWrapper = ({ title, imageId }) => {
  const dispatch = useDispatch();
  const imageRef = useRef(null);
  const idRef = useRef(null);

  const ImageHandler = async () => {
    const res = await dispatch(GetImage(imageId));
    if (res?.status === 200) imageRef.current = res?.data[0]?.imageName;
  };

  useEffect(() => {
    if (imageId !== 0 && idRef?.current !== imageId) ImageHandler();
    idRef.current = imageId;
  }, []);

  return (
    <div style={{ marginBottom: "30px" }}>
      {imageRef?.current && (
        <img
          src={`http://192.168.11.66:9001/ChecklistImages/${imageRef?.current}`}
          alt="pic"
          style={{ width: "100%", height: "auto" }}
        />
      )}
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
    </div>
  );
};

export default CreateList;
