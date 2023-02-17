import styled from "styled-components";

export const SubSection = styled.div`
  width: 33.33333333%;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
`;

export const Image = styled.div`
  align-items: center;
  vertical-align: middle;
  display: flex;

  justify-content: center;
  padding: 10px 0;
  svg {
    width: 60px;
  }
  img {
    height: 90px;
    width: 90px;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
  }
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
  }
`;

export const Heading = styled.div`
  font-size: 20px;
  line-height: 31px;
  font-weight: 700;
  padding: 10px 0;
`;

export const SubHeading = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 13px;
`;
