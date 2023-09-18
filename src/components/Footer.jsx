import React from "react";
import { Section, FirstSection, SubSection } from "styles/components/Footer";
import { colors } from "constants/color";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const style = {
    backgroundColor: colors.backgroundColor,
    color: colors.primaryColor,
  };

  const navigate = useNavigate();

  return (
    <Section>
      <SubSection>
        <FirstSection>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/explore")}
          >
            {" "}
            Explore |{" "}
          </span>
          Free Checklist Library | Company | Privacy | Term
        </FirstSection>
      </SubSection>
    </Section>
  );
};

export default Footer;
