import { Box, Typography } from "@mui/material";

import React from "react";
import Exchange from "./Exchange";

export default function Exchanges({ exchanges }) {
  return (
    <Box sx={{ py: "15px" }}>
      <Typography variant="h5" my={2}>
        Cryptocurrency Spot Exchanges:
      </Typography>
      {exchanges.map((exchange, i) => {
        return <Exchange exchange={exchange}></Exchange>;
      })}
    </Box>
  );
}
