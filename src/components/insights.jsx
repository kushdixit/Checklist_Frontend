import React from "react";
import { useLocation } from "react-router-dom";
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
  const { state } = useLocation();
  return (
    <LandingContainer>
      <RightContainer>
        <WrapperSection>
          <Title>
            <p>Insights and statistics</p>
          </Title>
          <CardWrapper>
            <CardDiv>
              <Card>
                <Count>{state?.completed}</Count>
                <CountTitle>completions</CountTitle>
              </Card>
            </CardDiv>
            <CardDiv>
              <Card>
                <Count>{state?.inProgress}</Count>
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
