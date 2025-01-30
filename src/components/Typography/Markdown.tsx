import React from "react";
import ReactMarkdown from "react-markdown";
import { Paragraph } from "./Paragraph";
import { Title } from "./Title";

type MarkdownProps = {
  children: string;
  components?: {
    p?: React.FC;
  };
};

export const Markdown: React.FC<MarkdownProps> = ({
  children,
  components = {},
}) => {
  return (
    <ReactMarkdown
      components={{
        h2: (props) => <Title {...props} color={undefined} level={2} />,
        p: (props) => <Paragraph {...props} color={undefined} />,
        ...components,
      }}
    >
      {children}
    </ReactMarkdown>
  );
};
