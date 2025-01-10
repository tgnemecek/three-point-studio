import React from "react";
import steamLogo from "../../assets/steam-logo.svg";
import Section from "../../components/Section";
import SocialLink from "../../components/SocialLink";
import styled from "styled-components";

const HEIGHT = 200;

const Footer: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledFooter>
        <Section>
          <StyledHeading>Join our community</StyledHeading>
          <SocialLink href="https://steamcommunity.com/app/2594740">
            <img src={steamLogo} style={{ height: 25 }} />
            Community Hub
          </SocialLink>
        </Section>
      </StyledFooter>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  margin-top: ${HEIGHT}px;
`;

const StyledHeading = styled.h2`
  margin: 10px 0 20px 0;
  color: #2d2d2d;
  text-align: left;
`;

const StyledFooter = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
  height: ${HEIGHT}px;
  background-color: #8fb4ab;
`;

export default Footer;
