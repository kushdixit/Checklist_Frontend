import styled from "styled-components";

export const LandingContainer = styled.div`
  width: 100%;
  display: flex;
  ${({ boxType }) => boxType === "round" && "font-size:14px;font-weight:400"};
  span {
    ${({ boxType }) =>
      boxType === "round" &&
      "color: #131313;font-family: 'Lato', sans-serif;font-style: normal;font-weight: normal;font-size: 14px;line-height: 17px;white-space: nowrap;"};
  }
  input[type="checkbox"] {
    ${({ boxType }) => boxType === "round" && "display: none;"};
  }
  input[type="checkbox"] + span:before {
    ${({ boxType }) =>
      boxType === "round" &&
      "    width: 18px;height: 18px;border: 1.5px solid #f0f0f0;content: '';display: inline-block;margin: 0 16px 0 0;padding: 0;vertical-align: top; border-radius: 50%;"};
  }
  input[type="checkbox"]:checked + span:before {
    ${({ boxType }) =>
      boxType === "round" &&
      "background: #1460c8;border: 1.5px solid #1460c8;box-shadow: inset 0px 0px 0px 1px #fff;color: #333;content: '';text-align: center;border-radius: 50%;"};
  }
  input[type="checkbox"]:focus + span::before {
    ${({ boxType }) => boxType === "round" && "outline: 0;"};
  }
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
  background: #fff;
  border: 1px solid #eee;
  max-width: 1095px;
  margin-top: 22px;
`;

export const LeftContentWrapper = styled.div`
  min-height: 1294px;
  padding: 90px;
  padding-left: 65px;
`;

export const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 22px;
  padding-left: 25px;
`;
export const Date = styled.h3`
  font-size: 16px;
  color: #999;
  font-family: "Roboto", sans-serif;
  line-height: 31px;
`;
export const Helpers = styled.div`
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
