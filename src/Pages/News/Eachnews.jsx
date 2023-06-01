import {
  Button,
  Card,
  CardActions,
  CardContent,
  Link,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function Eachnews({ anews }) {
  const d = new Date(anews.date);

  return (
    <>
      <Card
        sx={{
          height: "330px",
          "&:hover": { boxShadow: "5px 10px 18px #888888" },
          background:
            "linear-gradient(109.6deg, rgb(90, 209, 243) 11.2%, rgb(254, 135, 245) 91.1%)",
        }}
      >
        <CardContent>
          <Stack justifyContent="space-between">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              // sx={{ height: "170px" }}
            >
              {anews.title}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="text.secondary"
              // sx={{ height: "110px" }}
            >
              {anews.description}
              <Link href={anews.url} underline="none">
                <Button size="small">Read More</Button>
              </Link>
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {`Posted on ${d.getDay()}-${d.getMonth()}-${d.getFullYear()}`}
            </Typography>
          </Stack>
        </CardContent>
        {/* <CardActions gap={2}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {`Posted on ${d.getDay()}-${d.getMonth()}-${d.getFullYear()}`}
          </Typography>
        </CardActions> */}
      </Card>
    </>
  );
}
