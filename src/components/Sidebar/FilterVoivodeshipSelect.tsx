import { MenuItem } from "@mui/material";

import { SelectField } from "Components/SharedComponents/SelectField";
import { useCitySelectionContext } from "Contexts/CitySelectionContext";
import { voivodeships } from "src/config";

export const FilterVoivodeshipSelect = () => {
  const { voivodeship, selectVoivodeship } = useCitySelectionContext();

  return (
    <SelectField
      id="voivodeship"
      label="Województwo"
      onChange={selectVoivodeship}
      placeholder="Wybierz województwo"
      value={voivodeship}
    >
      {voivodeships.map((voivodeship) => (
        <MenuItem key={voivodeship} value={voivodeship}>
          {voivodeship}
        </MenuItem>
      ))}
    </SelectField>
  );
};
