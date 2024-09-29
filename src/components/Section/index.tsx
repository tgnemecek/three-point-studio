import React from "react";
import "./Section.css";

type SectionProps = {
  children: React.ReactNode;
  backgroundColor?: string;
};

const Section: React.FC<SectionProps> = ({ children, backgroundColor }) => {
  return (
    <section style={{ backgroundColor }}>
      <div className="Section__inner">{children}</div>
    </section>
  );
};

export default Section;
