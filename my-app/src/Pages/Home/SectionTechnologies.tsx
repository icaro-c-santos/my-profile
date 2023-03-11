import reacctIcon from "../../imgs/react-icon.png";
import typescripIcon from "../../imgs/typescript-icon.svg";
import nestJs from "../../imgs/nestJs-icon.png";
import docker from "../../imgs/docker-icon.svg";
import git from "../../imgs/git-icon.svg";
import nodeJs from "../../imgs/nodeJs-icon.svg";
import express from "../../imgs/express-icon.png";
import { Box, Typography } from "@mui/material";
type TypeIcon = {
  path: string;
  alt: string;
  text: string;
};

const icons: TypeIcon[] = [
  { path: reacctIcon, alt: "ícone do react", text: "React" },
  { path: typescripIcon, alt: "ícone do typescript", text: "Typescript" },
  { path: nestJs, alt: "ícone do nestJs", text: "Nest Js" },
  { path: docker, alt: "ícone do docker", text: "Docker" },
  { path: git, alt: "ícone do git", text: "Git" },
  { path: nodeJs, alt: "ícone do nodeJs", text: "Node js" },
  { path: express, alt: "ícone do express", text: "Express" },
];

export const SectionTechnologies = () => {
  return (
    <Box
      sx={{
        display: "flex",
        borderRadius: "25px",
        justifyContent: "space-around",
        alignItems: "center",
        flexShrink: "1",
        flexWrap: "wrap",
        flexDirection: "row",
        bgcolor: "#212529",
        margin: "25px auto",
        padding: "20px",
        minHeight:"150px"
      }}
    >
      {icons.map((item) => (
        <Box
          sx={{ textAlign: "center", margin: "auto 20px" }}
          key={icons.indexOf(item)}
        >
          <img
            src={item.path}
            alt={item.alt}
            width={"60px"}
            height={"60px"}
          ></img>
          <Typography color={"white"}>{item.text}</Typography>
        </Box>
      ))}
    </Box>
  );
};
