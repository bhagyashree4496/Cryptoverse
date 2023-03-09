import { Avatar, Grid, Box, Paper, Typography, Divider } from "@mui/material";
import React from "react";

export default function Cryptocurrency({ coin }) {
  const f = new Intl.NumberFormat("en-us");
  const g = new Intl.NumberFormat("en-us", {
    currency: "USD",
    style: "currency",
    notation: "compact",
  });
  return (
    <>
      <Paper sx={{ "&:hover": { boxShadow: "5px 10px 18px #888888" } }}>
        <Box padding={2}>
          <Paper elevation={1}>
            <Grid container spacing={0}>
              <Grid item xs={10}>
                <Typography
                  variant="h6"
                  padding={1}
                >{`${coin.rank}. ${coin.name}`}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Avatar
                  alt={coin.name}
                  src={coin.iconUrl}
                  sx={{ px: "2px", py: "1px" }}
                ></Avatar>
              </Grid>
            </Grid>
          </Paper>

          <Divider flexItem sx={{ width: "100%", height: "100%" }} />

          <Box xs={12} pt={2}>
            <Typography variant="h6" fontSize={15}>{`Price : ${f.format(
              coin.price
            )}`}</Typography>
            <Typography variant="h6" fontSize={15}>{`Market Cap : ${g.format(
              coin.marketCap
            )}`}</Typography>
            <Typography variant="h6" fontSize={15}>{`Daily Change : ${f.format(
              coin.change
            )}`}</Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
