import Theme from "../Theme";

export const FONT_SIZES = {
  h1: "2.5rem",
  h2: "2rem",
  h3: "1.7rem",
  h4: "1.6rem",
  h5: "1.2rem",
  text: "1.2rem",
} as const;

export const FONT_FAMILY = {
  title: "Futura, Times, sans-serif",
  subtitle: "Futura, Times, sans-serif",
  text: "Futura, Times, sans-serif",
};

export const FONT_COLOR = {
  title: Theme.dark.main,
  subtitle: Theme.primary.main,
  text: Theme.dark.main,
};

/** Values have to match font-face definitions in index.css */
export const FONT_WEIGHT = {
  title: 900,
  subtitle: 700,
  text: 400,
};

export const DEFAULT_TEXT_STYLES = `
  font-size: ${FONT_SIZES.text};
  font-family: ${FONT_FAMILY.text};
  color: ${FONT_COLOR.text};
  font-weight: ${FONT_WEIGHT.text};
`;
