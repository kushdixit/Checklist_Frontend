import React from "react";
import { Section, FirstSection, SubSection } from "styles/components/Footer";
import { colors } from "constants/color";
const Footer = () => {
  const style = {
    backgroundColor: colors.backgroundColor,
    color: colors.primaryColor,
  };

  return (
    <Section>
      <SubSection>
        <FirstSection>
          Free Checklist Library | Company | Privacy | Term
        </FirstSection>
      </SubSection>
    </Section>
  );
};

export default Footer;
