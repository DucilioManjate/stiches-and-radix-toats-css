import { styled } from "@stitches/react";

export const Container = styled('div', {
    variants: {
        container: {
            v1: {
                backgroundColor: '$gray500',
                margin: '5px',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px',
                flexDirection: 'row',
            }
        },
        V2: {
            nav: {
                background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '10px',

            },
        },
        ul: {
            li: {
                listStyle: 'none',
                margin: '10px',
                color: ' #87CEEB',
                fontSize: '15px',
                fontWeight: 'bold',
                display: 'inline-block',
                hover: {
                    color: 'white',
                },
                cursor: 'pointer',
            },
            animation: {
                animation: 'slide 1s ease-in-out',
                '@keyframes slide': {
                    '0%': {
                        transform: 'translateX(-100%)',
                    },
                },
            },
        },
    },

});

