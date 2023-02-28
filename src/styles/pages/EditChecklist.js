import styled from "styled-components";

export const Section = styled.div`
  /* background: #f5f5f5; */
`;

export const BodyWrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 21.249px;
  background: #fff;
`;

export const LeftHeader = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const TagButton = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: center;
  padding: 5px;
  .button {
    padding: 5px;
    border: 1px solid #777;
    border-radius: 3px;
  }
`;
export const SecondContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0 100px 0;
`;
export const TagContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0 7px 0;
`;
export const ButtonSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
  .button {
    color: white;
    border-radius: 5px;
    background: #ec4e20;
    border: none;
    padding: 14px;
    font-size: 16px;
  }
`;
export const ChecklistWidgetSection = styled.div`
  display: flex;
  width: 100%;
  max-width: 1161px;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
  gap: 7px 30px;
  @media (max-width: 990px) {
    justify-content: center;
  }
`;
export const RelationHeading = styled.div`
  width: 100%;

  display: flex;

  padding: 59px 0 0 0;
  font-size: 19px;
  font-weight: 700;
  @media (max-width: 968px) {
    justify-content: center;
  }
`;

export const ProgressSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 54px;
    height: 54px;
    border: 1px solid #000;
    border-radius: 20px;
    border-radius: 30px;
    border: 3px solid #e8e8e8;
  }
`;
export const ChecklistMainWrapper = styled.div`
  padding: 20px 0 40px;
  width: 100%;
  background: #f8f8f8;
`;
export const ChecklistSubWrapper = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  gap: 30px;
  justify-content: center;
  @media (min-width: 1300px) {
    width: 1250px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
  @media (min-width: 992px) {
    /* width: 970px; */
  }
  /* @media (min-width: 768px) {
    display: unset;
  } */
`;
export const LeftSection = styled.div`
  border: 1px solid #eee;
  background: #ffffff;
  padding: 90px 37px;
  max-width: 900px;
  width: 100%;
  @media (max-width: 1300px) {
    max-width: 835px;
  }
  @media (max-width: 1200px) {
    max-width: 605px;
  }
  @media (max-width: 990px) {
    max-width: 400px;
  }
`;
export const RightSection = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 300px;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const RightCardWrapper = styled.div`
  border: 1px solid #eee;
  background: #ffffff;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;
export const LeftCardWrapper = styled.div``;
export const RightContentWrapper = styled.div`
  text-align: center;
`;
export const ChecklistTitleWrapper = styled.div`
  .app-input-text {
    width: 100%;
  }
`;
export const ChecklistDescriptionWrapper = styled.div`
  .app-input-text {
    width: 100%;
  }
`;

export const ChecklistTaskWrapper = styled.div`
  padding-bottom: 4px;
  margin-top: ${({ isHovering }) => (isHovering ? "12px" : "0px")};
  .app-input-text {
    width: 100%;
  }
  .task-form {
    display: flex;
    position: relative;
    align-items: baseline;
  }
`;
export const TaskContainer = styled.div`
  padding: 0px 40px 4px 0px;
  flex: 1;
`;
export const TaskSubContainer = styled.div`
  display: flex;
  gap: 10px;
  border-bottom: 1px solid rgb(224, 224, 224);
  border: ${({ isPriority }) => isPriority && "0px solid #fcd5d5 !important"};
  background-color: ${({ isPriority, isHovering }) =>
    isPriority ? "#fff3f3" : isHovering ? "#f8f8f8" : "inherit"};
  margin-left: ${({ isSubtask }) => (isSubtask ? "35px" : "0px")};
`;
export const AddTaskSubContainer = styled.div`
  display: flex;
  gap: 10px;
  background-color: inherit;
  margin-left: "0px";
`;
export const TaskFormSubWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  cursor: not-allowed;
`;

export const ShareTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ShareSection = styled.div``;

export const LeftContentWrapper = styled.div`
  padding-bottom: 120px;
`;
export const ShareText = styled.div`
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 600;
  opacity: 0.7;
`;
export const Preview = styled.a`
  text-decoration: none;
  font-size: 14px;
  display: inline;
  float: right;
  cursor: pointer;
  color: rgb(0, 0, 238);
`;
export const LinkSection = styled.div`
  width: 95%;
  height: 54px;
  border: 0;
  background-color: #f5f5f5;
  padding: 9px;
  border-radius: 5px;
  resize: none;
  margin-top: 7px;
  display: inline-block;
  word-break: break-word;
  overflow-y: scroll;
  text-align: left;
`;
export const LinkContent = styled.a`
  display: inline-block;
  word-break: break-word;
  color: black;
  opacity: 0.7;
  text-decoration: none;
`;
export const StyleButtonWrapper = styled.div`
  color: #000;
  background: #f5f5f5;
  .ant-select-arrow {
    display: none;
  }
  .ant-select-selector {
    background: #f5f5f5 !important;
    color: #000;
    border-color: #adadad;
    font-family: "Roboto", sans-serif !important;
    font-weight: 400 !important;
    font-size: 17px;
    line-height: 1.2 !important;
    padding: 10px 25px !important;
    cursor: pointer !important;
    transition: background-color 0.5s !important;
    height: auto !important;
  }
`;

export const EditImage = styled.div`
  text-decoration: none;
  font-size: 14px;
  display: inline;
  text-align: center;
  cursor: pointer;
  color: rgb(0, 0, 238);
`;

export const Paragraph = styled.p`
  width: 100%;
  min-height: 20px;
  ${({ isHeading }) =>
    !isHeading
      ? "font-size:14px;font-weight:400"
      : "font-size:16px;font-weight:600;margin:8px 0px 2px 6px !important"};
`;
export const ViewCount = styled.div`
  strong {
    display: inline-block;
    font-size: 28px;
    line-height: 0.7;
    color: #000;
    padding-top: 10px;
  }
  p {
    margin: 0px 0px 10px 0px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
  }
`;
// export const ButtonsMainWrapper = styled.div`
// `
export const CopyButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;
  p {
    text-align: right;
    font-size: 13px;
    margin-bottom: 5px;
    line-height: 1.38;
  }
  span {
    font-weight: 600;
    font-size: 13px;
    line-height: 1.38;
  }
  button {
    color: ${({ textColor }) => textColor || "black"};
    font-size: 14px;
    border-radius: 3px;
    background: ${({ btnColor }) => btnColor || "black"};
    width: 90px;
    padding: 8px 25px;
    border: 3px solid transparent;
    opacity: 0.9;
    margin-left: 15px;
    cursor: pointer;
  }
`;
