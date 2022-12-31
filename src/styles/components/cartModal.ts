import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "..";

export const Overlay = styled(Dialog.Overlay, {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  inset: 0,
  background: "rgba(0, 0, 0, 0.75)",
});

export const Content = styled(Dialog.Content, {
  minWidth: "30rem",
  background: "$gray800",
  position: "absolute",
  right: 0,
  top: 0,
  bottom: 0,
  padding: "1.8125rem 3rem 3rem",

  display: "flex",
  flexDirection: "column",

  ">div": {
    marginTop: "5.4375rem",
    overflowY: "auto",
  },

  ">p": {
    marginTop: "200px",
    textAlign: "center",
    letterSpacing: 0.5,
  },

  "@bp1": {
    right: "-2.25rem",
  },

  "@bp2": {
    padding: "1.8125rem 1rem 3rem 5rem",
  },
});

export const CloseButton = styled(Dialog.Close, {
  background: "transparent",
  border: "none",
  marginLeft: "auto",

  cursor: "pointer",

  svg: {
    color: "#8D8D99",
  },

  "&:hover": {
    svg: {
      color: "red",
    },
  },
});

export const CartItemsContainer = styled("div", {
  display: "flex",
  gap: "1.25rem",

  "& + &": {
    marginTop: "1.5rem",
  },
});

export const CartItemsDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",

  p: {
    marginRight: "0.125rem",
    fontSize: "$md",
    lineHeight: 1.6,
    color: "$gray300",
  },

  span: {
    fontSize: "$md",
    lineHeight: 1.6,
    color: "$gray100",
  },

  button: {
    background: "none",
    fontSize: "1rem",
    color: "$green500",
    border: "none",
    cursor: "pointer",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: "6.375rem",
  height: "5.8125rem",
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

export const ContentFooter = styled("footer", {
  display: "flex",
  flexDirection: "column",
  marginTop: "8.9375rem",

  ">div": {
    display: "flex",
    flexDirection: "column",

    div: {
      display: "flex",
      justifyContent: "space-between",

      "span:first-child": {
        lineHeight: 1.6,
        color: "$gray100",
        fontSize: "1rem",
      },

      "span:last-child": {
        lineHeight: 1.6,
        color: "$gray300",
        fontSize: "$md",
      },

      "strong:first-child": {
        fontSize: "$md",
        color: "$gray100",
        lineHeight: 1.6,
      },

      "strong:last-child": {
        color: "$gray100",
        lineHeight: 1.4,
        fontSize: "$xl",
      },
    },
  },

  button: {
    padding: "1.25rem 2rem",
    marginTop: "3.5625rem",
    width: "100%",
    borderRadius: 8,
    background: "$green500",
    border: "none",

    fontSize: "$md",
    color: "$white",
    cursor: "pointer",
    transition: "all 0.2s",

    "&:hover": {
      background: "$green300",
    },
  },
});
