import { Box, Typography } from "@mui/material";

type PropsType = {
  desc: string;
};

export const Description = ({ desc }: PropsType) => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: "11px" }}>
    <Typography component="h3" variant="h3">
      Opis
    </Typography>
    <Typography component="p" variant="body1">
      {desc}
    </Typography>
  </Box>
);
