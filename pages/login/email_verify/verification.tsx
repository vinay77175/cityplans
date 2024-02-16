// import { MuiOtpInput } from "mui-one-time-password-input";
import backImage from "../../../public/Images/CarouselImages/5.jpg";
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

const Verification = () => {
  const router = useRouter();
  const [value, setValue] = React.useState<string>("");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  const handleComplete = (finalValue: string) => {
    fetch("...");
  };

  const handleSubmit = () => {
    router.push("/login/email_verify/reset_pwd");
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
                    Verification
                  </Typography>
                  <Typography>
                    OTP (One Time Password) has sent to your Email. Please Check
                    Your Email and Enter OTP for Email verification.
                  </Typography>
                </Box>
                {/* 
                <Box my={5} display={"flex"} flexDirection={"column"} gap={5}>
                  <MuiOtpInput
                    value={value}
                    onChange={handleChange}
                    onComplete={handleComplete}
                    length={6}
                    autoFocus
                    validateChar={(character: string, index: number) => true}
                  />
                </Box> */}
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
                    <Link href="/login/email_verify" style={{ color: "#000" }}>
                      Edit Email Address
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

export default Verification;
