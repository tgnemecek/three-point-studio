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
      releaseDate: cfSpecs.releaseDate.en,
    },
  },
  studio: {
    pressRelease: studioReleaseEnglish,
  },
  general: mapGeneral("en"),
} as const;

export const PORTUGUESE_CONTENT: typeof ENGLISH_CONTENT = {
  crystalFortress: {
    pressRelease: cfReleasePortuguese,
    steamSummary: cfSteamSummaryPortuguese,
    images: IMAGE_CONTENT.crystalFortress,
    specs: {
      ...cfSpecs,
      releaseDate: cfSpecs.releaseDate.pt,
    },
  },
  studio: {
    pressRelease: studioReleasePortuguese,
  },
  general: mapGeneral("pt"),
};
