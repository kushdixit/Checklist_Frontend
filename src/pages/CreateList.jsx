import React, { useEffect, useState, useRef, lazy, Suspense } from "react";
import { ImageWrapper } from "helpers/copy";
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
  EditImage,
} from "styles/pages/EditChecklist";

const Navbar = lazy(() => import("components/Navbar"));
const DescriptionTitle = lazy(() => import("components/DescriptionTitle"));
const ChecklistTitle = lazy(() => import("components/ChecklistTitle"));
const SubModal = lazy(() => import("components/SubModal"));
const ImageModal = lazy(() => import("components/ImageModal"));
const RightSectionCard = lazy(() => import("components/RightSectionCard"));
const ShareSectionCard = lazy(() => import("components/Share"));
const TaskTitle = lazy(() => import("components/TaskTitle"));
const Footer = lazy(() => import("components/Footer"));
const DescriptionSliderModal = lazy(() =>
  import("components/DescriptionSliderModal")
);

const reff = React.createRef();

const ImageHandler = ({ imageId }) => {
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();
  const [imagePath, setImagePath] = useState(null);
  const idRef = useRef(null);

  const HandleImage = async () => {
    const res = await dispatch(GetImage(imageId));
    if (res?.status === 200) {
      const path = res?.data[0].imageName.split(".")[0] + ".jpg";
      setImagePath(path);
    }
  };

  useEffect(() => {
    if (imageId !== 0 && idRef?.current !== imageId) HandleImage();
    idRef.current = imageId;
  }, [imageId]);

  function toggleab(data) {
    setModal(data);
  }
  return (
    <RightCardWrapper>
      <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
        <ImageModal
          modalType="editimage"
          isOpen={modal}
          togglefunction={toggleab}
        />
      </Suspense>
      {imagePath && (
        <img
          src={`http://112.196.2.202:9005/ChecklistImages/${imagePath}`}
          alt="pic"
          style={{ width: "240px", height: "135px" }}
        />
      )}
      <br />
      <EditImage onClick={() => toggleab(true)}>
        {imageId === 0 ? "add" : "edit"} image
      </EditImage>
    </RightCardWrapper>
  );
};
const CreateList = () => {
  const [newmodal, setNewModal] = useState(false);
  const [checkListDiscriptionId, setCheckListDiscriptionId] = useState();
  function toggleabc(data, descriptionId) {
    setCheckListDiscriptionId(descriptionId);
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
        navigate(`/createChecklist/${res?.id}`, {
          state: { showEditable: false, cardType: "user" },
        });
    }
  };

  return (
    <Section>
      <DescriptionSliderModal
        isOpen={newmodal}
        togglefunction={toggleabc}
        checklistDiscriptionId={checkListDiscriptionId}
      />
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
            <LeftContentWrapper ref={reff}>
              <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
                <ChecklistTitle />
              </Suspense>
              <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
                <DescriptionTitle />
              </Suspense>
              {pathId && ChecklistDetail?.checklistImageId !== 0 && (
                <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
                  <ImageWrapper
                    title={pathId ? ChecklistDetail?.checklistName : "untitled"}
                    imageId={ChecklistDetail?.checklistImageId}
                  />
                </Suspense>
              )}
              <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
                <TaskTitle toggleabc={toggleabc} />
              </Suspense>
            </LeftContentWrapper>
          </LeftSection>
          <RightSection>
            <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
              <RightSectionCard pathId={pathId} reff={reff} />
            </Suspense>
            <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
              <ShareSectionCard pathId={pathId} />
            </Suspense>
            <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
              <Style />
            </Suspense>
            <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
              <ImageHandler imageId={ChecklistDetail?.checklistImageId} />
            </Suspense>
          </RightSection>
        </ChecklistSubWrapper>
      </ChecklistMainWrapper>
      <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
        <Footer />
      </Suspense>
    </Section>
  );
};

const Style = () => {
  return (
    <RightCardWrapper>
      <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
        <SubModal
          title="Styles"
          text="Circles with numbers"
          buttonName="Fonts/Colors"
        />
      </Suspense>
    </RightCardWrapper>
  );
};

export default CreateList;
