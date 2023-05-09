import { Box, CircularProgress } from "@mui/material";

export const Loader = () => (
  <Box
    sx={(theme) => ({
      alignItems: "center",
      backdropFilter: "blur(10px)",
      background: `${theme.palette.primary.main}11`,
      bottom: 0,
      display: "flex",
      justifyContent: "center",
      left: 0,
      position: "absolute",
      right: 0,
      top: 0,
      zIndex: 100,
    })}
  >
    <CircularProgress color="secondary" />
  </Box>
);
