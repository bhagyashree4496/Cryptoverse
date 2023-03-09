import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Eachnews from "./Eachnews";

export default function news({ news }) {
  return (
    <>
      <Box padding={6}>
        <TextField
          fullWidth
          id="outlined-basic"
          placeholder="Serach Cryptocurrencies News"
          variant="outlined"
        />
        <Grid container spacing={2} pt={5}>
          {news.map((anews, i) => {
            return (
              <Grid key={i} item xs={12} sm={6} md={4}>
                <Eachnews anews={anews}></Eachnews>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
