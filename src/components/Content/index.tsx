import Markdown from "react-markdown";
import styled from "styled-components";
import cfLogoHorizontal from "../../content/crystal-fortress/logo-horizontal.png";
import cfLogoVertical from "../../content/crystal-fortress/logo-vertical.png";
import cfBackground from "../../content/crystal-fortress/background.png";
import cfReleaseEnglish from "../../content/crystal-fortress/press-release-en.md";
import cfReleasePortuguese from "../../content/crystal-fortress/press-release-pt.md";
import cfSteamSummaryEnglish from "../../content/crystal-fortress/steam-summary-en.md";
import cfSteamSummaryPortuguese from "../../content/crystal-fortress/steam-summary-pt.md";
import studioReleaseEnglish from "../../content/studio/press-release-en.md";
import studioReleasePortuguese from "../../content/studio/press-release-pt.md";
import cfSpecs from "../../content/crystal-fortress/specs.json";
import general from "../../content/general.json";
import LanguageContext from "../../LanguageContext";
import { useContext } from "react";

const SPECS_MAP = {
  crystalFortress: cfSpecs,
} as const;

const TEXT_CONTENT_MAP = {
  crystalFortress: {
    pressRelease: {
      en: cfReleaseEnglish,
      pt: cfReleasePortuguese,
    },
    steamSummary: {
      en: cfSteamSummaryEnglish,
      pt: cfSteamSummaryPortuguese,
    },
    assetKit:
      "https://drive.google.com/file/d/1Z23CqGo3n7Wwgq8Uz_k-87swZUGj6PZ9/view?usp=drive_link",
  },
  studio: {
    pressRelease: {
      en: studioReleaseEnglish,
      pt: studioReleasePortuguese,
    },
  },
} as const;

const IMAGE_CONTENT_MAP = {
  crystalFortress: {
    logoHorizontal: cfLogoHorizontal,
    logoVertical: cfLogoVertical,
    background: cfBackground,
  },
} as const;

type LanguageSelector = {
  en: string;
  pt: string;
};

type TextContentProps = {
  image?: never;
  alt?: never;
  text: (content: typeof TEXT_CONTENT_MAP) => LanguageSelector | string;
};

export type ImageContentProps = {
  text?: undefined;
  image: (content: typeof IMAGE_CONTENT_MAP) => string;
  alt: string;
};

export type ContentProps =
  | (TextContentProps | ImageContentProps) & {
      className?: string;
    };

const Content = ({ text, image, alt, className }: ContentProps) => {
  const { language } = useContext(LanguageContext);

  if (text) {
    const value = text(TEXT_CONTENT_MAP);
    return (
      <Markdown
        className={className}
        components={{
          p: StyledParagraph,
          h2: StyledHeading,
        }}
      >
        {typeof value === "string" ? value : value[language]}
      </Markdown>
    );
  }

  return <img alt={alt} src={image(IMAGE_CONTENT_MAP)} className={className} />;
};

Content.getSpecs = (fn: (content: typeof SPECS_MAP) => string) => fn(SPECS_MAP);

Content.getGeneral = (fn: (content: typeof general) => string) => fn(general);

Content.getImage = (fn: (content: typeof IMAGE_CONTENT_MAP) => string) =>
  fn(IMAGE_CONTENT_MAP);

const StyledHeading = styled.h2`
  margin-bottom: 15px;
`;

const StyledParagraph = styled.p`
  margin-bottom: 25px;
`;

export default Content;
