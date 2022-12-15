import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function ReatingView(props) {
  const [value, setValue] = React.useState(props.rate);

  return (
    <Box
      sx={{
        "& > legend": { mt: 5 },
      }}
    >
      <Typography component="legend">{value}</Typography>
      <Rating name="read-only" value={value} readOnly />
    </Box>
  );
}
