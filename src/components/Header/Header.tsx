import { Box, Typography } from "@mui/material";

import { Options } from "Components/Header/Options";

export const Header = () => (
  <Box
    component="header"
    sx={(theme) => ({
      alignItems: "center",
      borderBottom: `1px solid ${theme.palette.customColors.sectionBorder}`,
      display: "flex",
      justifyContent: "space-between",
      padding: "20px 80px",
    })}
  >
    <Typography variant="h1" component="h1">
      Przeglądarka miast
    </Typography>
    <Options />
  </Box>
);
