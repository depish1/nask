import { Box, TextField, TextFieldProps } from "@mui/material";

import { Label } from "Components/SharedComponents/Label";

type PropsType = Omit<TextFieldProps, "label" | "sx"> & { label: string; maxWidth?: string };

export const InputField = ({ label, id, maxWidth, ...rest }: PropsType) => (
  <Box
    sx={{ display: "flex", flexDirection: "column", gap: "6px", maxWidth: maxWidth || "100%" }}
    data-test="form-field"
  >
    {label && <Label htmlFor={id} text={label} />}
    <TextField
      {...rest}
      id={id}
      data-test="form-field-input"
      sx={{
        "& input": {
          fontSize: "14px",
          height: "40px",
          padding: "0px 12px",
          "&::placeholder": {
            color: "#94A3B8",
            opacity: "1",
          },
        },
        "& fieldset": {
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "customColors.elementBorder",
          borderRadius: "6px",
        },
      }}
    />
  </Box>
);
