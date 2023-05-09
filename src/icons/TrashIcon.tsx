import { SvgIcon, SxProps, Theme } from "@mui/material";

type PropsType = { sx?: SxProps<Theme> };

export const TrashIcon = ({ sx }: PropsType) => (
  <SvgIcon sx={{ ...sx, fill: "none" }} width="16" height="16" viewBox="0 0 16 16">
    <path d="M2 4H14" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M12.6667 4V13.3333C12.6667 14 12 14.6667 11.3333 14.6667H4.66668C4.00001 14.6667 3.33334 14 3.33334 13.3333V4"
      stroke="#0F172A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.33334 4.00001V2.66668C5.33334 2.00001 6.00001 1.33334 6.66668 1.33334H9.33334C10 1.33334 10.6667 2.00001 10.6667 2.66668V4.00001"
      stroke="#0F172A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M6.66666 7.33334V11.3333" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.33334 7.33334V11.3333" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </SvgIcon>
);
