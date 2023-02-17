import styled from "styled-components";

export const LandingContainer = styled.div`
  width: 100%;
  text-align: center;

  p {
    margin-bottom: 1.38em;
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
    width: 750px;
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
export const SubHeading = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 45px;
  font-size: 45px;
  line-height: 57px;
  margin-left: auto;
  margin-right: auto;

  flex-direction: column;
  max-width: 708px;
  margin-top: 90px;
  text-align: center;
`;
