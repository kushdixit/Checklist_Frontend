import React, { useEffect, useState } from "react";
import DescriptionTitle from "components/DescriptionTitle";
import ChecklistTitle from "components/ChecklistTitle";
import SubModal from "components/SubModal";
import DescriptionSliderModal from "components/DescriptionSliderModal";
import Footer from "components/Footer";
import ViewTask from "components/ViewTask";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getChecklistBySubcategory } from "redux/actions/task";
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
} from "styles/pages/EditChecklist";
import Navbar from "components/Navbar";

const ViewList = () => {
  const [newmodal, setNewModal] = useState(false);
  function toggleabc(data) {
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
              />
              <button onClick={() => toggleabc(true)}>description</button>
              <ViewTask toggleabc={toggleabc} />
            </LeftContentWrapper>
          </LeftSection>
          <RightSection>
            <CopyCard />
          </RightSection>
        </ChecklistSubWrapper>
      </ChecklistMainWrapper>
      <Footer />
    </Section>
  );
};

const ImageWrapper = ({ title }) => {
  return (
    <div style={{ marginBottom: "30px" }}>
      <img
        src="https://s3.amazonaws.com/checkli.com/featured/apple.png"
        alt="pic"
        style={{ width: "100%", maxWidth: "739px", height: "auto" }}
      />
      <div style={{ fontSize: "12px", color: "#aaa", fontStyle: "italic" }}>
        {title}
      </div>
    </div>
  );
};

const CopyCard = () => {
  return (
    <RightCardWrapper>
      <SubModal
        title="Embed"
        viewCount="23,420"
        copyCount="2280"
        downloadCount="1001"
        embed='<div id="checkli-embed-63d3ca63a546c" class="checkli-embed" url="https://www.checkli.com/checklists/63cfd4f426835/embed"></div><script defer src="https://checkli.com/js/checkli-embed.js"></script>'
      />
    </RightCardWrapper>
  );
};

export default ViewList;
