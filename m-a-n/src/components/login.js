import React, { useState } from "react";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button  from '@mui/material/Button';


function Thing(props) {


  const handleClick = () =>{
    props.setLoggedIn(true)
  }


  return (
    <Paper 
    style={{
      width:"70vh", 
      height:"70vh", 
      display:"flex", 
      flexDirection:"column", 
      margin:"40px auto auto auto"}} 
      elevation={3}> 
    <h3 style={{display:"flex", justifyContent:"space-around"}}> Welcome to da  MUZZZIIIIKKK </h3>
    <form>
    <div
    style={{
      margin:"10px"
    }}>
    <TextField fullWidth id="outlined-basic" label="Username*" variant="outlined"
      style={{
        margin:"5px 5px 5px 5px"
      }} />
    <TextField fullWidth id="outlined-basic" label="Password*" variant="outlined"
    style={{
        margin:"5px 5px 5px 5px"
      }} />
    <Button fullWidth type="submit" onClick={()=>{handleClick()}} color="primary">Login</Button>
    </div>
    </form>
    </Paper>

  );
}

export default Thing;
