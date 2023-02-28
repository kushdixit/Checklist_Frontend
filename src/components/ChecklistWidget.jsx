import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getChecklistBySubcategory } from "redux/actions/task";
import ProcessOne from "assets/images/Process-One.png";
import Tick from "assets/images/tick.jpg";
import ChecklistImage from "assets/images/checklist-image.png";
import Avatar from "assets/images/avatar.jpg";

import ProcessFifth from "assets/images/Process-Fifth.png";
import {
  NewSection,
  ImageSection,
  HeaderSection,
  Small,
  ProgressSection,
  Name,
  ProcessSection,
  Content,
} from "styles/components/CheckliWidget";

const ChecklistWidget = ({ data }) => {
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
          <img src={ProcessFifth} alt="ProcessOne" />
        </ProcessSection>
        <HeaderSection>
          <Content>
            10 Point Checklist for Branding Your Content Upgrade
          </Content>
          <Small>4,048 views</Small>

          <Name>
            <img src={Avatar} alt="Avatar" />
            Denisewakeman
          </Name>
        </HeaderSection>
      </ImageSection>
    </NewSection>
  );
};

export default ChecklistWidget;
