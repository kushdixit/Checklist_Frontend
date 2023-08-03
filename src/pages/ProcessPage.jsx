import React, { useEffect, lazy, Suspense, useState, useRef } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import {
  getChecklistBySubcategory,
  getChecklistByCopyId,
} from "redux/actions/task";
import { addTempChecklist } from "redux/actions/checklist";
import { SET_IS_EDITABLE } from "redux/actions/action_types";
import { getAllTemplate } from "redux/actions/template";
import { GetImage } from "redux/actions/task";
import { SET_SEARCH } from "redux/actions/action_types";
import Button from "components/Button";
import ImageModal from "components/ImageModal";
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
} from "styles/pages/EditChecklist";
import Tick from "assets/images/tick.jpg";

const Navbar = lazy(() => import("components/Navbar"));
const SubModal = lazy(() => import("components/SubModal"));
const Footer = lazy(() => import("components/Footer"));
const ProcessTask = lazy(() => import("components/ProcessTask"));

const ProcessPage = () => {
  const { pathname, state } = useLocation();
  const { id: pathId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = useSelector((state) => state.auth?.userData?.email);
  const ChecklistDetail = useSelector((state) =>
    pathId ? state.checklist : null
  );
  const [api, contextHolder] = notification.useNotification();
  const [cards, setCards] = useState([]);
  const [cardsWithFlag, setCardsWithFlag] = useState([]);
  const [modal, setModal] = useState(false);
  const [processData, setprocessData] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAllTemplate());
    pathId && dispatch(getChecklistByCopyId(pathId));
    setCards(ChecklistDetail?.tasks);
    setCardsWithFlag(ChecklistDetail?.tasks);
  }, []);

  useEffect(() => {
    setCards(ChecklistDetail?.tasks);
    // const filterArray = ChecklistDetail?.tasks?.map((item) => {return {
    //   item?.id, item?.ischecked;
    // }});
    // console.log("filterArray", filterArray);
    setCardsWithFlag(ChecklistDetail?.tasks);
    const filterData = ChecklistDetail?.checklistMasterCopyRelations?.filter(
      (item) => item?.checklistCopiedId === pathId
    );
    setprocessData(filterData);
  }, [ChecklistDetail]);

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

  console.log("processData", processData);

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

  function toggleab(data) {
    setModal(data);
  }

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
                <ProcessTask
                  cards={cards}
                  setCards={setCards}
                  processData={processData}
                />
              </Suspense>
              {processData?.length > 0 && !processData[0]?.isDone && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "2rem",
                  }}
                >
                  <button
                    onClick={() => setModal(true)}
                    style={{
                      padding: "0.75rem 1.5rem",
                      marginBottom: "2rem",
                      fontWeight: "bold",
                      color: "white",
                      fontSize: "1rem",
                      border: "none",
                      background: "#ed5656",
                      borderRadius: "3px",
                    }}
                  >
                    Submit
                  </button>
                </div>
              )}
            </LeftContentWrapper>
          </LeftSection>
          <RightViewSection>
            <ShareSectionCard pathId={pathId} />
          </RightViewSection>
        </ChecklistSubWrapper>
      </ChecklistMainWrapper>
      <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
        <Footer />
      </Suspense>
      <ImageModal
        modalType="processmodal"
        isOpen={modal}
        togglefunction={toggleab}
        cards={cards}
        pathId={pathId}
      />
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

const ShareSectionCard = ({ pathId }) => {
  return (
    <RightCardWrapper>
      <SubModal
        title="Save for later"
        link={`http://112.196.2.202:3000/${pathId}/check`}
        linkName="preview"
        // isCopied="true"
      />
    </RightCardWrapper>
  );
};

export default ProcessPage;