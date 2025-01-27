import React, { CSSProperties } from "react";
import { DEFAULT_TEXT_STYLES } from "./constants";
import styled from "styled-components";

type ParagraphProps = {
  children?: React.ReactNode;
  style?: CSSProperties;
  className?: string;
  color?: "white";
};

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  style,
  color,
  className,
}) => {
  return (
    <StyledParagraph style={style} className={className} $color={color}>
      {children}
    </StyledParagraph>
  );
};

const StyledParagraph = styled.p<{ $color?: string }>`
  ${DEFAULT_TEXT_STYLES}
  ${({ $color }) => $color && `color: ${$color};`}
  margin-bottom: 1rem;
  & > em {
    font-size: 0.9em;
  }
`;
