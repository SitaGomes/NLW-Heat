import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --green: #1B873F;
        --pink: #FF008E;
        --orange: #FF7A29;
        --yellow: #FFCD1E;

        --grey-700: #29292E;
        --grey-400: #8D8D99;
        --grey-300: #C4C4CC;
        --grey-200: #E1E1E6;

        --black: #121214;
        --white: #FFFFFF;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Roboto, Arial, sans-serif;
    }

    body { 
        background: var(--black);
        color: var(--grey-200);
    }

`