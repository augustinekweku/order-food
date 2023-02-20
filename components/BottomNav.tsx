import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import StoreIcon from "@mui/icons-material/Store";
import { Restaurant } from "@mui/icons-material";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  return (
    <Box position={"fixed"} bottom={0} width={"100%"}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Dishes" icon={<Restaurant />} />
        <BottomNavigationAction label="Food Joints" icon={<StoreIcon />} />
        <BottomNavigationAction
          label="My Orders"
          icon={<FormatListNumberedIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
