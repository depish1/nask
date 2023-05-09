import { Typography } from "@mui/material";

type PropsType = {
  isEditMode: boolean;
};

export const CityFormHeader = ({ isEditMode }: PropsType) => (
  <Typography component="h2" variant="h2">
    {isEditMode ? "Edytuj miasto" : "Dodaj nowe miasto"}
  </Typography>
);
