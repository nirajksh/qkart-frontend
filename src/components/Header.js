import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import { useSnackbar } from "notistack";

const Header = ({children, hasHiddenAuthButtons}) => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("balance");
    history.push("/");
    window.location.reload();
  }

  if(hasHiddenAuthButtons){
    return (
      <Box className="header">
      <Box className="header-title">
        <img src="logo_light.svg" alt="QKart-icon"></img>
      </Box>
      {children}
      <Button
        className="explore-button"
        startIcon={<ArrowBackIcon />}
        variant="text"
        role="button"
        onClick={() => history.push("/")}
      >
        Back to explore
      </Button>
      </Box>
    )
  }
  return (
    <Box className="header">
      <Box className="header-title">
        <img src="logo_light.svg" alt="QKart-icon"></img>
      </Box>
      {children}
      <Stack direction="row" spacing={2} alignItems="center" >
      {localStorage.getItem("username") ? (
        <>
          <Avatar
            src="avatar.png"
            alt={localStorage.getItem("username") || "profile"}
          ></Avatar>

          <p className="username-text">{localStorage.getItem("username")}</p>
          <Button type="primary" onClick={logout}>
            Logout
          </Button>
        </>
      ) : (
        <>
          <Button type="primary" onClick={() => history.push('/login')}>Login</Button>
          <Button type="primary" variant="contained" onClick={() => history.push('/register')}>Register</Button>
        </>
      )}
      </Stack>
    </Box>
  );
};


export default Header;
