import React from "react";
import { Box, Typography, Container, List, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(135.9deg, rgb(109, 25, 252) 16.4%, rgb(125, 31, 165) 56.1%)",

        width: "100%",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "4px",
      }}
    >
      <Typography variant="h6" textAlign="center" sx={{ fontSize: "15px" }}>
        Cryptoverse
      </Typography>
      <Typography variant="h6" textAlign="center" sx={{ fontSize: "15px" }}>
        All rights reserved
      </Typography>
      <List
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
          padding: 0,
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <ListItemText sx={{ padding: "3px" }}>Home</ListItemText>
        </Link>
        <Link to="/exchanges" style={{ textDecoration: "none" }}>
          <ListItemText sx={{ padding: "3px" }}>Exchanges</ListItemText>
        </Link>
        <Link to="news" style={{ textDecoration: "none" }}>
          <ListItemText sx={{ padding: "3px" }}>News</ListItemText>
        </Link>
      </List>
    </Box>
  );
}
