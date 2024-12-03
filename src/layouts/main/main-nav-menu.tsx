import React, { useState } from 'react';
import { useThemeCustom } from '../../theme/theme-context';
import { Box, Grid2, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import { adjustOpacity } from '../../utils/color-utils';

interface MainNavMenuProps {
  isOpenNav: boolean;
  setIsOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainNavMenu = (props: MainNavMenuProps) => {
  const { colors } = useThemeCustom();
  const { isOpenNav, setIsOpenNav } = props;

  return (
    <Grid2
      flexBasis={{ lg: `${isOpenNav ? '300px' : '80px'}`, xs: '0px' }}
      position={'relative'}
      bgcolor={adjustOpacity(colors.bgMenu, 0.7)}
      boxShadow={colors.bs_2}
      sx={{ transition: 'flex-basis 0.2s ease-in-out' }}
    >
      <Box display={{ lg: 'block', xs: 'none' }} width={'100%'} height={'100%'} padding={isOpenNav ? '16px' : '16px 8px'} sx={{ transition: 'padding 0.2s ease-in-out' }}>
        <Box>MENU</Box>
      </Box>
    </Grid2>
  );
};

export default MainNavMenu;
