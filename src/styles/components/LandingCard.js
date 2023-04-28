import styled from "styled-components";

export const SubSection = styled.div`
  width: 100%;
  max-width: 380px;
  position: relative;
  height: auto;
  padding-right: 15px;
  padding-left: 15px;
`;

export const Wrap = styled.div`
  align-items: center;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 30px;
  ul {
    list-style: none;
    padding: 0;
    text-align: left;
  }
  ul li {
    list-style: none;
    padding: 5px 0;
  }
  .textB {
    font-size: 20px;
    font-weight: 600;
    background-color: none;
  }
`;
