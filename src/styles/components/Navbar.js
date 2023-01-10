import styled from "styled-components";
export const NavSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1735px;
  @media (max-width: 767px) {
  }
`;
export const FirstSection = styled.div`
  width: 100%;
  max-width: 253px;
  display: flex;
  h1 {
    margin: 0;
    color: #1d2e88;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const EditSection = styled.div`
  .button {
    margin-right: 30px;
  }
`;
export const SpaceSection = styled.div`
  width: 100%;
  max-width: 80px;
`;
export const SecondSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 55px;
  width: 100%;
  max-width: 1446px;
  justify-content: right;
  @media (max-width: 1000px) {
    gap: 35px;
  }
  @media (max-width: 875px) {
    gap: 15px;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;
export const HeadingText = styled.div`
  font-size: 2.7rem;
  color: #1d2e88;

  font-weight: 700;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const LogoSearchSection = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
    /* padding-right: 30px; */
  }
`;

export const ButtonEditSection = styled.div`
  margin-right: 20px;
`;
export const LogoSection = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: flex;
    width: 100%;

    justify-content: center;
    color: #1d2e88;
    font-size: 2rem;
    font-weight: 700;
    max-width: 625px;
  }
`;
export const BurgerSection = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    form {
      justify-content: center;
      text-align: center;
    }
  }
`;

export const SearchSection = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: flex;
    width: 100%;
    justify-content: center;
    form {
      width: 100%;
    }
  }
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: inherit;
  width: 100%;
  @media (max-width: 1722px) {
    padding: 0 30px;
  }
  @media (max-width: 767px) {
    padding: 0 0;
  }
`;

export const InitialsWrapperNew = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: #1d2e88;
  border-radius: 50%;
`;

export const WrapperSize = styled.div`
  display: flex;
  font-size: 1.1rem;
`;
export const BurgerSubSection = styled.div``;
export const SecondSubSection = styled.div`
  display: flex;
  margin-left: 20px;
  img {
    width: 42px;
    height: 42px;
    border-radius: 25px;
  }
  .button {
    background: unset;
    border: unset;
  }
  @media (max-width: 874px) {
    margin-left: 0px;
  }
`;

export const SubNavSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1722px) {
    padding: 0 1rem;
  }
`;
export const ImageSubSection = styled.div``;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  h4 {
    margin: 0;
    padding: 0;
    color: #1d2e88;
    font-weight: 600;
    font-size: 20px;
  }
  h5 {
    margin: 0;
    padding: 0;
    color: 000000;
    font-weight: 400;
    font-size: 10px;
  }
  img {
    width: 35px;
    height: 35px;
    border-radius: 25px;
  }
  @media (max-width: 1125px) {
    h4 {
      font-size: 18px;
    }
  }
`;
export const Footer = styled.div`
  width: 100%;
  max-width: 156px;
  @media (max-width: 767px) {
    max-width: 68px;

    display: flex;
    justify-content: end;
  }
  .button {
    border-radius: 30px;
    margin-right: 20px;
    height: 47px;
    @media (max-width: 767px) {
      height: 3rem;
      width: 3rem;
      font-size: 2rem;
    }
  }
  button {
    width: 100%;
    font-size: 1.125rem;
    font-weight: 600;
    height: 50px;
  }
  button:hover {
    opacity: 0.4;
  }
`;
export const IconInputField = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
  input {
    position: relative;
    text-align: left;
    font-size: 14px;
    padding: 12px 41.5px;
    border: 1px solid #c9c9c9;
    background: unset;

    max-width: 277px;
    width: 100%;
    border-radius: 20px;
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
  @media (max-width: 1012px) {
    width: 100%;
    max-width: 212px;
    input {
      width: unset;
      max-width: unset;
    }
  }
  @media (max-width: 1120px) {
    width: 100%;
    max-width: 212px;
    padding-right: 30px;
    input {
      width: unset;
      max-width: unset;
    }
  }
  @media (max-width: 767px) {
    width: 100%;
    max-width: 77vw;
    padding: 0 5.333vw;
    input {
      width: 100%;
      max-width: 169.6vw;
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
    padding: 12px 41.5px;
    border: 1px solid #c9c9c9;
    background: unset;

    max-width: 277px;
    width: 100%;
    border-radius: 20px;
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
export const Morecontent = styled.div`
  display: flex;
  padding: 1rem;
  position: absolute;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  top: 75px;
  right: 34px;
  box-shadow: rgb(163 183 223) 0px 0px 3px;
  border-radius: 10px;
  z-index: 100;
  width: 100%;
  background: white;
  max-width: 82px;
  h5 {
    padding: 0;
    margin: 4px 0;
  }
  cursor: pointer;
  @media (max-width: 767px) {
    top: 15px;
    left: 85px;
  }
`;

export const ContentItem = styled.div`
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IconWrapperNew = styled.div``;
export const InitialsWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: #1d2e88;
  border-radius: 50%;
  div {
    font-size: 1.4rem;
  }
`;
export const DataWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const Heading = styled.div`
  font-size: 35px;
  font-weight: 500;
  color: #1d2e8b;
`;

export const Section = styled.div`
  position: absolute;
  left: 0;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
`;
export const ModalButton = styled.div`
  border: 1px solid transparent;
  background: #1d2e88;
  border-radius: 8px;
  color: white;
  text-align: center;
  cursor: pointer;
`;
