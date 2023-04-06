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
    text-transform: capitalize;

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
  display: flex;
  justify-content: center;
  width: 100%;
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
export const SubMainSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1220px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  @media (max-width: 1276px) {
    width: 100%;
    max-width: 1050px;
  }
  @media (max-width: 1196px) {
    width: 100%;
    max-width: 880px;
  }
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
export const SearchSection = styled.div`
  margin-bottom: 20px;
  @media (max-width: 767px) {
    display: flex;
    width: 100%;
    justify-content: center;
    form {
      width: 100%;
    }
  }
`;
export const IconInputFieldNew = styled.div`
  position: relative;
  width: 100%;
  input {
    position: relative;
    text-align: left;
    font-size: 14px;
    padding: 21px 41.5px;
    border: 1px solid #c9c9c9;
    background: unset;
    max-width: 400px;
    width: 100%;
    border-radius: 30px;
    ::placeholder {
      font-size: 16px;
      color: #9d9d9d;
    }

    :-ms-input-placeholder {
      font-size: 16px;
      color: #9d9d9d;
    }

    ::-ms-input-placeholder {
      font-size: 16px;
      color: #9d9d9d;
    }
    :focus-visible {
      outline: unset;
    }
  }

  @media (max-width: 767px) {
    width: 100%;

    input {
      width: 100%;
      max-width: 79.6vw;
    }
  }
  @media (max-width: 726px) {
    width: 100%;

    input {
      width: 100%;
    }
  }
  @media (max-width: 610px) {
    input {
      width: 46vw;
    }
  }
`;
