import { Button, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router";
import { DICTIONARY } from "./Dicionary";

export const Wellcome = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "50px 30px",
          marginBottom:"20px",
          bgcolor: "#f8f9fa",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "40px" }}>
            <h1>{DICTIONARY.wellcomeTitle}</h1>
          </Typography>
          <Typography sx={{ fontSize: "18px", marginBottom: "25px" }}>
            <h2>{DICTIONARY.WellcomeSubTitle}</h2>
          </Typography>
        </Box>

        <Divider sx={{ borderBottom: "2px solid rgb(189, 188, 188)" }} />
        <Box>
          <Typography sx={{ marginTop: "20px" }}>
            {DICTIONARY.wellcome}
          </Typography>
          <Button
            sx={{
              bgcolor: "#212529",
              color: "white",
              marginTop: "20px",
              textTransform: "none",
              fontSize: "18px",
              padding: "8px 10px",
              transition: "0.5s",
              "&:hover": {
                backgroundColor: "gray",
                transition: "0.5s",
                color: "black",
              },
            }}
            onClick={() => navigate("/about")}
          >
            Leia Mais..
          </Button>
        </Box>
      </Box>
    </>
  );
};
