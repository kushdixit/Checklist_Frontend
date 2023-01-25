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
  padding: 50px;
  min-width: 620px;
`;
export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const LeftContentWrapper = styled.div``;
export const RightCardWrapper = styled.div`
  border: 1px solid #eee;
  background: #ffffff;
  padding: 30px;
`;
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
  .app-input-text {
    width: 100%;
  }
  :hover {
    background-color: #f8f8f8;
  }
`;
export const TaskFormSubWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
`;
