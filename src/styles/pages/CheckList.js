import styled from "styled-components";

export const BodyContainer = styled.div`
  width: 100%;
  form {
    display: flex;
    padding: 0 10px;
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
  /* @media (max-width: 1722px) {
    padding: 0 1rem;
  } */
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
  > div.checkbox-field {
    background-color: grey;
    padding-left: 20px;
    margin-bottom: 10px;
  }
  input[type="checkbox"] {
    width: 24px; /*Desired width*/
    height: 24px; /*Desired height*/
  }
  .checkbox-field {
    margin-top: 6px;
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
  /* form {
    padding: 0rem 3rem;
  } */
`;
