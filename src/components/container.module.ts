import { styled } from "@stitches/react";

export const Container = styled('div', {
    variants: {
        container: {
            v1: {
                backgroundColor: '$gray500',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px',
            }
        },
    },

});