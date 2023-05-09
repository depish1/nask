import { MenuItem } from "@mui/material";

import { SelectField, PropsType as SelectFieldPropsType } from "Components/SharedComponents/SelectField";
import { voivodeships } from "src/config";

type PropsType = Omit<SelectFieldPropsType, "children" | "placeholder" | "label" | "id">;

export const FormVoivodeshipSelect = (props: PropsType) => {
  return (
    <SelectField id="voivodeship" label="Województwo" placeholder="Wybierz województwo" {...props}>
      {voivodeships.map((el) => (
        <MenuItem key={el} value={el}>
          {el}
        </MenuItem>
      ))}
    </SelectField>
  );
};
