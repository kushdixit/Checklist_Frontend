import styled from "styled-components";

export const LandingContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  max-width: 1735px;
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
    font-weight: 500;

    font-size: 19px;

    margin-left: auto;
    margin-right: auto;

    flex-direction: column;

    text-align: center;
  }
  h1 {
    font-size: 2.8rem;
    font-weight: 600;
  }
`;

export const Heading = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 2.8rem;

  margin-left: auto;
  margin-right: auto;

  flex-direction: column;

  margin-top: 90px;
  text-align: center;
  @media (max-width: 538px) {
    font-size: 1.8rem;
  }
`;

export const SecondHeading = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-weight: 400;

  font-size: 34px;

  margin-left: auto;
  margin-right: auto;

  flex-direction: column;
  max-width: 708px;
  margin-top: 90px;
  text-align: center;
`;
export const NavSection = styled.div`
  padding-top: 1rem;
  padding-bottom: 29px;
`;

export const LandingCardSection = styled.div`
  display: flex;

  gap: 100px;
  width: 100%;

  justify-content: center;

  align-items: center;
  margin: 30px 10px;

  flex-wrap: wrap;
`;
export const ChecklistButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  text-align: center;
  .button {
    padding: 20px 30px;
    font-weight: 700;
    font-size: 20px;
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
