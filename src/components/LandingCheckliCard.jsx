import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getChecklistBySubcategory } from "redux/actions/task";
import ProcessOne from "assets/images/Process-One.webp";
import ChecklistImage from "assets/images/checklist-image.png";
import {
  NewSection,
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
      itemprop="itemListElement"
      itemscope
      itemtype="https://schema.org/ListItem"
    >
      <ProcessSection>
        <img
          src={ProcessOne}
          alt="ProcessOne"
          width={"100%"}
          height={"100%"}
          itemprop="image"
        />
      </ProcessSection>
      <HeaderSection>
        <Text itemprop="name">{data?.checklistName}</Text>
        <Small itemprop="potentialAction">{data?.viewCount} Views</Small>
        <ProgressSection>
          <img
            src={ChecklistImage}
            alt="ChecklistImage"
            width={"100%"}
            height={"100%"}
            itemprop="image"
          />
        </ProgressSection>
        <Name itemprop="disambiguatingDescription">
          <div itemprop="name">by:</div>
          {data?.createdBy?.split("@")[0]}
        </Name>
      </HeaderSection>
      <meta itemprop="position" content={id} />
    </NewSection>
  );
};

export default LandingCheckliCard;
