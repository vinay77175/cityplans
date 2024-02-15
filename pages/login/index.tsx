import { useForm, SubmitHandler } from "react-hook-form"
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
  Input,
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
interface IFormInput {
  firstName: string
  lastName: string
  age: number
}
const Login = () => {
  // const { register, handleSubmit } = useForm<IFormInput>()
  // const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const [userName, setuserName] = useState<Record<string, string>>({
    userName: "",
    password: "",
  });
  const loginObj = {
    userName: "admin",
    password: "123456789",
  };
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
  const handleSubmit = () => {
    if (
      userName["userName"] === loginObj.userName &&
      userName["password"] === loginObj.password
    ) {
      router.push("/");
    } else {
      alert("Invalid User Details");
    }
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
                <Box my={5} 
                display={"flex"} flexDirection={"column"} 
                gap={5}
                >
                  <TextField
                    variant="outlined"
                    label="Username"
                    size="medium"
                    name="userName"
                    fullWidth
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                  />
                  {/* <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      {...register("firstName", {
                        required: true,
                        maxLength: 20,
                      })}
                    /><br></br>
                    <input
                      {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
                    />
                    <input
                      type="number"
                      {...register("age", { min: 18, max: 99 })}
                    />
                    <input type="submit" />
                  </form> */}
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
                  <Link href={"/login/email_verify"} style={{ color: "#000" }}>
                    <Typography>Forgot your password ?</Typography>
                  </Link>
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
                    onClick={handleSubmit}
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
            </Container>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Login;
