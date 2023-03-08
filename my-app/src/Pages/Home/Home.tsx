import { Box, Container, SxProps, Theme, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { DICTIONARY, listImgs } from "./Dicionary";
import BoxImage from "./BoxImage";
import { Wellcome } from "./Wellcome";

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
        <Box sx={{ height: "400px", margin: "30px auto", bgcolor: "#f8f9fa" }}>
          <Wellcome></Wellcome>
        </Box>
      </Box>
      <Box
        flexDirection={{ md: "row", sm: "column" }}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box sx={{ width: "600px", padding: "10px" }}>{boxImage}</Box>
        <Box
          sx={{
            maxWidth: "400px",
            bgcolor: "#212529",
            padding: "40px",
            fontSize: "20px",
            lineHeight: 1.5,
            textAlign: "justify",
            color: "whitesmoke"
          }}
        >
          {DICTIONARY.summary}
        </Box>
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
