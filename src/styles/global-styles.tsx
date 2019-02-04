import { createGlobalStyle } from "styled-components/macro";
import { Normalize } from "styled-normalize";
import * as s from "./styles";

export const GlobalStyles = () => (
  <>
    <Normalize />
    <GlobalStylesComponent />
  </>
);

// TODO: object syntax
const GlobalStylesComponent = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${s.colors.grayChrome};
    position: relative;
    /* https://stackoverflow.com/questions/8635799/overflow-xhidden-still-can-scroll */
  }

  /* latin-ext */
  @font-face {
    font-family: Lato;
    font-style: normal;
    font-weight: 400;
    src: local('Lato Regular'), local('Lato-Regular'), url(/fonts/lato-latin-ext.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }

  /* latin */
  @font-face {
    font-family: Lato;
    font-style: normal;
    font-weight: 400;
    src: local('Lato Regular'), local('Lato-Regular'), url(/fonts/lato-latin.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
`;
