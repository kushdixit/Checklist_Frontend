import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getChecklistBySubcategory } from "redux/actions/task";
import {
  LandingContainer,
  RightContainer,
  Title,
  WrapperSection,
  CardWrapper,
  CardDiv,
  Card,
  Count,
  CountTitle,
} from "styles/components/insights";

const Insight = () => {
  const { id: pathId } = useParams();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const ChecklistDetail = useSelector((state) =>
    pathId ? state.checklist : null
  );

  useEffect(() => {
    pathId && dispatch(getChecklistBySubcategory(pathId));
  }, []);

  console.log("state", ChecklistDetail);

  return (
    <LandingContainer>
      <RightContainer>
        <WrapperSection>
          <Title>
            <p>Insights and statistics</p>
          </Title>
          <CardWrapper>
            <CardDiv>
              <Card to={`/completed/${pathId}`}>
                <Count>{ChecklistDetail?.completedProcessCount}</Count>
                <CountTitle>completions</CountTitle>
              </Card>
            </CardDiv>
            <CardDiv>
              <Card to={`/progress/${pathId}`}>
                <Count>{ChecklistDetail?.inCompletedProcessCount}</Count>
                <CountTitle>in progress</CountTitle>
              </Card>
            </CardDiv>
          </CardWrapper>
        </WrapperSection>
      </RightContainer>
    </LandingContainer>
  );
};

export default Insight;