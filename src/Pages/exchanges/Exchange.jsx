import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Exchange({ exchange }) {
  const f = new Intl.NumberFormat("en-us");
  const g = new Intl.NumberFormat("en-us", {
    currency: "USD",
    style: "currency",
    notation: "compact",
  });
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:
              "linear-gradient(109.6deg, rgb(90, 209, 243) 11.2%, rgb(254, 135, 245) 91.1%)",
          }}
        >
          <Typography mx={2}>{`${exchange.rank}.
      `}</Typography>
          <Avatar alt={exchange.name} src={exchange.iconUrl}></Avatar>
          <Typography variant="h6" mx={2}>
            {exchange.name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack sx={{ px: "10px" }} spacing={2}>
            <Typography>{`Trading volume(24h) : ${g.format(
              exchange["24hVolume"]
            )}`}</Typography>
            <Typography>{`BTC Price : ${g.format(
              exchange.btcPrice
            )}`}</Typography>
            <Typography>{`Number Of Markets : ${exchange.numberOfMarkets}`}</Typography>
            <Typography>{`Price : ${g.format(exchange.price)}`}</Typography>
            <Typography>
              {`Recommended : `}
              {exchange.recommended ? "YES" : "NO"}
            </Typography>
            <Typography>
              {" "}
              {`Varified: `}
              {exchange.varified ? "YES" : "NO"}
            </Typography>

            <Link href={exchange.coinrankingUrl} underline="none">
              Know More
            </Link>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
