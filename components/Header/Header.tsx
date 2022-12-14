import React, { useState } from 'react';
import { Logo } from '../Logo';
import { UserAvatar } from '../UserAvatar';
import Link from 'next/link';
import { AccountCircle, KeyboardArrowDown } from '@mui/icons-material';
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
import { Navigation } from '../Navigation';
import { Container } from '../Container';
import MenuIcon from '@mui/icons-material/Menu';

const settings = [
  { name: 'Settings', id: 1, path: '/settings' },
  { name: 'Log out', id: 2, path: '/exit' },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const login = false;
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
                    {settings.map((page) => (
                      <MenuItem
                        onClick={handleCloseUserMenu}
                        key={page.id}
                        // @ts-ignore
                        component={Link}
                        href={page.path}
                      >
                        {page.name}
                      </MenuItem>
                    ))}
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
                <Box sx={{}}>
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
                        {settings.map((page) => (
                          <MenuItem
                            onClick={handleCloseUserMenu}
                            key={page.id}
                            // @ts-ignore
                            component={Link}
                            href={page.path}
                          >
                            {page.name}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  ) : (
                    <IconButton color="inherit">
                      <AccountCircle color="inherit" fontSize="large" />
                    </IconButton>
                  )}
                </Box>
              </Drawer>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
