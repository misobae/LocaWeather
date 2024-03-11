import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      blk: string;
      gry: string;
      ltGry: string;
    }
  }
}