import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { getChecklistBySubcategory } from "redux/actions/task";
import ChecklistImage from "assets/images/checklist-image.png";
import {
  NewSection,
  ImageSection,
  HeaderSection,
  Small,
  ProgressSection,
} from "styles/components/ClientCard";

const ClientCard = ({ data, id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <NewSection id={id}>
      <ImageSection>
        <HeaderSection>
          <h1
            style={{
              lineBreak: "anywhere",
              lineHeight: "40px",
              marginTop: "0.75rem",
            }}
          >
            {data?.checklistName.slice(0, 24)}
            {data?.checklistName.length > 24 && "..."}
          </h1>
          <Small>{data?.viewCount} Views</Small>
          <ProgressSection>
            <img src={ChecklistImage} alt="ChecklistImage" />
          </ProgressSection>
          <p>
            <div
              style={{ color: "#38488f" }}
              onClick={async () => {
                const re = await dispatch(getChecklistBySubcategory(data.id));
                re.error === false && navigate(`/checklists/${data.id}`);
              }}
            >
              More information...
            </div>
          </p>
        </HeaderSection>
      </ImageSection>
    </NewSection>
  );
};

export default ClientCard;
