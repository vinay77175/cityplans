import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import instagram from "../../public/Images/insta.svg";
import facebook from "../../public/Images/facebook.svg";
import linkedin from "../../public/Images/linkedin.svg";
import SearchIcon from "@mui/icons-material/Search";
import profileIcon from "../../public/Images/Male User red.svg";
import Logo from "../../public/Images/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Modal,
  Paper,
  SelectChangeEvent,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import styles from "../../styles/Home.module.css";
import categoryIcon from "../../public/Images/category_Icon.svg";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
const drawerWidth = 240;
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const loginOption = ["login", "register"];
const style = {
  position: "absolute" as "absolute",
  top: "10%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 100, sm: 100, md: 600 },
  bgcolor: "background.paper",
  boxShadow: 50,
  borderRadius: "12px",
};

const Header = () => {
  const route = useRouter();
  const pathname = usePathname();
  const login = 0;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Box
          component={"img"}
          src={Logo.src}
          alt="Logo1"
          sx={{ height: "100%", width: { xs: "155px", md: "255px" } }}
        />
      </Typography>
      <Divider />
      <List>
        <Link href={"/"} className="navLink">
          <ListItem disablePadding>
            <ListItemButton
              className={pathname == "/" ? "selectedDrawerNav" : ""}
              sx={{
                "&:hover": {
                  bgcolor: "#B12930",
                  color: "#fff",
                },
                textAlign: "center",
                color: "#000",
                fontFamily: "Inria Serif",
                textTransform: "capitalize",
              }}
            >
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href={"/about"} className="navLink">
          <ListItem disablePadding>
            <ListItemButton
              className={pathname == "/about" ? "selectedDrawerNav" : ""}
              sx={{
                "&:hover": {
                  bgcolor: "#B12930",
                  color: "#fff",
                },
                textAlign: "center",
                color: "#000",
                fontFamily: "Inria Serif",
                textTransform: "capitalize",
              }}
            >
              <ListItemText primary="About Us" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href={"/products"} className="navLink">
          <ListItem disablePadding>
            <ListItemButton
              className={pathname == "/products" ? "selectedDrawerNav" : ""}
              sx={{
                "&:hover": {
                  bgcolor: "#B12930",
                  color: "#fff",
                },
                textAlign: "center",
                color: "#000",
                fontFamily: "Inria Serif",
                textTransform: "capitalize",
              }}
            >
              <ListItemText primary="Plans" />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link href={"/contact"} className="navLink">
          <ListItem disablePadding>
            <ListItemButton
              className={pathname == "/contact" ? "selectedDrawerNav" : ""}
              sx={{
                "&:hover": {
                  bgcolor: "#B12930",
                  color: "#fff",
                },
                textAlign: "center",
                color: "#000",
                fontFamily: "Inria Serif",
                textTransform: "capitalize",
              }}
            >
              <ListItemText primary="Contact Us" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );
  return (
    <div>
      <Box sx={{ boxshadow: "5px 10px" }}>
        <Box
          sx={{
            bgcolor: "#000",
            color: "#fff",
            py: "1vh",
            display: { xs: "none", sm: "flex" },
          }}
        >
          <Container maxWidth="xl">
            <Box
              sx={{ display: "flex", justifyContent: "space-between", px: 4 }}
            >
              <Typography>Welcome To CityPlans | Shop Now </Typography>
              <Typography sx={{ display: "flex", gap: 2 }}>
                <Box component={"img"} src={facebook.src} />
                <Box component={"img"} src={instagram.src} />
                <Box component={"img"} src={linkedin.src} />
              </Typography>
            </Box>
          </Container>
        </Box>
        <AppBar
          component="nav"
          className={styles.Header_AppBar}
          sx={{
            position: "static",
            // top:"3vh"
          }}
        >
          <Container maxWidth="xl">
            <Toolbar sx={{ py: 1 }}>
              <Grid container display={"flex"} alignItems={"center"}>
                <Grid item xs={1} sm={0} display={{ xs: "flex", sm: "none" }}>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: "none" } }}
                  >
                    <MenuIcon sx={{ color: "#000" }} />
                  </IconButton>
                </Grid>
                <Grid item xs={7} sm={3}>
                  <Box
                    // variant="h6"
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Link href={"/"}>
                      <Image
                        src={Logo.src}
                        alt="logo"
                        layout="intrinsic"
                        height={200}
                        width={250}
                        sizes="100vw"
                      ></Image>
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={0} sm={6.5} textAlign={"center"}>
                  <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    <Link href={"/"}>
                      <Button
                        className={pathname == "/" ? "selectedNav" : ""}
                        sx={{
                          "&:hover, &:focus": {
                            color: "#B12930",
                            borderColor: "#B12930",
                            backgroundColor: "rgb(255,255,255,0)",
                          },
                          fontWeight: 550,
                          color: "#000",
                          px: { sm: 1, md: 2, lg: 4 },
                          border: "1px solid rgb(255,255,255,0)",
                          // borderRadius: "25px",
                          fontSize: { sm: "16px", md: "17px", lg: "20px" },
                          fontFamily: "Inria Serif",
                          textTransform: "capitalize",
                        }}
                      >
                        Home
                      </Button>
                    </Link>
                    <Link href={"/about"}>
                      <Button
                        className={pathname == "/about" ? "selectedNav" : ""}
                        sx={{
                          "&:hover, &:checked": {
                            color: "#B12930",
                            borderColor: "#B12930",
                            backgroundColor: "rgb(255,255,255,0)",
                          },
                          fontWeight: 550,
                          color: "#000",
                          px: { sm: 1, md: 2, lg: 4 },
                          border: "1px solid rgb(255,255,255,0)",
                          // borderRadius: "25px",
                          fontSize: { sm: "", md: "18px", lg: "20px" },
                          fontFamily: "Inria Serif",
                          textTransform: "capitalize",
                        }}
                      >
                        About Us
                      </Button>
                    </Link>
                    <Link href={"/products"}>
                      <Button
                        className={pathname == "/products" ? "selectedNav" : ""}
                        sx={{
                          "&:hover, &:focus": {
                            color: "#B12930",
                            borderColor: "#B12930",
                            backgroundColor: "rgb(255,255,255,0)",
                          },
                          fontWeight: 550,
                          color: "#000",
                          px: { sm: 1, md: 2, lg: 4 },
                          border: "1px solid rgb(255,255,255,0)",
                          // borderRadius: "25px",
                          fontSize: { sm: "", md: "18px", lg: "20px" },
                          fontFamily: "Inria Serif",
                          textTransform: "capitalize",
                        }}
                      >
                        Plans
                      </Button>
                    </Link>
                    <Link href={"/contact"}>
                      <Button
                        className={pathname == "/contact" ? "selectedNav" : ""}
                        sx={{
                          "&:hover, &:focus": {
                            color: "#B12930",
                            borderColor: "#B12930",
                            backgroundColor: "rgb(255,255,255,0)",
                          },
                          fontWeight: 550,
                          color: "#000",
                          px: { sm: 1, md: 2, lg: 4 },
                          border: "1px solid rgb(255,255,255,0)",
                          // borderRadius: "25px",
                          fontSize: { sm: "", md: "18px", lg: "20px" },
                          fontFamily: "Inria Serif",
                          textTransform: "capitalize",
                        }}
                      >
                        Contact Us
                      </Button>
                    </Link>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={2}
                  md={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Paper
                    component="form"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "6px",
                      overflow: "hidden",
                      width: { xs: 50, md: "auto" },
                    }}
                  >
                    <InputBase
                      sx={{
                        ml: 1,
                        flex: 1,
                        display: { xs: "none", md: "block" },
                        height: "100%",
                      }}
                      placeholder="Search Plans"
                      onClick={handleOpen}
                    />
                    <Button
                      variant="contained"
                      sx={{
                        "&:hover": {
                          bgcolor: "hsl(357, 62%, 55%)",
                        },
                        bgcolor: "#B12930",
                        minWidth: 5,
                      }}
                      onClick={handleOpen}
                    >
                      {/* <Box sx={{ display: { xs: "none", sm: "block" } }}>Search</Box>{" "} */}
                      <SearchIcon fontSize="small" sx={{ m: 0, p: 0 }} />
                    </Button>
                  </Paper>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Paper
                        component="form"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          borderRadius: "6px",
                          overflow: "hidden",
                          width: { xs: 50, md: "auto" },
                          height: "50px",
                        }}
                      >
                        <InputBase
                          sx={{
                            ml: 1,
                            flex: 1,
                            display: { xs: "none", md: "block" },
                            height: "100%",
                            p: 1,
                          }}
                          placeholder="Search Plans"
                          onClick={handleOpen}
                        />
                        <Button
                          variant="contained"
                          sx={{
                            "&:hover": {
                              bgcolor: "hsl(357, 62%, 55%)",
                            },
                            bgcolor: "#B12930",
                            minWidth: "70px",
                            height: "100%",
                          }}
                          onClick={handleOpen}
                        >
                          {/* <Box sx={{ display: { xs: "none", sm: "block" } }}>Search</Box>{" "} */}
                          <SearchIcon fontSize="small" sx={{ m: 0, p: 0 }} />
                        </Button>
                      </Paper>
                    </Box>
                  </Modal>
                </Grid>
                <Grid item xs={2} sm={0.5} textAlign={"end"}>
                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar
                          alt="Remy Sharp"
                          src={profileIcon.src}
                          sx={{
                            width: { xs: 34, md: 44 },
                            height: { xs: 34, md: 44 },
                          }}
                        />
                      </IconButton>
                    </Tooltip>
                    {login ? (
                      <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                      >
                        {settings.map((setting) => (
                          <MenuItem
                            key={setting}
                            onClick={handleCloseUserMenu}
                            sx={{
                              "&:hover": {
                                bgcolor: "#B12930",
                                color: "#fff",
                              },
                            }}
                          >
                            <Typography textAlign="center">
                              {setting}
                            </Typography>
                          </MenuItem>
                        ))}
                      </Menu>
                    ) : (
                      <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                      >
                        <Link
                          href={"/login"}
                          style={{ textDecoration: "none" }}
                        >
                          <MenuItem
                            onClick={handleCloseUserMenu}
                            sx={{
                              "&:hover": {
                                bgcolor: "#B12930",
                                color: "#fff",
                              },
                              color: "#000",
                            }}
                          >
                            <LoginIcon />
                            <Typography
                              textAlign="center"
                              sx={{
                                textTransform: "capitalize",
                                mx: 1,
                              }}
                            >
                              Login
                            </Typography>
                          </MenuItem>
                        </Link>
                        <Link
                          href={"/register"}
                          style={{ textDecoration: "none" }}
                        >
                          <MenuItem
                            onClick={handleCloseUserMenu}
                            sx={{
                              "&:hover": {
                                bgcolor: "#B12930",
                                color: "#fff",
                              },
                              color: "#000",
                            }}
                          >
                            <HowToRegIcon />
                            <Typography
                              textAlign="center"
                              sx={{
                                textTransform: "capitalize",
                                mx: 1,
                              }}
                            >
                              Register
                            </Typography>
                          </MenuItem>
                        </Link>
                      </Menu>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </Toolbar>
          </Container>
          <Divider />
        </AppBar>
      </Box>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </div>
  );
};

export default Header;
