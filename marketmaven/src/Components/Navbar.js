import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import logo from "../Assets/MarketMaven.png";
import profile from "../Assets/profile.png";
import "@fontsource/montserrat";
import "@fontsource/lato";

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [loggedIn, setLoggedIn] = React.useState(false);
  React.useEffect(() => {
    if (localStorage.getItem("id")) {
      setLoggedIn(true);
    } else {
    }
  });
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "montserrat",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
                  <img src={logo} style={{ width: "70px", height: "70px"}} alt="logo" />

            <p style={{marginTop: "17.5px"}}>Market Maven</p>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <img src={logo} style={{ width: "70px", height: "70px" }} alt="logo" />

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {loggedIn && (
                <Link
                  to={loggedIn ? "/dashboard" : "/"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{"Dashboard"}</Typography>
                  </MenuItem>
                </Link>
              )}
              {loggedIn && (
                <Link
                  to={loggedIn ? "/market" : "/signup"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      {loggedIn ? "Market" : "Sign-up"}
                    </Typography>
                  </MenuItem>
                </Link>
              )}

              <Link
                to="/companies"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Companies</Typography>
                </MenuItem>
              </Link>
              <Link to="/news" style={{ textDecoration: "none", color: "black" }}>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">News</Typography>
              </MenuItem>
            </Link>
              <Link
                to="/about-us"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">About Us</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          {/* <img className="bg-dark" src="./Assets/MarketMaven.png" alt="" /> */}
          {/* <img
            src={logo}
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            style={{ width: "70px", height: "70px" }}
            alt="logo"
          /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Market Maven
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {loggedIn && (
              <Link
                to={loggedIn ? "/dashboard" : "/"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{"Dashboard"}</Typography>
                </MenuItem>
              </Link>
            )}

            {loggedIn && (
              <Link
                to={loggedIn ? "/market" : "/signup"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    {loggedIn ? "Market" : "Sign-up"}
                  </Typography>
                </MenuItem>
              </Link>
            )}
            <Link
              to="/companies"
              style={{ textDecoration: "none", color: "white" }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Companies</Typography>
              </MenuItem>
            </Link>
            <Link to="/news" style={{ textDecoration: "none", color: "white" }}>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">News</Typography>
              </MenuItem>
            </Link>
            <Link
                to="/about-us"
                style={{ textDecoration: "none", color: "white" }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">About Us</Typography>
                </MenuItem>
              </Link>
          </Box>
          {loggedIn ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Log In" src={profile} />
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
                <Link
                  to="/profile"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                </Link>

                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography
                      textAlign="center"
                      onClick={() => {
                        localStorage.removeItem("id");
                        setLoggedIn(false);
                        console.log("Logged Out");
                      }}
                    >
                      Log out
                    </Typography>
                  </MenuItem>
                </Link>
              </Menu>
            </Box>
          ) : (
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Login</Typography>
              </MenuItem>
            </Link>
          )}
        </Toolbar>
      </Container>
    
    </AppBar>
  );
}
