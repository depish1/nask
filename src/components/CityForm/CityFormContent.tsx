import { Box, Button } from "@mui/material";
import { Controller } from "react-hook-form";

import { FormVoivodeshipSelect } from "Components/CityForm/FormVoivodeshipSelect";
import { InputField } from "Components/SharedComponents/InputField";
import { useCityForm } from "Hooks/useCityForm";
import { CityFormHeader } from "./CityFormHeader";

export const CityFormContent = () => {
  const {
    methods: { handleSubmit, control },
    onSubmit,
    isEditMode,
  } = useCityForm();

  return (
    <Box
      sx={{
        display: "grid",
        gap: "24px",
        gridTemplateRows: "min-content 1fr",
        height: "100%",
        p: " 0 24px",
        pt: "32px",
      }}
    >
      <CityFormHeader isEditMode={isEditMode} />
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <Controller
          name={"name"}
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <InputField
              id="name"
              fullWidth
              onChange={onChange}
              value={value}
              label="Nazwa miasta"
              placeholder="Wpisz nazwę miasta"
              maxWidth="278px"
              error={!!error}
              helperText={error && error.message}
              data-test="form-field"
            />
          )}
        />
        <Controller
          name={"voivodeship"}
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormVoivodeshipSelect
              fullWidth
              onChange={onChange}
              value={value}
              maxWidth="278px"
              error={!!error}
              helperText={error && error.message}
              data-test="form-field"
            />
          )}
        />
        <Controller
          name={"picture_url"}
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <InputField
              id="picture_url"
              fullWidth
              onChange={onChange}
              value={value}
              label="Zdjęcia"
              placeholder="Wprowadź URL do zdjęcia miasta"
              maxWidth="278px"
              error={!!error}
              helperText={error && error.message}
              data-test="form-field"
            />
          )}
        />
        <Controller
          name={"description"}
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <InputField
              id="description"
              fullWidth
              multiline
              rows={3}
              onChange={onChange}
              value={value}
              label="Opis miasta"
              placeholder="Wpisz opis miasta"
              maxWidth="530px"
              error={!!error}
              helperText={error && error.message}
              data-test="form-field"
            />
          )}
        />
        <Controller
          name={"links"}
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <InputField
              id="links"
              fullWidth
              multiline
              rows={3}
              onChange={onChange}
              value={value}
              label="Interesujące linki"
              placeholder="Wpisz interesujące linki oddzielone przecinkami"
              maxWidth="530px"
              error={!!error}
              helperText={error && error.message}
              data-test="form-field"
            />
          )}
        />
        <Controller
          name={"known_places"}
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <InputField
              id="known_places"
              fullWidth
              multiline
              rows={3}
              onChange={onChange}
              value={value}
              label="Znane miejsca"
              placeholder="Wpisz znane miejsca oddzielone przecinkami"
              maxWidth="530px"
              error={!!error}
              helperText={error && error.message}
              data-test="form-field"
            />
          )}
        />

        <Button
          sx={{ mb: "24px", mt: "auto", textTransform: "none", width: "max-content" }}
          variant="contained"
          type="submit"
          id="submit-btn"
        >
          {isEditMode ? "Zapisz" : "Dodaj nowe miasto"}
        </Button>
      </Box>{" "}
    </Box>
  );
};
