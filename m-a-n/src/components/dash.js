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
  const [volume, setVolume] = useState(30);
  const [quality, setQuality] = useState(2);
  const [online, setOnline] = useState(true);


  const handleVolume = (event) => {
    setVolume(event.target.value === '' ? '' : Number(event.target.value));
        console.log(volume)
  }

  const label = { inputProps: { 'aria-label': 'Switch demo' } };


  const handleChange2 = (event) => {
    setQuality(event.target.value);
  };

  
  const handleOnline = (event) => {
    setOnline(event.target.checked);
  };
  


  return (
    <div 
    style={{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",
    
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
      <Switch {...label} checked={online} onChange={handleOnline} />
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
        <Slider 
        style={{margin:"auto 15px auto 15px"}} 
        step={10}
                    marks
                    min={10}
                    max={100}
        aria-label="Volume" 
        value={volume} 
        onChange={handleVolume} />
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
          <MenuItem value={1}>Low</MenuItem>
          <MenuItem value={2}>Normal</MenuItem>
          <MenuItem value={3}>High</MenuItem>
        </Select>


      </FormControl>
      </div>
    </Paper>
    <Paper 
    style={{
      width:"50vh", 
      height:"50vh", 
      flexDirection:"column", 
      flexWrap:"wrap",
      margin:"40px 20px 20px 20px"}} 
      elevation={3}>    
          <div style={{
        display:"flex",
        justifyContent:"center",
        flexDirection:"column"
      }}>
        <div style={{
        display:"flex",
        justifyContent:"center",
        flexDirection:"row",
        flexWrap:"wrap"
      }}>
       <h2>  
    System Notifications:</h2>
      {volume >= 80 && <li style={{width:"100%", margin:"15px"}}> TOO LOUD</li>}
      {quality === 1 && <li style={{width:"100%", margin:"15px"}}>  QUALITY IS LOW </li>}
      {!online && <li style={{width:"100%", margin:"15px"}}> OFFLINE </li>}
      </div>
      </div>
  </Paper>
    </div>
  )
}
