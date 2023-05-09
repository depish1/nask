import { ListItem, ListItemButton } from "@mui/material";

import { EPaths } from "Enums/EPaths";
import { VoivodeshipType } from "Types/cities.types";
import { useNavigateParams } from "Hooks/useNavigateParams";
import { voivodeships } from "src/config";

type PropsType = {
  id: string;
  name: string;
  voivodeship: VoivodeshipType;
};

export const SingleCity = ({ id, name, voivodeship }: PropsType) => {
  const navigateWithParams = useNavigateParams();

  const handleClick = () => navigateWithParams(`/${EPaths.CITY_DATA}`, { id: `${id}` });

  return (
    <ListItem sx={{ p: 0 }} id={id} data-test={voivodeship}>
      <ListItemButton
        key={id}
        onClick={handleClick}
        sx={(theme) => ({
          border: `1px solid ${theme.palette.customColors.elementBorder}`,
          borderRadius: "6px",
          color: "primary.main",
          fontSize: "14px",
          lineHeight: "24px",
          width: "100%",
        })}
      >
        {name}
      </ListItemButton>
    </ListItem>
  );
};
