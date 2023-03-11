import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "black",
          minHeight: "150px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ color: "white", fontSize: "24px", textAlign: "center" }}
        >
          Create By Icaro Santos
        </Typography>
        <Typography
          sx={{ color: "white", fontSize: "24px", textAlign: "center" }}
        >
          Contato: Icarosalna@hotmail.com
        </Typography>
      </Box>
    </>
  );
};
