import styled from "styled-components";
export const FirstSection = styled.div`
  display: flex;
  grid-gap: 37px;
  width: 100%;
  margin: 0 0 0 10px;
  flex-wrap: wrap;
  justify-content: left;
  @media (max-width: 1012px) {
    justify-content: center;
  }
  @media (max-width: 1722px) {
    justify-content: center;
  }
`;

export const WrapSubSectionNew = styled.div`
  h3 {
    margin: 0;
    padding: 0;
    color: #8d8e9b;
    font-size: 14px;
    font-weight: 400;
  }
`;

export const CardSection = styled.div`
  @media (max-width: 990px) {
    width: 100%;
    max-width: 630px;
  }
  @media (max-width: 658px) {
    width: 100%;
    max-width: 343px;
  }
  @media (max-width: 375px) {
    width: 100%;
    max-width: 280px;
  }
  h4 {
    padding-bottom: 14px;
    @media (max-width: 990px) {
      /* justify-content: center;
      align-items: center;
      padding: 20px 0; */
    }
  }
`;
export const CheckliCardSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 938px;
  gap: 28px;
  @media (max-width: 990px) {
    justify-content: center;
  }
`;
export const Name = styled.div`
  display: flex;
  color: #777;
  font-size: 12px;
  line-height: 35px;
  font-weight: 400;
  width: 100%;
  gap: 10px;
  img {
    width: 34px !important;
    border-radius: 30px !important;
    border: 2px solid #e8e8e8 !important;
  }
`;
export const WrapSection = styled.div``;

export const ProgressSection = styled.div`
  padding: 20px 5px;
  width: 100%;
  text-align: left;
  img {
    border-radius: 0 !important;
    width: 215px;
  }
  @media (max-width: 1196px) {
    img {
      width: 160px;
    }
  }
  @media (max-width: 990px) {
    img {
      width: 466px;
    }
  }
  @media (max-width: 658px) {
    img {
      width: 300px;
    }
  }
  @media (max-width: 375px) {
    img {
      width: 174px;
    }
  }
`;
export const CardMainSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1735px;
  margin: 0 auto;
`;

export const Section = styled.div``;
export const Morecontent = styled.div`
  position: absolute;
  justify-content: center;
  top: 78px;
  right: 12px;
  box-shadow: rgb(163 183 223) 0px 0px 3px;
  border-radius: 10px;
  padding: 13px 11px;
  background: #fff;
  width: 100%;
  max-width: 307px;
  h5 {
    padding: 0;
    margin: 4px 0;
  }
`;
export const IconInputField = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  display: flex;
  .app-input-text {
    width: 100%;
  }
  input {
    font-size: 14px;
    padding: 14px 54.5px;
    border: 1px solid #c9c9c9;
    background: unset;
    border-radius: 20px;
    ::placeholder {
      font-size: 16px;
      color: #9d9d9d;
    }
    :-ms-input-placeholder {
      font-size: 16px;
      color: #9d9d9d;
    }
    ::-ms-input-placeholder {
      font-size: 16px;
      color: #9d9d9d;
    }
    :focus-visible {
      outline: unset;
    }
  }
`;
export const NewSection = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: auto;
  cursor: pointer;
`;

export const SelectFieldSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 18px 10px 0 11px;
  .app-input-text {
    width: 100%;
    max-width: 281px;
  }
`;

export const ButtonSection = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 13px;
  .button {
    padding: 7px 15px;
  }
`;
export const Footer = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  padding-right: 10px;
  .button {
    position: relative;
    padding: 17px;
    border-radius: 30px;
    height: 43px;
    font-weight: 600;
  }
`;
export const SubSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-shadow: rgb(163 183 223) 0px 0px 3px;
  border-radius: 10px 10px 0px 0px;
  height: 100%;
  max-width: 313px;
  border-bottom: 2px solid transparent;
  border-image: ${({ Progress }) =>
    `linear-gradient(90deg, #28a744 ${Progress}%, #fff ${Progress}%)`};
  border-image-slice: 1;
  width: 100%;
  @media (max-width: 723px) {
    width: 100%;
  }
`;
export const SubSectionNew = styled.div`
  margin: 0 auto;
  font-weight: 700;
  width: 100%;
  max-width: 1735px;
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
  h2 {
    padding-left: 10px;
    justify-content: left;
    display: flex;
    @media (max-width: 1722px) {
      padding: 0 30px;
      font-size: 1.6rem;
      display: flex;
      justify-content: center;
    }
  }
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
  }
