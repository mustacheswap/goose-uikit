import { Colors } from "./types";

export const baseColors = {
  failure: "#FF2600",
  primary: "#830B29",
  primaryBright: "#830B29",
  primaryDark: "#830B29",
  secondary: "#830B29",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FFFFFF",
  backgroundDisabled: "#EBEBEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#830B29",
  textDisabled: "#BDC2C4",
  textSubtle: "#830B29",
  borderColor: "#E9EAEB",
  card: "#D5D5D5",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#000000",
  background: "#BA99A2",
  backgroundDisabled: "#54071A",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EFDFE2",
  textDisabled: "#666171",
  textSubtle: "#EFDFE2",
  borderColor: "#830B29",
  card: "#830B29",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
