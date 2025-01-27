import React, { CSSProperties } from "react";
import { DEFAULT_TEXT_STYLES } from "./constants";
import styled from "styled-components";

type TextProps = {
  children?: React.ReactNode;
  style?: CSSProperties;
  className?: string;
};

export const Text: React.FC<TextProps> = ({ children, style, className }) => {
  return (
    <StyledText style={style} className={className}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.span`
  ${DEFAULT_TEXT_STYLES}
`;
