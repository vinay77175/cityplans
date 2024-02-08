import CopyrightIcon from "@mui/icons-material/Copyright";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import backImg1 from "../../public/Images/footer_back_img1.svg";
import backImg2 from "../../public/Images/footer_back_img2.svg";
import logo from "../../public/Images/CityPlans.svg";
import GitLogo from "../../public/Images/git_logo";
import FacebookLogo from "../../public/Images/facebook_logo";
import InstaLogo from "../../public/Images/insta_logo";
import TwitterLogo from "../../public/Images/twitter_logo";
const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        pt: 5,
        bgcolor: "#010101",
        color: "#fff",
        // minHeight: "50vh",
        backgroundImage: `url(${backImg1.src}),url(${backImg2.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom -30px left,top -30px right",
        backgroundSize: "contain",
      }}
    >
      {/* <Box
        component={"img"}
        src={backImg.src}
        sx={{ position: "absolute", top: 0, right: 0, opacity: 0.6 }}
      ></Box>
      <Box
        component={"img"}
        src={backImg.src}
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          transform: "rotate(180deg)",
          opacity: 0.6,
        }}
      ></Box> */}
      <Container maxWidth="xl">
        <Grid container py={5} spacing={8}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography>
              <Box component={"img"} src={logo.src} />
              <Typography
                sx={{ fontFamily: "Jacques Francois", fontSize: "1rem" }}
                gutterBottom
              >
                Shop our entire lineup of fine faves in store, get styled and
                join the Fine Crew.
              </Typography>
              <Typography sx={{ display: "flex", gap: 2, mt: 5 }}>
                <TwitterLogo SvgClass="SvgClass" IconClass="IconClass" />
                <FacebookLogo SvgClass="SvgClass" IconClass="IconClass" />
                <InstaLogo SvgClass="SvgClass" IconClass="IconClass" />
                <GitLogo SvgClass="SvgClass" IconClass="IconClass" />
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography
              gutterBottom
              mb={3}
              sx={{ fontWeight: 550, fontFamily: "Jacques Francois" }}
            >
              Store & Services
            </Typography>
            <Typography gutterBottom mt={2}>
              Services
            </Typography>
            <Typography gutterBottom mt={2}>
              Projects
            </Typography>
            <Typography gutterBottom mt={2}>
              Solutions
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography
              gutterBottom
              mb={3}
              sx={{ fontWeight: 550, fontFamily: "Jacques Francois" }}
            >
              Help
            </Typography>
            <Typography gutterBottom mt={2}>
              Shipping
            </Typography>
            <Typography gutterBottom mt={2}>
              Returns + Exchange
            </Typography>
            <Typography gutterBottom mt={2}>
              Warranty
            </Typography>
            <Typography gutterBottom mt={2}>
              All FAQ
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography
              gutterBottom
              mb={3}
              sx={{ fontWeight: 550, fontFamily: "Jacques Francois" }}
            >
              CONTACT INFORMATION
            </Typography>
            <Typography gutterBottom mt={2}>
              Phone : +0123 456 7890
            </Typography>
            <Typography gutterBottom mt={2}>
              Email : info@cityplans.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={2.5} px={{ xs: 6, sm: 0 }}>
            <Typography
              gutterBottom
              mb={3}
              sx={{ fontWeight: 550, fontFamily: "Jacques Francois" }}
            >
              SIGNUP NEWSLETTER
            </Typography>
            <TextField
              variant="outlined"
              sx={{ bgcolor: "white", borderRadius: 1 }}
              size="small"
              fullWidth
            ></TextField>
            <Button
              variant="contained"
              fullWidth
              sx={{
                "&:hover": {
                  bgcolor: "hsl(357, 62%, 55%)",
                },
                bgcolor: "#B12930",
                mt: 2,
              }}
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          bgcolor: "#B12930",
          py: 1,
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Typography>
              <span style={{ fontSize: "20px" }}>&copy;</span> CopyRight{" "}
              <span style={{ fontWeight: 700 }}>CityPlans</span>. All Rights
              Reserved
            </Typography>
            <Typography>Designed by RMT</Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
