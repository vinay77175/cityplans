import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
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
import { CardData } from "./category_data";
import { StaticImageData } from "next/image";
const Category_section = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  interface Data {
    id: String;
    value: String;
    img: StaticImageData;
    heading: String;
    price: String;
    title1: String;
    title2: String;
    titleText1: String;
    titleText2: String;
  }
  return (
    <Container maxWidth="xl">
      <Box>
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Jacques Francois",
              textAlign: "center",
              marginBottom: { xs: "4vh", sm: "5vh", md: "6vh", lg: "7vh" },
            }}
          >
            Our <span style={{ color: "#B12930" }}>Plans</span>
          </Typography>
        </Box>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around !important",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                sx={{
                  display: "flex !important",
                  justifyContent: "space-between !important",
                }}
                TabIndicatorProps={{
                  sx: {
                    backgroundColor: "#B12930",
                    color: "#B12930",
                  },
                }}
              >
                <Tab
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "18px",
                      md: "20px",
                      lg: "24px",
                    },
                  }}
                  label="Single Detached"
                  value="1"
                />
                <Tab
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "18px",
                      md: "20px",
                      lg: "24px",
                    },
                  }}
                  label="Semi Detached"
                  value="2"
                />
                <Tab
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "18px",
                      md: "20px",
                      lg: "24px",
                    },
                  }}
                  label="Acreage"
                  value="3"
                />
                <Tab
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "18px",
                      md: "20px",
                      lg: "24px",
                    },
                  }}
                  label="Garage Suite"
                  value="4"
                />
              </TabList>
            </Box>
            <Grid container>
              {CardData.filter((item) => item.value === "1").map(
                (item: Data) => (
                  <Grid item xs={12} sm={6} lg={3} key={String(item.id)}>
                    <TabPanel value={String(item.value)}>
                      <Card
                        sx={{
                          width: "100%",
                          border: "1px solid #C9C1BA",
                          borderRadius: "0px",
                          padding: "0.5vw",
                        }}
                      >
                        <CardMedia
                          component="img"
                          alt="green iguana"
                          height="240vh"
                          src={item.img.src}
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
                            {item.heading.slice(0, 18)}...
                          </Typography>
                          <Typography
                            color="#B12930"
                            sx={{
                              marginTop: { xs: "1vh", lg: "2vh" },
                              fontSize: { xs: "18px", md: "22px" },
                            }}
                          >
                            {item.price}
                          </Typography>
                          <Box
                            display={"flex"}
                            sx={{
                              marginRight: {
                                xs: "4vh",
                                md: "3vh",
                                lg: "4vh",
                              },
                              marginTop: "2vh",
                            }}
                          >
                            <Box
                              sx={{
                                marginRight: {
                                  xs: "4vh",
                                  md: "3vh",
                                  lg: "4vh",
                                },
                              }}
                            >
                              <Typography variant="body1">
                                {item.title1}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {item.titleText1}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography variant="body1">
                                {item.title2}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {item.titleText2}
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
                                padding: "1vh 2vh",
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
                    </TabPanel>
                  </Grid>
                )
              )}
            </Grid>
          </TabContext>
        </Box>
      </Box>
    </Container>
  );
};

export default Category_section;
