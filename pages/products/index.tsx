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
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { categoryList } from "../../component/home/category_data";
import Image, { StaticImageData } from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import { useMediaQuery } from "@mui/material";
import categoryIcon from "../../public/Images/category_Icon.svg";

//Modal Styles
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

//Child Modal function
function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

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

  // const [selectedCategory, setSelectedCategory] = useState<string>("");
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
    categoryList.forEach((category) => {
      allProducts.push(...category.products);
    });
    setFilteredProducts(allProducts);
  }, [categoryList]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
            sx={{ borderRight: "2px solid black", paddingRight: "5vh" }}
          >
            <FormControl sx={{ width: "100%" }} size="medium">
              <InputLabel
                id="demo-select-small-label"
                sx={{ backgroundColor: "white", paddingRight: "1vh" }}
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
                onChange={(event) => handleCategoryChange(event.target.value)}
              >
                <MenuItem value="1">
                  <em>Single Detached</em>
                </MenuItem>
                <MenuItem value={"2"}>Semi Detached</MenuItem>

                <MenuItem value={"3"}>Acreage</MenuItem>
                <MenuItem value={"4"}>Garage Suite</MenuItem>
                <MenuItem value={"5"}>FourPlex</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ border: "1px solid #b12930", marginLeft: "1vh" }}
          />
          {/* <Grid item xs={0} sm={5} marginLeft={10}>
            <Box sx={{ display: "flex" }}>
              <div>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="parent-modal-title"
                  aria-describedby="parent-modal-description"
                >
                  <Box sx={{ ...style, width: 400 }}>
                    <h2 id="parent-modal-title">Text in a modal</h2>
                    <p id="parent-modal-description">
                      Duis mollis, est non commodo luctus, nisi erat porttitor
                      ligula.
                    </p>
                    <ChildModal />
                  </Box>
                </Modal>
              </div>
            </Box>
          </Grid> */}
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
