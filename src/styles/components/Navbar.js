import styled from "styled-components";
export const NavSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1735px;
`;
export const FirstSection = styled.div`
  width: 100%;
  max-width: 400px;

  h1 {
    margin: 0;
    color: #1d2e88;
  }
`;
export const SecondSection = styled.div`
  position: relative;
  display: flex;
  gap: 55px;
  width: 100%;
  max-width: 1332px;
  flex-wrap: wrap;
  justify-content: right;
`;
export const HeadingText = styled.div`
  font-size: 3vw;
  color: #1d2e88;
  padding-left: 10px;
  font-weight: 700;
`;

export const SecondSubSection = styled.div`
  display: flex;

  img {
    width: 42px;
    height: 42px;
    border-radius: 25px;
  }
  .button {
    background: unset;
    border: unset;
  }
`;

export const SubNavSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const ImageSubSection = styled.div``;
export const Profile = styled.div`
  h4 {
    margin: 0;
    padding: 0;
    color: #1d2e88;
    font-weight: 600;
    font-size: 16px;
  }
  h5 {
    margin: 0;
    padding: 0;
    color: 000000;
    font-weight: 400;
    font-size: 10px;
  }
  img {
    width: 35px;
    height: 35px;
    border-radius: 25px;
  }
`;
export const Footer = styled.div`
  width: 100%;
  max-width: 156px;
  .button {
    border-radius: 30px;
    height: 43px;
  }
  button {
    width: 100%;
    font-size: 1.125rem;
    font-weight: 600;
    height: 50px;
  }
  button:hover {
    opacity: 0.4;
  }
