import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";

export default function Layout() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          
          <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }} align="left" paddingLeft={6}>
            XYZ Chain Capital
          </Typography>
          <Button color="inherit">Connect Wallet</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}