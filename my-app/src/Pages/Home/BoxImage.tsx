import { Box, styled, SxProps, Theme } from "@mui/material";
import { keyframes } from "@mui/system";
import { useEffect, useState } from "react";

const BoxImage = ({ url }: { url: string }) => {
  const Keyframes = styled("div")({
    "@keyframes animation": {
      "0%": {
        opacity: 0,
      },
      "10%": {
        opacity: 0.2,
      },
      "20%": {
        opacity: 0.4,
      },
      "40%": {
        opacity: 1,
      },
      "90%": {
        opacity: 1,
      },
      "95%": {
        opacity: 0.5,
      },
      "100%": {
        opacity: 0,
      },
    },
    animationDuration: "4s",
    animationDirection: "normal",
    animationName: "animation",
  });

 
  return (
    <Box>
      <Keyframes>
        <img src={url} width={"100%"} />
      </Keyframes>
    </Box>
  );
};

export default BoxImage;
