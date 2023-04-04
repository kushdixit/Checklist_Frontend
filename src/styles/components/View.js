import styled from "styled-components";

export const LandingContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const RightContainer = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fbfbfb;
  padding-top: 36px;
  margin-left: 15px;
  margin-right: 15px;
`;

export const WrapperSection = styled.div`
  width: 100%;
  /* position: relative; */
  background: #fff;
  border: 1px solid #eee;
  max-width: 1095px;
  margin-top: 22px;
  /* @media (max-width: 1010px) {
    padding: 82px 50px;
  } */
`;

export const LeftContentWrapper = styled.div`
  min-height: 1294px;
  padding: 90px;
`;

export const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 22px;
`;
export const Date = styled.h3`
  font-size: 16px;
  color: #999;
  font-family: "Roboto", sans-serif;
  line-height: 31px;
`;
export const Helpers = styled.div`
  /* position: absolute;
  top: -55px; */
  width: 100%;
  max-width: 1089px;
  display: flex;
  justify-content: end;
  margin: 54px 0 0 0;
`;
export const ShareButton = styled.button`
  color: #5b5757;
  font-size: 13px;
  padding: 10px 15px;
  min-width: max-content;
  background-color: white;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: 1.2;
`;
