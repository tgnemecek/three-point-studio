import React, { CSSProperties } from "react";
import { FONT_COLOR, FONT_FAMILY, FONT_SIZES, FONT_WEIGHT } from "./constants";
import styled from "styled-components";

type TitleProps = {
  children?: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5;
  style?: CSSProperties;
  className?: string;
};

export const Title: React.FC<TitleProps> = ({
  children,
  level,
  style,
  className,
}) => {
  const Tag = `h${level}` as const;

  return (
    <StyledTitle
      $fontSize={FONT_SIZES[Tag]}
      $fontFamily={FONT_FAMILY.title}
      $color={FONT_COLOR.title}
      style={style}
      className={className}
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
    font-weight: ${FONT_WEIGHT.title};
    color: ${({ $color }) => $color};
    line-height: 2.5rem;
  }
  margin-bottom: 1rem;
`;
