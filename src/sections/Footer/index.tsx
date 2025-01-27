import React from "react";
import Section from "../../components/Section";
import SocialLink from "../../components/SocialLink";
import styled from "styled-components";
import { Title } from "../../components/Typography";
import Theme from "../../components/Theme";
import useContent from "../../utils/useContent";

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
  const content = useContent();

  return (
    <StyledWrapper>
      <StyledFooter>
        <Section>
          <StyledCard>
            <Title level={2}>{content.general.joinCommunity}</Title>
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
          </StyledCard>
        </Section>
      </StyledFooter>
    </StyledWrapper>
  );
};

const HEIGHT = 180;

const StyledSocialContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
`;

const StyledWrapper = styled.div`
  margin-top: ${HEIGHT}px;
`;

const StyledFooter = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
  height: ${HEIGHT}px;
  background-color: ${Theme.white.main};
  box-shadow: 4px 6px 24px 0px rgba(0, 0, 0, 0.2);
`;

const StyledCard = styled.div``;

export default Footer;
