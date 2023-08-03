import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  h5 {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.57;
    color: #666;
    margin: 24px 0 3px 0;
  }
`;

export const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  gap: 20px;
  height: 658px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const IconInputField = styled.div`
  width: 100%;
  input {
    text-align: left;
    font-size: 18px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 9px 15px 9px 15px;
    width: 100%;

    background: unset;
    @media (max-width: 462px) {
      font-size: 18px;
    }
    ::placeholder {
      padding-left: 10px;
      text-align: center;
      color: #999;
    }
  }

  input:focus-visible {
    outline: unset;
  }
  .checklistDescription {
    width: 100%;
    margin-right: 4.5rem;
    font-weight: 500;
    font-size: 24px !important;
    background: rgba(239, 239, 239, 0.3);
    border-color: rgba(118, 118, 118, 0.3);
    color: #000;
  }
`;

export const Container = styled.div`
  justify-content: center;
  width: 100%;
  display: flex;
`;

export const SecondHeading = styled.div`
  color: #aaa;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  margin-bottom: 44px;
  cursor: pointer;
`;
export const TagSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 63px;
  flex-wrap: wrap;
  @media (max-width: 862px) {
    gap: 0;
    input {
      max-width: 349px;
    }
    @media (max-width: 799px) {
      input {
        max-width: 349px;
      }
    }
  }
`;
export const SectionOne = styled.div`
  justify-content: center;
  width: 100%;
  display: flex;
  font-weight: 600;
  margin-top: 20px;
`;

export const DataWrapper = styled.div`
  justify-content: center;
  width: 100%;
`;
export const Heading = styled.div`
  display: flex;
  justify-content: center;
  font-size: 29px;
  font-weight: 400;
  text-align: center;
`;
export const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
  width: 100%;
  max-width: 400px;
`;

export const StatusBucketCards = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  flex-wrap: wrap;
  border-radius: 21px 21px 0 0;
  color: #fff;
  -webkit-transition: -webkit-transform 0.2s;
  -webkit-transition: transform 0.2s;
  transition: transform 0.2s;
  justify-content: center;
  margin-bottom: 100px;
  img {
    width: 393px;
    height: auto;
    display: flex;
    gap: 30px;
  }
`;
