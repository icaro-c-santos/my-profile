import { Box, Container, SxProps, Theme, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { listImgs } from "./Dicionary";
import BoxImage from "./BoxImage";
import { Wellcome } from "./Wellcome";
import { SectionSumary } from "./SectionSumary";
import { SectionTechnologies } from "./SectionTechnologies";

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
    <Container sx={{ marginTop: "40px", maxWidth: "1400px!important" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Wellcome></Wellcome>
      </Box>
      <Box
        flexDirection={{ md: "row", sm: "column" }}
        sx={{
          gap: "60px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ maxWidth: "1000px" }}>{boxImage}</Box>

        <SectionSumary />
      </Box>
      <Box>{<SectionTechnologies />}</Box>
    </Container>
  );
};
