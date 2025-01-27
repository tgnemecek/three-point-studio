import LanguageContext from "../LanguageContext";
import { useContext } from "react";
import { ENGLISH_CONTENT, PORTUGUESE_CONTENT } from "./constants";

// const Content = ({ text, image, alt, className }: ContentProps) => {
//   const { language } = useContext(LanguageContext);

//   if (text) {
//     const value = text(TEXT_CONTENT_MAP);
//     return (
//       <Markdown
//         className={className}
//         components={{
//           p: StyledParagraph,
//           h2: StyledHeading,
//         }}
//       >
//         {typeof value === "string" ? value : value[language]}
//       </Markdown>
//     );
//   }

//   return <img alt={alt} src={image(IMAGE_CONTENT_MAP)} className={className} />;
// };

const useContent = () => {
  const { language } = useContext(LanguageContext);

  return language === "pt" ? PORTUGUESE_CONTENT : ENGLISH_CONTENT;
};

export default useContent;

// Content.getSpecs = (fn: (content: typeof SPECS_MAP) => string) => fn(SPECS_MAP);

// Content.getGeneral = (fn: (content: typeof general) => string) => fn(general);

// Content.getImage = (fn: (content: typeof IMAGE_CONTENT_MAP) => string) =>
//   fn(IMAGE_CONTENT_MAP);

// const StyledHeading = styled.h2`
//   margin-bottom: 15px;
// `;

// const StyledParagraph = styled.p`
//   margin-bottom: 25px;
// `;

// export default useContent;
