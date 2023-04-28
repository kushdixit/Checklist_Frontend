import styled from "styled-components";

export const LandingContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
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
    text-align: start;
    text-transform: capitalize;
    @media (max-width: 970px) {
      padding: 0 30px !important;
    }
  }
`;

export const MainSection = styled.div`
  display: flex;
  padding-bottom: 80px;
  background: #fbfbfb;
`;
