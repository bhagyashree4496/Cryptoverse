import React, { useState } from "react";
import logo from "./logo.png";

import "./menu.css";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Avatar,
  Popper,
  IconButton,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { Feed } from "@mui/icons-material";

export default function Navbar({ theme, settheme }) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setanchorEl] = useState(null);
  const openorclose = (e) => {
    setanchorEl(e.currentTarget);
    // setanchorEl({ top: "100px", left: 0 });
    const truefalse = open ? false : true;
    setOpen(truefalse);
  };
  const handleclose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };
  const handleTheme = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <AppBar
        sx={{
          // backgroundColor: "#001529",
          backgroundImage: "linear-gradient(to top, #c471f5 0%, #fa71cd 100%)",
          display: "block",
          position: "fixed",
          top: "0",
        }}
      >
        <Toolbar py={0} sx={{ justifyContent: "space-between" }}>
          <Link to="/" className="Link">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <MenuIcon
                onClick={openorclose}
                sx={{
                  display: {
                    xs: "inline",
                    lg: "none",
                    height: "40px",
                    width: "40px",
                  },
                }}
              ></MenuIcon>

              <Typography
                variant="h4"
                href="/"
                sx={{
                  fontFamily: "monospace",
                  letterSpacing: ".05rem",

                  fontWeight: "600",
                  ml: "5px",
                  display: { xs: "none", md: "block" },
                  // background:
                  //   "linear-gradient(to right, #f9d423 0%, #ff4e50 100%)",
                  // color: "transparent ",
                  // backgroundClip: "text",
                  color: "black",
                }}
              >
                Cryptoworld
              </Typography>
            </Box>
          </Link>
          <Tooltip title="Change Theme">
            <IconButton
              size="small"
              onClick={handleTheme}
              sx={{ color: "#FFFFFF" }}
            >
              <DarkModeOutlinedIcon></DarkModeOutlinedIcon>
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <Popper
        open={open}
        role={undefined}
        onClose={handleclose}
        anchorEl={anchorEl}
        placement="bottom-start"
        sx={{
          background:
            "linear-gradient(to right, rgb(101, 78, 163), rgb(234, 175, 200))",
          width: "100vw",
          transition: "width 0.1s ease-in",
        }}
      >
        <div>
          <nav className="navbar">
            <List>
              {" "}
              <Link to="/" className="Link">
                <ListItem className="ListItem">
                  <ListItemIcon sx={{ color: "white" }}>
                    <HomeIcon></HomeIcon>
                  </ListItemIcon>
                  <ListItemText>Home</ListItemText>
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
          </nav>
        </div>
      </Popper>
    </>
  );
}
