import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    textColor: string;
    header: string;
    headerNumber: string;
    activeMenu: string;
  }
}
