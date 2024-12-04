import { Box } from '@mui/material';
import { useThemeCustom } from '../../theme/theme-context';
import MainNavMenu from './main-nav-menu';
import MainNavProfile from './main-nav-profile';
import { useLayoutEffect, useState } from 'react';
import useWindowSize from '../../utils/use-windowsize';
import ScrollbarCustom from '../../components/scrollbar/scrollbar-custom';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = (props: MainLayoutProps) => {
  const { colors } = useThemeCustom();
  const { width } = useWindowSize();

  const [isOpenNav, setIsOpenNav] = useState(false);

  useLayoutEffect(() => {
    if (!(width && width < 1200)) {
      setIsOpenNav(true);
    }
  }, []);

  return (
    <>
      <ScrollbarCustom>
        <Box width="100vw" height="100vh" bgcolor={colors.bg} color={colors.text} overflow="auto" display="flex" flexDirection="column">
          <MainNavProfile isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav} />
          <Box width="100%" height="100%">
            <MainNavMenu isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav} />
            <Box flexBasis="auto" flexGrow="1" display="flex" flexDirection="column" height="100%">
              <Box height="100%" paddingLeft={{ lg: `${isOpenNav ? 'var(--layout-nav-width)' : 'var(--layout-nav-width-cs)'}`, xs: '0' }} sx={{ transition: `padding-left 0.2s ease-in-out` }}>
                {props.children}
              </Box>
            </Box>
          </Box>
        </Box>
      </ScrollbarCustom>
    </>
  );
};

export default MainLayout;
