import { Box, Typography } from "@mui/material";

import React, { useContext } from "react";
import Exchange from "./Exchange";
import { Cryptodatacontext } from "../../Context/Context";

export default function Exchanges() {
  const [, , , exchanges] = useContext(Cryptodatacontext);
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
