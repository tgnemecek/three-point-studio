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
    <StyledLink href={href} target="__blank" aria-label={name} $size={size}>
      <Icon icon={logo} />
    </StyledLink>
  );
};

const StyledLink = styled.a<{ $size: number }>`
  display: flex;
  width: ${({ $size }) => $size}px;
`;

export default SocialLink;
