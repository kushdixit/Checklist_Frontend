import React from "react";
import {
  SubSection,
  Image,
  Wrap,
  WrapSubSection,
  WrapSubSectionNew,
  WrapSection,
  Abc,
  CompleteSection,
} from "styles/components/Card";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DashboardIcon from "assets/SVG/DashboardIcon";
import CardColon from "./CardColon";
import { SET_IS_EDITABLE } from "redux/actions/action_types";
import Completed from "assets/SVG/Completed";
import { getChecklistBySubcategory } from "redux/actions/task";

const Card = ({
  item,
  index,
  Checklist,
  showEditable,
  cardType,
  templateName,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <SubSection key={index}>
      <Wrap
        onClick={async () => {
          dispatch({ type: SET_IS_EDITABLE, payload: false });
          const re = await dispatch(getChecklistBySubcategory(item.id));
          re.error == false &&
            navigate(`/check-list/${item.id}`, {
              state: { showEditable: showEditable, cardType },
            });
        }}
      >
        <Image>
          <DashboardIcon />
        </Image>
        <WrapSection>
          <WrapSubSection>
            <h2>{item.checklistName}</h2>
          </WrapSubSection>
          <WrapSubSectionNew>
            <h3>
              {" "}
              {item.dateUpdated
                ? item.dateUpdated?.split("T")[0]
                : item.dateCreated?.split("T")[0]}
            </h3>
          </WrapSubSectionNew>
        </WrapSection>
      </Wrap>
      <Abc>
        {item?.ischecked && (
          <CompleteSection>
            <Completed />
          </CompleteSection>
        )}
        <div style={{ paddingRight: item?.ischecked ? "0px" : "7px" }}>
          <CardColon
            item={item}
            cardType={cardType}
            type="dashboard"
            templateName={templateName}
            itemId={item?.id}
          />
        </div>
      </Abc>
    </SubSection>
  );
};

export default Card;
