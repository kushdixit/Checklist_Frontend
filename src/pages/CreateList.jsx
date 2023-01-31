import React, { useEffect } from "react";
import DescriptionTitle from "components/DescriptionTitle";
import ChecklistTitle from "components/ChecklistTitle";
import SubModal from "components/SubModal";
import RightSectionCard from "components/RightSectionCard";
import ShareSectionCard from "components/Share";
import TaskTitle from "components/TaskTitle";
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

const CreateList = () => {
  const { id: pathId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = useSelector((state) => state.auth?.userData?.email);
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) navigate("/sign-in");
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
        navigate(`/check-list/${res?.id}`, {
          state: { showEditable: false, cardType: "user" },
        });
    }
  };

  return (
    <Section>
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
              <TaskTitle />
              <TaskTitle />
            </LeftContentWrapper>
          </LeftSection>
          <RightSection>
            <RightSectionCard />
            <ShareSectionCard />
            <Style />
            <EmbedCode />
          </RightSection>
        </ChecklistSubWrapper>
      </ChecklistMainWrapper>
    </Section>
  );
};

const Style = () => (
  <RightCardWrapper>
    <SubModal
      title="Styles"
      text="Circles with numbers"
      buttonName="Fonts/Colors"
    />
  </RightCardWrapper>
);

const EmbedCode = () => (
  <RightCardWrapper>
    <SubModal
      title="Embed Code"
      embed='<div id="checkli-embed-63d3ca63a546c" class="checkli-embed" url="https://www.checkli.com/checklists/63cfd4f426835/embed"></div><script defer src="https://checkli.com/js/checkli-embed.js"></script>'
      linkName="Learn more"
    />
  </RightCardWrapper>
);
export default CreateList;
