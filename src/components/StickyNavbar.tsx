import { memo } from "react";
import { AppBar, Typography } from "@mui/material";

const StickyNavbar = () => (
  <AppBar className="!sticky top-0 z-10 w-full rounded-none border-none bg-blue-500 shadow-none">
    <div className="flex items-center px-8 py-4 text-white">
      <Typography className="mr-4 py-1.5 font-bold text-xl">
        Bright Exercise
      </Typography>
    </div>
  </AppBar>
);

export default memo(StickyNavbar);
