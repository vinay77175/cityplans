import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import backImg1 from "../../public/Images/contact_back_img.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import locationIcon from "../../public/Images/Location.svg";
import callMaleIcon from "../../public/Images/Call male.svg";
import clockIcon from "../../public/Images/Clock.svg";
import letterIcon from "../../public/Images/Letter.svg";
const Contact_section = () => {
  return (
    <Box
      sx={{
        //   minHeight: "100vh",
        backgroundImage: `url(${backImg1.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        py: "9vh",
      }}
    >
      <Container maxWidth="xl">
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Jacques Francois",
              textAlign: "center",
              fontSize: { xs: "3.1rem" },
            }}
          >
            <span style={{ color: "#B12930" }}>Contact</span> Us{" "}
          </Typography>
        </Box>
        <Grid container sx={{ mt: 8 }} px={{ xs: 2, lg: 8 }}>
          <Grid item xs={12} lg={5}>
            <Grid container spacing={{ xs: 3, sm: 6 }}>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  sx={{
                    maxWidth: 300,
                    minHeight: 250,
                    bgcolor: "#fff",
                    p: 3,
                  }}
                >
                  <CardContent>
                    <Typography
                      sx={{
                        objectFit: "cover",
                      }}
                    >
                      <Box
                        component={"img"}
                        src={locationIcon.src}
                        height="60px"
                      />
                    </Typography>
                    <Typography
                      sx={{ my: 2, color: "#1D4080", fontSize: "1.2rem" }}
                    >
                      Address
                    </Typography>
                    <Typography variant="body2" color={"text.secondary"}>
                      A108 Adam Street, New York, NY 535022
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  sx={{
                    maxWidth: 300,
                    minHeight: 250,
                    bgcolor: "#fff",
                    p: 3,
                  }}
                >
                  <CardContent>
                    <Typography sx={{ objectFit: "cover" }}>
                      <Box
                        component={"img"}
                        src={callMaleIcon.src}
                        height="60px"
                      />
                    </Typography>
                    <Typography
                      sx={{ my: 2, color: "#1D4080", fontSize: "1.2rem" }}
                    >
                      Address
                    </Typography>
                    <Typography variant="body2" color={"text.secondary"}>
                      A108 Adam Street, New York, NY 535022
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  sx={{
                    maxWidth: 300,
                    minHeight: 250,
                    bgcolor: "#fff",
                    p: 3,
                  }}
                >
                  <CardContent>
                    <Typography sx={{ objectFit: "cover" }}>
                      <Box
                        component={"img"}
                        src={letterIcon.src}
                        maxHeight="60px"
                      />
                    </Typography>
                    <Typography
                      sx={{ my: 2, color: "#1D4080", fontSize: "1.2rem" }}
                    >
                      Address
                    </Typography>
                    <Typography variant="body2" color={"text.secondary"}>
                      A108 Adam Street, New York, NY 535022
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  sx={{
                    maxWidth: 300,
                    minHeight: 250,
                    bgcolor: "#fff",
                    p: 3,
                  }}
                >
                  <CardContent>
                    <Typography sx={{ objectFit: "cover" }}>
                      <Box
                        component={"img"}
                        src={clockIcon.src}
                        height="60px"
                      />
                    </Typography>
                    <Typography
                      sx={{ my: 2, color: "#1D4080", fontSize: "1.2rem" }}
                    >
                      Address
                    </Typography>
                    <Typography variant="body2" color={"text.secondary"}>
                      A108 Adam Street, New York, NY 535022
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={7} px={{ xs: 0, md: 6, lg: 8 }}>
            <Box
              sx={{
                bgcolor: "#fff",
                height: "100%",
                p: { xs: 2, lg: 5 },
                mt: { xs: 5, lg: 0 },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  mt: 3,
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <TextField
                  label="Your Name"
                  id="outlined-size-small"
                  size="medium"
                  fullWidth
                  sx={{ mr: 5 }}
                />
                <TextField
                  label="Your Email"
                  id="outlined-size-small"
                  size="medium"
                  fullWidth
                  sx={{ mt: { xs: 2, sm: 0 } }}
                />
              </Box>
              <TextField
                label="Subject"
                id="outlined-size-small"
                size="medium"
                fullWidth
                sx={{ mt: { xs: 2, lg: 5 } }}
              />
              <TextField
                label="Message"
                id="outlined-size-small"
                size="medium"
                fullWidth
                rows={6}
                multiline
                sx={{ mt: { xs: 2, lg: 5 } }}
              />
              <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                <Button
                  variant="contained"
                  sx={{
                    py: 1.5,
                    px: 3,
                    bgcolor: "#B12930",
                    "&:hover": {
                      bgcolor: "hsl(357, 62%, 55%)",
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact_section;
