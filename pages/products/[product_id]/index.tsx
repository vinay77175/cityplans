import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Product_description = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ p: 2 }}>
        <Grid container sx={{ border: "1px solid black" }}>
          <Grid item xs={12} md={6} lg={5} sx={{ border: "1px solid black" }}>
            <Box>
              <img src="https://via.placeholder.com/500" alt="product_image" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={7} sx={{ border: "1px solid black" }}>
            <Box>
              <Typography>
                Nullam feugiat tortor non metus vulputate, id eleifend diam
                feugiat.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Product_description;
