import { createStitches } from "@stitches/react";

export const { styled, getCssText, createTheme, globalCss } = createStitches({
    theme: {
        /* ...other tokens */
        colors: {
            text: "black",
            background: "white"
        }
    }
});

export const darkTheme = createTheme({
    colors: {
        text: "white",
        background: "black"
    }
});

export const GlobalStyles = globalCss({
    body: {
        background: "$background",
        color: "$text"
    }
});
//You can declare the styles here or in pages/_app.tsx
GlobalStyles();