import { Box } from "@mui/material";

import { Description } from "Components/CityData/LeftColumn/Description";
import { Header } from "Components/CityData/LeftColumn/Header";
import { Picture } from "Components/CityData/LeftColumn/Picture";
import { useCityDataContext } from "Contexts/CityDataContext";

export const LeftColumn = () => {
  const data = useCityDataContext();

  return (
    <Box component="section" sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {data?.name && <Header name={data.name} />}
      {data?.picture_url && <Picture name={data.name} src={data.picture_url} />}
      {data?.description && <Description desc={data.description} />}
    </Box>
  );
};
