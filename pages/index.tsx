import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Drawer from "@mui/material/Drawer";
import Logo from "../public/Images/Logo.png";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import backImage1 from "../public/Images/1.png";
import backImage2 from "../public/Images/home_back_img2.png";
import About_section from "./home/about_section";
import profileIcon from "../public/Images/Male User.svg";
import slide1 from "../public/Images/CarouselImages/1.jpg";
import slide2 from "../public/Images/CarouselImages/2.jpg";
import slide3 from "../public/Images/CarouselImages/3.jpg";
import slide4 from "../public/Images/CarouselImages/4.jpg";
import slide5 from "../public/Images/CarouselImages/5.jpg";
import slide6 from "../public/Images/CarouselImages/6.jpg";
import slide7 from "../public/Images/CarouselImages/7.jpg";
import slide8 from "../public/Images/CarouselImages/8.jpg";
import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Plan_section from "./home/plan_section";

const drawerWidth = 240;
const pages = ["Home", "About Us", "projects", "Services", "Contact Us"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  var slideSettings = {
    centerPadding: '40px',
    infinite: true,
    centerMode: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

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
        {pages.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                color: "#000",
                fontFamily: "Inria Serif",
                textTransform: "capitalize",
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Box
        sx={{
          minHeight: "100vh",
          position: "relative",
        }}
      >
        {/* Navbar */}
        <AppBar
          component="nav"
          className={styles.Header_AppBar}
          sx={{ pt: "5vh", position: "static" }}
        >
          <Toolbar>
            <Grid container display={"flex"} alignItems={"center"} pb="10px">
              <Grid item xs={1} sm={0} display={{ xs: "block", sm: "none" }}>
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
              <Grid item xs={10} sm={3}>
                <Typography
                  // variant="h6"
                  component="div"
                  sx={{
                    flexGrow: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component={"img"}
                    src={Logo.src}
                    alt="Logo1"
                    sx={{ height: "100%", width: { xs: "155px", md: "255px" } }}
                  />
                </Typography>
              </Grid>
              <Grid item xs={0} sm={8} textAlign={"center"}>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  {pages.map((item) => (
                    <Button
                      key={item}
                      sx={{
                        "&:hover": {
                          color: "#B12930",
                          borderColor: "#B12930",
                          backgroundColor: "rgb(255,255,255,0)",
                        },
                        fontWeight: 550,
                        color: "#000",
                        px: { sm: 1, md: 2, lg: 4 },
                        border: "1px solid rgb(255,255,255,0)",
                        borderRadius: "25px",
                        fontSize: { sm: "", md: "18px", lg: "22px" },
                        fontFamily: "Inria Serif",
                        textTransform: "capitalize",
                      }}
                    >
                      {item}
                    </Button>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={1} sm={1} textAlign={"center"}>
                <Box>
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
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
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

        {/* Background Images */}
        <Box
          component={"img"}
          src={backImage1.src}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: "-1",
            opacity: 0.3,
            filter: "drop-shadow(12px 12px 4px #000)",
            height: "100%",
            width:"40%"
          }}
        />
        <Box
          component={"img"}
          src={backImage2.src}
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: "-1",
            opacity: 0.3,
            filter: "drop-shadow(-12px -12px 4px #000)",
            height: "100%",
          }}
        />

        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-between", mt: 10 }}
        >
          <Grid item xs={12} md={4}>
            <Box pt={5} pl={5}>
              <Typography
                variant="h1"
                sx={{ fontSize: "4.5rem", fontFamily: "Jacques Francois" }}
                gutterBottom
              >
                Dolor sit amet, consectetur adipiscing elit. Curabitur
              </Typography>
              <Typography sx={{ fontSize: "1.5rem", my: 6 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur consequat.
              </Typography>
              <Typography>
                <Button
                  variant="contained"
                  sx={{
                    "&:hover": { backgroundColor: "#000" },
                    backgroundColor: "#222",
                    px: 7,
                    py: 3,
                    fontSize: "1rem",
                    borderRadius: 12,
                  }}
                >
                  Join us now
                </Button>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} px={3.1}>
            <Box width={"100%"} height={"100%"}>
              {" "}
                <Slider {...slideSettings}>
                <Box sx={{objectFit:"cover"}} > <Box component={"img"} src={slide1.src} height={"600px"} sx={{borderRadius:"40px",maxWidth:"100%",width:"98%"}} /></Box>
                <Box sx={{objectFit:"cover"}} > <Box component={"img"} src={slide2.src} height={"600px"} sx={{borderRadius:"40px",maxWidth:"100%",width:"98%"}} /></Box>
                <Box sx={{objectFit:"cover"}} > <Box component={"img"} src={slide3.src} height={"600px"} sx={{borderRadius:"40px",maxWidth:"100%",width:"98%"}} /></Box>
                <Box sx={{objectFit:"cover"}} > <Box component={"img"} src={slide4.src} height={"600px"} sx={{borderRadius:"40px",maxWidth:"100%",width:"98%"}} /></Box>
                <Box sx={{objectFit:"cover"}} > <Box component={"img"} src={slide5.src} height={"600px"} sx={{borderRadius:"40px",maxWidth:"100%",width:"98%"}} /></Box>
                <Box sx={{objectFit:"cover"}} > <Box component={"img"} src={slide6.src} height={"600px"} sx={{borderRadius:"40px",maxWidth:"100%",width:"98%"}} /></Box>
                <Box sx={{objectFit:"cover"}} > <Box component={"img"} src={slide7.src} height={"600px"} sx={{borderRadius:"40px",maxWidth:"100%",width:"98%"}} /></Box>
                {/* <Box sx={{objectFit:"cover",mx:1}} > <Box component={"img"} src={slide8.src}  height={"600px"} width={"500px"} sx={{borderRadius:"15px"}} /></Box> */}
              </Slider>
            </Box>
          </Grid>
        </Grid>
        {/* Carousel Slider */}
      </Box>
      <About_section />
      <Plan_section />
    </div>
  );
}
