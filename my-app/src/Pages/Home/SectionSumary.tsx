import {
  Box,
  Button,
  Container,
  Divider,
  Typography,
  Tooltip,
} from "@mui/material";
import { DICTIONARY } from "./Dicionary";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

const Curriculum = () => {
  return (
    <Tooltip title={"Baixar Currículum"}>
      <Button
        href={DICTIONARY.linkCurriculum}
        download
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <AssignmentIndIcon
          sx={{ bgcolor: "white" }}
          fontSize={"large"}
        ></AssignmentIndIcon>
        <Typography color={"white"} fontSize={"30px"}>
          Currículum
        </Typography>
      </Button>
    </Tooltip>
  );
};

export const SectionSumary = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "400px",
        bgcolor: "#212529",
        padding: "40px",
        gap: "20px 0px",
      }}
    >
      <Typography
        sx={{
          fontSize: "20px",
          lineHeight: 1.5,
          textAlign: "justify",
          color: "whitesmoke",
        }}
      >
        {DICTIONARY.summary}
      </Typography>
      <Divider sx={{ borderBottom: "2px solid rgb(189, 188, 188)" }} />
      <Curriculum></Curriculum>
    </Box>
  );
};
