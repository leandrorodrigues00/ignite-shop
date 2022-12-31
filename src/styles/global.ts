import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    "-webkit-font-smoothing": "antialiased",
    backgroundColor: "$gray900",
    color: "$gray100",
  },

  "body, input, textarea, button": {
    fontFamily: "Roboto",
    fontWeight: 400,
  },

  " ::-webkit-scrollbar ": {
    width: "0.4375rem",
    height: "0.4375rem",
  },
  "::-webkit-scrollbar-track": {
    background: "$gray800",
  },

  "::-webkit-scrollbar-thumb": {
    "border-radius": "999px",
    background: "$green300",
  },

  html: {
    "@bp2": {
      fontSize: "15px",
    },
  },
});
