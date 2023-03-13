import React from "react";
import {
  Typography,
  Grid,
  ListItemText,
  Box,
  Paper,
  Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";
import Cryptocurrency from "./Cryptocurrency/Cryptocurrency";
import Eachnews from "./News/Eachnews";
import Exchange from "./exchanges/Exchange";

export default function Home({ stats, coins, news, exchanges }) {
  console.log(stats, coins, "homeeee");
  const f = new Intl.NumberFormat("en-us");
  const g = new Intl.NumberFormat("en-us", {
    currency: "USD",
    style: "currency",
    notation: "compact",
  });
  return (
    <Box sx={{ padding: "10px" }}>
      <Typography variant="h5" sx={{ fontWeight: "700", marginTop: "20px" }}>
        Global Crypto Stats:
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ListItemText
            primary="Total Cryptocurrencies"
            secondary={f.format(stats.totalCoins)}
            primaryTypographyProps={{
              fontSize: "12px",
              fontWeight: "600",
              color: "#7E808290 ",
            }}
            secondaryTypographyProps={{ fontSize: "22px", fontWeight: "600" }}
          ></ListItemText>
        </Grid>
        <Grid item xs={6}>
          <ListItemText
            primary="Trading Volume"
            secondary={g.format(stats.total24hVolume)}
            primaryTypographyProps={{
              fontSize: "12px",
              fontWeight: "600",
              color: "#7E808290 ",
            }}
            secondaryTypographyProps={{ fontSize: "22px", fontWeight: "600" }}
          ></ListItemText>
        </Grid>
        <Grid item xs={6}>
          <ListItemText
            primary="Market Cap"
            secondary={g.format(stats.totalMarketCap)}
            primaryTypographyProps={{
              fontSize: "12px",
              fontWeight: "600",
              color: "#7E808290 ",
            }}
            secondaryTypographyProps={{ fontSize: "22px", fontWeight: "600" }}
          ></ListItemText>
        </Grid>
        <Grid item xs={6}>
          <ListItemText
            primary="Total Exchhanges"
            secondary={f.format(stats.totalExchanges)}
            primaryTypographyProps={{
              fontSize: "12px",
              fontWeight: "600",
              color: "#7E808290 ",
            }}
            secondaryTypographyProps={{ fontSize: "22px", fontWeight: "600" }}
          ></ListItemText>
        </Grid>
        <Grid item xs={6}>
          <ListItemText
            primary="Total Markets"
            secondary={f.format(stats.totalMarkets)}
            primaryTypographyProps={{
              fontSize: "12px",
              fontWeight: "600",
              color: "#7E808290 ",
            }}
            secondaryTypographyProps={{ fontSize: "22px", fontWeight: "600" }}
          ></ListItemText>
        </Grid>
        <Grid item xs={6}>
          <ListItemText
            primary="Total"
            secondary={f.format(stats.total)}
            primaryTypographyProps={{
              fontSize: "12px",
              fontWeight: "600",
              color: "#7E808290 ",
            }}
            secondaryTypographyProps={{ fontSize: "22px", fontWeight: "600" }}
          ></ListItemText>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: "50px" }}>
        <Grid container>
          <Grid item xs={10}>
            {" "}
            <Typography
              variant="h5"
              sx={{
                fontWeight: "700",
              }}
            >
              Top 10 Cryptos In The World:
            </Typography>
          </Grid>
          <Grid item xs={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Link
              to="/cryptocurrencies"
              style={{
                textDecoration: "none",
                fontWeight: "800",
                fontSize: "18px",
                color: "#2f76d3",
              }}
            >
              Show More
            </Link>
          </Grid>
        </Grid>

        <Grid container spacing={2} pt={1}>
          {coins.map((coin, i) => {
            return (
              <>
                {i <= 10 ? (
                  <Grid key={i} item xs={12} sm={6} md={3}>
                    <Cryptocurrency coin={coin}></Cryptocurrency>
                  </Grid>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </Grid>
      </Box>
      <Box sx={{ marginTop: "50px" }}>
        <Grid container>
          <Grid item xs={10}>
            {" "}
            <Typography
              variant="h5"
              sx={{
                fontWeight: "700",
              }}
            >
              Top Cryptocurrency News:
            </Typography>
          </Grid>
          <Grid item xs={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Link
              to="/news"
              style={{
                textDecoration: "none",
                fontWeight: "800",
                fontSize: "18px",
                color: "#2f76d3",
              }}
            >
              Show More
            </Link>
          </Grid>
        </Grid>

        <Grid container spacing={2} pt={2}>
          {news.map((anews, i) => {
            return (
              <>
                {i <= 10 ? (
                  <Grid key={i} item xs={12} sm={6} md={4}>
                    <Eachnews anews={anews}></Eachnews>
                  </Grid>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </Grid>
      </Box>
      <Box sx={{ marginTop: "50px" }}>
        <Grid container sx={{ marginBottom: "15px" }}>
          <Grid item xs={10}>
            {" "}
            <Typography
              variant="h5"
              sx={{
                fontWeight: "700",
              }}
            >
              Top Cryptocurrency Exchanges:
            </Typography>
          </Grid>
          <Grid item xs={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Link
              to="/exchanges"
              style={{
                textDecoration: "none",
                fontWeight: "800",
                fontSize: "18px",
                color: "#2f76d3",
              }}
            >
              Show More
            </Link>
          </Grid>
        </Grid>

        {exchanges.map((exchange, i) => {
          return (
            <>
              {i <= 10 ? <Exchange key={i} exchange={exchange}></Exchange> : ""}
            </>
          );
        })}
      </Box>
    </Box>
  );
}
{
  /* <Grid key={i} item xs={4} sm={6} m={12}>
    <Paper>
      <Grid container spacing={1}>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <Avatar alt={coin.name} src={coin.iconUrl}></Avatar>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Price:</Typography>
          <Typography variant="h6">Market Cap:</Typography>
          <Typography variant="h6">Daily Change:</Typography>
        </Grid>
      </Grid>
    </Paper>
  </Grid> */
}
