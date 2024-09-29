import React from "react";
import crystalFortressLogo from "../../assets/crystal-fortress-logo.png";
import Section from "../../components/Section";

const Hero: React.FC = () => {
  return (
    <Section>
      <h1
        style={{
          textAlign: "right",
          fontSize: "1.2rem",
          color: "#3a3a3a",
        }}
      >
        Three Point Studio
      </h1>
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
