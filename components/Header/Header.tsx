import React, { useState } from 'react';

import { AccountCircle, KeyboardArrowDown } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  IconButton,
  Typography,
  Box,
  Toolbar,
  AppBar,
  Menu,
  MenuItem,
  Drawer,
} from '@mui/material';
import Link from 'next/link';

import { Container } from '../Container';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation';
import { UserAvatar } from '../UserAvatar';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState<boolean>(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const name = 'Nikita Galchenko';
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ padding: '10px 0' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Logo />
            <Navigation />
            <Box sx={{ display: { sm: 'flex', xs: 'none' } }}>
              {login ? (
                <Box sx={{ flexGrow: 0, display: 'flex' }}>
                  <Typography
                    sx={{ mr: 1, color: 'inherit', display: 'flex', alignItems: 'center' }}
                  >
                    {name}
                  </Typography>
                  <Box onClick={handleOpenUserMenu}>
                    <IconButton color="inherit">
                      <UserAvatar name={name} color="red" />
                    </IconButton>
                    <IconButton sx={{ p: 0 }}>
                      <KeyboardArrowDown
                        sx={{
                          color: 'inherit',
                        }}
                      />
                    </IconButton>
                  </Box>
                  <Menu
                    sx={{ mt: '45px' }}
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem onClick={handleCloseUserMenu} component={Link} href="/settings">
                      Settings
                    </MenuItem>
                    <MenuItem onClick={() => setLogin((prev) => !prev)}>Log out</MenuItem>
                  </Menu>
                </Box>
              ) : (
                <IconButton color="inherit">
                  <AccountCircle color="inherit" fontSize="large" />
                </IconButton>
              )}
            </Box>
            <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center' }}>
              <MenuIcon onClick={handleClickOpen} />
              <Drawer open={open} onClose={handleClose} anchor="right">
                <Box
                  display="flex"
                  flexDirection="column"
                  height="100%"
                  justifyContent="space-between"
                  padding="20px 10px"
                  width="100%"
                  minWidth="50vw"
                >
                  <Box display="flex" justifyContent="end">
                    {login ? (
                      <Box
                        display="flex"
                        justifySelf="end"
                        flexDirection="column"
                        sx={{ flexGrow: 0 }}
                      >
                        <Box display="flex">
                          <Typography
                            sx={{ mr: 1, color: 'inherit', display: 'flex', alignItems: 'center' }}
                          >
                            {name}
                          </Typography>
                          <Box onClick={handleOpenUserMenu}>
                            <IconButton color="inherit">
                              <UserAvatar name={name} color="red" />
                            </IconButton>
                            <IconButton sx={{ p: 0 }}>
                              <KeyboardArrowDown
                                sx={{
                                  color: 'inherit',
                                }}
                              />
                            </IconButton>
                          </Box>
                        </Box>
                        <Menu
                          sx={{ mt: '45px' }}
                          anchorEl={anchorElUser}
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          // keepMounted
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          open={Boolean(anchorElUser)}
                          onClose={handleCloseUserMenu}
                        >
                          <MenuItem onClick={handleCloseUserMenu} component={Link} href="/settings">
                            Settings
                          </MenuItem>
                          <MenuItem onClick={() => setLogin((prev) => !prev)}>Log out</MenuItem>
                        </Menu>
                      </Box>
                    ) : (
                      <IconButton color="inherit" sx={{ justifySelf: 'end' }}>
                        <AccountCircle color="inherit" fontSize="large" />
                      </IconButton>
                    )}
                  </Box>
                  <Navigation mobile />
                </Box>
              </Drawer>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
