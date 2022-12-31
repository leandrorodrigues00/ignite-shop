import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: "41rem",

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    textAlign: "center",
    maxWidth: "35rem",
    marginTop: "2rem",
    lineHeight: 1.4,
  },

  a: {
    display: "block",
    marginTop: "5rem",
    fontSize: "$lg",
    color: "$green500",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: "8.125rem",
  height: "9.0625rem",
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",

  padding: "0.25rem",
  marginBottom: "3.1875rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },

  variants: {
    hasMoreThanOnePic: {
      true: {
        maxWidth: "8.75rem",
        height: "9.0625rem",

        borderRadius: "100%",
        boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.8);",
        aspectRatio: 1,

        "& + div": {
          marginLeft: "-3.25rem",
        },
        img: {
          width: "8.125rem",
        },
      },
      false: { borderRadius: 10 },
    },
  },
});

export const MoreThanOnePicContainer = styled("div", {
  display: "flex",
});
