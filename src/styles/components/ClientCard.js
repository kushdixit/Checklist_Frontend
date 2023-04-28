import styled from "styled-components";

export const FirstSection = styled.div`
  grid-gap: 20px;
  width: 100%;
  margin: 0 0 0 10px;
  display: grid;
  column-gap: 50px;
  grid-template-columns: auto auto auto;
  padding: 10px;
  @media (max-width: 1198px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 1012px) {
    justify-content: center;
  }
  @media (max-width: 1722px) {
    justify-content: center;
  }
  @media (max-width: 790px) {
    grid-gap: 23px;
  }
  @media (max-width: 680px) {
    grid-template-columns: auto;
  }
`;

export const ProgressSection = styled.div`
  padding: 2px 5px;
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
  width: 20rem;
  margin: 2em auto;
  padding: 2em;
  background-color: white;
  border-radius: 0.5em;
  box-shadow: rgba(36, 37, 38, 0.08) 0px 6px 15px 0px;
  border: 1px solid rgb(238, 238, 238);
  @media (max-width: 1400px) {
    width: 17rem;
  }
  @media (max-width: 1198px) {
    width: 20rem;
  }
  @media (max-width: 900px) {
    width: 30vw;
  }
  @media (max-width: 680px) {
    width: 55vw;
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

export const HeaderSection = styled.div`
  text-align: left;
`;
