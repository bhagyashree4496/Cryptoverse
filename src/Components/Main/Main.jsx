import React from "react";
import Footer from "../Footer/Footer";
import { Routes, Route, Link } from "react-router-dom";
import Exchanges from "../../Pages/exchanges/Exchanges";
import Home from "../../Pages/Home";
import News from "../../Pages/News/News";
import Cryptocurrencies from "../../Pages/Cryptocurrency/Cryptocurrencies";
import { Box } from "@mui/material";

export default function Main({ stats, coins, news, exchanges }) {
  return (
    <Box>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                stats={stats}
                coins={coins}
                news={news}
                exchanges={exchanges}
              />
            }
          ></Route>
          <Route
            path="/cryptocurrencies"
            element={<Cryptocurrencies coins={coins} />}
          ></Route>
          <Route
            path="/exchanges"
            element={<Exchanges exchanges={exchanges} />}
          ></Route>
          <Route path="/news" element={<News news={news} />}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </Box>
  );
}
