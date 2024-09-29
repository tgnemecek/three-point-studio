import React from "react";

type SocialLinkProps = {
  children: React.ReactNode;
  href: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({ children, href }) => {
  return (
    <a
      href={href}
      target="__blank"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        backgroundColor: "black",
        width: 170,
        height: 40,
        borderRadius: 16,
        gap: 5,
        marginBottom: 20,
      }}
    >
      {children}
    </a>
  );
};

export default SocialLink;
