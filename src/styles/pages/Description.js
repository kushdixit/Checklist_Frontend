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

export const ButtonSection = styled.div`
  display: flex;

  .button {
    width: 37px;
    height: 30px;
  }
`;
export const EditorSection = styled.div``;
export const IconInputField = styled.div`
  width: 100%;
  margin-left: 20px;
  input {
   text-align: left; */
    font-size: 24px;
    border: none;
    border-bottom: 2px solid #007CCB;
    /* border-radius: 4px; */
    /* padding: 7px 0px 5px 0px; */
    /* padding-left: 26px; */
    width: 100%;
    background: unset;
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
    /* border-radius: 4px; */
    /* padding: 7px 0px 5px 0px; */
    /* padding-left: 26px; */
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

export const MainWrapperNew = styled.div`
  width: 100%;
  max-width: 215px;
  height: 100%;
  display: flex;

  flex-direction: column;

  justify-content: center;
  margin: 0 auto;
  padding: 0 0;
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
export const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
`;
export const ButtonWrapper = styled.div`
  border-radius: 5px;

  align-items: center;
  justify-content: center;

  color: #fff;
  padding: 0px 0px 10px;
`;
export const DataInput = styled.div`
  font-size: 18px;
  color: #000;
  padding: 0 8px;
  /* background: #fff3f3; */
  /* padding: 15px; */
  margin-bottom: 19px;
`;

export const DataInputNew = styled.div`
  display: flex;
  font-size: 20px;
  color: #1d2e88;
  padding: 10px 0;
  align-items: center;
  svg {
    width: 76px;
    height: 50px;
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
export const ErrorMessage = styled.div`
  color: red;
`;
export const ModalButton = styled.div`
  border: 1px solid transparent;
  background: #1d2e88;
  border-radius: 8px;
  color: white;
  text-align: center;
  cursor: pointer;
  width: 16vw;
  margin: 10px 0;

  @media (max-width: 1378px) {
    width: 20vw;
  }
  @media (max-width: 862px) {
    width: 20vw;
  }
  @media (max-width: 320px) {
    width: 20vw;
  }
`;
