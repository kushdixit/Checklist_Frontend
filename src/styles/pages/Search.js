import styled from "styled-components";

export const SearchWrapper = styled.div`
  margin-top: 35px;
  padding: 40px 0px;
  margin: 0px 55px;
  .button {
    color: #777;
    font-size: 14px;
    border: 1px solid #ddd;
    background-color: #fff;
    border-radius: 17px;
    padding: 8px 15px;
    margin: 20px 0 30px;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;

export const SearchText = styled.h3`
  font-size: 18px;
  font-weight: 400 !important;
  text-align: left;
  font-family: "Roboto", sans-serif;
  padding-left: 10px;
  margin-left: 0px !important;
  display: flex !important;
  align-items: start !important;
`;
export const SearchCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 80%;
`;
