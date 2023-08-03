import styled from "styled-components";

export const LandingContainer = styled.div`
  width: 100%;
  text-align: center;
  p {
    margin-bottom: 0px;
  }
  h2 {
    letter-spacing: 0px;
  }
  h3 {
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
    font-size: 2.2rem;
    font-weight: 600;
    @media (max-width: 538px) {
      font-size: 1.8rem;
    }
    @media (max-width: 970px) {
      font-size: 1.8rem;
    }
  }
`;
export const UpperContentWrapper = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 768px) {
    /* width: 750px; */
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
  @media (min-width: 1300px) {
    width: 1250px;
  }
`;

export const Heading = styled.div`
  font-weight: 600;
  font-size: 45px;
  line-height: 45px;
  @media (max-width: 767px) {
    margin-bottom: 10px;
    font-weight: 600;
    padding-bottom: 10px;
    font-size: 32px;
    line-height: 35px;
  }
`;

export const LandingChecklistCardSection = styled.div`
  margin: 195px 0 0 0;
  h3 {
    font-size: 32px;
    font-weight: 400;
    margin: 0;
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  gap: 16px;
  margin: 0 auto;
  padding: 76px 0 0 15px;
  .button {
    background-color: #f5f5f5;
    text-decoration: none;
    font-size: 13px;
    border-radius: 10px;
    border: 0px;
    padding: 8px;
    color: #333;
    cursor: pointer;
  }
  @media (max-width: 1298px) {
    width: 100%;
    max-width: 1053px;
  }
  @media (max-width: 1198px) {
    width: 100%;
    max-width: 717px;
  }
  @media (max-width: 990px) {
    width: 100%;
    max-width: 635px;
    display: flex;
    justify-content: center;
  }
`;
export const SecondHeading = styled.h2`
  line-height: 1.18;
  margin: 0px 0px 30px 0px;
  font-size: 34px;
  font-weight: 400;
`;
export const NavSection = styled.div`
  padding-top: 1rem;
  padding-bottom: 29px;
`;

export const LandingCardSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;
export const ChecklistButton = styled.div`
  display: flex;
  justify-content: center;
  .button {
    font-size: 23px;
    min-width: 160px;
    padding: 18px 34px;
    line-height: 36px;
  }
`;

export const ChecklistImage = styled.img`
  border: 1px solid #eeeeee;
  box-shadow: 0 6px 15px 0 rgba(36, 37, 38, 0.08);
  max-width: 100%;
  @media (max-width: 1200px) {
    width: 80%;
    height: 80%;
  }
`;

export const Wrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 170px;
  @media (max-width: 767px) {
    padding-bottom: 0px !important;
  }
`;
