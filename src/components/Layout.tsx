import { Box } from "@mui/material";
import { Outlet } from "react-router";
import { useIsFetching } from "react-query";

import { Loader } from "Components/SharedComponents/Loader";
import { Header } from "Components/Header/Header";

export const Layout = () => {
  const isFetching = useIsFetching();

  return (
    <Box
      sx={{
        background: "customColors.background",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box sx={{ display: "grid", gridTemplateColumns: "404px 1fr", height: "100%", overflow: "hidden" }}>
        <Outlet />
      </Box>
      {!!isFetching && <Loader />}
    </Box>
  );
};
