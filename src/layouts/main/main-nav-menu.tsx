import React, { useState } from 'react';
import { useThemeCustom } from '../../theme/theme-context';
import { Box, Grid2, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MainNavMenu = () => {
  const { colors } = useThemeCustom();

  const [isOpenNav, setIsOpenNav] = useState(true);

  return (
    <Grid2 flexBasis={{ lg: `${isOpenNav ? '300px' : '80px'}`, xs: '0px' }} position={'relative'} bgcolor={colors.bgMenu} boxShadow={colors.bs_2} sx={{ transition: 'flex-basis 0.2s ease-in-out' }}>
      <Box
        position={'absolute'}
        right={'-12px'}
        top="16px"
        display={{ lg: 'block', xs: 'none' }}
        sx={{ button: { padding: '4px', backgroundColor: '#49494936' }, svg: { transform: `rotate(${isOpenNav ? 90 : 270}deg)` } }}
      >
        <IconButton onClick={() => setIsOpenNav(!isOpenNav)}>
          <ExpandMoreIcon sx={{ color: colors.text, fontSize: '20px' }} />
        </IconButton>
      </Box>
      <Box display={{ lg: 'block', xs: 'none' }} width={'100%'} height={'100%'} padding={isOpenNav ? '16px' : '16px 8px'} sx={{ transition: 'padding 0.2s ease-in-out' }}>
        <Box>MMS</Box>
      </Box>
    </Grid2>
  );
};

export default MainNavMenu;
