import { InputField } from "Components/SharedComponents/InputField";
import { useCitySelectionContext } from "Contexts/CitySelectionContext";

export const SearchInput = () => {
  const { search, updateSearch } = useCitySelectionContext();

  return (
    <InputField
      id="search"
      fullWidth
      label="Wyszukaj"
      onChange={updateSearch}
      placeholder="Wpisz nazwę miasta"
      value={search}
    />
  );
};
