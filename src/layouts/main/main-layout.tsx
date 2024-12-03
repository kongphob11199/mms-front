import { Box, Grid2 } from '@mui/material';
import { useThemeCustom } from '../../theme/theme-context';
import MainNavMenu from './main-nav-menu';
import MainNavProfile from './main-nav-profile';
import { useState } from 'react';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = (props: MainLayoutProps) => {
  const { colors } = useThemeCustom();

  const [isOpenNav, setIsOpenNav] = useState(true);

  return (
    <Box width="100vw" height="100vh" bgcolor={colors.bg} color={colors.text} overflow="hidden">
      <MainNavProfile isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav} />
      <Grid2 container size={12} height="100%">
        <MainNavMenu isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav} />
        <Grid2 flexBasis="auto" flexGrow="1" display="flex" flexDirection="column" height="100%">
          <Box height="100%">{props.children}</Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default MainLayout;
