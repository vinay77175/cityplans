import Google from "../../../public/Images/Google.svg";
import backImage from "../../../public/Images/CarouselImages/3.jpg";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const EmailVerify = () => {
  const router = useRouter();
  const [userName, setuserName] = useState<Record<string, string>>({
    userName: "",
    password: "",
  });
  // const loginObj = {
  //   userName: "admin",
  //   password: "123456789",
  // };

  const handleChange = (name: string, value: string) => {
    // console.log(value);
    setuserName((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {
    // if (
    //   userName["userName"] === loginObj.userName &&
    //   userName["password"] === loginObj.password
    // ) {
    router.push("/login/email_verify/verification");
    // } else {
    //   alert("Invalid User Details");
    // }
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
                quality={50}
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
                    Reset Your Password
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Deleniti itaque debitis dolores, nulla magni suscipit.
                  </Typography>
                </Box>

                <Box my={5} display={"flex"} flexDirection={"column"} gap={5}>
                  <TextField
                    variant="outlined"
                    label="Email Address"
                    size="medium"
                    name="userName"
                    fullWidth
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                  />
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
                    Send
                  </Button>
                  <Typography mt={3}>
                    Back to{" "}
                    <Link href="/login" style={{ color: "#000" }}>
                      Login
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

export default EmailVerify;
