import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ mr: 2 }}>
          <Typography variant="h1" noWrap component="div">
            Fulfillment Service
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
