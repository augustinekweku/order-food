import BottomNav from "@/components/BottomNav";
import Navbar from "@/components/Navbar";
import { Search } from "@mui/icons-material";
import {
  Box,
  Card,
  FormControl,
  Grid,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import cuisine from "../public/cuisine.jpeg";

const Home = () => {
  return (
    <>
      <Navbar />
      <Grid container my={12} px={3} display={"flex"} justifyContent={"center"}>
        <Grid item xs={12} md={6} lg={4} xl={2}>
          <Box>
            <FormControl
              fullWidth
              variant="outlined"
              sx={{ background: "#fff" }}
            >
              <OutlinedInput
                size="small"
                id="outlined-adornment-weight"
                placeholder="Search"
                endAdornment={
                  <InputAdornment position="end">
                    <Search />
                  </InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>
          </Box>

          <Box mt={3} display={"flex"} flexDirection={"column"} gap={2}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
              <Card key={i} sx={{ p: 2 }}>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  gap={2}
                >
                  <Image src={cuisine} alt="food" width={"100"} />
                  <Box lineHeight={1}>
                    <Box fontWeight={"bold"}>Potato Chips with Chicken</Box>
                    <Box>Green Leaf Eatery</Box>
                    <Box>
                      <Typography variant="subtitle2" color={"orange"}>
                        Closed
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2">
                        Opens @ 11:00 AM
                      </Typography>
                    </Box>
                  </Box>
                  <Box display={"flex"} gap={0.5} alignItems={"center"}>
                    {" "}
                    <Typography component={"p"} variant="caption">
                      GHC
                    </Typography>
                    <Typography
                      component={"p"}
                      variant="h6"
                      color={"orange"}
                      fontWeight={"bold"}
                    >
                      10
                    </Typography>
                  </Box>
                </Box>
              </Card>
            ))}
          </Box>
        </Grid>
      </Grid>
      <BottomNav />
    </>
  );
};

export default Home;
