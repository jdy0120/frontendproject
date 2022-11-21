import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    // 여기에 적용하고 싶은 속성과 타입을 정의한다
    switchWidth: string;
    switchHeight: string;
    switchPadding: string;
    colorContrastLow: string;
    colorWhite: string;
    switchColorPrimary: string;
    switchAnimationDuration: string;
    gradient: string;
    colorGreen: string;
    colorGray: string;
    primary: string;
    secondary: string;
    textColor: string;
    header: string;
    headerNumber: string;
    activeMenu: string;
  }
}
