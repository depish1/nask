import { Box } from "@mui/material";

import { CityDataContextProvider } from "Contexts/CityDataContext";
import { LeftColumn } from "Components/CityData/LeftColumn/LeftColumn";
import { RightColumn } from "Components/CityData/RightColumn/RightColumn";

export const CityDataContent = () => (
  <CityDataContextProvider>
    <Box
      component="main"
      sx={{
        display: "grid",
        gap: "59px",
        gridTemplateColumns: "1fr 300px",
        padding: "32px 80px 32px 24px",
        width: "100%",
      }}
    >
      <LeftColumn />
      <RightColumn />
    </Box>
  </CityDataContextProvider>
);