`;
export const Image = styled.div`
  -webkit-align-items: center;
  -webkit-box-align: start;
  -ms-flex-align: center;
  align-items: start;
  vertical-align: middle;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  /* -webkit-box-pack: center; */
  /* -webkit-justify-content: center; */
  -ms-flex-pack: center;
  /* justify-content: center; */
  padding-top: 7px;
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
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  /* -webkit-align-items: center; */
  /* -webkit-box-align: center; */
  -ms-flex-align: center;
  /* align-items: center; */
  cursor: pointer;
  padding: 22px 7px 22px 0;
  height: 100%;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
`;

export const ColonImage = styled.div`
  margin-left: 5px;
  ${({ type }) =>
    type === "checklist"
      ? `
     
`
      : `  `}
`;
export const Abc = styled.div`
  padding-right: 20px;
`;

export const CompleteSection = styled.div`
  height: 25px;
`;
export const WrapSubSection = styled.div`
  /* vertical-align: middle;
  align-items: center;
  justify-content: center;
  /* text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
  white-space: nowrap; */
  h2 {
    margin: 0;
    padding: 0;
    font-weight: 600;
    font-size: 17px;
    /* text-overflow: ellipsis;
    width: 100%;
    max-width: 131px;
    overflow: hidden; */
  }
  h3 {
    color: #505050;
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-size: 13px;
  }
`;
export const EmptyMessage = styled.div`
  justify-content: flex-start;
  padding-left: 1rem;
`;
export const Small = styled.div`
  display: inline-block;
  font-size: 13px;
  color: #aeb2b4;
  margin-left: 5px;
  text-align: left;
  width: 100%;
`;

export const ImageSection = styled.div`
  background: #fff;
  border: 1px solid #eee;
  /* padding: 0px 0px 0 0px; */
  margin-bottom: 10px;
  border-radius: 15px;
  width: 100%;
  max-width: 286px;
  @media (max-width: 1276px) {
    width: 100%;
    max-width: 264px;
  }
  @media (max-width: 1196px) {
    width: 100%;
    max-width: 209px;
  }
  @media (max-width: 990px) {
    width: 100%;
    max-width: 630px;
  }
  @media (max-width: 658px) {
    width: 100%;
    max-width: 345px;
  }
  @media (max-width: 375px) {
    width: 100%;
    max-width: 280px;
  }
  h4 {
    display: block;
    overflow: hidden;
    display: flex;
    width: 231px;
    margin: 0;
    text-align: left;
    color: #000;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    margin: 5px;
    padding-top: 10px;
    transition: color 0.5s;
    padding-bottom: 10px;
  }
`;

export const ProcessSection = styled.div`
  background: #fff;
  /* border: 1px solid #eee; */
  border-radius: 26px 15px 0 0;
  width: 100%;
  max-width: 286px;
  height: auto;
  border-bottom: none;
  img {
    width: 286px;
    height: auto;
    border-radius: 12px 14px 0 0;
  }
  @media (max-width: 1276px) {
    width: 100%;
    max-width: 264px;
  }
  @media (max-width: 1276px) {
    img {
      width: 264px;
      height: auto;
    }
  }
  @media (max-width: 1196px) {
    width: 100%;
    max-width: 209px;
  }
  @media (max-width: 1196px) {
    img {
      width: 209px;
      height: auto;
    }
  }
  @media (max-width: 990px) {
    width: 100%;
    max-width: 630px;
  }
  @media (max-width: 990px) {
    img {
      width: 630px;
      height: auto;
    }
  }
  @media (max-width: 658px) {
    img {
      width: 345px;
    }
  }
  @media (max-width: 375px) {
    img {
      width: 280px;
    }
  }
`;
export const HeaderSection = styled.div`
  padding: 0 10px 35px 10px;
  h4 {
    display: block;
    overflow: hidden;
    display: flex;
    width: 100%;

    text-align: left;
    align-items: flex-start;
    color: #000;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    margin: 5px;

    transition: color 0.5s;

    padding: 10px 10px 10px 0 !important;
    @media (max-width: 990px) {
      justify-content: center;
      font-weight: 400;
      font-size: 24px;
      width: 100%;
    }
    @media (max-width: 1196px) {
      font-size: 20px;
    }
  }
  /* img {
    width: 260px;
  } */
  @media (max-width: 990px) {
    justify-content: center;
    h4 {
      font-weight: 400;
      font-size: 24px;
      width: 100%;
    }
  }
`;
