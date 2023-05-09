import { Box } from "@mui/material";

import { FilterVoivodeshipSelect } from "Components/Sidebar/FilterVoivodeshipSelect";
import { SearchInput } from "Components/Sidebar/SearchInput";

export const Filters = () => (
  <Box
    sx={(theme) => ({
      borderBottom: `1px solid ${theme.palette.customColors.sectionBorder}`,
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      p: "0 16px 24px",
    })}
  >
    <SearchInput />
    <FilterVoivodeshipSelect />
  </Box>
);
