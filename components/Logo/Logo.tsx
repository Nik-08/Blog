import LogoDevIcon from '@mui/icons-material/LogoDev';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

export const Logo = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
      <Typography
        variant="h5"
        noWrap
        component="span"
        sx={{
          fontWeight: 700,
          color: 'inherit',
        }}
      >
        Nik
      </Typography>
      <LogoDevIcon fontSize="large" />
    </Box>
  );
};
