import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetImage } from "redux/actions/task";
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
import { useParams } from "react-router-dom";
import Star from "assets/SVG/Star";
import DropdownBox from "./Dropdown";

const View = (search, data) => {
  const { id: pathId } = useParams();
  const dispatch = useDispatch();
  const ChecklistDetail = useSelector((state) =>
    pathId ? state.checklist : null
  );

  useEffect(() => {
    // const token = localStorage.getItem("access_token");
    // if (!token) navigate("/sign-in");
    pathId && dispatch(getChecklistBySubcategory(pathId));
  }, []);

  return (
    <LandingContainer>
      <RightContainer>
        <WrapperSection>
          <Helpers>
            <div style={{ display: "flex", gap: "10px" }}>
              <ShareButton>Share</ShareButton>
              <ShareButton>
                <DropdownBox />
              </ShareButton>
            </div>
          </Helpers>
          <LeftContentWrapper>
            <DetailWrapper>
              <div>
                <Date>
                  Created: {ChecklistDetail?.dateCreated?.split("T")[0]}
                </Date>
              </div>
              <div style={{ width: "25px" }}>
                <Star />
              </div>
            </DetailWrapper>
            <ChecklistTitle />
            <DescriptionTitle />
            <ImageWrapper
              title={pathId ? ChecklistDetail?.checklistName : "untitled"}
              imageId={ChecklistDetail?.checklistImageId}
            />
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

export default View;
