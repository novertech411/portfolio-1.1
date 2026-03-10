import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// extend the theme to strict minimalist black & white
const colors = {
  brand: {
    100: "#000000",
    200: "#333333",
    300: "#666666",
    400: "#999999",
    500: "#cccccc"
  },
  dark: {
    100: "#000000",
    200: "#111111",
    300: "#222222"
  },
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ colors, config });
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
