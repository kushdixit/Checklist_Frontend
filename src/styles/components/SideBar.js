import styled from "styled-components";

export const LandingContainer = styled.div`
  width: 100%;
  display: flex;
`;
export const LeftContainer = styled.div`
  width: 100%;
  max-width: 189px;
  background-color: #fff;

  border-right: 1px solid #eee;
  height: 100vh;
  padding: 0 20px;
`;
export const RightContainer = styled.div`
  width: 100%;
  /* max-width: 1592px; */
  text-align: center;
  display: flex;
  justify-content: center;
  background: #fbfbfb;
  padding-top: 36px;
`;
export const First = styled.div``;
export const Second = styled.div`
  border-radius: 64px;

  display: flex;

  margin: 5px 0;
  padding: 6px;
`;
export const Third = styled.div`
  display: flex;

  color: #000;
  padding: 5px 2px;
  font-size: 15px;
`;

export const Fourth = styled.div`
  display: flex;

  color: #000;
  padding: 5px 2px;
  font-size: 15px;
`;
export const Fifth = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  padding: 5px 2px;
  font-size: 15px;
`;
export const FirstSection = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  padding: 5px 2px;
  font-size: 32px;
  font-weight: 600;
`;
export const SecondSection = styled.div`
  display: flex;
  align-items: center;
  color: #000;

  padding: 0;
  font-size: 16px;
`;

export const ThirdSection = styled.div`
  display: flex;
  width: 100%;
  padding-top: 10px;
  ul {
    text-decoration: none;
    list-style: none;
    display: flex;
    padding: 0 0 10px 0;
    margin: 0;
    width: 100%;
    color: #000;
    font-size: 16px;
    font-weight: 600;
    /* border-top: 1px solid #aaa; */
    border-bottom: 1px solid #aaa;
  }
  li {
    padding: 20px 35px 0 0;
    text-decoration: none;
    list-style: none;
    display: flex;

    :nth-child(1) {
      padding-right: 50px;
      width: 100%;
      max-width: 697px;
    }
    :nth-child(2) {
      padding-right: 50px;
    }
  }
`;

export const FourthSection = styled.div`
  display: flex;
  width: 100%;
  ul {
    text-decoration: none;
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    width: 100%;
    color: #000;
    font-size: 16px;
    font-weight: 600;
    border-bottom: 1px solid #aaa;
  }
  li {
    padding: 20px 35px 0 0;
    text-decoration: none;
    list-style: none;
    display: flex;
    :nth-child(1) {
      gap: 13px;
      display: flex;
      color: #007ccb;
      font-weight: 400;
      width: 100%;
      max-width: 611px;
      svg {
        width: 24px;
      }
    }
    :nth-child(2) {
      gap: 13px;
      display: flex;
      color: #007ccb;
      font-weight: 400;

      justify-content: center;
      img {
        width: 20px;
        height: 20px;
        color: #000;
        border: 1px solid #ddd;
        background: #f5f5f5;
        padding: 8px;
      }
    }
    :nth-child(3) {
      gap: 13px;
      display: flex;
      color: #007ccb;
      font-weight: 400;
      width: 100%;
      max-width: 92px;
      justify-content: center;

      img {
        width: 20px;
        height: 20px;
        color: #000;
        border: 1px solid #ddd;
        background: #f5f5f5;
        padding: 8px;
      }
    }
    :nth-child(4) {
      gap: 13px;
      display: flex;
      color: #007ccb;
      font-weight: 400;
      padding-top: 0;
      justify-content: center;
      align-items: center;

      img {
        width: 32px;
        height: 32px;
      }
    }
  }
`;
export const WrapperSection = styled.div`
  width: 100%;

  background: #fff;
  border: 1px solid #eee;
  max-width: 924px;
  padding: 82px 100px;
`;
