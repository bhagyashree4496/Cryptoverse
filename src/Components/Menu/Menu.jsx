import React from "react";
import "./menu.css";

import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

import { Feed } from "@mui/icons-material";
export default function Menu() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "linear-gradient(to top, #7028e4 0%, #e5b2ca 100% )",
          height: "100vh",
          display: { xs: "none", md: "block" },
          position: "fixed",
        }}
      >
        <div>
          <nav className="navbar">
            <List>
              {" "}
              <Link to="/" className="Link">
                <ListItem
                  className="ListItem"
                  sx={{ "&hover": { bgcolor: "white" } }}
                >
                  <ListItemIcon sx={{ color: "white" }}>
                    <HomeIcon></HomeIcon>
                  </ListItemIcon>
                  <ListItemText sx={{ "&hover": { bgcolor: "white" } }}>
                    {/* <Link to="/" className="Link"> */}
                    Home
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/cryptocurrencies" className="Link">
                <ListItem className="ListItem">
                  <ListItemIcon sx={{ color: "white" }}>
                    <CurrencyBitcoinIcon />
                  </ListItemIcon>
                  <ListItemText>Cryptocurrencies</ListItemText>
                </ListItem>
              </Link>
              <Link to="/exchanges" className="Link">
                <ListItem className="ListItem">
                  <ListItemIcon sx={{ color: "white" }}>
                    <CurrencyExchangeIcon />
                  </ListItemIcon>
                  <ListItemText>Exchanges</ListItemText>
                </ListItem>
              </Link>
              <Link to="/news" className="Link">
                <ListItem className="ListItem">
                  <ListItemIcon sx={{ color: "white" }}>
                    <Feed />
                  </ListItemIcon>
                  <ListItemText>News</ListItemText>
                </ListItem>
              </Link>
            </List>
            {/* <ul>
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
  </li>
  <li>
    <Link to="/exchanges">Exchanges</Link>
  </li>
  <li>
    <Link to="/news">News</Link>
  </li>
</ul> */}
          </nav>
        </div>
      </Box>
    </>
  );
}
