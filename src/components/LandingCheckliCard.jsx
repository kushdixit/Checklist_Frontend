import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getChecklistBySubcategory } from "redux/actions/task";
import ProcessOne from "assets/images/Process-One.png";
import Tick from "assets/images/tick.jpg";
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

const LandingCheckliCard = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <NewSection
      onClick={async () => {
        const re = await dispatch(getChecklistBySubcategory(data.id));
        re.error === false && navigate(`/checklists/${data.id}`);
      }}
    >
      <ImageSection>
        <ProcessSection>
          <img src={ProcessOne} alt="ProcessOne" />
        </ProcessSection>
        <HeaderSection>
          <Text>{data?.checklistName}</Text>
          <Small>{data?.viewCount} Views</Small>
          <ProgressSection>
            <img src={ChecklistImage} alt="ChecklistImage" />
          </ProgressSection>
          <Name>
            <img src={Tick} alt="tick" />
            Offically Checkli
          </Name>
        </HeaderSection>
      </ImageSection>
    </NewSection>
  );
};

export default LandingCheckliCard;
