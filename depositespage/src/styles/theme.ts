const globalTheme = {
  switchWidth: "48px",
  switchHeight: "20px",
  switchPadding: "3px",
  colorContrastLow: "#d3d3d4",
  colorWhite: "#fff",
  switchColorPrimary: "#302c40",
  switchAnimationDuration: "0.2s",
  gradient:
    "linear-gradient(122deg, rgba(128,74,216,1) 0%, rgba(98,75,217,1) 100%)",
  colorGreen: "#5dc399",
  colorGray: "#adadad",
};

export const lightTheme = {
  primary: "#fff",
  secondary: "#f8f8f8",
  textColor: "#585280",
  header: "#585280",
  headerNumber: "#fff",
  activeMenu: "#585280",
  ...globalTheme,
};

export const darkTheme = {
  primary: "#302c40",
  secondary: "#2c2839",
  textColor: "#fff",
  header: "#fff",
  headerNumber: "#585280",
  activeMenu: "#fff",
  ...globalTheme,
};
