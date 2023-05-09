import { Link, List, ListItem, Typography } from "@mui/material";
import { nanoid } from "nanoid";

type PropsType = {
  links: string[];
};

export const Links = ({ links }: PropsType) => (
  <List
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    }}
  >
    <Typography component="h3" sx={{ mb: "6px" }} variant="h3">
      Interesujące Linki
    </Typography>
    {links.map((link) => (
      <ListItem
        key={nanoid()}
        sx={{
          p: 0,
          fontSize: "14px",
          fontWeight: "500",
          lineHeight: "14px",
        }}
      >
        <Link href={link} sx={{ color: "#334155", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {link}
        </Link>
      </ListItem>
    ))}
  </List>
);
