import React from "react";
import styled from "styled-components";
import Theme from "../Theme";
import { FONT_WEIGHT } from "../Typography/constants";

type ButtonProps = {
  children?: React.ReactNode;
  href?: string;
  Icon?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ href, children, Icon }) => {
  const Tag = href ? "a" : ("button" as const);

  return (
    <StyledWrapper>
      <Tag target="__blank" rel="noreferrer">
        {children}
        {Icon}
      </Tag>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  & > * {
    display: inline-block;
    margin-top: 20px;
    margin-right: 20px;
    background-color: #383838;
    border-radius: 16px;
    padding: 10px;
    border: none;

    color: ${Theme.white.main};
    font-weight: ${FONT_WEIGHT.subtitle};

    &:hover {
      color: white;
      background-color: #232323;
      border: none;
    }
    & svg {
      margin-left: 10px;
      display: inline-block;
      vertical-align: bottom;
    }
  }
`;

export default Button;
