import React, { CSSProperties } from "react";
import { DEFAULT_TEXT_STYLES } from "./constants";
import styled from "styled-components";

type ParagraphProps = {
  children?: React.ReactNode;
  style?: CSSProperties;
  className?: string;
};

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  style,
  className,
}) => {
  return (
    <StyledParagraph style={style} className={className}>
      {children}
    </StyledParagraph>
  );
};

const StyledParagraph = styled.p`
  ${DEFAULT_TEXT_STYLES}
  margin-bottom: 1rem;
  & > em {
    font-size: 0.9em;
  }
`;
