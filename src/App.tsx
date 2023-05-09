import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router";

import { router } from "src/router";
import { theme } from "Styles/theme";

export const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
);
