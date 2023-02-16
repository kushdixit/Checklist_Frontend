import styled from "styled-components";

export const Section = styled.div`
  /* background: #f5f5f5; */
`;

export const BodyWrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 21.249px;
  background: #fff;
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
  @media (min-width: 768px) {
    /* width: 750px; */
  }
`;
export const LeftSection = styled.div`
  border: 1px solid #eee;
  background: #ffffff;
  padding: 90px;
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
  gap: 30px;
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
  .app-input-text {
    width: 100%;
  }
  .task-form {
    display: flex;
    position: relative;
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
  background-color: ${({ isHovering }) => (isHovering ? "#f8f8f8" : "inherit")};
`;

export const TaskFormSubWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
`;

export const ShareTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ShareSection = styled.div``;

export const LeftContentWrapper = styled.div``;
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
