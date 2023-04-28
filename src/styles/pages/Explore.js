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
  display: flex;
  width: 100%;
  max-width: 986px;
  margin-left: 10px;
  flex-wrap: wrap;
  gap: 15px 30px;
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
