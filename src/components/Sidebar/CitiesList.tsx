import { List } from "@mui/material";
import { useMemo } from "react";
import { useQuery } from "react-query";

import { CityType, VoivodeshipType } from "Types/cities.types";
import { SingleCity } from "Components/Sidebar/SingleCity";
import { getCities } from "Api/cities";
import { useCitySelectionContext } from "Contexts/CitySelectionContext";

const filterCities = (cities: CityType[], filterVoivodeship: "" | VoivodeshipType, search: string): CityType[] => {
  if (!cities) return [];
  else if (search) return cities.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()));
  else if (filterVoivodeship)
    return cities.filter(({ voivodeship }) => voivodeship.toLowerCase() === filterVoivodeship.toLowerCase());
  else return cities;
};

export const CitiesList = () => {
  const { data, isError } = useQuery("cities", getCities);
  const { voivodeship, search } = useCitySelectionContext();
  const filteredCities = useMemo(() => filterCities(data, voivodeship, search), [data, search, voivodeship]);

  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        p: "0 16px",
      }}
      data-test="city-list"
    >
      {isError && <em>Something went wrong with fetching data</em>}
      {filteredCities.map(({ id, name, voivodeship }) => (
        <SingleCity key={id} id={id} name={name} voivodeship={voivodeship} />
      ))}
    </List>
  );
};
