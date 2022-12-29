import React from "react";
import {
    SubSection,
    Image,
    Wrap,
    Heading,
    SubHeading,
 
} from "styles/components/LandingCard";

import DashboardIcon from "assets/SVG/DashboardIcon";


const LandingCard = ({ }) => {
   

  return (
    <SubSection >
    <Wrap>
      <Image>
        <DashboardIcon />
      </Image>
     <Heading>
        1. Create or copy a process
     </Heading>
     <SubHeading>
     Create or copy a process template. Add step-by-step tasks and task descriptions to make sure work gets done the right way, every time.
     </SubHeading>
    </Wrap>
  
  </SubSection>
);
};


export default LandingCard;
