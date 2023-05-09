import { createContext, useContext, useMemo } from "react";
import { useQuery } from "react-query";

import { CityType } from "Types/cities.types";
import { getCities } from "Api/cities";
import { useIdFromParams } from "Hooks/useIdFromParams";

type CityDataContextType = { selectedCity: CityType | null };

type CityContextProviderPropsType = {
  children: JSX.Element;
};

const CityDataContext = createContext<CityDataContextType>(undefined);

const CityDataContextProvider = ({ children }: CityContextProviderPropsType) => {
  const id = useIdFromParams();
  const { data } = useQuery("cities", getCities);

  const selectedCity: CityType | null = useMemo(() => {
    if (!data) return null;
    else if (id === undefined) return data[0];
    else return data.find((city) => city.id === id) || data[0];
  }, [data, id]);

  const value = useMemo(() => ({ selectedCity }), [selectedCity]);

  return <CityDataContext.Provider value={value}>{children}</CityDataContext.Provider>;
};

const useCityDataContext = () => {
  const context = useContext<CityDataContextType>(CityDataContext);
  if (!context) {
    throw new Error("CityDataContext not found");
  }

  return context.selectedCity;
};

export { CityDataContextProvider, useCityDataContext };
