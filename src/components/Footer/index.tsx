import React from "react";
import Section from "../../components/Section";
import SocialLink from "../../components/SocialLink";
import styled from "styled-components";
import { Title } from "../../components/Typography";
import Theme from "../../components/Theme";
import useContent from "../../utils/useContent";

const Footer: React.FC = () => {
  const content = useContent();

  type SocialMediaId = keyof typeof content.socialMedia;

  return (
    <StyledWrapper>
      <StyledFooter>
        <Section>
          <StyledCard>
            <Title level={2}>{content.general.joinCommunity}</Title>
            <StyledSocialContainer>
              {(Object.keys(content.socialMedia) as SocialMediaId[]).map(
                (key) => {
                  const { name, url } = content.socialMedia[key];

                  return (
                    <SocialLink
                      href={url}
                      key={name}
                      name={name}
                      logo={key}
                      size={80}
                    />
                  );
                }
              )}
            </StyledSocialContainer>
          </StyledCard>
        </Section>
      </StyledFooter>
    </StyledWrapper>
  );
};

const HEIGHT = 160;

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
