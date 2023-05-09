import { Box, FormControl, FormHelperText, MenuItem, Select, SelectProps } from "@mui/material";
import { useState } from "react";

import { ChevronIcon } from "Icons/ChevronIcon";
import { Label } from "Components/SharedComponents/Label";

export type PropsType = Omit<SelectProps, "label" | "sx"> & { label: string; maxWidth?: string; helperText?: string };

export const SelectField = ({ id, label, placeholder, children, maxWidth, helperText, error, ...rest }: PropsType) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FormControl error={error}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "6px", maxWidth: maxWidth || "100%" }}>
        {label && <Label htmlFor={id} text={label} />}
        <Select
          {...rest}
          id={id}
          displayEmpty
          open={isOpen}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          sx={{
            fontSize: "14px",
            height: "40px",
            padding: "0px 12px",

            "& fieldset": {
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: "customColors.elementBorder",
              borderRadius: "6px",
            },
            "& .MuiSelect-select": {
              ...(!rest.value && { color: "#94A3B8" }),
              paddingLeft: 0,
            },
          }}
          MenuProps={{
            MenuListProps: {
              id: "select-menu-list",
            },
            PaperProps: { sx: { maxHeight: 450 } },
          }}
          IconComponent={() => <ChevronIcon sx={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }} />}
        >
          {placeholder && (
            <MenuItem value="" id="select-placeholder">
              {placeholder}
            </MenuItem>
          )}
          {children}
        </Select>
      </Box>
      {helperText && <FormHelperText id={`${id}-helper-text`}>{helperText}</FormHelperText>}
    </FormControl>
  );
};
