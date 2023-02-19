import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ApartmentIcon from '@mui/icons-material/Apartment';
import './Home.scss';
const Home = () => {
    const navItems = ['Home', 'About', 'Service','Project','Blog','Pages','Contact'];
  return (
    <div className='home'>
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{backgroundColor:"transparent"}} >
        <Toolbar >
          <IconButton
            color=""
            aria-label="open drawer"
            edge="start"
            sx={{ mr: '2', display: { sm: 'none' } }}
          >
            <ApartmentIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <div className='logo'> Arkio</div>
            
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'black' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box' },
          }}
        >
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          
        </Typography>
      </Box>
    </Box>
          <div className='banner'>
            <div className='head'>
            <p>Unique</p>
            <h1>Creating Your Future </h1>
            <h2>With <span class="color">Affection</span></h2>
            <div className='button'>
              <a href="">Discover project</a>
            </div>
            </div>
            <div className='headimg'>
              <img src="https://arkio-next.netlify.app/images/slider/s1.jpg" width="100%"></img>
            </div>
          </div>
    </div>
    
  )
}

export default Home
