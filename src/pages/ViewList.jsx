import React, { useEffect, lazy, Suspense, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { getChecklistBySubcategory } from "redux/actions/task";
import { addTempChecklist } from "redux/actions/checklist";
import { SET_IS_EDITABLE } from "redux/actions/action_types";
import { getAllTemplate } from "redux/actions/template";
import { GetImage } from "redux/actions/task";
import { isUser } from "helpers/isUser";
import { CopyHandler } from "helpers/copy";
import { SET_SEARCH } from "redux/actions/action_types";
import Button from "components/Button";
import { colors } from "constants/color";
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
  ProgressSection,
  LeftHeader,
  ButtonSection,
  SecondContent,
  TagButton,
  TagContent,
} from "styles/pages/EditChecklist";
import Tick from "assets/images/tick.jpg";

const Navbar = lazy(() => import("components/Navbar"));
const SubModal = lazy(() => import("components/SubModal"));
const Footer = lazy(() => import("components/Footer"));
const ViewTask = lazy(() => import("components/ViewTask"));

const ViewList = () => {
  const { id: pathId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = useSelector((state) => state.auth?.userData?.email);
  const ChecklistDetail = useSelector((state) =>
    pathId ? state.checklist : null
  );
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAllTemplate());
  }, []);

  useEffect(() => {
    pathId && dispatch(getChecklistBySubcategory(pathId));
  }, []);

  const { getValues } = useForm({
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
        navigate(`/dashboard/${res?.id}`, {
          state: { showEditable: false, cardType: "user" },
        });
    }
  };

  const TagSearchHandler = (title) => {
    dispatch({ type: SET_SEARCH, payload: title });
    navigate(`/search/${title}`, {
      state: { tagTerm: title, searchedterm: "" },
    });
  };
  const style = {
    backgroundColor: colors.backgroundColor,
    color: colors.primaryColor,
  };
  return (
    <Section>
      {contextHolder}
      <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
        <Navbar
          search={false}
          addButton={false}
          getPayload={getPayload}
          createList={true}
        />
      </Suspense>
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
                imageId={ChecklistDetail?.checklistImageId}
              />
              <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
                <ViewTask />
              </Suspense>
            </LeftContentWrapper>
            <ProgressSection>
              <img src={Tick} alt="tick" />
            </ProgressSection>
            <LeftHeader>
              This checklist was created by {ChecklistDetail?.createdBy}
            </LeftHeader>
            <ButtonSection>
              <Button
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
              </Button>
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
      <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
        <Footer />
      </Suspense>
    </Section>
  );
};

const ImageWrapper = ({ title, imageId }) => {
  const dispatch = useDispatch();
  const [imagePath, setImagePath] = useState(null);
  const idRef = useRef(null);

  const ImageHandler = async () => {
    const res = await dispatch(GetImage(imageId));
    if (res?.status === 200) {
      const path = res?.data[0].imageName.split(".")[0] + ".jpg";
      setImagePath(path);
    }
  };

  useEffect(() => {
    if (imageId !== 0 && idRef?.current !== imageId) ImageHandler();
    idRef.current = imageId;
  }, [imageId]);

  return (
    <div style={{ marginBottom: "30px" }}>
      {imagePath && (
        <img
          src={`http://112.196.2.202:9005/ChecklistImages/${imagePath}`}
          alt="pic"
          style={{ width: "100%", maxWidth: "739px", height: "auto" }}
        />
      )}
      <div style={{ fontSize: "12px", color: "#aaa", fontStyle: "italic" }}>
        {title}
      </div>
    </div>
  );
};

const CopyCard = ({ info }) => {
  return (
    <RightCardWrapper>
      <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
        <SubModal
          counts={true}
          viewCount={info?.viewCount}
          copyCount={info?.copyCount}
          downloadCount={info?.downloadCount}
        />
      </Suspense>
    </RightCardWrapper>
  );
};

export default ViewList;
