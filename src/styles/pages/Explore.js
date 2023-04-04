import styled from "styled-components";

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
  display: flex;
  width: 100%;
  max-width: 986px;
  margin-left: 10px;
  flex-wrap: wrap;
  gap: 0px 30px;
  h4 {
    margin: 0;
    padding: 0;
    justify-content: left;
    display: flex;
    width: 100%;
    align-items: flex-start;
    font-size: 18px;
    @media (max-width: 988px) {
      align-items: center !important;
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
  padding-top: 8rem;
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
`;
export const SubMainSection = styled.div`
  display: flex;
  width: 100%;
  max-width: 1220px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-around;
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
      width: 46vw;
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
  margin-bottom: 8rem;
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

export const Border = styled.div`
  border: 1px solid #e8e8e8;
  margin: 20px 0;
`;

export const Main = styled.div``;
export const PopularHeading = styled.div``;
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
