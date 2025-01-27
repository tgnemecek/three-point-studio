import Theme from "../Theme";

export const FONT_SIZES = {
  h1: "2.5rem",
  h2: "2rem",
  h3: "1.7rem",
  h4: "1.6rem",
  h5: "1.2rem",
  text: "1rem",
} as const;

export const FONT_FAMILY = {
  title: "Futura-PT-Bold, Arial, sans-serif",
  subtitle: "Futura-PT-Medium, Arial, sans-serif",
  text: "Futura-PT-Light, Arial, sans-serif",
};

export const FONT_COLOR = {
  title: Theme.dark.main,
  subtitle: Theme.primary.main,
  text: Theme.dark.main,
};
