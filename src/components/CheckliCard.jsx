import React, { useEffect, useState } from "react";
import ProcessOne from "assets/images/Process-One.png"
import ProcessTwo from "assets/images/Process-Two.png"
import ProcessThree from "assets/images/Process-Three.png"
import ProcessFour from "assets/images/Process-Four.png"
import ProcessFifth from "assets/images/Process-Fifth.png"
import { useDispatch, useSelector } from "react-redux";
import FourthImage from "assets/images/firstimage.jpg";
import Tick from "assets/images/tick.jpg";
import ChecklistImage from "assets/images/checklist-image.png";
import {

  NewSection,
 
  ImageSection,
  HeaderSection,
  Small,
  ProgressSection,
  Name
} from "styles/components/CheckliCard";


const CheckliCard = ({ item }) => {
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
  
      <NewSection>
       
        <ImageSection>
        <img src={ProcessOne} alt="ProcessOne" />
        <HeaderSection>
        <h4>Digital Marketing Assistant Daily, Weekly, Monthly Checklist</h4>
        <Small>23,293 Views</Small>
        <ProgressSection>
        <img src={ChecklistImage} alt="ChecklistImage" />
        </ProgressSection>
        <Name>
        <img src={Tick} alt="tick" />
        Offically Checkli
        </Name>
        </HeaderSection>
        </ImageSection>
     
     </NewSection>
  );
})}
</>
);
};

export default CheckliCard;
