import React from "react";
import ReactMarkdown from "react-markdown";
import { Paragraph } from "./Paragraph";
import { Title } from "./Title";

type MarkdownProps = {
  children: string;
};

export const Markdown: React.FC<MarkdownProps> = ({ children }) => {
  return (
    <ReactMarkdown
      components={{
        h2: (props) => <Title {...props} level={2} />,
        p: Paragraph,
      }}
    >
      {children}
    </ReactMarkdown>
  );
};
