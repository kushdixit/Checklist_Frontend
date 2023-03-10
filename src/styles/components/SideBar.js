import styled from "styled-components";

export const LandingContainer = styled.div`
  width: ${({ width }) => width || "45px"};

  max-width: 249px;
  border-right: 1px solid #eee;
  background: #fff;
  @media (max-width: 1010px) {
    width: 100%;
    max-width: 160px;
  }
`;
// export const LandingContainer = styled.div`
//   width: ${({ width }) => width || "180px"};

//   border-right: 1px solid #eee;
//   background: #fff;
//   @media (max-width: 1010px) {
//     width: 100%;
//     max-width: 160px;
//   } font-weight: ${({ width }) => width || 400};
// `;
export const LeftContainer = styled.div`
  /* width: 100%;
  max-width: 249px;
  background-color: #fff;

  border-right: 1px solid #eee;
  height: 100vh; */
  /* padding: 0 20px; */
  width: 100%;
  max-width: 249px;
  background-color: #fff;

  border-right: 1px solid #eee;
  height: 100vh;
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
export const First = styled.div`
  display: flex;

  padding: ${({ padding }) => padding || "40px 0 40px 0;"};
  width: 100%;
  max-width: 210px;

  img {
    width: 15px;
    height: 15px;
  }
  .button {
    background: #f1f3f5;
    padding: 16px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    width: 15px;
    height: 15px;
    justify-content: center;
  }
`;
export const Second = styled.div`
  border-radius: 64px;

  display: flex;
  padding: ${({ padding }) => padding || "8px 17px;"};
`;
export const Third = styled.div`
  display: flex;

  color: #000;
  padding: ${({ padding }) => padding || "8px 0 8px 17px;"};
  font-size: 15px;
  align-items: center;
  gap: 13px;
  img {
    width: 15px;
    height: 15px;
  }
`;

export const Fourth = styled.div`
  display: flex;

  color: #000;
  padding: ${({ padding }) => padding || "8px 0 8px 17px;"};
  font-size: 15px;
  align-items: center;
  gap: 13px;
  img {
    width: 15px;
    height: 15px;
  }
`;
export const Fifth = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  padding: ${({ padding }) => padding || "8px 0 8px 17px;"};
  font-size: 15px;
  align-items: center;
  gap: 13px;

  img {
    width: 15px;
    height: 15px;
  }
`;
export const Sixth = styled.div`
  display: flex;
  align-items: center;

  gap: 13px;
  border-bottom: 1px solid #dddddd;
  padding: 10px 0;
`;
export const Seventh = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  padding: ${({ padding }) => padding || "11px 0 11px 17px;"};
  font-size: 0;
  gap: 13px;

  img {
    width: 15px;
    height: 15px;
  }
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
