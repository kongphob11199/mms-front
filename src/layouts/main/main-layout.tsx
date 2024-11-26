import { Box } from '@mui/material';
import { useThemeCustom } from '../../theme/theme-context';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = (props: MainLayoutProps) => {
  const { colors } = useThemeCustom();

  return (
    <Box width="100vw" height="100vh" bgcolor={colors.bg} color={colors.text} overflow="hidden">
      {props.children}
    </Box>
  );
};

export default MainLayout;
