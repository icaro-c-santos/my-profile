import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DICTIONARY } from "./Dicionary";

type TypeSkill = {
  title: string;
  description: string;
  projects: string[];
};

const Skill = (skill: TypeSkill) => {
  return <></>;
};

const skills: TypeSkill[] = [
  { title: "javascript", description: "", projects: [] },
];

export const About = () => {
  return (
    <Container
      sx={{
        bgcolor: "rgba(0, 0, 0, 0.808)",
        padding: "20px",
        borderRadius: "15px",
      }}
    >
      <Typography sx={{ color: "rgb(228, 226, 226)", fontSize: "40px" }}>
        Sobre mim:
      </Typography>
      <Typography sx={{ color: "rgb(228, 226, 226)", fontSize: "18px" }}>
        {DICTIONARY.aboutMe}
      </Typography>
      <Typography sx={{ color: "rgb(228, 226, 226)", fontSize: "40px" }}>
        Conhecimentos:
      </Typography>
      <Box sx={{ bgcolor: "white" }}>
        {skills.map((skill) => {
          return (
            <Typography sx={{ color: "white" }}>
              <Skill
                title={skill.title}
                description={skill.description}
                projects={skill.projects}
                key={skill.title}
              ></Skill>
            </Typography>
          );
        })}
      </Box>
    </Container>
  );
};
