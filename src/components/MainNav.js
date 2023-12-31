import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MovieIcon from "@mui/icons-material/Movie";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import FestivalIcon from "@mui/icons-material/Festival";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { Link } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        zIndex: 100,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Popüler"
          icon={<WhatshotIcon />}
          component={Link}
          to="/Trends"
        />
        <BottomNavigationAction
          label="Festival"
          icon={<FestivalIcon />}
          component={Link}
          to="/festivals"
        />
        <BottomNavigationAction
          label="Tiyatro"
          icon={<TheaterComedyIcon />}
          component={Link}
          to="/theaters"
        />
        <BottomNavigationAction
          label="Sinema"
          icon={<MovieIcon />}
          component={Link}
          to="/movies"
        />
        <BottomNavigationAction
          label="Müzik"
          icon={<MusicNoteIcon />}
          component={Link}
          to="/concerts"
        />
      </BottomNavigation>
    </Box>
  );
}
