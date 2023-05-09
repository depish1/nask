import { Box } from "@mui/material";

import { CityFormContent } from "Components/CityForm/CityFormContent";
import { ScrollbarYWrapper } from "Components/SharedComponents/ScrollbarYWrapper";

export const CityFormPage = () => (
  <>
    <Box sx={{ height: "100%", width: "100%" }} />
    <ScrollbarYWrapper>
      <CityFormContent />
    </ScrollbarYWrapper>
  </>
);
