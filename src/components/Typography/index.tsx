import React from "react";
import styled from "styled-components";
import { FONT_COLOR, FONT_FAMILY, FONT_SIZES } from "./constants";

type TitleProps = {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5;
};

export const Title: React.FC<TitleProps> = ({ children, level }) => {
  const Tag = `h${level}` as const;

  return (
    <StyledTitle
      $fontSize={FONT_SIZES[Tag]}
      $fontFamily={FONT_FAMILY.title}
      $color={FONT_COLOR.title}
    >
      <Tag>{children}</Tag>
    </StyledTitle>
  );
};

const StyledTitle = styled.div<{
  $fontSize: string;
  $fontFamily: string;
  $color: string;
}>`
  & > * {
    font-size: ${({ $fontSize }) => $fontSize};
    font-family: ${({ $fontFamily }) => $fontFamily};
    color: ${({ $color }) => $color};
  }
`;

type TextProps = {
  children: React.ReactNode;
};

export const Text: React.FC<TextProps> = ({ children }) => {
  return <div>{children}</div>;
};
