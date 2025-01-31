/** Crystal Fortress: */
import cfLogoHorizontal from "../../content/crystal-fortress/logo-horizontal.png";
import cfLogoVertical from "../../content/crystal-fortress/logo-vertical.png";
import cfBackground from "../../content/crystal-fortress/background.png";
import cfReleaseEnglish from "../../content/crystal-fortress/press-release-en.md";
import cfReleasePortuguese from "../../content/crystal-fortress/press-release-pt.md";
import cfSteamSummaryEnglish from "../../content/crystal-fortress/steam-summary-en.md";
import cfSteamSummaryPortuguese from "../../content/crystal-fortress/steam-summary-pt.md";
import cfSpecs from "../../content/crystal-fortress/specs.json";

/** Studio: */
import studioHero from "../../content/studio/studio-hero.png";
import studioLogoHorizontal from "../../content/studio/studio-logo-horizontal.svg";
import studioLogoWhiteHorizontal from "../../content/studio/studio-logo-white-horizontal.svg";
import studioLogo3d from "../../content/studio/studio-logo-3d.png";
import studioReleaseEnglish from "../../content/studio/press-release-en.md";
import studioReleasePortuguese from "../../content/studio/press-release-pt.md";

/** Misc: */
import general from "../../content/general.json";
import socialMedia from "../../content/social-media.json";

const mapGeneral = (language: "en" | "pt") => {
  return Object.keys(general).reduce((acc, key) => {
    return {
      ...acc,
      [key]: general[key as keyof typeof general][language],
    };
  }, {} as Record<keyof typeof general, string>);
};

const IMAGE_CONTENT = {
  crystalFortress: {
    logoHorizontal: cfLogoHorizontal,
    logoVertical: cfLogoVertical,
    background: cfBackground,
  },
} as const;

export const ENGLISH_CONTENT = {
  crystalFortress: {
    pressRelease: cfReleaseEnglish,
    steamSummary: cfSteamSummaryEnglish,
    images: IMAGE_CONTENT.crystalFortress,
    specs: {
      ...cfSpecs,
      steamLink: cfSpecs.steamLink.en,
      widgetLink: cfSpecs.widgetLink.en,
      releaseDate: cfSpecs.releaseDate.en,
    },
  },
  studio: {
    pressRelease: studioReleaseEnglish,
    logoHorizontal: studioLogoHorizontal,
    logoWhiteHorizontal: studioLogoWhiteHorizontal,
    logo3d: studioLogo3d,
    studioHero,
  },
  general: mapGeneral("en"),
  socialMedia,
} as const;

export const PORTUGUESE_CONTENT: typeof ENGLISH_CONTENT = {
  crystalFortress: {
    pressRelease: cfReleasePortuguese,
    steamSummary: cfSteamSummaryPortuguese,
    images: IMAGE_CONTENT.crystalFortress,
    specs: {
      ...cfSpecs,
      steamLink: cfSpecs.steamLink.pt,
      widgetLink: cfSpecs.widgetLink.pt,
      releaseDate: cfSpecs.releaseDate.pt,
    },
  },
  studio: {
    ...ENGLISH_CONTENT.studio,
    pressRelease: studioReleasePortuguese,
  },
  general: mapGeneral("pt"),
  socialMedia,
};
