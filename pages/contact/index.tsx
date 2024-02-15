import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        paddingX: "0vh !important",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            width: "100%",
            height: "20vh",
            backgroundColor: "#F0F2F5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Jacques Francois",
              textAlign: "center",
            }}
          >
            <span style={{ color: "#B12930" }}> About</span> Us
          </Typography>
        </Box>
      </Box>

      {/* <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "25%",
            }}
          >
            <Box
              sx={{
                height: "1vh",
                backgroundColor: "black",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  paddingX: "2vh",
                  color: "black",
                  textAlign: "center",
                  fontSize: "2rem",
                }}
              >
                About Us
              </Box>
            </Box>
          </Box> */}
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "20vh",
        }}
      >
        <Grid item>
          <Box
            sx={{
              width: "100%",
              border: "1px solid black",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "red",
                height: "9vh",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  paddingX: "2vh",
                  color: "black",
                  textAlign: "center",
                  fontSize: "2rem",
                }}
              >
                Let's Talk
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
