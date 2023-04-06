import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getChecklistBySubcategory } from "redux/actions/task";
import Avatar from "assets/images/avatar.jpg";
import ProcessFifth from "assets/images/Process-Fifth.png";
import {
  NewSection,
  ImageSection,
  HeaderSection,
  Small,
  Name,
  ProcessSection,
  Content,
} from "styles/components/CheckliWidget";

const ChecklistWidget = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log("data", data);

  return (
    <NewSection
      onClick={async () => {
        const re = await dispatch(getChecklistBySubcategory(data.id));
        re.error === false && navigate(`/checklists/${data.id}`);
      }}
    >
      <ImageSection>
        <ProcessSection>
          <img src={ProcessFifth} alt="ProcessOne" />
        </ProcessSection>
        <HeaderSection>
          <Content>{data?.checklistName}</Content>
          <Small>{data?.viewCount} views</Small>
          <Name>
            <img src={Avatar} alt="Avatar" />
            {data?.updatedBy?.split("@")[0]}
          </Name>
        </HeaderSection>
      </ImageSection>
    </NewSection>
  );
};

export default ChecklistWidget;
