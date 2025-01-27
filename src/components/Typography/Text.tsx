import React, { CSSProperties } from "react";
import { DEFAULT_TEXT_STYLES, FONT_WEIGHT } from "./constants";
import styled from "styled-components";

type TextProps = {
  children?: React.ReactNode;
  style?: CSSProperties;
  className?: string;
  bold?: boolean;
  color?: string;
};

export const Text: React.FC<TextProps> = ({
  children,
  style,
  className,
  bold,
  color,
}) => {
  return (
    <StyledText style={style} className={className} $bold={bold} $color={color}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.span<{ $bold?: boolean; $color?: string }>`
  ${DEFAULT_TEXT_STYLES}
  ${({ $bold }) => $bold && `font-weight: ${FONT_WEIGHT.subtitle};`}
  ${({ $color }) => $color && `color: ${$color};`}
`;
