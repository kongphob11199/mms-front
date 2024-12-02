import { Box, Grid2 } from '@mui/material';
import { useThemeCustom } from '../../theme/theme-context';
import MainNavMenu from './main-nav-menu';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = (props: MainLayoutProps) => {
  const { colors } = useThemeCustom();

  return (
    <Box width="100vw" height="100vh" bgcolor={colors.bg} color={colors.text} overflow="hidden">
      <Grid2 container size={12} height="100%">
        <MainNavMenu />
        <Grid2 flexBasis={'auto'} flexGrow={'1'}>
          {props.children}
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default MainLayout;
