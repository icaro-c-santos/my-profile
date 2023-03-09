import { Box, Container, SxProps, Theme, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {  listImgs } from "./Dicionary";
import BoxImage from "./BoxImage";
import { Wellcome } from "./Wellcome";
import { SectionSumary } from "./SectionSumary";

export const Home = () => {
  const [boxImage, setBoxImage] = useState<any>(null);

  useEffect(() => {
    setBoxImage(<BoxImage url={listImgs[0]}></BoxImage>);

    let index = 0;
    const timer = setInterval(() => {
      index >= listImgs.length - 1 ? (index = 0) : ++index;
      setBoxImage(<BoxImage url={listImgs[index]}></BoxImage>);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container sx={{ marginTop: "40px" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Wellcome></Wellcome>
      </Box>
      <Box
        flexDirection={{ md: "row", sm: "column" }}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box sx={{ width: "600px", padding: "10px" }}>{boxImage}</Box>

        <SectionSumary />
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            height: "200px",
            flexDirection: "row",
            bgcolor: "#212529",
            margin: "40px auto",
          }}
        >
          Progresso
          <li>duo</li>
          <li>outro</li>
          <li>outro</li>
        </Box>
      </Box>
    </Container>
  );
};
