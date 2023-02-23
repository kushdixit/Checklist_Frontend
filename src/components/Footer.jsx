import React from "react";
import {
  Section,
  FirstSection,
  SecondSection,
  SubSection,
} from "styles/components/Footer";

const Footer = () => {
  return (
    <Section>
      <SubSection>
        <FirstSection>
          Free Checklist Library | Pricing | Download the iOS App
        </FirstSection>
        <FirstSection> Blog | Company | Privacy | Term</FirstSection>
        <SecondSection> &copy; checkli, LLC 2023</SecondSection>
      </SubSection>
    </Section>
  );
};

export default Footer;
