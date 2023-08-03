import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  h5 {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.57;
    color: #666;
    margin: 24px 0 3px 0;
  }
`;

export const IconInputField = styled.div`
  width: 100%;
  input {
    text-align: left;
    font-size: 24px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 7px 0px 5px 0px;
    width: 100%;
    background: unset;
    @media (max-width: 462px) {
      font-size: 18px;
    }
  }

  input:focus-visible {
    outline: unset;
  }
  .checklistDescription {
    width: 100%;
    margin-right: 4.5rem;
    font-weight: 500;
    font-size: 24px !important;
    background: rgba(239, 239, 239, 0.3);
    border-color: rgba(118, 118, 118, 0.3);
    color: #000;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
`;
export const MainTaskSectionForm = styled.div`
  .checkBox {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 26px;
    height: 26px;
    background-color: #999;
    margin: 7px 7px 0 0;
  }
`;
export const DataWrapper = styled.form`
  img {
    width: 86px;
    height: auto;
  }
`;
export const Heading = styled.div`
  display: flex;
  h3 {
    color: #555;
    display: initial;
    padding-left: 10px;
    vertical-align: middle;
    font-size: 16px;
    font-weight: 400;
  }
`;
export const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
`;

export const DataInput = styled.div`
  font-size: 15px;
  color: #db221a;
  background: #fff3f3;
  padding: 15px;
  margin-bottom: 12px;
  border: 1px solid transparent;
  border-radius: 4px;
  text-align: center;
  input {
    max-width: 360px;
    padding: 12px 19px;
    border-radius: 5px;
    border: 1px solid #c9c9c9;
    ::placeholder {
      font-family: "poppinsRegular" !important;
      font-size: 14px !important;
      color: #4f5270 !important;
      padding-left: 10px;
    }
    @media (max-width: 873px) {
      width: unset !important;
    }
  }
`;

export const ResetWrapper = styled.button`
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  border: 1px solid #ddd;
  background: #f5f5f5;
  padding: 15px 25px;
`;
export const ResetText = styled.div`
  font-size: 17px;
  font-weight: 400;
  padding: 0 25px;
`;

export const BlankText = styled.div`
  font-size: 17px;
  font-weight: 400;
  padding: 0 65px;
`;
