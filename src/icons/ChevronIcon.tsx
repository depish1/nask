import { SvgIcon, SxProps, Theme } from "@mui/material";

type PropsType = { sx?: SxProps<Theme> };

export const ChevronIcon = ({ sx }: PropsType) => (
  <SvgIcon sx={{ ...sx, fill: "none" }} width="16" height="16" viewBox="0 0 16 16">
    <path d="M4 6L8 10L12 6" stroke="#94A3B8" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
  </SvgIcon>
);
