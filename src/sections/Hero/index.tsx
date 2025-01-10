import React from "react";
import crystalFortressLogo from "../../assets/crystal-fortress-logo.png";
import Section from "../../components/Section";

const Hero: React.FC = () => {
  return (
    <Section>
      <img
        alt="Crystal Fortress Logo"
        src={crystalFortressLogo}
        style={{
          maxWidth: "700px",
          width: "100%",
          margin: "auto",
          display: "block",
        }}
      />
    </Section>
  );
};

export default Hero;
