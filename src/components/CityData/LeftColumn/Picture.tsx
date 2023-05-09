import { Box } from "@mui/material";

type PropsType = {
  src: string;
  name: string;
};

export const Picture = ({ name, src }: PropsType) => (
  <Box>
    <Box
      component="img"
      sx={{
        borderRadius: "8px",
        width: "auto",
        maxWidth: "100%",
        height: "400px",
        objectFit: "contain",
        objectPosition: "left 50%",
        overflow: "hidden",
      }}
      alt={`Picture of the city(${name})`}
      src={src}
      height="400px"
    />
  </Box>
);
