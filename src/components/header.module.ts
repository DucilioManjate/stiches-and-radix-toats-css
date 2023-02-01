import { styled } from "stitches.config";

export const Nav = styled('div', {
    variants: {
        body: {
            default: {
                margin: 0,
                padding: 0,
                height: 20,
            }
        },
        root: {
            primary: {
                backgroundColor: '#188cc2',
                fontFamily: 'poppins',
            },
        },
        container: {
            sc: {
                maxWidth: '1000px',
                margin: '0 auto',
                padding: '0 15px',
            },
        },
        head: {
            box: {
                padding: '15px 0',
                boxShadow: '1px 0 15px rgba(98, 98, 98, 0.294)',
                position: 'fixed',
                top: 0,
                right: 0,
                float: 'left',
                width: '100em',
            },
        },
   
   
        btn2: {
            contained:{
                backgroundColor: '#188cc2',
                padding: '10px 35px',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '25px',
            },
        },
        btn3: {
            void: {
                backgroundColor: '#eee5e5',
                padding: '10px 35px',
                color: '#188cc2',
                textDecoration: 'none',
                borderRadius: '25px',
            }
        },
    },
});

