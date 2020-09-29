import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { Progress } from "./components/Progress";

import "./i18n";
import { lightTheme, darkTheme } from "./styles/theme";

ReactDOM.render(
  <Suspense
    fallback={
      <Progress
        color={
          window.localStorage.getItem("theme") === "light"
            ? lightTheme.accent
            : darkTheme.accent
        }
      />
    }
  >
    <App />
  </Suspense>,
  document.getElementById("root")
);
