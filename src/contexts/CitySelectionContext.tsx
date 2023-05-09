import { VoivodeshipType } from "Types/cities.types";
import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent, createContext, useCallback, useContext, useMemo, useState } from "react";

type CitySelectionContextType = {
  search: string;
  voivodeship: VoivodeshipType | "";
  selectVoivodeship: (e: SelectChangeEvent<unknown>) => void;
  updateSearch: (e: ChangeEvent<HTMLInputElement>) => void;
};

type CitySelectionContextProviderPropsType = {
  children: JSX.Element;
};

const CitySelectionContext = createContext<CitySelectionContextType>(undefined);

const CitySelectionContextProvider = ({ children }: CitySelectionContextProviderPropsType) => {
  const [search, setSearch] = useState("");
  const [voivodeship, setVoivodeship] = useState<VoivodeshipType | "">("");

  const selectVoivodeship = useCallback((e: SelectChangeEvent<unknown>) => {
    const newVoivodeship = e.target.value as VoivodeshipType;
    setVoivodeship(newVoivodeship);
  }, []);

  const updateSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  const value: CitySelectionContextType = useMemo(
    () => ({
      search,
      voivodeship,
      selectVoivodeship,
      updateSearch,
    }),
    [search, selectVoivodeship, updateSearch, voivodeship]
  );

  return <CitySelectionContext.Provider value={value}>{children}</CitySelectionContext.Provider>;
};

const useCitySelectionContext = () => {
  const context = useContext<CitySelectionContextType>(CitySelectionContext);
  if (!context) {
    throw new Error("CitiesSelectionContext not found");
  }

  return context;
};

export { CitySelectionContextProvider, useCitySelectionContext };
