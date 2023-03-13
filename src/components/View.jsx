import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { getChecklistBySubcategory, editTask } from "redux/actions/task";
import { useWatch } from "react-hook-form";
import DescriptionTitle from "components/DescriptionTitle";
import ChecklistTitle from "components/ChecklistTitle";
import SubModal from "components/SubModal";
import TaskTitle from "components/TaskTitle";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextArea from "components/FormElements/TextArea";
import Star from "assets/SVG/Star";

const View = (search, data) => {
  const { handleSubmit, control } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    defaultValues: {
      rememberMe: data?.ischecked,
    },
  });

  const watchData = useWatch({ control });
  const TaskUpdateHandler = async () => {
    if (watchData?.checklist) {
      await dispatch(
        editTask(
          watchData?.checklist,
          data?.id,
          data?.isHeading,
          data?.isPriority,
          data?.isSubtask,
          "",
          "",
          "",
          ""
        )
      );
      dispatch(getChecklistBySubcategory(pathId));
    }
  };
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
        <Helpers>
          <div>
            <ShareButton>Share</ShareButton>
          </div>
        </Helpers>
        <WrapperSection>
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
            />
            <TaskTitle />
          </LeftContentWrapper>
        </WrapperSection>
      </RightContainer>
    </LandingContainer>
  );
};

const ImageWrapper = ({ title }) => {
  return (
    <div style={{ marginBottom: "30px" }}>
      <img
        src="https://s3.amazonaws.com/checkli.com/featured/apple.png"
        alt="pic"
        style={{ width: "100%", height: "auto" }}
      />
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
      <SubModal buttonNew="Description" />
    </div>
  );
};
export default View;
