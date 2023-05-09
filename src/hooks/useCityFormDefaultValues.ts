import { getCities } from "Api/cities";
import { useQuery } from "react-query";
import { useIdFromParams } from "Hooks/useIdFromParams";
import { CityFormDataType, CityType } from "Types/cities.types";
import { useMemo } from "react";
import { adaptCityTypeToCityFormData } from "Helpers/adaptCityTypeToCityFormData";

const getCityById = (data: CityType[], id: string) => {
  if (!data || id === undefined) return null;
  else return data.find((city) => city.id === id) || null;
};

const emptyDefaultValues: CityFormDataType = {
  name: "",
  voivodeship: "",
  description: "",
  picture_url: "",
  known_places: "",
  links: "",
};

export const useCityFormDefaultValues = () => {
  const id = useIdFromParams();
  const { data } = useQuery("cities", getCities);

  const values = useMemo(() => {
    const cityById = getCityById(data, id);
    const isEditMode = !!cityById;
    const defaultValues = cityById ? adaptCityTypeToCityFormData(cityById) : emptyDefaultValues;

    return { defaultValues, isEditMode };
  }, [data, id]);

  return values;
};
