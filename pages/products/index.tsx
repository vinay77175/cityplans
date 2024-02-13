import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  Modal,
  Slider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import { categoryList } from "../../component/home/category_data";
import Image, { StaticImageData } from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import { useMediaQuery } from "@mui/material";
import categoryIcon from "../../public/Images/category_Icon.svg";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import HomeIcon from "@mui/icons-material/Home";

//Modal Styles
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

// function ChildModal1() {
//   return (
//     <React.Fragment>
//       <Modal
//         open={openModal}
//         onClose={handleClose}
//         aria-labelledby="child-modal-title"
//         aria-describedby="child-modal-description"
//       >
//         <Box sx={{ ...style1, width: 400 }}>
//           <Typography>Hello</Typography>
//         </Box>
//       </Modal>
//     </React.Fragment>
//   );
// }
//Child Modal function

const Product_Details = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  //category dropdown
  const [age, setAge] = React.useState("");

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value as string);
  // };

  //card selected category
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  let [openModal, setOpenModal] = useState<boolean>(false);
  const [open1, setOpen1] = useState(false);

  const handleCategoryChange = (categoryId: string) => {
    // setSelectedCategory(categoryId);
    const selectedCategory = categoryList.find(
      (category) => category.id === categoryId
    );

    if (selectedCategory) {
      setFilteredProducts(selectedCategory.products);
    } else {
      setFilteredProducts([]);
    }

    setAge(categoryId);
  };

  //show full list of card from the very starting
  useEffect(() => {
    const allProducts: Product[] = [];
    categoryList?.forEach((category) => {
      allProducts.push(...category.products);
    });
    setFilteredProducts(allProducts);
  }, [categoryList]);

  //filter Parent Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setOpenModal(false);
  };

  const handleOpenModal = (modalId: String) => {
    if (modalId == "1") {
      openModal = true;
      setOpenModal(openModal);
    }
  };

  //Slider for price range
  function valuetext(value: number) {
    return `${value}°C`;
  }

  const minDistance = 100;
  const [value2, setValue2] = React.useState<number[]>([200, 370]);

  const handleChange2 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue as number[]);
    }
  };

  interface Category {
    id: string;
    name: string;
    products: Product[];
  }
  interface Product {
    id: string;
    name: string;
    img: StaticImageData;
    heading: string;
    price: string;
    title1: string;
    title2: string;
    titleText1: string;
    titleText2: string;
  }
  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 2 }}>
        <Grid container sx={{ marginLeft: 1 }}>
          <Grid
            item
            xs={6}
            sm={4}
            md={3}
            lg={2}
            sx={{
              borderRight: "2px solid #B12930",
              paddingRight: "7vh",
              // minWidth: "20vh",
            }}
          >
            <FormControl sx={{ width: "100%" }} size="small">
              <InputLabel
                id="demo-select-small-label"
                sx={{
                  backgroundColor: "white",
                  paddingRight: "1vh",
                  color: "black",
                  fontFamily: "Jacques Francois",
                }}
              >
                {/* <Image
                  src={categoryIcon}
                  alt="category Icon"
                  style={{ marginRight: 5 }}
                /> */}
                Category
              </InputLabel>
              <Select
                value={age}
                label={"Age"}
                autoWidth
                onChange={(event) => handleCategoryChange(event.target.value)}
              >
                <MenuItem
                  value={"1"}
                  sx={{
                    fontSize: {
                      xs: "14px",
                      md: "16px",
                      lg: "18px",
                      xl: "20px",
                    },
                    fontFamily: "Times New Roman",
                  }}
                >
                  Single Detached
                </MenuItem>
                <MenuItem
                  value={"2"}
                  sx={{
                    fontSize: {
                      xs: "14px",
                      md: "16px",
                      lg: "18px",
                      xl: "20px",
                    },
                    fontFamily: "Times New Roman",
                  }}
                >
                  Semi Detached
                </MenuItem>

                <MenuItem
                  value={"3"}
                  sx={{
                    fontSize: {
                      xs: "14px",
                      md: "16px",
                      lg: "18px",
                      xl: "20px",
                    },
                    fontFamily: "Times New Roman",
                  }}
                >
                  Acreage
                </MenuItem>
                <MenuItem
                  value={"4"}
                  sx={{
                    fontSize: {
                      xs: "14px",

                      md: "16px",
                      lg: "18px",
                      xl: "20px",
                    },
                    fontFamily: "Times New Roman",
                  }}
                >
                  Garage Suite
                </MenuItem>
                <MenuItem
                  value={"5"}
                  sx={{
                    fontSize: {
                      xs: "14px",
                      md: "16px",
                      lg: "18px",
                      xl: "20px",
                    },
                    fontFamily: "Times New Roman",
                  }}
                >
                  FourPlex
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid
            item
            xs={6}
            sm={8}
            md={9}
            lg={10}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: "1vh",
            }}
          >
            <Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                      md: "16px",
                      lg: "22px",
                      xl: "24px",
                    },
                    fontFamily: "Times New Roman",
                    marginRight: "2vh",
                  }}
                >
                  Sort By:
                </Typography>

                <Button
                  onClick={handleOpen}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "14px",
                      md: "16px",
                      lg: "18px",
                      xl: "20px",
                    },
                    paddingX: { xs: "3vh", sm: "4vh", md: "5vh", lg: "7vh" }, // Media Query to be applied at 350px
                    fontFamily: "Times New Roman",
                    color: "#B12930",
                    borderTop: "2px solid white",
                    borderLeft: "2px solid white",
                    borderRight: "2px solid white",
                    borderBottom: "2px solid #B12930",
                    ":hover": {
                      boxShadow: "none",
                      border: "2px solid #b12930",
                      color: "#b12930 !important",
                    },
                  }}
                >
                  Featured
                </Button>
              </Box>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                // sx={{ overflowY: "scroll" }}
              >
                <Box
                  sx={{
                    ...style,
                    width: { xs: 300, sm: 400, md: 500, lg: 600 },
                    height: { xs: 300, sm: 400, md: 500, lg: 600 },
                    overflowY: "scroll",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <CloseIcon
                      onClick={() => handleClose()}
                      sx={{
                        cursor: "pointer",
                        paddingX: "1vh",
                        fontSize: "5vh",
                        ":hover": {
                          color: "#b12930 !important",
                        },
                      }}
                    />
                    <Box width={"100%"} sx={{ textAlign: "center" }}>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "14px",
                            sm: "16px",
                            md: "18px",
                            lg: "24px",
                            xl: "26px",
                          },
                          fontFamily: "Times New Roman",
                          marginBottom: "1vh",
                        }}
                      >
                        Filter
                      </Typography>
                    </Box>
                  </Box>

                  <Divider sx={{ color: "black" }}></Divider>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "14px",
                          md: "16px",
                          lg: "26px",
                          xl: "24px",
                        },
                        fontFamily: "Jacques Francois",
                        marginY: "2vh",
                      }}
                    >
                      Property Type
                    </Typography>
                    <Box>
                      <Grid container sx={{ marginBottom: "1vh" }}>
                        <Grid
                          item
                          xs={6}
                          sm={4}
                          md={4}
                          sx={{
                            border: "1px solid white",
                            paddingBottom: "1vh",
                            paddingTop: "1vh",
                            paddingLeft: "2vh",

                            ":hover": {
                              border: "1px solid #b12930",
                              borderRadius: "10px",
                              cursor: "pointer",
                            },
                          }}
                        >
                          <HomeIcon sx={{ fontSize: "30px" }} />

                          <Typography
                            sx={{
                              fontSize: {
                                xs: "10px",
                                sm: "12px",
                                md: "14px",
                                lg: "22px",
                                xl: "20px",
                              },
                              fontFamily: "Times New Roman",
                              marginY: "2vh",
                            }}
                          >
                            Single Detached
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          sm={4}
                          md={4}
                          sx={{
                            border: "1px solid white",
                            paddingBottom: "1vh",
                            paddingTop: "1vh",
                            paddingLeft: "2vh",

                            ":hover": {
                              border: "1px solid #b12930",
                              borderRadius: "10px",
                              cursor: "pointer",
                            },
                          }}
                        >
                          <HomeIcon sx={{ fontSize: "30px" }} />

                          <Typography
                            sx={{
                              fontSize: {
                                xs: "10px",
                                sm: "12px",
                                md: "14px",
                                lg: "22px",
                                xl: "20px",
                              },
                              fontFamily: "Times New Roman",
                              marginY: "2vh",
                            }}
                          >
                            Semi Detached
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          sm={4}
                          md={4}
                          sx={{
                            border: "1px solid white",
                            paddingBottom: "1vh",
                            paddingTop: "1vh",
                            paddingLeft: "2vh",

                            ":hover": {
                              border: "1px solid #b12930",
                              borderRadius: "10px",
                              cursor: "pointer",
                            },
                          }}
                        >
                          <HomeIcon sx={{ fontSize: "30px" }} />

                          <Typography
                            sx={{
                              fontSize: {
                                xs: "10px",
                                sm: "12px",
                                md: "14px",
                                lg: "22px",
                                xl: "20px",
                              },
                              fontFamily: "Times New Roman",
                              marginY: "2vh",
                            }}
                          >
                            FourPlex
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          sm={4}
                          md={4}
                          sx={{
                            border: "1px solid white",
                            paddingBottom: "1vh",
                            paddingTop: "1vh",
                            paddingLeft: "2vh",

                            ":hover": {
                              border: "1px solid #b12930",
                              borderRadius: "10px",
                              cursor: "pointer",
                            },
                          }}
                        >
                          <HomeIcon sx={{ fontSize: "30px" }} />

                          <Typography
                            sx={{
                              fontSize: {
                                xs: "10px",
                                sm: "12px",
                                md: "14px",
                                lg: "22px",
                                xl: "20px",
                              },
                              fontFamily: "Times New Roman",
                              marginY: "2vh",
                            }}
                          >
                            Acreage
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          sm={4}
                          md={4}
                          sx={{
                            border: "1px solid white",
                            paddingBottom: "1vh",
                            paddingTop: "1vh",
                            paddingLeft: "2vh",

                            ":hover": {
                              border: "1px solid #b12930",
                              borderRadius: "10px",
                              cursor: "pointer",
                            },
                          }}
                        >
                          <HomeIcon sx={{ fontSize: "30px" }} />

                          <Typography
                            sx={{
                              fontSize: {
                                xs: "10px",
                                sm: "12px",
                                md: "14px",
                                lg: "22px",
                                xl: "20px",
                              },
                              fontFamily: "Times New Roman",
                              marginY: "2vh",
                            }}
                          >
                            Garage Suite
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                  {/* <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginY: { xs: "1.5vh", lg: "2vh" },
                      cursor: "pointer",
                    }}
                    onClick={() => handleOpenModal("1")}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "14px",
                          md: "16px",
                          lg: "22px",
                          xl: "24px",
                        },
                        fontFamily: "Times New Roman",
                        marginY: { xs: "0vh", lg: "1vh" },
                      }}
                    >
                      Dealers{" "}
                    </Typography>
                    <KeyboardDoubleArrowRightRoundedIcon
                      sx={{
                        color: "#b12930",
                        fontSize: "30px",
                      }}
                    />
                  </Box> */}
                  {/* {openModal && <ChildModal1 />} */}

                  <Divider />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "14px",
                          md: "16px",
                          lg: "26px",
                          xl: "24px",
                        },
                        fontFamily: "Jacques Francois",
                        marginTop: "2vh",
                        marginBottom: "1vh",
                      }}
                    >
                      Select a Country
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "10px",
                          sm: "12px",
                          md: "14px",
                          lg: "18px",
                          xl: "2px",
                        },
                        fontFamily: "Jacques Francois",
                        marginBottom: "2vh",
                        color: "GrayText",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </Typography>
                    <Box>
                      <Grid container sx={{ marginBottom: "2vh" }}>
                        <Grid
                          item
                          xs={4}
                          sx={{
                            ":hover": {
                              backgroundColor: "azure",
                              border: "1px solid red",
                              borderRadius: "10px",
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: {
                                xs: "12px",
                                sm: "14px",
                                md: "16px",
                                lg: "26px",
                                xl: "24px",
                              },
                              fontFamily: "Times New Roman",
                              marginY: "2vh",
                              textAlign: "end",
                              paddingRight: "2vh",
                            }}
                          >
                            Admonton
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          sx={{
                            ":hover": {
                              backgroundColor: "azure",
                              border: "1px solid red",
                              borderRadius: "10px",
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: {
                                xs: "12px",
                                sm: "14px",
                                md: "16px",
                                lg: "26px",
                                xl: "24px",
                              },
                              fontFamily: "Times New Roman",
                              marginY: "2vh",
                              textAlign: "center",
                            }}
                          >
                            Calgary
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          sx={{
                            ":hover": {
                              backgroundColor: "azure",
                              border: "1px solid red",
                              borderRadius: "10px",
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: {
                                xs: "12px",
                                sm: "14px",
                                md: "16px",
                                lg: "26px",
                                xl: "24px",
                              },
                              fontFamily: "Times New Roman",
                              marginY: "2vh",
                              textAlign: "start",
                              paddingLeft: "2vh",
                            }}
                          >
                            Admonton
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                  <Divider />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "14px",
                          md: "16px",
                          lg: "26px",
                          xl: "24px",
                        },
                        fontFamily: "Jacques Francois",
                        marginTop: "2vh",
                      }}
                    >
                      Price Range
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "10px",
                          sm: "12px",
                          md: "14px",
                          lg: "18px",
                          xl: "2px",
                        },
                        fontFamily: "Jacques Francois",
                        marginBottom: "3vh",
                        color: "GrayText",
                      }}
                    >
                      Lorem ipsum dolor sit amet.
                    </Typography>
                    <Box sx={{ width: "100%", paddingX: "5vh" }}>
                      <Slider
                        getAriaLabel={() => "Minimum distance shift"}
                        value={value2}
                        onChange={handleChange2}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        max={1000}
                      />
                    </Box>
                  </Box>
                  <Divider />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "14px",
                          md: "16px",
                          lg: "26px",
                          xl: "24px",
                        },
                        fontFamily: "Jacques Francois",
                        marginTop: "2vh",
                      }}
                    >
                      Price Range
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "10px",
                          sm: "12px",
                          md: "14px",
                          lg: "18px",
                          xl: "2px",
                        },
                        fontFamily: "Jacques Francois",
                        marginBottom: "3vh",
                        color: "GrayText",
                      }}
                    >
                      Lorem ipsum dolor sit amet.
                    </Typography>
                    <Box sx={{ width: "100%", paddingX: "5vh" }}>
                      <Slider
                        getAriaLabel={() => "Minimum distance shift"}
                        value={value2}
                        onChange={handleChange2}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        max={1000}
                      />
                    </Box>
                  </Box>
                  <Divider />
                </Box>
              </Modal>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid
          container
          sx={{
            marginBottom: "2vh",
            paddingX: "0vh",
          }}
        >
          {filteredProducts.map((product: Product) => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              xl={4}
              key={product.id}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  padding: "1vh 1vh 0vh 1vh",
                  marginBottom: "4vh",
                  mx: { sm: "1vh" },
                  width: "100%",
                  border: "1px solid #C9C1BA",
                }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  sx={{
                    height: { xs: "220px", lg: "170px" },
                    // cursor: "pointer",
                  }}
                  src={product.img.src}
                />
                <CardContent sx={{ paddingTop: "0vh" }}>
                  <Typography
                    component="div"
                    sx={{
                      marginTop: { xs: "1vh", lg: "2vh" },
                      fontSize: { xs: "22px", sm: "20px", lg: "22px" },
                      fontFamily: "Times New Roman",
                    }}
                  >
                    {isMobile
                      ? product.heading.slice(0, 20)
                      : product.heading.slice(0, 20)}
                    ...
                  </Typography>
                  <Typography
                    color="#B12930"
                    sx={{
                      marginTop: { xs: "1vh", lg: "2vh" },
                      fontSize: { xs: "22px", sm: "20px", lg: "22px" },
                      fontFamily: "Times New Roman",
                    }}
                  >
                    {product.price}
                  </Typography>
                  <Box
                    display={"flex"}
                    sx={{
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
                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: "Times New Roman",
                          textTransform: "capitalize",
                          fontSize: {
                            xs: "18px",
                            sm: "16px",
                            lg: "18px",
                          },
                        }}
                      >
                        {isMobile
                          ? product.title1.slice(0, 20)
                          : product.title1.slice(0, 10)}
                        ...
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                          fontFamily: "Times New Roman",
                          textTransform: "capitalize",
                          fontSize: {
                            xs: "18px",
                            sm: "16px",
                            lg: "18px",
                          },
                        }}
                      >
                        {isMobile
                          ? product.titleText1.slice(0, 10)
                          : product.titleText1.slice(0, 10)}
                        ...
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: "Times New Roman",
                          textTransform: "capitalize",
                          fontSize: {
                            xs: "18px",
                            sm: "16px",
                            lg: "18px",
                          },
                        }}
                      >
                        {isMobile
                          ? product.title2.slice(0, 20)
                          : product.title2.slice(0, 10)}
                        ...
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                          fontFamily: "Times New Roman",
                          textTransform: "capitalize",
                          fontSize: {
                            xs: "18px",
                            sm: "16px",
                            lg: "18px",
                          },
                        }}
                      >
                        {isMobile
                          ? product.titleText2.slice(0, 10)
                          : product.titleText2.slice(0, 10)}
                        ...
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
                        mx: "1vh",
                        padding: "1vh 2.3vh",
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
                        mx: "1vh",
                        padding: "1vh 2vh",
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
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Product_Details;
