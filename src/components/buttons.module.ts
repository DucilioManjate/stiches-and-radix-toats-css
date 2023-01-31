
import { styled } from "@stitches/react";

export const Button = styled("button", {
    variants: {

        v1: {
            media: {
                sm: '(min-width: 640px)',
                md: '(min-width: 768px)',
                lg: '(min-width: 1024px)',
            },
        },

        color: {
            primary: {
                backgroundColor: ' #4895ff',
            },
            secondary: {
                backgroundColor: ' #b3404a',
            },
            tertiary: {
                backgroundColor: '#3bb54a',
            },

        },

        size: {
            sm: {
                height: '30px',
                width: '100%',
            },
            md: {
                height: '40px',
                width: '150%',

            },
            lg: {
                height: '50px',
                width: '200px',
            }
        },
        speace: {
            sp: {
                padding: '10px',
                margin: 'auto',
            },
        },

        csx: {
            styled: {
                borderRadius: '5px',
                color: 'white',
                '&:hover': { backgroundColor: '#00BFFF' },
                marginTop: '20px',
                transition: 'all 0.2s ease-in-out',
                boxShadow: 'none',
                maxWidth: '100%',
                margin: '1 auto',
                padding: '1px',
                fontWeight: 'bold',
            },
        },
    },
});;

