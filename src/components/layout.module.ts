import { styled } from "@stitches/react";

export const Cardbody = styled('div', {
    variants: {
        container: {
            basic: {
                fontFamily: '$body',
                backgroundColor: '$gray500',
            },
        },
        grid: {
            row: {
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
            },
            column: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
            },
        },
        card: {
            cardBox: {
                borderRadius: '5px',
                boxShadow: '7px 7px 13px 0px rgba(50, 50, 50, 0.22)',
                padding: '30px',
                margin: '20px',
                width: '400px',
                transition: 'all 0.3s ease-out',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    cursor: 'pointer',
                },
            },
        },
        cardColor: {
            blue: {
                borderLeft: '3px solid #4895ff',
            },
            green: {
                borderLeft: '3px solid #3bb54a',
            },
            red: {
                borderLeft: '3px solid #b3404a',
            },
        },

        cardTitle: {
            h1: {
                color: '$ble=700',
                fontSize: '16px',
                fontWeight: 'bold',
                fontFamily: '$heading',

            },
            p: {
                color: '$gray700',
                fontSize: '14px',
                fontWeight: 'normal',
            },
        },
    },
});

