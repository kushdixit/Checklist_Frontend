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

export const EditorSection = styled.div``;

export const EditorTask = styled.div`
  padding: 6px 8px 2px 8px;
  font-weight: bold;
  font-size: 13px;
`;

export const DescriptionFormButton = styled.button`
  font-size: 13px;
  padding: 10px 15px;
  min-width: max-content;
  background: #007ccb;
  font-weight: 400;
  color: #fff;
  border: none;
  border-radius: 4px;
`;

export const IconInputFieldTextArea = styled.div`
  width: 100%;
  input {
    text-align: left;
    font-size: 24px;
    border: none;
    border-bottom: 2px solid #007ccb;
    width: 100%;
    background: unset;
    margin: 0;
  }

  input:focus-visible {
    outline: unset;
  }
  .checklistDescription {
    width: 100%;
    font-weight: 500;
    font-size: 24px !important;
    background: rgba(239, 239, 239, 0.3);
    border-color: rgba(118, 118, 118, 0.3);
    color: #000;
  }
  textarea[input] {
    margin: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
`;
export const MainTaskSectionForm = styled.div`
  h4 {
    font-weight: 600;
    font-size: 15px;
  }
  input[type="checkbox" i] {
    width: 25px;
    height: 25px;
  }
`;
export const DataWrapper = styled.form`
  img {
    width: 86px;
    height: auto;
  }
`;
export const Heading = styled.div`
  padding: 30px 0 0 6px;
  .button {
    border: none;
    padding: 7px 10px;
    border-radius: 10px;
  }
`;

export const DataInput = styled.div`
  font-size: 18px;
  color: #000;
  padding: 0 8px;
  margin-bottom: 19px;
`;
