import React, { useState } from "react";
import Paper from '@mui/material/Paper';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Switch from '@mui/material/Switch';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export default function Dash() {
  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const [quality, setQual] = React.useState('');

  const handleChange2 = (event) => {
    setQual(event.target.value);
  };


  return (
    <div 
    style={{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around"
      }}>
 <Paper 
    style={{
      width:"50vh", 
      height:"50vh", 
      display:"flex", 
      flexDirection:"column", 
      margin:"40px 20px 20px 20px"}} 
      elevation={3}> 
      
      <div style={{
        display:"flex",
        justifyContent:"center"
      }}>
      <h2 style={{alignContent:"center"}}>Online Mode</h2>
      </div>
      <div style={{
        margin:"20px"
      }}>      
      <p>Is this application connected to the internet?</p>
      </div>
      <div style={{
        display:"flex",
        justifyContent:"center"
      }}>
      <Switch {...label} defaultChecked />
      </div>   

    </Paper>
    <Paper 
    style={{
      width:"50vh", 
      height:"50vh", 
      display:"flex", 
      flexDirection:"column", 
      margin:"40px 20px 20px 20px"}} 
      elevation={3}> 
      <div style={{
        display:"flex",
        justifyContent:"center"
      }}>
      <h2 style={{alignContent:"center"}}>Master Volume</h2>
      </div>
      <div style={{
        margin:"20px"
      }}>      
      <p>Overrides all other sound settings in the application.</p>
      </div>
      <div style={{
        display:"flex",
        flexDirection:"row"

      }}>
      <VolumeDown />
        <Slider style={{margin:"auto 15px auto 15px"}} aria-label="Volume" value={value} onChange={handleChange} />
        <VolumeUp />
      </div>
    </Paper>

   
    <Paper 
    style={{
      width:"50vh", 
      height:"50vh", 
      display:"flex", 
      flexDirection:"column", 
      margin:"40px 20px 20px 20px"}} 
      elevation={3}> 
   <div style={{
        display:"flex",
        justifyContent:"center"
      }}>
      <h2 style={{alignContent:"center"}}>Sound Quality</h2>
      </div>      
      <div style={{
        margin:"20px"
      }}>      
      <p>Manually controls the music quality in event of poor connection.</p>
      </div>
      <div  style={{
            margin:"10px"
          }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Quality</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={quality}
          label="quality"
          onChange={handleChange2}
        >
          <MenuItem value={"Low"}>Low</MenuItem>
          <MenuItem value={"Normal"}>Normal</MenuItem>
          <MenuItem value={"High"}>High</MenuItem>
        </Select>
      </FormControl>
      </div>
    </Paper>
    </div>
  )
}
