import { createTheme, styled } from "@stitches/react";


export const GlobalStyled = styled('div',
    {
        body: {
            boxSizing: 'border-box',
            margin: 0,
            padding: 0,
            fontFamily: 'system-ui',
            width: '100vw',
            height: '100vh',
            backgroundImage: 'linear-gradient(330deg, hsl(272, 53%, 50%) 0%, hsl(226, 68%, 56%) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '120px',
            svg: {
                display: 'block',
            },
        },

        breakpoints: {
            sm: (rule: any) => `@media (min-width: 640px) { ${rule} }`,
            md: (rule: any) => `@media (min-width: 768px) { ${rule} }`,
            lg: (rule: any) => `@media (min-width: 1024px) { ${rule} }`,
            xl: (rule: any) => `@media (min-width: 1280px) { ${rule} }`,
        },
    },
);

