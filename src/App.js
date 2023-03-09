import React, { useEffect, useState } from "react";

import { createTheme, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import Menu from "./Components/Menu/Menu";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import { getCryptoData, getNewsData, getExchangesData } from "./Api";
export default function App() {
  const [stats, setstats] = useState({});
  const [coins, setcoins] = useState([]);
  const [news, setNews] = useState([]);
  const [exchanges, setExchanges] = useState([]);
  const [theme, settheme] = useState("dark");
  useEffect(() => {
    getCryptoData().then((data) => {
      console.log(data, "data");
      setstats(data.stats);
      setcoins(data.coins);
    });
    getNewsData().then((News) => {
      setNews(News);
    });
    getExchangesData().then((exchanges) => {
      setExchanges(exchanges.exchanges);
    });
  }, []);
  console.log(stats, "stats");
  console.log(coins, "coins");
  console.log(news, "newsyyy");
  console.log(exchanges, "exchanges");
  // useEffect(() => {
  //   getNewsData().then((News) => {
  //     console.log(News, "news");
  //   });
  // }, []);
  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });
  return (
    <>
      {" "}
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Grid container rowSpacing={7}>
          <Grid item xs={12} sx={{ height: "50px" }}>
            <Navbar theme={theme} settheme={settheme}></Navbar>
          </Grid>
          <Grid item xs={0} lg={2}>
            <Menu></Menu>
          </Grid>
          <Grid item xs={12} lg={10}>
            <Main
              stats={stats}
              coins={coins}
              news={news}
              exchanges={exchanges}
            ></Main>
          </Grid>
        </Grid>{" "}
      </ThemeProvider>
    </>
  );
}