`;
export const IconInputField = styled.div`
  position: relative;
  width: 100%;
  max-width: 375px;
  input {
    text-align: left;
    font-size: 14px;
    padding: 12px 41.5px;
    border: 1px solid #c9c9c9;
    background: unset;
    width: 100%;
    max-width: 300px;
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
export const Morecontent = styled.div`
  position: absolute;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  top: 60px;
  /* right: 92px; */
  box-shadow: rgb(163 183 223) 0px 0px 3px;
  border-radius: 10px;
  padding: 6px 26px;
  z-index: 100;
  width: 100%;
  max-width: 123px;
  h5 {
    padding: 0;
    margin: 4px 0;
  }
`;
export const ContentItem = styled.div`
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  position: absolute;

  right: 12px;
  top: 9px;
`;
// export const NavBarContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
//   margin: 0 auto;
//   padding: 15px 10px 15px 15px;
//   align-items: center;
//   .right-menu {
//     list-style: none;
//     margin-bottom: 0;
//     display: flex;
//     height: 100%;
//     align-items: center;
//     li {
//       position: relative;
//       top: 0;
//       cursor: pointer;
//       color: #fff;
//       .Icon {
//         transition: all 0.1s ease-in-out;
//       }
//       .Icon:hover {
//         transform: scale(1.16);
//       }
//     }
//     .profileSection {
//       img {
//         transition: all 0.1s ease-in-out;
//       }
//       img:hover {
//         transform: scale(1.16);
//       }
//     }
//   }
//   .notiFicationBell {
//     cursor: no-drop !important;
//   }
//   .li-wrapper {
//     margin: 0 15px;
//     position: relative;
//     padding-bottom: 10px;
//   }

//   .Icon {
//     background: #393939;
//     width: 50px;
//     height: 40px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border-radius: 5px;
//     box-shadow: 0px 3px 6px #00000029;
//   }

//   .profileSection {
//     position: relative;
//     display: inline-block;
//     cursor: pointer;
//     padding-bottom: 6px;
//     margin: 0 0 0 12px;
//   }
//   .profileImage {
//     border-radius: 50%;
//   }

//   .addContentDropdownSub {
//     display: inline-block;
//     cursor: pointer;
//     display: flex;
//     align-items: left;
//     font-size: 14px;
//   }
//   .dropdown-content {
//     display: none;
//     position: absolute;
//     top: 65px;
//     right: 10px;
//     min-width: 160px;
//     color: #ffffff;
//     background: #393939;
//     box-shadow: 0px 3px 6px #00000029;
//     border-radius: 8px;
//     z-index: 99;
//     border-bottom: 1px solid #fff;
//   }

//   .addDropdown-content {
//     display: none;
//     position: absolute;
//     right: 0;
//     min-width: 146px;
//     color: #ffffff;
//     top: 50px;
//     background: #393939;
//     box-shadow: 0px 3px 6px #00000029;
//     border-radius: 16px;
//     font-size: 14px;
//     z-index: 5;
//     border-bottom: 1px solid #fff;
//     ul {
//       list-style: none;
//       li {
//         position: relative;
//         top: 0;
//         left: 0;
//       }
//     }
//   }

//   #contacts {
//     position: relative;
//     .sub-menu {
//       display: none;
//     }
//     :hover {
//       .sub-menu {
//         display: block;
//         position: absolute;
//         top: -52px;
//         width: 100%;
//         right: 100%;
//         height: 100%;
//         .DropdownContentSub:hover {
//           opacity: 1;
//         }
//         .addDropdownContent:hover {
//           opacity: 1;
//         }
//       }
//     }
//   }

//   .addDropdown-content-main {
//     display: flex;
//     position: absolute;
//     right: 0;
//     min-width: 160px;
//     color: #ffffff;
//     top: 23px;
//     background: #393939;
//     box-shadow: 0px 3px 6px #00000029;
//     border-radius: 16px;
//     z-index: 1;
//   }

//   .dropdown-content .dropdownContent {
//     color: #ffffff;
//     font-size: 14px;
//     padding: 12px 16px;
//     text-decoration: none;
//     color: #ffffff;
//     display: block;
//     cursor: pointer;
//   }
//   .addDropdown-content .dropdownContentAdd {
//     color: #ffffff;
//     font-size: 14px;
//     padding: 12px 16px;
//     text-decoration: none;
//     color: #ffffff;
//     min-width: 120px;
//     display: block;
//     cursor: pointer;
//   }
//   .addDropdown-content-sub {
//     color: #ffffff;
//     font-size: 14px;
//     padding: 12px 16px;
//     text-decoration: none;
//     color: #ffffff;
//     display: block;
//     cursor: pointer;
//   }
//   .addDropdown-content-main {
//     color: #ffffff;
//     font-size: 14px;
//     padding: 12px 16px;
//     text-decoration: none;
//     color: #ffffff;
//     display: none;
//     cursor: pointer;
//   }
//   .DropdownContentSub {
//     display: inline-flex;
//     border-bottom: 1px solid #fff;
//     width: 195px;
//   }
//   .addDropdownContent {
//     display: inline-flex;
//     border-bottom: 1px solid #fff;
//     width: 200px;
//   }
//   .addDropdownContentSub {
//     display: inline-flex;
//     border-bottom: 1px solid #fff;
//     width: 200px;
//   }
//   .dropdownContentAdd:hover {
//     opacity: 0.3;
//   }
//   .dropdown-content .dropdownContent:hover {
//     background-color: #393939;
//   }

//   .addDropdown-content .addDropdownContent {
//     color: #ffffff;
//     font-size: 14px;
//     text-decoration: none;
//     display: block;
//     cursor: pointer;
//     border-bottom: 1px solid #fff;
//     :last-child {
//       border: none;
//     }
//   }

//   .profileSection :hover .dropdown-content {
//     background-color: #393939;
//     display: block;
//   }
//   .addContentDropdown :hover .addDropdown-content {
//     background-color: #393939;
//     display: block;
//   }
//   .addContentDropdown2 :hover .addDropdown-content2 {
//     background-color: #393939;
//     display: block;
//   }
//   .addContentDropdownSub :hover .addDropdown-content-main {
//     background-color: #393939;
//     display: block;
//   }
//   .addDropdown-content-sub {
//     background-color: #393939;
//     display: block;
//   }
// `;
// export const NavLogo = styled.div`
//   img {
//     position: relative;
//     left: 30px;
//     cursor: pointer;
//   }
// `;

// export const DropImage = styled.div`
//   width: 20px;
//   height: 20px;
//   padding: 6px 22px 6px 16px;
// `;
