export const COLORS = {
  primary: "rgba(255, 187, 84, 1)",
  seconday: {
    green: "#25C78B",
    blue: "#04A4F4",
    red: "#DB5962",
  },
  neutral: {
    black: "#141522",
    white: "#FFFFFF",
    grey: "#DFDFDF",
    lightGrey: "#FCFCFC",
    darkGrey: "#9C9CA4",
    softGrey: "#F5F5F7",
  },
  label: {
    blue: "#EAF8FF",
    green: "#EFF6E9",
    red: "#FFF4F3",
    yellow: "#FFF3E0",
  },
  gradient: {
    blue: "#547AFF",
  },
  transparent: {
    black10: "rgba(0, 0, 0, 0.1)",
    black20: "rgba(0, 0, 0, 0.2)",
    black30: "rgba(0, 0, 0, 0.3)",
    black100: "rgba(0, 0, 0, 1)",
  },
};
export const TYPOGRAPHY = {
  xs: `${12 / 16}rem`,
  sm: `${14 / 16}rem`,
  base: `${16 / 16}rem`,
  lg: `${18 / 16}rem`,
  xl: `${24 / 16}rem`,
  xl2: `${32 / 16}rem`,
  xl3: `${42 / 16}rem`,
  xl4: `${72 / 16}rem`,
};

export const FONT_FAMILY = {
  bespoke: "'Bespoke Serif', serif",
  telma: "'Telma', cursive",
  ubuntu: "'Ubuntu', sans-serif",
  pally: "'Pally', sans-serif",
  pilcrow: "'Pilcrow Rounded', sans-serif",
  asap: "'Asap', sans-serif",
};

export const BREAKPOINTS = {
  tabletMax: 950,
};

export const QUERIES = {
  tabletAndDown: `(max-width:${BREAKPOINTS.tabletMax / 16}rem)`,
};
