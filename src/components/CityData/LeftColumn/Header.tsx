import { Box, Typography } from "@mui/material";

import { Actions } from "Components/CityData/LeftColumn/Actions";

type PropsType = {
  name: string;
};

export const Header = ({ name }: PropsType) => (
  <Box component="header" sx={{ display: "flex", justifyContent: "space-between" }}>
    <Typography component="h2" variant="h2" id="city-name-header">
      {name}
    </Typography>
    <Actions />
  </Box>
);
