import React from "react";
import { Box, Typography, Container, List, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#001529",
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
