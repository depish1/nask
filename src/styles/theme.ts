import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    customColors: {
      background: string;
      sectionBorder: string;
      elementBorder: string;
    };
  }

  interface PaletteOptions {
    customColors: {
      background: string;
      sectionBorder: string;
      elementBorder: string;
    };
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: `"Inter",  sans-serif`,
  },
  palette: {
    primary: {
      main: "#0F172A",
    },
    customColors: {
      background: "#F5F5F5",
      sectionBorder: "#E5E7EB",
      elementBorder: "#CBD5E1",
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "h1" },
          style: {
            fontSize: "16px",
            fontWeight: "700",
          },
        },
        {
          props: { variant: "h2" },
          style: {
            fontSize: "32px",
            fontWeight: "600",
          },
        },
        {
          props: { variant: "h3" },
          style: {
            fontSize: "20px",
            fontWeight: "600",
            lineHeight: "28px",
          },
        },
        {
          props: { variant: "body1" },
          style: {
            color: "#1E293B",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "28px",
          },
        },
        {
          props: { variant: "body2" },
          style: {
            color: "#1E293B",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "20px",
          },
        },
      ],
    },

    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarGutter: "stable",
          "&::-webkit-scrollbar": {
            height: "1rem",
            width: "1rem",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "red",
            borderRadius: "2rem",
            "&:hover": {
              background: "secondary.main",
            },
          },
          "&::-webkit-scrollbar-corner": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
});
