import { createTheme, styled } from "@stitches/react";


export const GlobalStyled = styled('div',
    {
        body:{
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
      
        variants: {
            responsive: {
                //Dispositivos extra pequenos (telefones, 600px e abaixo)
                mobile: {
                    '@media (min-width: 600px)': {
                        width: '100%',
                    },
                },

                //Dispositivos pequenos (tablets retrato e telefones grandes, 600px e acima)
                tablet: {
                    '@media (min-width: 768px)': {
                        columTable1: {
                            width: '8.33%',
                        },
                        columTable2: {
                            width: '16.66%',
                        },
                        columTable3: {
                            width: '25%',
                        },
                        columTable4: {
                            width: '33.33%',
                        },
                        columTable5: {
                            width: '41.66%',
                        },
                        columTable6: {
                            width: '50%',
                        },
                        columTable7: {
                            width: '58.33%',
                        },
                        columTable8: {
                            width: '66.66%',
                        },
                        columTable9: {
                            width: '75%',
                        },
                        columTable10: {
                            width: '83.33%',
                        },
                        columTable11: {
                            width: '91.66%',
                        },
                        columTable12: {
                            width: '100%',
                        },

                    },

                },

                //Dispositivos grandes (laptops/desktops, 992px e superior)
                laptops: {
                    '@media (min-width: 992px)': {
                        columLaptop1: {
                            width: '8.33%',
                        },
                        columLaptop2: {
                            width: '16.66%',
                        },
                        columLaptop3: {
                            width: '25%',
                        },
                        columLaptop4: {
                            width: '33.33%',
                        },
                        columLaptop5: {
                            width: '41.66%',
                        },
                        columLaptop6: {
                            width: '50%',
                        },
                        columLaptop7: {
                        },
                        columLaptop8: {
                            width: '66.66%',
                        },
                        columLaptop9: {
                            width: '75%',
                        },
                        columLaptop10: {
                            width: '83.33%',
                        },
                        columLaptop11: {
                            width: '91.66%',
                        },
                        columLaptop12: {
                            width: '100%',
                        },

                    },

                },

                //Dispositivos extragrandes (laptops e desktops grandes, 1200px e superior)
                desktops: {
                    '@media (min-width: 1200px)': {
                        columDesktop1: {
                            width: '8.33%'
                        },
                        columDesktop2: {
                            width: '16.66%'
                        },
                        columDesktop3: {
                            width: '25%'
                        },
                        columDesktop4: {
                            width: '33.33%'
                        },
                        columDesktop5: {
                            width: '41.66%'
                        },
                        columDesktop6: {
                            width: '50%'
                        },
                        columDesktop7: {
                            width: '58.33%'
                        },
                        columDesktop8: {
                            width: '66.66%'
                        },
                        columDesktop9: {
                            width: '75%'
                        },
                        columDesktop10: {
                        },
                        columDesktop11: {
                            width: '91.66%'
                        },
                        columDesktop12: {
                            width: '100%'
                        },
                    },
                },
        
            },
            titlePage: {
                '@media (min-width: 600px)': {
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '$gray500',
                    textAlign: 'center',
                    marginBottom: '20px',
                },
                '@media (min-width: 768px)': {
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '$gray500',
                    textAlign: 'center',
                    marginBottom: '20px',
                },
                '@media (min-width: 992px)': {
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: '$gray500',
                    textAlign: 'center',
                    marginBottom: '20px',
                },
                '@media (min-width: 1200px)': {
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    color: '$gray500',
                    textAlign: 'center',
                    marginBottom: '20px',
                },
            },

        },
    }
);


// * {
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//   }
  
//   body {
//     font-family: system-ui;
//     width: 100vw;
//     height: 100vh;
//     background-image: linear-gradient(
//       330deg,
//       hsl(272, 53%, 50%) 0%,
//       hsl(226, 68%, 56%) 100%
//     );
//     display: flex;
//     align-items: flex-start;
//     justify-content: center;
//     margin-top: 120px;
//   }
  
//   svg {
//     display: block;
//   }
  
