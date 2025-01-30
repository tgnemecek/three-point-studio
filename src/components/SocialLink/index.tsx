import React from "react";
import Icon, { IconName } from "../Icon";
import styled from "styled-components";

type SocialLinkProps = {
  href: string;
  name: string;
  logo: IconName;
  size?: number;
};

const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  name,
  logo,
  size = 25,
}) => {
  return (
    <StyledLink href={href} target="__blank" aria-label={name}>
      <Icon icon={logo} size={size} />
    </StyledLink>
  );
};

const StyledLink = styled.a`
  display: flex;
`;

export default SocialLink;
