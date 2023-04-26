import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { getChecklistBySubcategory } from "redux/actions/task";
import { addTempChecklist, SearchList } from "redux/actions/checklist";
import { SET_IS_EDITABLE } from "redux/actions/action_types";
import { getAllTemplate } from "redux/actions/template";
import ChecklistWidget from "components/ChecklistWidget";
import SubModal from "components/SubModal";
import Footer from "components/Footer";
import ViewTask from "components/ViewTask";
import { isUser } from "helpers/isUser";
import { CopyHandler } from "helpers/copy";
import { SET_SEARCH } from "redux/actions/action_types";
import {
  ChecklistMainWrapper,
  ChecklistSubWrapper,
  Section,
  LeftSection,
  RightViewSection,
  LeftContentWrapper,
  RightCardWrapper,
  ChecklistTitleText,
  ChecklistDescText,
  ChecklistWidgetSection,
  RelationHeading,
  ProgressSection,
  LeftHeader,
  ButtonSection,
  SecondContent,
  TagButton,
  TagContent,
} from "styles/pages/EditChecklist";
import Navbar from "components/Navbar";
import Tick from "assets/images/tick.jpg";

const ViewList = () => {
  const [newmodal, setNewModal] = useState(false);
  function toggleabc(data) {
    setNewModal(data);
  }
  const allTemplate = useSelector((state) => state.Template?.allTemplate);
  const { id: pathId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = useSelector((state) => state.auth?.userData?.email);
  const ChecklistDetail = useSelector((state) =>
    pathId ? state.checklist : null
  );
  const [api, contextHolder] = notification.useNotification();
  useEffect(() => {
    dispatch(getAllTemplate());
  }, []);
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
        navigate(`/temp/${res?.id}`, {
          state: { showEditable: false, cardType: "user" },
        });
    }
  };

  const TagSearchHandler = (title) => {
    dispatch({ type: SET_SEARCH, payload: title });
    navigate(`/search/${title}`, {
      state: { tagTerm: title, searchedterm: "" },
    });

    // const response = await dispatch(
    //   SearchList(`?Name=${title}&Type=3&SortBy=false`)
    // );
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
              <ChecklistTitleText>
                {ChecklistDetail?.checklistName}
              </ChecklistTitleText>
              <ChecklistDescText>
                {ChecklistDetail?.checklistDescription}
              </ChecklistDescText>
              <ImageWrapper
                title={pathId ? ChecklistDetail?.checklistName : "untitled"}
              />
              <ViewTask toggleabc={toggleabc} />
            </LeftContentWrapper>
            <ProgressSection>
              <img src={Tick} alt="tick" />
            </ProgressSection>
            <LeftHeader>
              This checklist was created by {ChecklistDetail?.createdBy}
            </LeftHeader>
            <ButtonSection>
              <button
                className="button"
                onClick={() =>
                  CopyHandler(
                    pathId,
                    isUser() ? userEmail : "guest@gmail.com",
                    navigate
                  )
                }
              >
                Save this checklist
              </button>
            </ButtonSection>
            <SecondContent>
              {ChecklistDetail?.copyCount} copies saved
            </SecondContent>
          </LeftSection>
          <RightViewSection>
            <CopyCard info={ChecklistDetail} />
            {ChecklistDetail?.tag && <TagContent>Tags</TagContent>}
            {ChecklistDetail?.tag?.split(",")?.map((title, index) => (
              <TagButton key={index}>
                <button
                  className="button"
                  onClick={() => TagSearchHandler(title)}
                >
                  {title}
                </button>
              </TagButton>
            ))}
          </RightViewSection>
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

const CopyCard = ({ info }) => {
  return (
    <RightCardWrapper>
      <SubModal
        counts={true}
        viewCount={info?.viewCount}
        copyCount={info?.copyCount}
        downloadCount={info?.downloadCount}
      />
    </RightCardWrapper>
  );
};

export default ViewList;
