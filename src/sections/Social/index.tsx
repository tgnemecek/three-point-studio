import React from "react";
import steamLogo from "../../assets/steam-logo.svg";
import Section from "../../components/Section";
import SocialLink from "../../components/SocialLink";

const Social: React.FC = () => {
  return (
    <footer
      style={{
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        color: "white",
        textAlign: "center",
      }}
    >
      <Section backgroundColor="#8fb4ab">
        <h2
          style={{
            margin: "10px 0 20px 0",
            color: "#2d2d2d",
            textAlign: "left",
          }}
        >
          Join our community
        </h2>
        <SocialLink href="https://steamcommunity.com/app/2594740">
          <img src={steamLogo} style={{ height: 25 }} />
          Community Hub
        </SocialLink>
      </Section>
    </footer>
  );
};

export default Social;
