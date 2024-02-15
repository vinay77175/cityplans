import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import Image from "next/image";
import backImg1 from "../../public/Images/about_back.png";
import backImg2 from "../../public/Images/about_image_1.png";
import backImg3 from "../../public/Images/about_image_2.png";
import backImg4 from "../../public/Images/about_image_4.png";

const Contact_us = () => {
  return (
    <Container maxWidth="xl" sx={{ paddingX: "0vh !important" }}>
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
      <Box
        sx={{
          // minHeight: "100vh",
          // width: "100%",
          bgcolor: "#B12930",
          backgroundImage: `url(${backImg1.src})`,
          marginBottom: "20px",
          backgroundSize: "cover",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Grid container sx={{}}>
          <Grid
            item
            sx={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",

              // position: "relative",
              // marginTop: "0vh",
            }}
            sm={12}
            md={12}
            lg={7}
          >
            {/* <img className="dotImage_1" src={backImg4.src} alt="image" /> */}
            <Image
              className="homeImage_1"
              src={backImg2.src}
              alt="image_1"
              height={600}
              width={750}
              // fill
              layout="intrinsic"
              objectFit="contain"
              quality={100}
              priority={true}
              // sizes="(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 33vw"
            />
            <Image
              className="homeImage_2"
              src={backImg3.src}
              alt="image_1"
              height={600}
              width={750}
              // fill
              layout="intrinsic"
              objectFit="contain"
              quality={100}
              priority={true}
              // sizes="(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 33vw"
            />

            {/* <img className="dotImage_2" src={backImg4.src} alt="" /> */}
          </Grid>
          <Grid item sm={12} md={12} lg={5}>
            <Typography
              variant="h3"
              sx={{
                marginTop: { xs: "15vh", lg: "15vh", xl: "8vh" },
                textAlign: { xs: "justify", lg: "left" },
                fontFamily: "Jacques Francois",
                color: "white",
                px: { xs: "3vh", md: "2vh", lg: "0vh" },
              }}
            >
              Get To know Us
            </Typography>
            <Typography
              sx={{
                marginTop: { xs: "3vh", lg: "6vh", xl: "5vh" },
                textAlign: { xs: "justify", lg: "left" },
                fontFamily: "Jacques Francois",
                color: "white",

                fontSize: { xs: "1.4rem", sm: "1.6rem", lg: "1.8rem" },
                px: { xs: "3vh", md: "2vh", lg: "0vh" },
              }}
            >
              About Us
            </Typography>

            <Typography
              sx={{
                marginTop: { xs: "8vh", lg: "1vh" },
                fontFamily: "Times New Roman",
                color: "white",
                paddingX: { xs: "3vh", lg: "0vh" },
                textAlign: { xs: "justify", lg: "justify" },
                fontSize: { xs: "1.2rem", sm: "1.35rem", lg: "1.4rem" },
                letterSpacing: "2px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Curabitur consequat.
            </Typography>

            <Typography
              sx={{
                marginTop: { xs: "3vh", lg: "6vh", xl: "5vh" },
                textAlign: { xs: "justify", lg: "left" },
                fontFamily: "Jacques Francois",
                color: "white",

                fontSize: { xs: "1.4rem", sm: "1.6rem", lg: "1.8rem" },
                px: { xs: "3vh", md: "2vh", lg: "0vh" },
              }}
            >
              Our Mission
            </Typography>
            <Typography
              sx={{
                marginTop: { xs: "8vh", lg: "1vh" },
                fontFamily: "Times New Roman",
                color: "white",
                paddingX: { xs: "3vh", lg: "0vh" },
                textAlign: { xs: "justify", lg: "justify" },
                fontSize: { xs: "1.2rem", sm: "1.35rem", lg: "1.4rem" },
                letterSpacing: "2px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Curabitur consequat.
            </Typography>

            {/* <Box
            sx={{
              display: "flex",
              paddingTop: "5vh",
              paddingX: { xs: "3vh", lg: "0vh" },
            }}
          >
            <Grid
              container
              sx={{ justifyContent: { xs: "space-around", lg: "normal" } }}
            >
              <Grid item>
                <Typography
                  sx={{
                    fontFamily: "Times New Roman ",
                    color: "white",
                    fontSize: {
                      xs: "18px",
                      sm: "20px",
                      lg: "22px",
                    },
                    marginBottom: { xs: "12px", xl: "15px" },
                    paddingLeft: { xs: "2vh", md: "1vh" },
                    paddingRight: { xs: "3vh", lg: "2vh" },
                    textAlign: { xs: "justify", lg: "justify" },
                  }}
                >
                  Sit amet, consectetur adipiscing elit.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Times New Roman ",
                    color: "white",
                    fontSize: {
                      xs: "18px",
                      sm: "20px",
                      lg: "22px",
                    },
                    marginBottom: { xs: "12px", xl: "15px" },
                    paddingLeft: { xs: "2vh", md: "1vh" },
                    paddingRight: { xs: "3vh", lg: "2vh" },
                    textAlign: { xs: "justify", lg: "justify" },
                  }}
                >
                  Sit amet, consectetur adipiscing elit.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Times New Roman ",
                    color: "white",
                    fontSize: {
                      xs: "18px",
                      sm: "20px",
                      lg: "22px",
                    },
                    marginBottom: { xs: "12px", xl: "15px" },
                    paddingLeft: { xs: "2vh", md: "1vh" },
                    paddingRight: { xs: "3vh", lg: "2vh" },
                    textAlign: { xs: "justify", lg: "justify" },
                  }}
                >
                  Sit amet, consectetur adipiscing elit.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ justifyContent: { xs: "space-around", lg: "normal" } }}
            >
              <Grid item>
                <Typography
                  sx={{
                    fontFamily: "Times New Roman ",
                    color: "white",
                    fontSize: {
                      xs: "18px",
                      sm: "20px",
                      lg: "22px",
                    },
                    marginBottom: { xs: "12px", xl: "15px" },
                    paddingLeft: { xs: "2vh", md: "1vh" },
                    paddingRight: { xs: "2vh", lg: "2vh" },
                    textAlign: { xs: "justify", lg: "justify" },
                  }}
                >
                  Sit amet, consectetur adipiscing elit.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Times New Roman ",
                    color: "white",
                    fontSize: {
                      xs: "18px",
                      sm: "20px",
                      lg: "22px",
                    },
                    marginBottom: { xs: "12px", xl: "15px" },
                    paddingLeft: { xs: "2vh", md: "1vh" },
                    paddingRight: { xs: "2vh", lg: "2vh" },
                    textAlign: { xs: "justify", lg: "justify" },
                  }}
                >
                  Sit amet, consectetur adipiscing elit.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Times New Roman ",
                    color: "white",
                    fontSize: {
                      xs: "18px",
                      sm: "20px",
                      lg: "22px",
                    },
                    marginBottom: { xs: "12px", xl: "15px" },
                    paddingLeft: { xs: "2vh", md: "1vh" },
                    paddingRight: { xs: "2vh", lg: "2vh" },
                    textAlign: { xs: "justify", lg: "justify" },
                  }}
                >
                  Sit amet, consectetur adipiscing elit.
                </Typography>
              </Grid>
            </Grid>
          </Box> */}
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={{ xs: "center", lg: "flex-start" }}
              marginBottom={"10vh"}
              marginTop={"5vh"}
              paddingLeft={"1vh"}
            >
              <Button
                sx={{
                  padding: "2vh 5vh",
                  fontSize: {
                    xs: "18px",
                    sm: "20px",
                    lg: "22px",
                    xl: "24px",
                  },
                  fontFamily: "Times New Roman ",
                  color: "black",
                  backgroundColor: "white",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                  },
                }}
              >
                View More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
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
                Our Management
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
      </Grid>
    </Container>
  );
};

export default Contact_us;
