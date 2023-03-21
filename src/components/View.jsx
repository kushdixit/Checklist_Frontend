import React, { useRef, useEffect } from "react";
import Pdf from "react-to-pdf";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GetImage } from "redux/actions/task";
import { PinChecklist } from "redux/actions/checklist/index";
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

  return (
    <LandingContainer>
      <RightContainer>
        <Helpers>
          <div style={{ display: "flex", gap: "10px" }}>
            <ShareButton>Share</ShareButton>
            <ShareButton>
              <DropdownBox />
            </ShareButton>
            <Pdf
              targetRef={reff}
              filename="checklist.pdf"
              x={0.5}
              y={0.5}
              scale={0.8}
            >
              {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
          </div>
        </Helpers>

        <WrapperSection>
          <LeftContentWrapper id="divToPrint" ref={reff}>
            <DetailWrapper>
              <div>
                <Date>
                  Created:{" "}
                  {pathId
                    ? ChecklistDetail?.dateCreated?.split("T")[0]
                    : new window.Date().toLocaleString()?.split(",")[0]}
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
            <DescriptionTitle />
            {console.log("ChecklistDetail?.checklistImageId")}
            {pathId && ChecklistDetail?.checklistImageId !== 0 && (
              <ImageWrapper
                title={pathId ? ChecklistDetail?.checklistName : "untitled"}
                imageId={ChecklistDetail?.checklistImageId}
              />
            )}
            <TaskTitle />
          </LeftContentWrapper>
        </WrapperSection>
      </RightContainer>
    </LandingContainer>
  );
};

const ImageWrapper = ({ title, imageId }) => {
  const dispatch = useDispatch();
  const imageRef = useRef(null);
  const idRef = useRef(null);

  const ImageHandler = async () => {
    if (imageId) {
      const res = await dispatch(GetImage(imageId));
      if (res?.status === 200) imageRef.current = res?.data[0]?.imageName;
    }
  };

  useEffect(() => {
    if (imageId !== 0 && idRef?.current !== imageId) ImageHandler();
    idRef.current = imageId;
  }, []);

  useEffect(() => {
    if (imageId !== 0 && idRef?.current !== imageId) ImageHandler();
  }, [imageId]);

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

export default View;
