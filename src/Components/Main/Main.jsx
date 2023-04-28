import React from "react";
import Footer from "../Footer/Footer";
import { Routes, Route, Link } from "react-router-dom";
import Exchanges from "../../Pages/exchanges/Exchanges";
import Home from "../../Pages/Home";
import News from "../../Pages/News/News";
import Cryptocurrencies from "../../Pages/Cryptocurrency/Cryptocurrencies";
import { Box } from "@mui/material";

export default function Main() {
  return (
    <Box>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/cryptocurrencies"
            element={<Cryptocurrencies />}
          ></Route>
          <Route path="/exchanges" element={<Exchanges />}></Route>
          <Route path="/news" element={<News />}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </Box>
  );
}
