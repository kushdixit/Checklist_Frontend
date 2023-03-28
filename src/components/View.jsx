import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GetImage } from "redux/actions/task";
import { PinChecklist } from "redux/actions/checklist/index";
import ImageModal from "components/ImageModal";
import DropdownBox from "./Dropdown";
import {
  LandingContainer,
  RightContainer,
  WrapperSection,
  LeftContentWrapper,
  DetailWrapper,
  Date,
  Helpers,
  ShareButton,
} from "styles/components/View";
import { getChecklistBySubcategory } from "redux/actions/task";
import DescriptionTitle from "components/DescriptionTitle";
import ChecklistTitle from "components/ChecklistTitle";
import TaskTitle from "components/TaskTitle";
import Star from "assets/SVG/Star";
import StarGrey from "assets/SVG/StarGrey";

const reff = React.createRef();

const View = () => {
  const { id: pathId } = useParams();
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const ChecklistDetail = useSelector((state) =>
    pathId ? state.checklist : null
  );

  useEffect(() => {
    pathId && dispatch(getChecklistBySubcategory(pathId));
  }, []);

  const PinnedHandler = async () => {
    if (pathId) {
      const pinn = !ChecklistDetail?.pinned ? 1 : 0;
      const res = await dispatch(PinChecklist(pathId, pinn));
      if (res?.status === 200) dispatch(getChecklistBySubcategory(pathId));
    }
  };

  function toggleab(data) {
    setModal(data);
  }

  return (
    <LandingContainer>
      <RightContainer>
        <Helpers>
          <div style={{ display: "flex", gap: "10px" }}>
            <ShareButton>Share</ShareButton>
            <ShareButton>
              <DropdownBox reff={reff} toggleab={toggleab} />
            </ShareButton>
          </div>
        </Helpers>
        <WrapperSection>
          <LeftContentWrapper id="divToPrint" ref={reff}>
            <DetailWrapper>
              <div>
                <Date>
                  {pathId
                    ? `Created: ${ChecklistDetail?.dateCreated?.split("T")[0]}`
                    : `Date: ${
                        new window.Date().toLocaleString()?.split(",")[0]
                      }`}
                </Date>
              </div>
              <div style={{ width: "25px" }}>
                {ChecklistDetail?.pinned ? (
                  <Star onClick={PinnedHandler} />
                ) : (
                  <StarGrey onClick={PinnedHandler} />
                )}
              </div>
            </DetailWrapper>
            <ChecklistTitle />
            {pathId && (
              <>
                <DescriptionTitle />
                {ChecklistDetail?.checklistImageId !== 0 && (
                  <ImageWrapper
                    title={pathId ? ChecklistDetail?.checklistName : "untitled"}
                    imageId={ChecklistDetail?.checklistImageId}
                  />
                )}
              </>
            )}
            <TaskTitle />
          </LeftContentWrapper>
        </WrapperSection>
      </RightContainer>
      <ImageModal
        modalType="editimage"
        isOpen={modal}
        togglefunction={toggleab}
      />
    </LandingContainer>
  );
};

const ImageWrapper = ({ title, imageId }) => {
  const dispatch = useDispatch();
  const [imagePath, setImagePath] = useState(null);
  const idRef = useRef(null);

  const ImageHandler = async () => {
    const res = await dispatch(GetImage(imageId));
    if (res?.status === 200) setImagePath(res?.data[0]?.imageName);
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

export default View;
