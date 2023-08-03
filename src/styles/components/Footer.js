import styled from "styled-components";
import { colors } from "constants/color";

export const Section = styled.div`
  text-align: center;
  padding-bottom: 60px;
  background: #fbfbfb;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const FirstSection = styled.div`
  font-size: 13px;
  color: ${colors.primaryColor};
  font-weight: 400;
  padding-bottom: 2px;
`;

export const SubSection = styled.div`
  border-top: 1px solid #ebebeb;
  width: 100%;
  max-width: 1250px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
`;
