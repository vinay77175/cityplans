import { useForm, SubmitHandler } from "react-hook-form";
import Google from "../../public/Images/Google.svg";
import backImage from "../../public/Images/CarouselImages/2.jpg";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/router";
import Link from "next/link";
import { toast } from "react-toastify";
interface IFormInput {
  email: string;
  password: string;
}
const Login = () => {
  const loginObj = {
    email: "admin@gmail.com",
    password: "123456789",
  };
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (data.email === loginObj.email && data.password === loginObj.password) {
      router.push("/");
      toast.success("Login Successfully");
    } else {
      toast.error("Invalid User Details");
    }
  };

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
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Box my={5} display={"flex"} flexDirection={"column"} gap={5}>
                    <TextField
                      variant="outlined"
                      label="Email Address"
                      size="medium"
                      fullWidth
                      {...register("email", {
                        required: true,
                        pattern:
                          /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g,
                      })}
                    />
                    <TextField
                      {...register("password", {
                        required: true,
                        minLength : 8,
                      })}
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      label="Password"
                      fullWidth
                    />
                    <Link
                      href={"/login/email_verify"}
                      style={{ color: "#000" }}
                    >
                      <Typography>Forgot your password ?</Typography>
                    </Link>
                    <Box>
                      <Button
                        type="submit"
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

                      <Typography mt={3}>
                        Don't have an account?{" "}
                        <Link href="/register" style={{ color: "#000" }}>
                          Sign up
                        </Link>
                      </Typography>
                    </Box>
                  </Box>
                </form>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Login;
