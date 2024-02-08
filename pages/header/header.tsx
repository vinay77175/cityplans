import instagram from "../../public/Images/insta.svg" ;
import facebook from "../../public/Images/facebook.svg" ;
import linkedin from "../../public/Images/linkedin.svg" ;
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
  Menu,
  MenuItem,
  TextField,
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

import React from "react";
const drawerWidth = 240;
const pages = ["Header", "About Us", "projects", "Services", "Contact Us"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const Header = () => {
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
        {pages.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
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
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div>
      <Box sx={{ bgcolor: "#000", color: "#fff",py:"1vh" }}>
        <Container maxWidth="xl">
          <Box sx={{display:"flex",justifyContent:"space-between",px:4}}>
          <Typography>Welcome To CityPlans | Shop Now </Typography>
          <Typography sx={{display:"flex",gap:2}}>
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
        sx={{ position: "static" }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{py:2}} >
            <Grid container display={"flex"} alignItems={"center"} >
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
              <Grid item xs={10} sm={6}>
                <Typography
                  // variant="h6"
                  component="div"
                  sx={{
                    flexGrow: 0,
                    display: "flex",
                    justifyContent: "flex-start",
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
              {/* <Grid item xs={0} sm={8} textAlign={"center"}>
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
            </Grid> */}
              <Grid item xs={0} sm={5}>
                <Box sx={{ display: "flex" }}>
                  <TextField
                    size="small"
                    fullWidth
                    placeholder="Search Product"
                  ></TextField>
                  <Button
                    variant="contained"
                    sx={{ px: 5, bgcolor: "#B12930" }}
                  >
                    Search <SearchIcon fontSize="small" sx={{ ml: 1 }} />
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={1} sm={1} textAlign={"end"}>
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
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
        <Divider/>  
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
    </div>
  );
};

export default Header;
