import { Box, CardMedia, Container, SxProps, Theme } from "@mui/material";
import { padding } from "@mui/system";
import { ReactNode, useEffect, useState } from "react";
import { listImgs } from "./Dicionary";
import BoxImage from "./BoxImage";

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
        <Box sx={{ height: "400px", margin: "30px auto", bgcolor: "pink" }}>
          Wellcome to My Profile
          <h1>
            Olá, Me chamo Ícaro, tenho 24 anos, sou um apaixonado por
            programação, buscando a cada dia aprender um pouco mais sobre esse
            universo enorme da computação, atualmente estudo na UFBA 3º
            semestre.
          </h1>
        </Box>
      </Box>
      <Box
        flexDirection={{ md: "row", sm: "column" }}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box
          sx={{ width: "600px", border: "1px solid black", padding: "10px" }}
        >
          {boxImage}
        </Box>
        <Box sx={{ maxWidth: "400px", bgcolor: "green" }}>
          Resumo: Apaixonado por programação, ao lado é possível conferir alguns
          projetos pessoais que desenvolvi buscando sempre seguir os padrões de
          projetos e documentação, é claro que ainda sou um Padawan
          inexperiente, porém, tentei seguir as principais boas práticas do
          mercado, se quiser saber um pouco mais sobre os projetos é possível
          conferir na seção "Projetos" os detalhes, documentação, levantamento
          de requisitos e tudo mais sobre os mesmo. Ou se estiver com muita
          pressa pode conferir um resumo de minhas qualificações e experiências
          no meu curriculo simplificado logo aqui abaixo.
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            height: "90px",
            flexDirection: "row",
            bgcolor: "blue",
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
