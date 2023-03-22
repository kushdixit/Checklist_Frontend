import styled from "styled-components";
import { Link } from "react-router-dom";

export const LandingContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  /* max-width: 1735px; */
  h3 {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-weight: 500;

    flex-direction: column;
    max-width: 708px;
  }
  h4 {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 19px;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    text-align: center;
  }
  h1 {
    font-weight: 600;
    font-size: 45px;
    font-family: "Roboto", sans-serif;
    line-height: 45px;
    margin-bottom: auto;
    @media (max-width: 658px) {
      font-size: 30px;
      padding: 0 22px;
    }
  }
  p {
    font-size: 16px;
    margin-top: 3px;
    line-height: 21px;
    color: #777;

    @media (max-width: 970px) {
      padding: 0 30px !important;
    }
  }
`;

export const NavSection = styled.div`
  padding-top: 1rem;
  padding-bottom: 29px;
`;

export const LeftSection = styled.div`
  padding-bottom: 115px;
  padding-top: 75px;
  display: flex;
  width: 100%;
  max-width: 986px;
  margin-left: 10px;
  flex-wrap: wrap;
  gap: 24px 30px;
  h4 {
    margin: 0;
    padding: 0;
    justify-content: left;
    display: flex;
    width: 100%;
    align-items: flex-start;
    font-size: 18px;
    @media (max-width: 658px) {
    }
  }
  @media (max-width: 658px) {
    justify-content: center;
  }
  @media (max-width: 1276px) {
    width: 100%;
  }
  @media (max-width: 990px) {
    justify-content: center;
  }
`;
export const Listeners = styled.div`
  padding-top: 2rem;
  h4 {
    margin: 0;
    padding-bottom: 14px;
    justify-content: left;
    display: flex;
    width: 100%;
    align-items: flex-start;
    font-size: 18px;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin: 6px 0 0;
  }
`;

export const ImageSection = styled.div`
  .button {
    color: #777;
    font-size: 14px;
    border: 1px solid #ddd;
    background-color: #fff;
    border-radius: 17px;
    padding: 8px 15px;
    margin: 20px 0 30px;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 1276px) {
    .button {
      padding: 8px 12px;
      font-size: 12px;
    }
  }
`;

export const Text = styled.div`
  padding: 5px 0;
  color: #777;
  font-size: 14px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
export const SubMainSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1220px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
  @media (max-width: 1276px) {
    width: 100%;
    max-width: 1050px;
  }
  @media (max-width: 1196px) {
    width: 100%;
    max-width: 880px;
  }
`;

export const RightSection = styled.div`
  text-align: left;
  margin-right: 10px;
  @media (max-width: 1276px) {
    width: 100%;
    max-width: 135px;
    margin-left: 10px;
  }
  @media (max-width: 990px) {
    display: none;
  }
`;

export const Border = styled.div`
  border: 1px solid #e8e8e8;
  margin: 20px 0;
`;

export const TextWrapper = styled.div`
  padding-left: 30px;
  text-align: left;
`;
export const CreateList = styled.div`
  margin: 20px 30px 5px 0px;
  padding: 18px 25px 18px 25px;
  border-radius: 40px;
  font-size: 20px;
  font-weight: bold;
  max-width: 220px;
  font-family: "Roboto", sans-serif;
  line-height: 1.2;
  text-decoration: none;
  vertical-align: middle;
  text-align: center;
  border: 0;
  cursor: pointer;
  background: #007ccb;
  color: white;
`;
