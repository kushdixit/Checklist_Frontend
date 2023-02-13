import React, { useState } from "react";

import styled from "styled-components";
import ProcessOne from "assets/images/Process-One.png"
import ProcessTwo from "assets/images/Process-Two.png"
import ProcessThree from "assets/images/Process-Three.png"
import ProcessFour from "assets/images/Process-Four.png"
import ProcessFifth from "assets/images/Process-Fifth.png"
import { Section } from "styles/pages/Task";
const FeaturedImageCard = ({ setShowProperty }) => {
  const [tick, setTick] = useState(" ");

  const [isDropVisible, setIsDropVisible] = useState(false);
  const [visibleDivIndex, setVisibleDivIndex] = React.useState(0);
  const handleVisibleDiv = (id) => setVisibleDivIndex(id);
  const [infoModal, setInfoModal] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  let [treeDotsModal, setTreeDotsModal] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [getSideToggle, setSideToggle] = useState({
    acquistion: false,
    possession: false,
    service: false,
    construction: false,
    sales: false,
  });

  const dropDownShowHide = () => {
    setTreeDotsModal(!treeDotsModal);
    if (treeDotsModal === false) {
      setIsDropVisible(true);
    } else {
      setIsDropVisible(false);
    }
  };
  const handleClick = (index) => {
    setTick(index);
  };
  const [clickedItems, setClickedItems] = React.useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [cardText, setCardText] = useState([
    {
      img: ProcessOne,
      
    },
    {
        img: ProcessTwo,

    },
    {
        img: ProcessThree,

    },
    {
        img: ProcessOne,

    },
    {
        img: ProcessFour,
        
      },
     
      {
        img: ProcessFifth,
  
      },
      {
        img: ProcessOne,

    },
    {
        img: ProcessFour,
        
      },
     
      {
        img: ProcessFifth,
  
      },
      {
        img: ProcessOne,

    },
    {
        img: ProcessFour,
        
      },
     
      {
        img: ProcessFifth,
  
      },
  ]);

  return (
    <>
      {cardText.map((item, index) => {
        return (
      
            <StatusBucketCards>
                <img src={item.img} />
             
             {/* {item.img} */}

           
            </StatusBucketCards>
          
        );
      })}
    </>
  );
};

export const Morecontent = styled.div``;

export const StatusBucketCards = styled.div`
display: flex;


   
  cursor: pointer;
 flex-wrap:wrap;
  border-radius: 21px 21px 0 0;
  color: #fff;
  -webkit-transition: -webkit-transform 0.2s;
  -webkit-transition: transform 0.2s;
  transition: transform 0.2s;
 
 img{
   width: 393px;
    height: auto;
    display: flex;
    gap: 30px;

 }
`;

export const Preview = styled.div`
  padding: 11px 0;
  border-radius: 0 0 21px 21px;
  background: #fff;
  color: #e45829;
  text-align: center;
  font-family: "poppinsMedium";
  max-width: 247px;
  width: 100%;
  position: absolute;
  bottom: 0;
  box-shadow: 0 0 3px #a3b7df;
  cursor: pointer;
`;
export const BucketDiv = styled.div`
  position: relative;
  max-width: 247px;
  width: 100%;
`;


export default FeaturedImageCard;
