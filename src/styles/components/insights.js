import styled from "styled-components";
import { colors } from "constants/color";
import { Link } from "react-router-dom";

export const LandingContainer = styled.div`
  width: 100%;
  display: flex;
`;
export const RightContainer = styled.div`
  width: 100%;
  /* max-width: 1592px; */
  text-align: center;
  display: flex;
  justify-content: center;
  background: #fbfbfb;
  padding-top: 36px;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  padding: 5px 2px;
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: black;
  }
`;
export const WrapperSection = styled.div`
  width: 100%;

  background: #fff;
  border: 1px solid #eee;
  max-width: 924px;
  padding: 50px;
  margin-left: 15px;
  margin-right: 15px;
  @media (max-width: 1010px) {
    padding: 50px 50px;
  }
`;
export const CardWrapper = styled.div`
  display: flex;
  gap:1rem;
`;
export const CardDiv = styled.div`
  display: flex;
  padding: 0 5px;
  margin-bottom: 10px;
  width: 33.33333333%;
`;
export const Card = styled(Link)`
  text-decoration: none;
  color: #4f4e4e;
  box-shadow: 0 6px 15px 0 rgba(36, 37, 38, 0.08);
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  padding: 50px;
  text-align: center;
`;
export const Count = styled.h1`
  font-size: 120px !important;
  font-weight: 800;
  line-height: 132px !important;
  margin: 0px 0px 5px !important;
`;
export const CountTitle = styled.span`
  font-weight: 800;
  color: #919191;
  text-transform: capitalize;
`;
export const FirstSection = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  padding: 5px 2px;
  font-size: 32px;
  font-weight: 600;
  text-transform: capitalize;
`;
export const SecondSection = styled.div`
  display: flex;
  align-items: center;
  color: #000;

  padding: 0;
  font-size: 16px;
`;

export const ThirdSection = styled.div`
  display: flex;
  width: 100%;
  padding-top: 10px;
  ul {
    text-decoration: none;
    list-style: none;
    display: flex;
    padding: 0 0 10px 0;
    margin: 0;
    width: 100%;
    color: #000;
    font-size: 16px;
    font-weight: 600;
    /* border-top: 1px solid #aaa; */
    border-bottom: 1px solid #aaa;
    justify-content: space-around;
  }
  li {
    width:15%;
    padding: 20px 0px 0 0;
    text-decoration: none;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
  }
`;

export const FourthSection = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  ul {
    text-decoration: none;
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    width: 100%;
    color: #000;
    font-size: 16px;
    font-weight: 600;
    border-bottom: 1px solid #aaa;
  display: flex;
  justify-content: space-evenly;

  }
  li {
    cursor: pointer;
    padding: 20px 0px 0 0;
    text-decoration: none;
    list-style: none;
    display: flex;
    width:15%;
  }
  div {
    color: ${colors.primaryColor};
  }
`;