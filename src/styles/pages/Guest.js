import styled from "styled-components";

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
`;
export const CenterSection = styled.div`
  border: 1px solid #eee;
  background: #ffffff;
  padding: 90px 37px;
  width: 66.66%;
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
export const LeftSection = styled.div`
  border: 1px solid #eee;
  background: #ffffff;
  padding: 90px 37px;
  max-width: 900px;
  width: 100%;
  @media (min-width: 1300px) {
    max-width: 835px;
  }
  @media (max-width: 767px) {
    padding-bottom: 50px;
  }
`;