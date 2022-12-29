import styled from "styled-components";

export const SubSection = styled.div`
  align-items: center;
  width: 100%;
  box-shadow: rgb(163 183 223) 0px 0px 3px;
  border-radius: 10px;
  height: auto;
  max-width: 313px;
  padding: 20px 0px;
  @media (max-width: 723px) {
    width: 100%;
  }
`;

export const Image = styled.div`
  align-items: center;
  vertical-align: middle;
  display: flex;

  justify-content: center;

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
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 13px;
`;

export const Heading = styled.div`
  font-size: 20px;
  line-height: 31px;
  font-weight: 700;
`;

export const SubHeading = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 13px;
`;
