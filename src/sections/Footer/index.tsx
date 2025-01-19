import React from "react";
import Section from "../../components/Section";
import SocialLink from "../../components/SocialLink";
import styled from "styled-components";

const SOCIAL_MEDIA_DATA = [
  {
    name: "Discord",
    url: "https://discord.gg/XMVmWzYgUw",
    logo: "discord",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/three_point_studio/",
    logo: "instagram",
  },
  {
    name: "BlueSky",
    url: "https://bsky.app/profile/wearethreepointstudio.com",
    logo: "bluesky",
  },
  {
    name: "Community Hub",
    url: "https://steamcommunity.com/app/2594740",
    logo: "steam",
  },
] as const;

const Footer: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledFooter>
        <Section>
          <StyledHeading>Join our community!</StyledHeading>
          <StyledSocialContainer>
            {SOCIAL_MEDIA_DATA.map(({ name, url, logo }) => (
              <SocialLink
                href={url}
                key={name}
                name={name}
                logo={logo}
                size={80}
              />
            ))}
          </StyledSocialContainer>
        </Section>
      </StyledFooter>
    </StyledWrapper>
  );
};

const HEIGHT = 220;

const StyledSocialContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
`;

const StyledWrapper = styled.div`
  margin-top: ${HEIGHT}px;
`;

const StyledHeading = styled.h2`
  font-size: 2rem;
  margin: 10px 0 30px 0;
  color: #2d2d2d;
  text-align: center;
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
