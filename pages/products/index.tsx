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
  Autocomplete,
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
import MuiInput from "@mui/material/Input";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import LinearScaleOutlinedIcon from "@mui/icons-material/LinearScaleOutlined";

//Modal Styles
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
  borderRadius: "10px",
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

  //category change state
  let [isSelected1, setIsSelected1] = useState<boolean>(false);
  let [isSelected2, setIsSelected2] = useState<boolean>(false);
  let [isSelected3, setIsSelected3] = useState<boolean>(false);
  let [isSelected4, setIsSelected4] = useState<boolean>(false);
  let [isSelected5, setIsSelected5] = useState<boolean>(false);

  const handleCategoryChange = (categoryId: string) => {
    // setSelectedCategory(categoryId);
    if (categoryId == "1") {
      isSelected1 = true;
      isSelected2 = false;
      isSelected3 = false;
      isSelected4 = false;
      isSelected5 = false;
      setIsSelected1(isSelected1);
      setIsSelected2(isSelected2);
      setIsSelected3(isSelected3);
      setIsSelected4(isSelected4);
      setIsSelected5(isSelected5);
    } else if (categoryId == "2") {
      isSelected1 = false;
      isSelected2 = true;
      isSelected3 = false;
      isSelected4 = false;
      isSelected5 = false;
      setIsSelected1(isSelected1);
      setIsSelected2(isSelected2);
      setIsSelected3(isSelected3);
      setIsSelected4(isSelected4);
      setIsSelected5(isSelected5);
    } else if (categoryId == "3") {
      isSelected1 = false;
      isSelected2 = false;
      isSelected3 = true;
      isSelected4 = false;
      isSelected5 = false;
      setIsSelected1(isSelected1);
      setIsSelected2(isSelected2);
      setIsSelected3(isSelected3);
      setIsSelected4(isSelected4);
      setIsSelected5(isSelected5);
    } else if (categoryId == "4") {
      isSelected1 = false;
      isSelected2 = false;
      isSelected3 = false;
      isSelected4 = true;
      isSelected5 = false;
      setIsSelected1(isSelected1);
      setIsSelected2(isSelected2);
      setIsSelected3(isSelected3);
      setIsSelected4(isSelected4);
      setIsSelected5(isSelected5);
    } else if (categoryId == "5") {
      isSelected1 = false;
      isSelected2 = false;
      isSelected3 = false;
      isSelected4 = false;
      isSelected5 = true;
      setIsSelected1(isSelected1);
      setIsSelected2(isSelected2);
      setIsSelected3(isSelected3);
      setIsSelected4(isSelected4);
      setIsSelected5(isSelected5);
    }
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
  function valueTextPrice(value: number) {
    return `${value}°C`;
  }

  const minDistancePrice = 100;
  const [valuePrice, setValuePrice] = React.useState<number[]>([200, 370]);

  const handleChangePrice = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistancePrice) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 1000 - minDistancePrice);
        setValuePrice([clamped, clamped + minDistancePrice]);
      } else {
        const clamped = Math.max(newValue[1], minDistancePrice);
        setValuePrice([clamped - minDistancePrice, clamped]);
      }
    } else {
      setValuePrice(newValue as number[]);
    }
  };

  // SLider Input for House Width
  const Input = styled(MuiInput)`
    width: 42px;
  `;
  const MAX = 100;
  const MIN = 16;
  const marks = [
    {
      value: MIN,
      label: "",
    },
    {
      value: MAX,
      label: "",
    },
  ];
  //slider for house width
  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };
  //dropdown for countries

  interface CountryType {
    code: string;
    label: string;
    phone: string;
    suggested?: boolean;
  }

  const countries: readonly CountryType[] = [
    { code: "AD", label: "Andorra", phone: "376" },
    {
      code: "AE",
      label: "United Arab Emirates",
      phone: "971",
    },
    { code: "AF", label: "Afghanistan", phone: "93" },
    {
      code: "AG",
      label: "Antigua and Barbuda",
      phone: "1-268",
    },
    {
      code: "CA",
      label: "Canada",
      phone: "1",
      suggested: true,
    },

    {
      code: "AU",
      label: "Australia",
      phone: "61",
    },
    { code: "AW", label: "Aruba", phone: "297" },
    { code: "AX", label: "Alland Islands", phone: "358" },
    { code: "AZ", label: "Azerbaijan", phone: "994" },
    {
      code: "BA",
      label: "Bosnia and Herzegovina",
      phone: "387",
    },

    {
      code: "CA",
      label: "Canada",
      phone: "1",
      suggested: true,
    },

    {
      code: "DE",
      label: "Germany",
      phone: "49",
      suggested: true,
    },

    { code: "DZ", label: "Algeria", phone: "213" },
    { code: "EC", label: "Ecuador", phone: "593" },
    { code: "EE", label: "Estonia", phone: "372" },
    { code: "EG", label: "Egypt", phone: "20" },
    { code: "EH", label: "Western Sahara", phone: "212" },
    { code: "ER", label: "Eritrea", phone: "291" },
    { code: "ES", label: "Spain", phone: "34" },
    { code: "ET", label: "Ethiopia", phone: "251" },
    { code: "FI", label: "Finland", phone: "358" },
    { code: "FJ", label: "Fiji", phone: "679" },

    {
      code: "FM",
      label: "Micronesia, Federated States of",
      phone: "691",
    },
    { code: "FO", label: "Faroe Islands", phone: "298" },
    {
      code: "FR",
      label: "France",
      phone: "33",
      suggested: true,
    },

    { code: "IS", label: "Iceland", phone: "354" },
    { code: "IT", label: "Italy", phone: "39" },
    { code: "JE", label: "Jersey", phone: "44" },
    { code: "JM", label: "Jamaica", phone: "1-876" },
    { code: "JO", label: "Jordan", phone: "962" },
    {
      code: "JP",
      label: "Japan",
      phone: "81",
      suggested: true,
    },
    { code: "KE", label: "Kenya", phone: "254" },
    { code: "KG", label: "Kyrgyzstan", phone: "996" },
    { code: "KH", label: "Cambodia", phone: "855" },
    { code: "KI", label: "Kiribati", phone: "686" },
    { code: "KM", label: "Comoros", phone: "269" },
    {
      code: "KN",
      label: "Saint Kitts and Nevis",
      phone: "1-869",
    },
    {
      code: "KP",
      label: "Korea, Democratic People's Republic of",
      phone: "850",
    },
    { code: "KR", label: "Korea, Republic of", phone: "82" },
    { code: "KW", label: "Kuwait", phone: "965" },
    { code: "KY", label: "Cayman Islands", phone: "1-345" },
    { code: "KZ", label: "Kazakhstan", phone: "7" },
    {
      code: "LA",
      label: "Lao People's Democratic Republic",
      phone: "856",
    },

    {
      code: "MK",
      label: "Macedonia, the Former Yugoslav Republic of",
      phone: "389",
    },
    { code: "ML", label: "Mali", phone: "223" },
    { code: "MM", label: "Myanmar", phone: "95" },
    { code: "MN", label: "Mongolia", phone: "976" },
    { code: "MO", label: "Macao", phone: "853" },
  ];
  const [selectedCountry, setSelectedCountry] = useState(countries[4]); // Initialize with a default country

  const handleCountryChange = (event: any, newValue: any) => {
    setSelectedCountry(newValue.label);
    console.log(newValue);
  };
  const InputLot = styled(MuiInput)`
    width: 42px;
  `;
  const maxLot = 100;
  const minLot = 25;
  const lotWidth = [
    {
      value: MIN,
      label: "",
    },
    {
      value: MAX,
      label: "",
    },
  ];
  //slider for house width

  const [valueLot, setValueLot] = React.useState(30);

  const handleSliderChangeLot = (event: Event, newValue: number | number[]) => {
    setValueLot(newValue as number);
  };

  const handleInputChangeLot = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueLot(event.target.value === " " ? 0 : Number(event.target.value));
  };

  const handleBlurLot = () => {
    if (valueLot < 16) {
      setValueLot(16);
    } else if (valueLot > 100) {
      setValueLot(100);
    }
  };

  //slider for size grade
  function valueTextSize(value: number) {
    return `${value}°C`;
  }

  const minDistanceSize = 100;
  const [valueSize, setValueSize] = React.useState<number[]>([200, 370]);

  const handleChangeSize = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistanceSize) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 1000 - minDistanceSize);
        setValueSize([clamped, clamped + minDistanceSize]);
      } else {
        const clamped = Math.max(newValue[1], minDistanceSize);
        setValueSize([clamped - minDistanceSize, clamped]);
      }
    } else {
      setValueSize(newValue as number[]);
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
  const handleSubmit = () => {
    console.log("After submitted");
    console.log("selected category", filteredProducts);

    console.log("min value Price", valuePrice[0]);
    console.log("max value", valuePrice[1]);
    console.log("min lot width", valueLot);
    console.log("max lot width", valueLot);
    console.log("min width", MIN);
    console.log("max width", MAX);
    console.log("Country", selectedCountry);
    console.log("max size", valueSize[0]);
    console.log("min size", valueSize[1]);
  };
  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 2 }}>
        <Grid container sx={{ marginLeft: 1 }}>
          {/* <Grid
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
                <Image
                  src={categoryIcon}
                  alt="category Icon"
                  style={{ marginRight: 5 }}
                />
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
          </Grid> */}

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "3vh",
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
                    width: { xs: 300, sm: 400, md: 500, lg: 700 },
                    height: { xs: 300, sm: 400, md: 500, lg: 600 },
                    overflowY: "scroll",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      // position: "fixed",
                      // top: " 0",
                      // width: "100%",
                      // overflow: "hidden",
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
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.
                      </Typography>
                      <Box sx={{ marginY: "5vh", paddingX: "3vh" }}>
                        <Autocomplete
                          id="country-select-demo"
                          sx={{ width: "100%" }}
                          options={countries}
                          value={selectedCountry}
                          onChange={handleCountryChange}
                          autoHighlight
                          getOptionLabel={(option) => option.label}
                          renderOption={(props, option) => (
                            <Box
                              component="li"
                              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                              {...props}
                            >
                              <img
                                loading="lazy"
                                width="20"
                                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                alt=""
                              />
                              {option.label} ({option.code}) +{option.phone}
                            </Box>
                          )}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Select a Country"
                              inputProps={{
                                ...params.inputProps,
                                autoComplete: "new-password", // disable autocomplete and autofill
                              }}
                            />
                          )}
                        />
                      </Box>
                    </Box>
                    <Divider />

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
                        <Grid container sx={{ marginBottom: "3vh" }}>
                          <Grid
                            item
                            xs={6}
                            sm={4}
                            md={4}
                            sx={{
                              display: "flex",
                              padding: "2px",
                            }}
                          >
                            <Button
                              sx={{
                                color: isSelected1 ? "#b12930" : "black",
                                border: isSelected1
                                  ? "2px solid #b12930"
                                  : "2px solid white",
                                backgroundColor: "#D4ECFF",
                                borderRadius: "10px",
                                width: "100%",
                                height: "100%",
                                ":hover": {
                                  backgroundColor: "#D4ECFF",
                                },
                              }}
                              onClick={() => handleCategoryChange("1")}
                            >
                              <Box
                                sx={{
                                  textAlign: "left",
                                  width: "100%",
                                  height: "100%",
                                }}
                              >
                                <HomeIcon
                                  sx={{
                                    fontSize: "4vh",
                                  }}
                                />

                                <Typography
                                  sx={{
                                    fontSize: {
                                      xs: "10px",
                                      sm: "12px",
                                      md: "14px",
                                      lg: "18px",
                                      xl: "20px",
                                    },
                                    fontFamily: "Times New Roman",
                                    marginTop: "2vh",
                                  }}
                                >
                                  Single Detached
                                </Typography>
                              </Box>
                            </Button>
                          </Grid>
                          <Grid
                            item
                            xs={6}
                            sm={4}
                            md={4}
                            sx={{
                              display: "flex",
                              padding: "2px",
                            }}
                          >
                            <Button
                              sx={{
                                color: isSelected2 ? "#b12930" : "black",
                                border: isSelected2
                                  ? "2px solid #b12930"
                                  : "2px solid white",
                                backgroundColor: "#D4ECFF",
                                borderRadius: "10px",
                                width: "100%",
                                height: "100%",
                                ":hover": {
                                  backgroundColor: "#D4ECFF",
                                },
                              }}
                              onClick={() => handleCategoryChange("2")}
                            >
                              <Box
                                sx={{
                                  textAlign: "left",
                                  width: "100%",
                                  height: "100%",
                                }}
                              >
                                <HomeIcon
                                  sx={{
                                    fontSize: "4vh",
                                  }}
                                />

                                <Typography
                                  sx={{
                                    fontSize: {
                                      xs: "10px",
                                      sm: "12px",
                                      md: "14px",
                                      lg: "18px",
                                      xl: "20px",
                                    },
                                    fontFamily: "Times New Roman",
                                    marginTop: "2vh",
                                  }}
                                >
                                  Semi Detached
                                </Typography>
                              </Box>
                            </Button>
                          </Grid>
                          <Grid
                            item
                            xs={6}
                            sm={4}
                            md={4}
                            sx={{
                              display: "flex",
                              padding: "2px",
                            }}
                          >
                            <Button
                              sx={{
                                color: isSelected3 ? "#b12930" : "black",
                                border: isSelected3
                                  ? "2px solid #b12930"
                                  : "2px solid white",
                                backgroundColor: "#D4ECFF",
                                borderRadius: "10px",
                                width: "100%",
                                height: "100%",
                                ":hover": {
                                  backgroundColor: "#D4ECFF",
                                  boxShadow: "none",
                                },
                                "::selection": {
                                  color: "red !important",
                                },
                              }}
                              onClick={() => handleCategoryChange("3")}
                            >
                              <Box
                                sx={{
                                  textAlign: "left",
                                  width: "100%",
                                  height: "100%",
                                }}
                              >
                                <HomeIcon
                                  sx={{
                                    fontSize: "4vh",
                                  }}
                                />

                                <Typography
                                  sx={{
                                    fontSize: {
                                      xs: "10px",
                                      sm: "12px",
                                      md: "14px",
                                      lg: "18px",
                                      xl: "20px",
                                    },
                                    fontFamily: "Times New Roman",
                                    marginTop: "2vh",
                                  }}
                                >
                                  Acreage
                                </Typography>
                              </Box>
                            </Button>
                          </Grid>
                          <Grid
                            item
                            xs={6}
                            sm={4}
                            md={4}
                            lg={6}
                            sx={{
                              display: "flex",
                              padding: "2px",
                            }}
                          >
                            <Button
                              sx={{
                                color: isSelected4 ? "#b12930" : "black",
                                border: isSelected4
                                  ? "2px solid #b12930"
                                  : "2px solid white",
                                backgroundColor: "#D4ECFF",
                                borderRadius: "10px",
                                width: "100%",
                                height: "100%",
                                ":hover": {
                                  backgroundColor: "#D4ECFF",
                                },
                              }}
                              onClick={() => handleCategoryChange("4")}
                            >
                              <Box
                                sx={{
                                  textAlign: "left",
                                  width: "100%",
                                  height: "100%",
                                }}
                              >
                                <HomeIcon
                                  sx={{
                                    fontSize: "4vh",
                                  }}
                                />

                                <Typography
                                  sx={{
                                    fontSize: {
                                      xs: "10px",
                                      sm: "12px",
                                      md: "14px",
                                      lg: "18px",
                                      xl: "20px",
                                    },
                                    fontFamily: "Times New Roman",
                                    marginTop: "2vh",
                                  }}
                                >
                                  Garage Suite
                                </Typography>
                              </Box>
                            </Button>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={4}
                            md={4}
                            lg={6}
                            sx={{
                              display: "flex",
                              padding: "2px",
                            }}
                          >
                            <Button
                              sx={{
                                color: isSelected5 ? "#b12930" : "black",
                                border: isSelected5
                                  ? "2px solid #b12930"
                                  : "2px solid white",
                                backgroundColor: "#D4ECFF",
                                borderRadius: "10px",
                                width: "100%",
                                height: "100%",
                                ":hover": {
                                  backgroundColor: "#D4ECFF",
                                },
                              }}
                              onClick={() => handleCategoryChange("5")}
                            >
                              <Box
                                sx={{
                                  textAlign: "left",
                                  width: "100%",
                                  height: "100%",
                                }}
                              >
                                <HomeIcon
                                  sx={{
                                    fontSize: "4vh",
                                  }}
                                />

                                <Typography
                                  sx={{
                                    fontSize: {
                                      xs: "10px",
                                      sm: "12px",
                                      md: "14px",
                                      lg: "18px",
                                      xl: "20px",
                                    },
                                    fontFamily: "Times New Roman",
                                    marginTop: "2vh",
                                  }}
                                >
                                  FourPlex
                                </Typography>
                              </Box>
                            </Button>
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
                            xl: "20px",
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
                          sx={{ color: "#b12930" }}
                          getAriaLabel={() => "Minimum distance shift"}
                          value={valuePrice}
                          onChange={handleChangePrice}
                          valueLabelDisplay="auto"
                          getAriaValueText={valueTextPrice}
                          max={1000}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          marginY: "2vh",
                        }}
                      >
                        <Box
                          sx={{
                            border: "1px solid black",
                            borderRadius: "10px",

                            width: "35%",
                            paddingLeft: "2vh",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: {
                                xs: "10px",
                                sm: "12px",
                                md: "14px",
                                lg: "20px",
                                xl: "20px",
                              },
                              fontFamily: "Times New Roman",
                              marginBottom: "2vh",
                            }}
                          >
                            Minimum Price:
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: {
                                xs: "10px",
                                sm: "12px",
                                md: "14px",
                                lg: "20px",
                                xl: "20px",
                              },
                              fontFamily: "Times New Roman",
                            }}
                          >
                            $ {valuePrice[0]}
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            border: "1px solid black",
                            borderRadius: "10px",

                            width: "35%",
                            paddingLeft: "2vh",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: {
                                xs: "10px",
                                sm: "12px",
                                md: "14px",
                                lg: "20px",
                                xl: "20px",
                              },
                              fontFamily: "Times New Roman",
                              marginBottom: "2vh",
                            }}
                          >
                            Maximum Price:
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: {
                                xs: "10px",
                                sm: "12px",
                                md: "14px",
                                lg: "20px",
                                xl: "20px",
                              },
                              fontFamily: "Times New Roman",
                            }}
                          >
                            $ {valuePrice[1]}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Divider />

                    <Box sx={{ marginBottom: "3vh" }}>
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
                        House Width
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "10px",
                            sm: "12px",
                            md: "14px",
                            lg: "18px",
                            xl: "20px",
                          },
                          fontFamily: "Jacques Francois",
                          marginBottom: "3vh",
                          color: "GrayText",
                        }}
                      >
                        Lorem ipsum dolor sit amet.
                      </Typography>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "start",
                          paddingX: "5vh",
                        }}
                      >
                        <Box
                          sx={{
                            width: "100%",
                            alignItems: "center",
                            paddingRight: "3vh",
                          }}
                        >
                          <Box sx={{ width: "100%" }}>
                            <Slider
                              marks={marks}
                              step={10}
                              value={typeof value === "number" ? value : 0}
                              valueLabelDisplay="auto"
                              min={MIN}
                              max={MAX}
                              onChange={handleSliderChange}
                              sx={
                                {
                                  // paddingBottom: "0vh",
                                }
                              }
                            />
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Typography
                              variant="body2"
                              onClick={() => setValue(MIN)}
                              sx={{
                                cursor: "pointer",
                                fontSize: {
                                  xs: "10px",
                                  sm: "12px",
                                  md: "14px",
                                  lg: "18px",
                                  xl: "20px",
                                },
                                fontFamily: "Times New Roman",
                              }}
                            >
                              {MIN}" width
                            </Typography>
                            <Typography
                              variant="body2"
                              onClick={() => setValue(MAX)}
                              sx={{
                                cursor: "pointer",
                                fontSize: {
                                  xs: "10px",
                                  sm: "12px",
                                  md: "14px",
                                  lg: "18px",
                                  xl: "20px",
                                },
                                fontFamily: "Times New Roman",
                              }}
                            >
                              {MAX}" width
                            </Typography>
                          </Box>
                        </Box>
                        <Grid item>
                          <Input
                            value={value}
                            size="small"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            inputProps={{
                              step: 10,
                              min: 0,
                              max: 100,
                              type: "number",
                              "aria-labelledby": "input-slider",
                            }}
                          />
                        </Grid>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-evenly",

                          marginY: "2vh",
                        }}
                      >
                        <Box
                          sx={{
                            paddingLeft: "2vh",
                            width: "20%",

                            textAlign: "center",
                          }}
                        >
                          {/* <Typography
                          sx={{
                            fontSize: {
                              xs: "10px",
                              sm: "12px",
                              md: "14px",
                              lg: "20px",
                              xl: "20px",
                            },
                            fontFamily: "Times New Roman",
                            marginBottom: "2vh",
                          }}
                        >
                          Minimum Price:
                        </Typography> */}
                          <Typography
                            sx={{
                              fontSize: {
                                xs: "10px",
                                sm: "12px",
                                md: "14px",
                                lg: "24px",
                                xl: "20px",
                              },
                              fontFamily: "Times New Roman",
                              backgroundColor: "red",
                              borderRadius: "10vh",
                            }}
                          >
                            {MIN}"
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            width: "100%",
                            height: "20px",
                            borderBottom: "1px solid black",
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "3vh",
                              backgroundColor: "white",
                              padding: "0 10px",
                              paddingBottom: "1vh",
                            }}
                          >
                            Width Range
                          </span>
                        </Box>

                        <Box
                          sx={{
                            paddingRight: "2vh",
                            width: "20%",
                            textAlign: "center",
                          }}
                        >
                          {/* <Typography
                          sx={{
                            fontSize: {
                              xs: "10px",
                              sm: "12px",
                              md: "14px",
                              lg: "20px",
                              xl: "20px",
                            },
                            fontFamily: "Times New Roman",
                            marginBottom: "2vh",
                          }}
                        >
                          Maximum Price:
                        </Typography> */}
                          <Typography
                            sx={{
                              fontSize: {
                                xs: "10px",
                                sm: "12px",
                                md: "14px",
                                lg: "24px",
                                xl: "20px",
                              },
                              fontFamily: "Times New Roman",
                              borderRadius: "10vh",
                              backgroundColor: "red",
                            }}
                          >
                            {value}"
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Divider />
                    <Box sx={{ marginBottom: "3vh" }}>
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
                        Lot Width
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "10px",
                            sm: "12px",
                            md: "14px",
                            lg: "18px",
                            xl: "20px",
                          },
                          fontFamily: "Jacques Francois",
                          marginBottom: "3vh",
                          color: "GrayText",
                        }}
                      >
                        Lorem ipsum dolor sit amet.
                      </Typography>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "start",
                          paddingX: "5vh",
                        }}
                      >
                        <Box
                          sx={{
                            width: "100%",
                            alignItems: "center",
                            paddingRight: "3vh",
                          }}
                        >
                          <Box sx={{ width: "100%" }}>
                            <Slider
                              marks={lotWidth}
                              step={10}
                              value={
                                typeof valueLot === "number" ? valueLot : 0
                              }
                              valueLabelDisplay="auto"
                              min={minLot}
                              max={maxLot}
                              onChange={handleSliderChangeLot}
                              sx={
                                {
                                  // paddingBottom: "0vh",
                                }
                              }
                            />
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                cursor: "pointer",
                                fontSize: {
                                  xs: "10px",
                                  sm: "12px",
                                  md: "14px",
                                  lg: "18px",
                                  xl: "20px",
                                },
                                fontFamily: "Times New Roman",
                              }}
                            >
                              {minLot}" width
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                cursor: "pointer",
                                fontSize: {
                                  xs: "10px",
                                  sm: "12px",
                                  md: "14px",
                                  lg: "18px",
                                  xl: "20px",
                                },
                                fontFamily: "Times New Roman",
                              }}
                            >
                              {maxLot}" width
                            </Typography>
                          </Box>
                        </Box>
                        <Grid item>
                          <Input
                            value={valueLot}
                            size="small"
                            onChange={handleInputChangeLot}
                            onBlur={handleBlurLot}
                            inputProps={{
                              step: 10,
                              min: 16,
                              max: 100,
                              type: "number",
                              "aria-labelledby": "input-slider",
                            }}
                            sx={{
                              cursor: "pointer",
                              fontSize: {
                                xs: "10px",
                                sm: "12px",
                                md: "14px",
                                lg: "18px",
                                xl: "20px",
                              },
                              fontFamily: "Times New Roman",
                              marginBottom: "3vh",
                            }}
                          />
                        </Grid>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-evenly",

                          marginY: "2vh",
                        }}
                      >
                        <Box
                          sx={{
                            borderRadius: "10px",
                            paddingLeft: "2vh",
                            width: "20%",
                            textAlign: "center",
                          }}
                        >
                          {/* <Typography
                          sx={{
                            fontSize: {
                              xs: "10px",
                              sm: "12px",
                              md: "14px",
                              lg: "20px",
                              xl: "20px",
                            },
                            fontFamily: "Times New Roman",
                            marginBottom: "2vh",
                          }}
                        >
                          Minimum Price:
                        </Typography> */}
                          <Typography
                            sx={{
                              fontSize: {
                                xs: "10px",
                                sm: "12px",
                                md: "14px",
                                lg: "24px",
                                xl: "20px",
                              },
                              fontFamily: "Times New Roman",
                            }}
                          >
                            {minLot}"
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            width: "100%",
                            height: "20px",
                            borderBottom: "1px solid black",
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "3vh",
                              backgroundColor: "white",
                              padding: "0 10px",
                              paddingBottom: "1vh",
                            }}
                          >
                            Lot Range
                          </span>
                        </Box>

                        <Box
                          sx={{
                            borderRadius: "10px",
                            paddingRight: "2vh",
                            width: "20%",
                            textAlign: "center",
                          }}
                        >
                          {/* <Typography
                          sx={{
                            fontSize: {
                              xs: "10px",
                              sm: "12px",
                              md: "14px",
                              lg: "20px",
                              xl: "20px",
                            },
                            fontFamily: "Times New Roman",
                            marginBottom: "2vh",
                          }}
                        >
                          Maximum Price:
                        </Typography> */}
                          <Typography
                            sx={{
                              fontSize: {
                                xs: "10px",
                                sm: "12px",
                                md: "14px",
                                lg: "24px",
                                xl: "20px",
                              },
                              fontFamily: "Times New Roman",
                            }}
                          >
                            {valueLot}"
                          </Typography>
                        </Box>
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
                        Size Above Grade
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "10px",
                            sm: "12px",
                            md: "14px",
                            lg: "18px",
                            xl: "20px",
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
                          sx={{ color: "#b12930" }}
                          getAriaLabel={() => "Minimum distance shift"}
                          value={valueSize}
                          onChange={handleChangeSize}
                          valueLabelDisplay="auto"
                          getAriaValueText={valueTextSize}
                          max={1000}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          marginY: "2vh",
                        }}
                      >
                        <Box
                          sx={{
                            border: "1px solid black",
                            borderRadius: "10px",

                            width: "40%",
                            paddingLeft: "2vh",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: {
                                xs: "10px",
                                sm: "12px",
                                md: "14px",
                                lg: "20px",
                                xl: "20px",
                              },
                              fontFamily: "Times New Roman",
                              marginBottom: "2vh",
                            }}
                          >
                            Minimum Size Grade:
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: {
                                xs: "10px",
                                sm: "12px",
                                md: "14px",
                                lg: "20px",
                                xl: "20px",
                              },
                              fontFamily: "Times New Roman",
                            }}
                          >
                            {valueSize[0]} SQ. FT.
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            border: "1px solid black",
                            borderRadius: "10px",

                            width: "40%",
                            paddingLeft: "2vh",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: {
                                xs: "10px",
                                sm: "12px",
                                md: "14px",
                                lg: "20px",
                                xl: "20px",
                              },
                              fontFamily: "Times New Roman",
                              marginBottom: "2vh",
                            }}
                          >
                            Maximum Size Grade:
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: {
                                xs: "10px",
                                sm: "12px",
                                md: "14px",
                                lg: "20px",
                                xl: "20px",
                              },
                              fontFamily: "Times New Roman",
                            }}
                          >
                            {valueSize[1]} SQ. FT.
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Divider />
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      position: "fixed",
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "2vh",

                      backgroundColor: "white",
                    }}
                  >
                    <Button
                      sx={{
                        backgroundColor: "black",
                        color: "white",
                        ":hover": {
                          backgroundColor: "black",
                          color: "white",
                        },
                      }}
                      onClick={() => handleSubmit()}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "12px",
                            sm: "14px",
                            md: "16px",
                            lg: "20px",
                            xl: "24px",
                          },
                          fontFamily: "Times New Roman",
                          padding: "1vh",
                        }}
                      >
                        Search Filter
                      </Typography>
                    </Button>
                  </Box>
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
