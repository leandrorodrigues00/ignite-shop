import { styled } from "..";
import * as Dialog from "@radix-ui/react-dialog";

export const HeaderContainer = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Trigger = styled(Dialog.Trigger, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "3rem",
  height: "3rem",
  background: "$gray800",
  borderRadius: 6,
  border: "none",
  color: "$white",

  position: "relative",
  cursor: "pointer",

  div: {
    width: "1.5rem",
    height: "1.5rem",
    background: "$green500",
    borderRadius: "100%",
    border: "3px solid #121214",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    position: "absolute",
    right: "-0.4375rem",
    top: "-0.4375rem",
  },
});
