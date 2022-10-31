import styled from "styled-components";

export const BodyContainer = styled.div`
  width: 100%;
  form {
    display: flex;
    padding-left: 20px;
  }
`;
export const FormBody = styled.div`
  padding-top: 29px;
  padding-bottom: 29px;
  width: 100%;
  display: flex;
  background: #fff;
  > div {
    width: 100%;
  }
`;
export const AddTask = styled.div`
  form {
    display: flex;
    padding-left: 15px;
  }
`;
export const AddBtn = styled.div`
  display: flex;
  padding-left: 20px;
`;
export const TaskList = styled.div`
  text-align: left;
  padding-left: 20px;
  padding-right: 20px;
  > div.checkbox-field {
    background-color: grey;
    padding-left: 20px;
    margin-bottom: 10px;
  }
  .checkbox-container {
    font-size: 22px;
    font-family: "poppinsSemibold";
    span {
      height: 30px !important;
      width: 30px !important;
    }
  }
  .checkMark:after {
    width: 13px !important;
    height: 17px !important;
  }
`;
