
// import React from 'react';
// // import bootstrap for react 'check bootstrap react docs'


// // use props to pass down the page array from App
// function Nav(props) {
//   //to see what gets passed down in the props
//   console.log(props);


//   const {
//     pages = [],
//     currentPage,
//     setCurrentPage,

//   } = props


//   return (

//     <nav className="row navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         <h1 className="navbar-brand ms-2">Ulises Rosas</h1>
//         {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button> */}
//         <div className="navbar-collapse flex-grow-0" id="navbarNav">
//           <ul className="navbar-nav justify-content-end">
//             {/* passed in index to be able to create a li for every item in the pages array */}
//             {props.pages.map((page) => (
//               <li className="nav-item m-1 nav-link"
//                 key={page.name}>
//                 {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
//                 <span onClick={() => setCurrentPage(page.name)}>{page.name}</span>
//               </li>))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );

// }

// export default Nav;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const ResponsiveAppBar = (props) => {
   
  const {
    pages = [],
    currentPage,
    setCurrentPage,

  } = props
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    // setAnchorElNav(null);
    // setCurrentPage(page.name);
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
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Ulises Rosas
          </Typography>
          
            {/* this container is for small media querie breakpoint */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {/* This element is for the colapsed version of the nav bar that apears for smaller windows */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* this is the icon itself withiut the button logic */}
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* maps through each pages array item */}
              {props.pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>

          {/* This container is for the larger meadia query break point */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* maps through pages array passed in through props*/}
            {props.pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
            {/* This container is for the Avatar*/}
          <Box sx={{ flexGrow: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
