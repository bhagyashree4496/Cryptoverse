import { TextField, Box, Grid } from "@mui/material";
import React from "react";
import Cryptocurrency from "./Cryptocurrency";

export default function Cryptocurrencies({ coins }) {
  return (
    <Box padding={6}>
      <TextField
        fullWidth
        id="outlined-basic"
        placeholder="Serach Cryptocurrencies"
        variant="outlined"
      />
      <Grid container spacing={2} pt={5}>
        {coins.map((coin, i) => {
          return (
            <Grid key={i} item xs={12} sm={6} md={3}>
              <Cryptocurrency coin={coin}></Cryptocurrency>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
