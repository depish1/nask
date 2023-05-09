import { Box } from "@mui/material";
import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

export const ScrollbarYWrapper = ({ children }: PropsType) => (
  <Box
    sx={(theme) => ({
      height: "100%",
      width: "100%",
      overflowY: "auto",
      overflowX: "hidden",
      scrollbarGutter: "stable",
      "&::-webkit-scrollbar": {
        height: "10px",
        width: "10px",
      },
      "&::-webkit-scrollbar-thumb": {
        background: `${theme.palette.primary.main}bb`,
        borderRadius: "20px",
        "&:hover": {
          background: `${theme.palette.primary.main}cc`,
        },
      },
      "&::-webkit-scrollbar-corner": {
        backgroundColor: "transparent",
      },
    })}
  >
    {children}
  </Box>
);
