import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    screenSize: {
      mobile: string;
      tablet: string;
      pc: string;
    };
    color: {
      blk: string;
      gry: string;
      ltGry: string;
    }
  }
}