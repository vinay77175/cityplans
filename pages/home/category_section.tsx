import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import category1 from "../../public/Images/category_1.png";
import category2 from "../../public/Images/category_2.png";
import category3 from "../../public/Images/category_3.png";
import category4 from "../../public/Images/category_4.png";
const Category_section = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <Box>
        <Box>
          <Typography variant="h4" textAlign={"center"}>
            Our Plans
          </Typography>
        </Box>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box
              sx={{
                border: "1px solid black",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                  <Tab
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "18px",
                        md: "22px",
                        lg: "32px",
                      },
                    }}
                    label="Category 1"
                    value="1"
                  />
                  <Tab
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "18px",
                        md: "22px",
                        lg: "32px",
                      },
                    }}
                    label="Category 2"
                    value="2"
                  />
                  <Tab
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "18px",
                        md: "22px",
                        lg: "32px",
                      },
                    }}
                    label="Category 3"
                    value="3"
                  />
                  <Tab
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "18px",
                        md: "22px",
                        lg: "32px",
                      },
                    }}
                    label="Category 4"
                    value="4"
                  />
                </Box>
              </TabList>
            </Box>
            <TabPanel value="1">
              <Grid container>
                <Grid item xs={12} sm={6} lg={3} xl={4}>
                  <Card
                    sx={{
                      maxWidth: 345,
                      border: "1px solid #C9C1BA",
                      borderRadius: "20px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="200"
                      src={category1.src}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          marginTop: { xs: "1vh", lg: "2vh" },
                        }}
                      >
                        In laoreet magna sit
                      </Typography>
                      <Typography
                        color="#B12930"
                        sx={{
                          marginTop: { xs: "1vh", lg: "2vh" },
                          fontSize: { xs: "18px", md: "22px" },
                        }}
                      >
                        $69.00
                      </Typography>
                      <Box
                        display={"flex"}
                        sx={{
                          marginTop: "2vh",
                        }}
                      >
                        <Box
                          sx={{
                            marginRight: { xs: "4vh", md: "3vh", lg: "4vh" },
                          }}
                        >
                          <Typography variant="body1">eiusmod tempo</Typography>
                          <Typography variant="body2" color="text.secondary">
                            eiusmod
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="body1">eiusmod tempo</Typography>
                          <Typography variant="body2" color="text.secondary">
                            eiusmod
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Box
                        width={"100%"}
                        display={"flex"}
                        justifyContent={"space-around"}
                        py="1vh"
                      >
                        <Button
                          sx={{
                            padding: "1.2vh 4vh",
                            fontFamily: "Times New Roman ",
                            color: "white",
                            backgroundColor: "#B12930",
                            "&:hover": {
                              backgroundColor: "hsl(357,62%,55%)",
                            },
                          }}
                        >
                          Buy Now
                        </Button>
                        <Button
                          sx={{
                            padding: "1.2vh 4vh",
                            fontFamily: "Times New Roman ",
                            color: "black",
                            border: "2px solid black",
                            "&:hover": {
                              backgroundColor: "black",
                              color: "white",
                            },
                          }}
                        >
                          View More
                        </Button>
                      </Box>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value="2">
              <Grid container>
                <Grid item xs={12} sm={6} lg={3} xl={4}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="200"
                      src={category1.src}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          marginTop: { xs: "1vh", lg: "2vh" },
                        }}
                      >
                        In laoreet magna sit
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          marginTop: { xs: "1vh", lg: "2vh" },
                        }}
                      >
                        $69.00
                      </Typography>
                      <Box
                        display={"flex"}
                        sx={{
                          marginTop: "2vh",
                        }}
                      >
                        <Box
                          sx={{
                            marginRight: { xs: "4vh", md: "3vh", lg: "4vh" },
                          }}
                        >
                          <Typography variant="body1">eiusmod tempo</Typography>
                          <Typography variant="body2" color="text.secondary">
                            eiusmod
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="body1">eiusmod tempo</Typography>
                          <Typography variant="body2" color="text.secondary">
                            eiusmod
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value="3">
              <Grid container>
                <Grid item xs={12} sm={6} lg={3} xl={4}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="200"
                      src={category1.src}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          marginTop: { xs: "1vh", lg: "2vh" },
                        }}
                      >
                        In laoreet magna sit
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          marginTop: { xs: "1vh", lg: "2vh" },
                        }}
                      >
                        $69.00
                      </Typography>
                      <Box
                        display={"flex"}
                        sx={{
                          marginTop: "2vh",
                        }}
                      >
                        <Box
                          sx={{
                            marginRight: { xs: "4vh", md: "3vh", lg: "4vh" },
                          }}
                        >
                          <Typography variant="body1">eiusmod tempo</Typography>
                          <Typography variant="body2" color="text.secondary">
                            eiusmod
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="body1">eiusmod tempo</Typography>
                          <Typography variant="body2" color="text.secondary">
                            eiusmod
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </>
  );
};

export default Category_section;
