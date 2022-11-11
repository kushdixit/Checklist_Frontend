import styled from "styled-components";
export const FirstSection = styled.div`
  display: flex;
  grid-gap: 37px;
  width: 100%;
  justify-content: flex-start;

  margin: 0 10px;
  flex-wrap: wrap;
`;

export const CardMainSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1735px;
  margin: 0 auto;
`;

export const Section = styled.div``;
export const Morecontent = styled.div`
  position: absolute;

  justify-content: center;
  top: 78px;
  right: 12px;
  box-shadow: rgb(163 183 223) 0px 0px 3px;
  border-radius: 10px;
  padding: 13px 11px;
  background: #fff;
  width: 100%;
  max-width: 307px;

  h5 {
    padding: 0;
    margin: 4px 0;
  }
`;
export const IconInputField = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  display: flex;
  .app-input-text {
    width: 100%;
  }
  input {
    font-size: 14px;
    padding: 14px 54.5px;
    border: 1px solid #c9c9c9;
    background: unset;

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
export const NewSection = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 1735px;
  justify-content: space-between;
  margin: 0 auto;
`;

export const SelectFieldSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 18px 10px 0 11px;
  .app-input-text {
    width: 100%;
    max-width: 281px;
  }
`;

export const ButtonSection = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 13px;
  .button {
    padding: 7px 15px;
  }
`;
export const Footer = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  padding-right: 10px;
  .button {
    position: relative;
    padding: 17px;
    border-radius: 30px;
    height: 43px;
    font-weight: 600;
  }
`;
export const SubSection = styled.div`
  width: 100%;
  box-shadow: rgb(163 183 223) 0px 0px 3px;
  border-radius: 10px;
  height: 347px;
  max-width: 400px;
`;
export const SubSectionNew = styled.div`
  margin: 0 auto;
  font-size: 20px;
  font-weight: 700;
  width: 100%;
  max-width: 1735px;
  font-size: 20px;
  font-weight: 700;
  h2 {
    padding-left: 10px;
  }
`;
export const Image = styled.div`
  width: 100%;

  text-align: center;
  height: auto;
  align-items: center;
  img {
    width: 100%;
    max-width: 275px;
    justify-content: center;
    align-items: center;
  }
`;
export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ColonImage = styled.div`
  padding: 16px 40px;
`;
export const WrapSubSection = styled.div`
  padding: 12px 0 0 33px;
  h2 {
    margin: 0;
    padding: 0;
    font-weight: 600;
    font-size: 18px;
  }
  h3 {
    color: #505050;
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-size: 12px;
  }
`;
