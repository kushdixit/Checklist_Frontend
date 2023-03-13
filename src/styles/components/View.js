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
`;

export const WrapperSection = styled.div`
  width: 100%;
  background: #fff;
  border: 1px solid #eee;
  max-width: 924px;
  padding: 90px;
  @media (max-width: 1010px) {
    padding: 82px 50px;
  }
`;

export const LeftContentWrapper = styled.div`
  padding-bottom: 120px;
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
  width: 100%;
  max-width: 924px;
  display: flex;
  justify-content: end;
  margin-bottom: 10px;
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
