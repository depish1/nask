import { Box } from "@mui/material";

import { Links } from "Components/CityData/RightColumn/Links";
import { KnownPlaces } from "Components/CityData/RightColumn/KnownPlaces";
import { useCityDataContext } from "Contexts/CityDataContext";

export const RightColumn = () => {
  const data = useCityDataContext();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "25px", width: "300px" }}>
      {data?.known_places && <KnownPlaces knownPlaces={data.known_places} />}
      {data?.links && <Links links={data.links} />}
    </Box>
  );
};
