import { SvgIcon, SxProps, Theme } from "@mui/material";

type PropsType = { sx?: SxProps<Theme> };

export const PencilIcon = ({ sx }: PropsType) => (
  <SvgIcon sx={{ ...sx, fill: "none" }} width="16" height="16" viewBox="0 0 16 16">
    <g clipPath="url(#clip0_1_106)">
      <path
        d="M12 1.33334L14.6667 4.00001"
        stroke="#0F172A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 13.6667L12.6667 6.00001L10 3.33334L2.33333 11L1.33333 14.6667L5 13.6667Z"
        stroke="#0F172A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_106">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </SvgIcon>
);
