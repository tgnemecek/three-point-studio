import React from "react";
import styled from "styled-components";
import Theme from "../Theme";
import { FONT_WEIGHT } from "../Typography/constants";
import { Link } from "react-router-dom";

type ButtonProps = {
  children?: React.ReactNode;
  href?: string;
  Icon?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ href, children, Icon }) => {
  const renderComponent = () => {
    if (!href) {
      return (
        <Button>
          {children}
          {Icon}
        </Button>
      );
    }
    if (href.startsWith("/")) {
      return (
        <Link to={href}>
          {children}
          {Icon}
        </Link>
      );
    }
    return (
      <a href={href} target="__blank" rel="noreferrer">
        {children}
        {Icon}
      </a>
    );
  };

  return <StyledWrapper>{renderComponent()}</StyledWrapper>;
};

const StyledWrapper = styled.div`
  & > * {
    cursor: pointer;
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
