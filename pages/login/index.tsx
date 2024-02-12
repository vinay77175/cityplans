import Google from "../../public/Images/Google.svg";
import backImage from "../../public/Images/CarouselImages/2.jpg";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <div>
      <Box sx={{ minHeight: "100vh" }}>
        <Grid container>
          <Grid item xs={0} sm={6}>
            <Box sx={{ minHeight: "100vh" }}>
              <Image
                src={backImage.src}
                width={950}
                alt=""
                height={500}
                style={{ height: "100vh", width: "100vh" }}
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Container maxWidth="sm">
              <Box sx={{ py: 10 }}>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{ fontSize: "2.3rem", fontWeight: 600 }}
                  >
                    Sign In Page
                  </Typography>
                </Box>
                <Box
                  sx={{
                    my: 5,
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                  }}
                >
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      "&:hover": {
                        color: "#fff",
                        bgcolor: "#b12930",
                        borderColor: "#fff",
                      },
                      borderRadius: "8px",
                      height: "5vh",
                      border: "1px solid black",
                      color: "#b12930",
                      fontWeight: 600,
                      fontSize: 16,
                    }}
                  >
                    <Image
                      src={Google.src}
                      height={25}
                      width={25}
                      alt="google"
                      style={{ marginRight: "8px" }}
                    />
                    Continue with Google
                  </Button>
                </Box>
                <Divider>OR</Divider>
                <Box my={5} display={"flex"} flexDirection={"column"} gap={5}>
                  <TextField
                    variant="outlined"
                    label="Username"
                    size="medium"
                    fullWidth
                  />
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      "&:hover": {
                        bgcolor: "hsl(357, 62%, 55%)",
                      },
                      minWidth: 150,
                      bgcolor: "#b12930",
                    }}
                  >
                    Sign In
                  </Button>
                </Box>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Login;
