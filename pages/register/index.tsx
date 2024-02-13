import Google from "../../public/Images/Google.svg";
import backImage from "../../public/Images/CarouselImages/7.jpg";
import {
  Box,
  Button,
  Checkbox,
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
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/router";
import Link from "next/link";

const Register = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const [userName, setuserName] = useState<Record<string, string>>({
    userName: "",
    password: "",
  });
  // const loginObj = {
  //   userName: "admin",
  //   password: "123456789",
  // };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleChange = (name: string, value: string) => {
    // console.log(value);
    setuserName((prev) => ({ ...prev, [name]: value }));
  };
  // const handleSubmit = () => {
  //   if (
  //     userName["userName"] === loginObj.userName &&
  //     userName["password"] === loginObj.password
  //   ) {
  //     router.push("/");
  //     // alert("Register");
  //   } else {
  //     alert("Invalid User Details");
  //   }
  // };
  return (
    <div>
      <Box sx={{ minHeight: "100vh" }}>
        <Grid container>
          <Grid
            item
            xs={0}
            sm={12}
            md={6}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Box
              sx={{
                maxHeight: { sm: "0vh", md: "100vh" },
                opacity: { sm: "0.2", md: "1" },
              }}
            >
              <Image
                src={backImage.src}
                width={950}
                alt=""
                height={500}
                style={{ height: "100vh", width: "100%", zIndex: "-1" }}
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Container maxWidth="sm" sx={{ my: { sm: "25%", md: "0" } }}>
              <Box sx={{ py: 10 }}>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{ fontSize: "2.3rem", fontWeight: 600 }}
                  >
                    Sign Up Page
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
                    label="Email Address"
                    size="medium"
                    name="email"
                    fullWidth
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                  />
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      name="password"
                      onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                      }
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      label="Password"
                    />
                  </FormControl>
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Confirm Password
                    </InputLabel>
                    <OutlinedInput
                      name="password"
                      onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                      }
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
                      label="Confirm Password"
                    />
                  </FormControl>
                </Box>
                <Box>
                  <Typography>
                    <Checkbox
                      // {...label}
                      // defaultChecked
                      sx={{
                        color: "#000",
                        "&.Mui-checked": {
                          color: "#000",
                        },
                      }}
                    />
                    Agree to our Term of use and Privacy Policy
                  </Typography>
                  <Typography>
                    <Checkbox
                      // {...label}
                      sx={{
                        color: "#000",
                        "&.Mui-checked": {
                          color: "#000",
                        },
                      }}
                    />
                    Subscribe to our Monthly newsletter
                  </Typography>
                </Box>
                <Box mt={3}>
                  <Button
                    variant="contained"
                    sx={{
                      "&:hover": {
                        bgcolor: "hsl(357, 62%, 55%)",
                      },
                      minWidth: 150,
                      bgcolor: "#b12930",
                    }}
                    // onClick={handleSubmit}
                  >
                    Sign Up
                  </Button>
                  <Typography mt={3}>
                    Already have an account?{" "}
                    <Link href="/login" style={{ color: "#000" }}>
                      Sign In
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Register;
