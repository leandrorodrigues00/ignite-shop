import { styled } from "..";
import Link from "next/link";

export const HomeContainer = styled("main", {
  display: "flex",
  width: "100%",

  maxWidth: "calc(100vw - ((100vw - 1180px) /2))",
  marginLeft: "auto",
  minHeight: "41rem",
});

export const Product = styled(Link, {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,

  position: "relative",
  overflow: "hidden",
  minWidth: "33.75rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",

    borderRadius: 6,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    background: "rgba(0, 0, 0, 0.6)",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    "div:first-child": {
      display: "flex",
      flexDirection: "column",
      gap: "0.25rem",
    },

    "div:nth-child(2)": {
      width: "3.5rem",
      height: "3.5rem",
      background: "$green500",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 6,
    },

    strong: {
      fontSize: "$lg",
      color: "$gray100",
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green300",
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});
