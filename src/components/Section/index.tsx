import React from "react";
import styled from "styled-components";

type SectionProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
};

const Section: React.FC<SectionProps> = ({
  children,
  backgroundColor,
  className,
}) => {
  return (
    <section style={{ backgroundColor }} className={className}>
      <StyledInner>{children}</StyledInner>
    </section>
  );
};

const StyledInner = styled.div`
  margin: auto;
  padding: 10px;
  min-width: 320px;
  max-width: 1000px;
`;

export default Section;
