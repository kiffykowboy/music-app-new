// import logo from './logo.svg';
// import './App.css';

import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import  Box  from '@mui/material/Box';
import  Toolbar  from '@mui/material/Toolbar';
import  Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Thing from "./components/login"
import Dash from "./components/dash"


function ButtonAppBar() {
  const [User, setUser] = useState({loggedIn:null})
  const getUserInfo = (User) =>{
    setUser(User)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      {console.log(User)}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Music App
          </Typography>
        </Toolbar>
      </AppBar>

      {!User.loggedIn
      ?<Dash></Dash>

      :<Thing getInfo={getUserInfo} ></Thing>
      }
     
    </Box>
  );
}


export default ButtonAppBar