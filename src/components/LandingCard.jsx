import React, { useEffect, useState } from "react";
import {
    SubSection,
    Image,
    Wrap,
    Heading,
    SubHeading,
 
} from "styles/components/LandingCard";

import SecondCopy from "assets/SVG/SecondCopy";

const LandingCard = () => {
const [cardText, setCardText] = useState([
    {
    
      img:  <SecondCopy />,
      subTextA: "  1. Create or copy a process",
      subTextC: "   Create or copy a process template. Add step-by-step tasks and task descriptions to make sure work gets done the right way, every time.",
    },
    {
        img:  <SecondCopy />,
        subTextA: "  2. Share with team member",
        subTextC: " Team members don't want to login to more software. Jus share a private link to any process so they can submit it over and over.",
      },
    {
        img:  <SecondCopy/>,
        subTextA: "  3. Track your process",
        subTextC: "  When a team member completes a business process you'll get notified so you make sure recurring work gets done right..",
      },
   
   

  
  ]);


  return (
    <>
    {cardText.map((item, index) => {
      return (
    <SubSection key={index}>
         <Wrap>
             
              <ul>
                <li className="textA">{item?.img}</li>
                <li className="textB">{item.subTextA}</li>
                <li className="textC">{item.subTextC}</li>
              
              </ul>

           
            </Wrap>

  
  </SubSection>
  
      );
    })}
      </>
);
};


export default LandingCard;
