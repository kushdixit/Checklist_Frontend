import styled from "styled-components";
export const NavSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1735px;
`;
export const FirstSection = styled.div`
  width: 100%;
  max-width: 100px;
  h1 {
    margin: 0;
    color: #1d2e88;
  }
`;
export const SecondSection = styled.div`
  position: relative;
  display: flex;
  gap: 55px;
  width: 100%;
  justify-content: right;
`;
export const HeadingText = styled.div`
  font-size: 3vw;
  color: #1d2e88;
  padding-left: 10px;
  font-weight: 700;
`;

export const SecondSubSection = styled.div`
  display: flex;

  img {
    width: 42px;
    height: 42px;
    border-radius: 25px;
  }
  .button {
    background: unset;
    border: unset;
  }
`;

export const SubNavSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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
    font-size: 16px;
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
`;
export const Footer = styled.div`
  width: 100%;
  max-width: 156px;
  .button {
    border-radius: 30px;
    height: 43px;
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
  max-width: 375px;
  input {
    text-align: left;
    font-size: 14px;
    padding: 12px 41.5px;
    border: 1px solid #c9c9c9;
    background: unset;
    width: 100%;
    max-width: 300px;
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
`;
export const Morecontent = styled.div`
  padding: 1rem;
  position: absolute;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  top: 60px;
  right: 18px;
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
`;

export const ContentItem = styled.div`
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  position: absolute;

  right: 12px;
  top: 9px;
`;

export const InitialsWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: #1d2e88;
  border-radius: 50%;
`;
