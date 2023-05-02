import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getChecklistBySubcategory } from "redux/actions/task";
import ProcessOne from "assets/images/Process-One.webp";
import ChecklistImage from "assets/images/checklist-image.png";
import {
  NewSection,
  ImageSection,
  HeaderSection,
  Small,
  ProgressSection,
  Name,
  ProcessSection,
  Text,
} from "styles/components/LandingCheckliCard";

const LandingCheckliCard = ({ data, id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <NewSection
      id={id}
      onClick={async () => {
        const re = await dispatch(getChecklistBySubcategory(data.id));
        re.error === false && navigate(`/checklists/${data.id}`);
      }}
    >
      <ImageSection>
        <ProcessSection>
          <img
            src={ProcessOne}
            alt="ProcessOne"
            width={"100%"}
            height={"100%"}
          />
        </ProcessSection>
        <HeaderSection>
          <Text>{data?.checklistName}</Text>
          <Small>{data?.viewCount} Views</Small>
          <ProgressSection>
            <img
              src={ChecklistImage}
              alt="ChecklistImage"
              width={"100%"}
              height={"100%"}
            />
          </ProgressSection>
          <Name>
            <div>by:</div>
            {data?.createdBy?.split("@")[0]}
          </Name>
        </HeaderSection>
      </ImageSection>
    </NewSection>
  );
};

export default LandingCheckliCard;
