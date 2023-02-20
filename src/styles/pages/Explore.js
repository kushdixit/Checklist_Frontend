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
  }
  p {
    font-size: 16px;
    margin-bottom: 0px;
    line-height: 25px;
    color: #777;
  }
`;

export const Heading = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 2.2rem;

  margin-left: auto;
  margin-right: auto;

  flex-direction: column;

  margin-top: 90px;
  text-align: center;
  @media (max-width: 538px) {
    font-size: 1.8rem;
  }
  @media (max-width: 970px) {
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

export const LeftSection = styled.div`
  padding-top: 1rem;
  padding-bottom: 29px;
  padding-top: 8rem;
  padding-bottom: 29px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  gap: 46px 10px;
  h4 {
    margin: 0;
    padding: 0;
    justify-content: left;
    display: flex;
    width: 100%;
    align-items: flex-start;
    padding-left: 33px;
  }
`;
export const RightSection = styled.div`
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
      width: 72vw;
    }
  }
  /* @media (max-width: 532px) {
    input {
      width: 70vw;
    }
  } */
`;
export const SearchSection = styled.div`
  margin-top: 20px;
  @media (max-width: 767px) {
    display: flex;
    width: 100%;
    justify-content: center;
    form {
      width: 100%;
    }
  }
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
