import styled from "styled-components";

export const BodyWrapper = styled.div`
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
    padding-right: 10px;
  }
  img {
    width: 27px;
    padding: 17px 18px 17px 0;
  }
  .button {
    font-size: 1rem;
    padding: 9px 20px;
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
    font-size: 24px;

    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-color: #1d2e88;
    width: 100%;

    background: unset;
  }
  input:focus-visible {
    outline: unset;
  }
`;

export const SubTaskSection = styled.div`
  margin: 0 5%;
  .div {
    margin: 0 5%;
  }
`;

export const AddSubTask = styled.div`
  margin: 0 5%;
  .button {
    font-size: 1rem;
    padding: 9px 20px;
  }
`;
export const ShortContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 80px;
  /* background: #ffffff; */
  /* border: 1px solid #e9e9e9; */
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  padding: 8px 6px 6px 13px;
`;
export const ShortBy = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
`;
export const SortWrapper = styled.div`
  z-index: 1;
  position: absolute;
  background: #fff;
  box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.09);
  border-radius: 10px;

  width: 211px;
  text-align: left;
  right: 10px;
  top: 40px;
  padding: 20px 10px 0 26px;
`;
export const SortText = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;
export const SortTextDiv = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  color: #1d2e88;
`;
