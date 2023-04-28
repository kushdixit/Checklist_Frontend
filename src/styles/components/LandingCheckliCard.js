import styled from "styled-components";

export const Name = styled.div`
  display: flex;
  color: #777;
  font-size: 12px;
  line-height: 35px;
  font-weight: 400;
  width: 100%;
  gap: 3px;
  img {
    width: 34px !important;
    border-radius: 30px !important;
    border: 2px solid #e8e8e8 !important;
  }
`;

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
      width: 364px;
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

export const NewSection = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: auto;
  cursor: pointer;
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
  box-shadow: 0 6px 15px 0 rgba(36, 37, 38, 0.08);
  margin-bottom: 10px;
  border-radius: 15px;
  width: 100%;
  max-width: 380px;
  @media (max-width: 1276px) {
    width: 100%;
    max-width: 380px;
  }
  @media (max-width: 1198px) {
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
  max-width: 380px;
  height: auto;
  border-bottom: none;
  img {
    width: 380px;
    height: auto;
    border-radius: 12px 14px 0 0;
  }
  @media (max-width: 1298px) {
    width: 100%;
    max-width: 320px;
  }
  @media (max-width: 1296px) {
    img {
      width: 320px;
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
    max-width: 500px;
  }
  @media (max-width: 990px) {
    img {
      width: 500px;
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
    width: 231px;
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
  @media (max-width: 990px) {
    justify-content: center;
    h4 {
      font-weight: 400;
      font-size: 24px;
      width: 100%;
    }
  }
`;

export const Text = styled.div`
  display: block;
  overflow: hidden;
  display: flex;
  text-align: left;
  align-items: flex-start;
  color: #000;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  margin: 5px;
  transition: color 0.5s;
  width: 100%;
  max-width: 289px;
  @media (max-width: 990px) {
    justify-content: center;
    font-weight: 400;
    font-size: 24px;
    width: 100%;
  }
  @media (max-width: 1196px) {
    font-size: 14px;
    width: 100%;
  }
  @media (max-width: 990px) {
    justify-content: center;
    font-size: 20px;
    h4 {
      font-weight: 400;
      font-size: 24px;
      width: 100%;
    }
  }
`;
