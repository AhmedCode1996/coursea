import { createGlobalStyle } from "styled-components";
import { FONT_FAMILY } from "../constants";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

:root {
    --button-border-radius: 10px;
    --auth-border-stroke: rgba(235, 234, 237, 1);
    --auth-font-color: rgba(46, 44, 52, 1);
    --border-stroke: rgba(245, 245, 247, 1);
    --input-inactive-color: rgba(223, 223, 223, 1)
}

html, body {
    height: 100%;
}

body {
    line-height: 1.5;
}

html {
    font-family: ${FONT_FAMILY.asap};
}

img, svg {
    display: block;
    max-width: 100%;

}

input, button, select {
    font: inherit;
    outline: none;
    border: none;
    background-color: transparent;
}

h1, h2, h3, h4, h5, h6, p {
    overflow-wrap: break-word;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
}

`;

export default GlobalStyle;
