import { Typography } from "@mui/material";

type PropsType = {
  text: string;
  htmlFor: string;
};

export const Label = ({ text, htmlFor }: PropsType) => (
  <Typography
    component="label"
    htmlFor={htmlFor}
    sx={{ color: "primary.main", fontSize: "14px", fontWeight: "500", lineHeight: "20px" }}
  >
    {text}
  </Typography>
);
