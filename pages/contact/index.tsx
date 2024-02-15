import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import React from "react";
import contactImage from "../../public/Images/contact_us.svg";
import Image from "next/image";

import PersonOutlineSharpIcon from "@mui/icons-material/PersonOutlineSharp";
import LocationCitySharpIcon from "@mui/icons-material/LocationOnSharp";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import MarkEmailUnreadSharpIcon from "@mui/icons-material/MarkEmailUnreadSharp";
import ForumSharpIcon from "@mui/icons-material/ForumSharp";

const Contact = () => {
  const handleSubmit = () => {
    console.log("submit");
  };
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
            height: { xs: "13vh", sm: "15vh", lg: "20vh", xl: "15vh" },
            backgroundColor: "#F0F2F5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Jacques Francois",
              textAlign: "center",
              fontSize: {
                xs: "2.5rem",
                sm: "3.5rem",
                md: "4rem",
                lg: "4.8rem",
                xl: "5.1rem",
              },
            }}
          >
            <span style={{ color: "#B12930" }}> Contact</span> Us
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
          height: "100%",
        }}
      >
        <Grid item>
          <Box
            sx={{
              width: {
                xs: "60vw",
                sm: "35vw",
                md: "35vw",
                lg: "25vw",
                xl: "18vw",
              },
              height: { xs: "10vh", lg: "10vh", xl: "7vh" },
              display: "flex",
              alignItems: "center",
              marginTop: { xs: "1vh", lg: "3vh", xl: "1vh" },
            }}
          >
            <Box
              sx={{
                height: { xs: ".6vh", sm: ".5vh", lg: ".7vh", xl: ".5vh" },
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
                  fontSize: { xs: "2rem", lg: "2rem", xl: "3rem" },
                }}
              >
                Let's Talk
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Box
            sx={{
              marginBottom: { xs: "2vh", sm: "1vh", lg: "4vh", xl: "2vh" },
              marginTop: { xs: "1vh", sm: "0vh", lg: "2vh", xl: "2vh" },
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "14px",
                  sm: "18px",
                  md: "22px",
                  lg: "28px",
                  xl: "30px",
                },
                fontFamily: "Jacques Francois",
                textAlign: "center",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </Typography>
          </Box>
        </Grid>
        <Box>
          <Grid
            container
            sx={{ alignItems: "center", marginTop: "3vh", marginBottom: "5vh" }}
          >
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  paddingX: "3vh",
                }}
              >
                <Image
                  height={550}
                  width={700}
                  layout="intrinsic"
                  src={contactImage.src}
                  alt="Contact Us image"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ paddingX: "3vh", marginTop: "5vh" }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      // placeholder="First Name"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonOutlineSharpIcon
                              sx={{
                                fontSize: {
                                  sm: "2.3vh",
                                  lg: "3.7vh",
                                  xl: "2.3vh",
                                },
                              }}
                            />
                          </InputAdornment>
                        ),
                      }}
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonOutlineSharpIcon
                              sx={{
                                fontSize: {
                                  sm: "2.3vh",
                                  lg: "3.7vh",
                                  xl: "2.3vh",
                                },
                              }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="Location"
                      label="Location"
                      name="Location"
                      autoComplete="family-name"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LocationCitySharpIcon
                              sx={{
                                fontSize: {
                                  sm: "2.3vh",
                                  lg: "3.7vh",
                                  xl: "2.3vh",
                                },
                              }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="Phone Number"
                      label="Phone Number"
                      name="Phone Number"
                      autoComplete="family-name"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LocalPhoneSharpIcon
                              sx={{
                                fontSize: {
                                  sm: "2.3vh",
                                  lg: "3.7vh",
                                  xl: "2vh",
                                },
                              }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="Email"
                      label="Email"
                      name="Email"
                      autoComplete="family-name"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <MarkEmailUnreadSharpIcon
                              sx={{
                                fontSize: {
                                  sm: "2.3vh",
                                  lg: "3.7vh",
                                  xl: "2vh",
                                },
                              }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="Objectives"
                      label="Objectives"
                      name="Objectives"
                      autoComplete="family-name"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <ForumSharpIcon
                              sx={{
                                fontSize: {
                                  sm: "2.3vh",
                                  lg: "3.7vh",
                                  xl: "2vh",
                                },
                              }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Message"
                      id="outlined-size-small"
                      size="medium"
                      fullWidth
                      rows={6}
                      multiline
                    />
                  </Grid>
                  <Grid
                    item
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        sx={{
                          mx: "1vh",
                          padding: "1vh 3vh",
                          fontFamily: "Times New Roman ",
                          color: "white",
                          backgroundColor: "#B12930",
                          "&:hover": {
                            backgroundColor: "hsl(357,62%,55%)",
                          },
                          fontSize: "1.2rem",
                        }}
                      >
                        Submit
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
};

export default Contact;
