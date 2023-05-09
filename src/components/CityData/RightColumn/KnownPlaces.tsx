import { List, ListItem, Typography } from "@mui/material";
import { nanoid } from "nanoid";

type PropsType = {
  knownPlaces: string[];
};

export const KnownPlaces = ({ knownPlaces }: PropsType) => (
  <List
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    }}
  >
    <Typography component="h3" sx={{ mb: "12px" }} variant="h3">
      Znane miejsca
    </Typography>
    {knownPlaces.map((place) => (
      <ListItem
        key={nanoid()}
        sx={{
          p: 0,
          fontSize: "16px",
          fontWeight: "500",
          lineHeight: "24px",
        }}
      >
        <Typography
          component="span"
          sx={{ color: "#1E293B", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
        >
          {place}
        </Typography>
      </ListItem>
    ))}
  </List>
);
