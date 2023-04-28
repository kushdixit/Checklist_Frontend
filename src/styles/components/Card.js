import styled from "styled-components";
export const FirstSection = styled.div`
  display: flex;
  grid-gap: 20px;
  width: 100%;

  margin: 0 0 0 10px;
  flex-wrap: wrap;
  justify-content: left;
  @media (max-width: 1012px) {
    justify-content: center;
  }
  @media (max-width: 1722px) {
    justify-content: center;
  }
`;

export const CardMainSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1735px;
  margin: 19px auto;
  h2 {
    @media (max-width: 1298px) {
      width: 100%;
      max-width: 245px;
    }
    @media (max-width: 1198px) {
      width: 100%;
      max-width: 376px;
    }
    @media (max-width: 990px) {
      width: 100%;
      max-width: 927px;
      display: flex;
      justify-content: center;
    }
  }
`;

export const SeeMoreWrapper = styled.div`
  padding-bottom: 100px;
  margin-top: 20px;
  width: 100%;
  float: left;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-size: 16px;
  color: #000;
`;

export const SeeMore = styled.a`
  color: #777;
  font-size: 14px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 17px;
  padding: 8px 15px;
  text-decoration: none;
  cursor: pointer;
`;
