import { blackA, green, mauve, violet } from "@radix-ui/colors";
import { styled } from "@stitches/react";

export const Button = styled("button", {
    all: "unset",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    padding: "0 15px",
    fontSize: 15,
    paddingTop: 500 ,
    lineHeight: 1,
    fontWeight: 500,
    height: 35,
    cursor: "pointer",
    transition: "all 100ms ease-out",
    width: "100px",
    minWidth: "100%",
    backgroundColor: violet.violet2,

    variants: {
        size: {
            small: {
                fontSize: 12,
                padding: "0 10px",
                lineHeight: "25px",
                height: 25
            }
        },
        variant: {
            violet: {
                backgroundColor: "white",
                color: violet.violet11,
                boxShadow: `0 2px 10px ${blackA.blackA7}`,
                "&:hover": { backgroundColor: mauve.mauve3 },
                "&:focus": { boxShadow: `0 0 0 2px black` }
            },
            green: {
                backgroundColor: green.green2,
                color: green.green11,
                boxShadow: `inset 0 0 0 1px ${green.green7}`,
                "&:hover": { boxShadow: `inset 0 0 0 1px ${green.green8}` },
                "&:focus": { boxShadow: `0 0 0 2px ${green.green8}` }
            }
        }
    },

    defaultVariants: {
        variant: "violet"
    }
});;

