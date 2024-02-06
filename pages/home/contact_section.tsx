import { Box, Grid, TextField, Typography } from "@mui/material";
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
    <div>
      <Box
        sx={{
          //   minHeight: "100vh",
          backgroundImage: `url(${backImg1.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          py: "9vh",
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{ fontFamily: "Jacques Francois", textAlign: "center" }}
          >
            <span style={{ color: "#B12930" }}>Contact</span> Us{" "}
          </Typography>
        </Box>
        <Grid container sx={{ mt: 8 }} px={8}>
          <Grid item xs={12} lg={5}>
            <Grid container px={5} spacing={6}>
              <Grid
                item
                xs={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  sx={{
                    maxWidth: 300,
                    minHeight: 250,
                    borderRadius: 12,
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
                xs={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  sx={{
                    maxWidth: 300,
                    minHeight: 250,
                    borderRadius: 12,
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
                xs={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  sx={{
                    maxWidth: 300,
                    minHeight: 250,
                    borderRadius: 12,
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
                xs={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  sx={{
                    maxWidth: 300,
                    minHeight: 250,
                    borderRadius: 12,
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
          <Grid item xs={12} md={7} px={8}>
            <Box
              sx={{ bgcolor: "#fff", borderRadius: 12, height: "100%", p: 5 }}
            >
              <Box sx={{width:"100%",display:"flex"}}>
                <TextField
                  label="Your Name"
                  id="outlined-size-small"
                  size="medium"
                  fullWidth 
                  InputProps={{ sx: { borderRadius: 4 } }}
                  
                />
                <TextField
                  label="Your Email"
                  id="outlined-size-small"
                  size="medium"
                  fullWidth
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Contact_section;
