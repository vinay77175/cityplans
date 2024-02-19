import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import Button from "@mui/material/Button";
import Image from "next/image";
import backImg1 from "../../public/Images/about_back.png";
import backImg2 from "../../public/Images/about_image_1.png";
import backImg3 from "../../public/Images/about_image_2.png";
import backImg4 from "../../public/Images/about_image_4.png";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const About_section = () => {
  return (
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
      <Container maxWidth="xl">
        <Grid container sx={{ display: "flex" }}>
          <Box width="100%" display="flex" justifyContent="center">
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Jacques Francois",
                color: "white",
                marginTop: { xs: "10vh", sm: "12vh" },
                textAlign: { xs: "center", lg: "left" },
                display: { xs: "block", lg: "none" },
                fontSize: { xs: "3rem", sm: "3.5rem" },
                marginBottom: { xs: "4vh", sm: "5vh" },
              }}
            >
              About Us
            </Typography>
          </Box>

          <Grid
            item
            sx={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              // position: "relative",
            }}
            xs={12}
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
              sx={{
                fontFamily: "Jacques Francois",
                color: "white",
                marginTop: { xs: "15vh", lg: "5vh", xl: "7vh" },
                textAlign: { xs: "center", lg: "left" },
                display: { xs: "none", lg: "block" },
                fontSize: { lg: "3.4rem" },
              }}
            >
              About Us
            </Typography>

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
              Sit amet, consectetur adipiscing elit.
            </Typography>

            <Typography
              sx={{
                marginTop: { xs: "8vh", lg: "5vh" },
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

            <Box
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
                    &gt; Sit amet, consectetur adipiscing elit.
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
                    &gt; Sit amet, consectetur adipiscing elit.
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
                    &gt; Sit amet, consectetur adipiscing elit.
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
                    &gt; Sit amet, consectetur adipiscing elit.
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
                    &gt; Sit amet, consectetur adipiscing elit.
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
                    &gt; Sit amet, consectetur adipiscing elit.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
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
                  color: "darkred",
                  backgroundColor: "white",
                  "&:hover": {
                    backgroundColor: "#CCC",
                  },
                  borderRadius: "0px !important",
                }}
              >
                View More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About_section;
