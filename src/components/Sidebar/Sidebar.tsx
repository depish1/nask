import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router";

import { CitiesList } from "Components/Sidebar/CitiesList";
import { CitySelectionContextProvider } from "Contexts/CitySelectionContext";
import { EPaths } from "Enums/EPaths";
import { Filters } from "Components/Sidebar/Filters";

export const Sidebar = () => {
  const navigate = useNavigate();

  const navigateToAddCityForm = () => navigate(`/${EPaths.CITY_FORM}`);

  return (
    <CitySelectionContextProvider>
      <Box
        component="aside"
        sx={(theme) => ({
          borderRight: `1px solid ${theme.palette.customColors.sectionBorder}`,
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          height: "100%",
          p: "32px 8px 0 64px",
          width: "404px",
        })}
      >
        <Filters />
        <CitiesList />
        <Box sx={{ p: "0 16px 24px", mt: "auto", width: "max-content" }}>
          <Button
            data-test="add-new-city-btn"
            fullWidth
            onClick={navigateToAddCityForm}
            variant="contained"
            sx={{ textTransform: "none" }}
          >
            Dodaj nowe miasto
          </Button>
        </Box>
      </Box>
    </CitySelectionContextProvider>
  );
};
