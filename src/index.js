import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

// etend the theme
const colors = {
  brand: {
    100: "#ff5403",
    200: "#8a94a6",
    300: "#84a1ff",
    400: "#90c0e8",
    500: "#6fc2c5;"
  },
  dark: {
    100: " #1c1c1c",
    200:  "#2f2f2f" ,
    300: "#212529"
  },
};

const theme = extendTheme({ colors });
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
