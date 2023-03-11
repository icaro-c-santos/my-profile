import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router";

function ResponsiveAppBar() {
  const navigate = useNavigate();

  const pages: { handler: () => void; title: string }[] = [
    {
      handler: () => {
        navigate("home");
      },
      title: "Home",
    },
    {
      handler: () => {
        navigate("sobre");
      },
      title: "Sobre",
    },
    {
      handler: () => {
        navigate("projetos");
      },
      title: "Projetos",
    },
    {
      handler: () => {
        window.open(
          "https://www.linkedin.com/in/%C3%ADcaro-da-concei%C3%A7%C3%A3o-santos-924892119/",
          "_blank"
        );
      },
      title: "Linkedin",
    },
    {
      handler: () => {
        window.open("https://github.com/", "_blank");
      },
      title: "Git Hub",
    },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl" sx={{ bgcolor: "black" }}>
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((item) => (
                <Button
                  key={Math.random()}
                  onClick={() => {
                    handleCloseNavMenu();
                    item.handler();
                  }}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    cursor: "pointer",
                    transition: "0.5s",
                    fontSize: "18px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "gray",
                      transition: "0.5s",
                    },
                  }}
                >
                  {item.title}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{
                    p: 0,
                    color: "white",
                    fontSize: "14px",
                    display: { xs: "flex", md: "none" },
                  }}
                >
                  Menu
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {pages.map((item) => (
                  <MenuItem
                    key={Math.random()}
                    onClick={() => {
                      handleCloseNavMenu();
                      item.handler();
                    }}
                  >
                    <Typography
                      sx={{ textDecoration: "none" }}
                      textAlign="center"
                    >
                      {item.title}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default ResponsiveAppBar;
