import styled from "styled-components";

export const BodyContainer = styled.div`
  padding: 30px 0;
  background: #fff;
`;

export const Title = styled.div`
  background: #fff;
`;

export const Section = styled.div`
  background: #f5f5f5;
`;

export const TitleSection = styled.div`
  color: #1d2e88;
  margin: 0.5% 5%;
  padding: 18px 0;
  h3 {
    padding: 10px 0 13px 0;
    margin: 0;
    font-size: 24px;
    font-weight: 600;
  }
  h4 {
    padding: 0 0;
    margin: 0;
    font-size: 20px;
    font-weight: 500;
  }
`;
export const TaskSection = styled.div`
  background: #fff;
`;

export const MainTaskSection = styled.div`
  margin: 0.5% 5%;
  padding: 20px 0;
  display: flex;
  svg {
    cursor: pointer;
  }
  img {
    width: 27px;
    padding: 17px 18px 17px 0;
  }
`;

export const TaskIconImage = styled.div`
  width: 30px;
`;
export const IconInputField = styled.div`
  width: 100%;
  padding: 0 12px;
  input {
    text-align: left;
    font-size: 14px;
    padding: 8px 0;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-color: #1d2e88;
    width: 100%;

    background: unset;
  }
`;

export const SubTaskSection = styled.div`
  margin: 0 5%;
`;
