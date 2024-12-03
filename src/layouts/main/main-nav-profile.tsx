import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useThemeCustom } from '../../theme/theme-context';
import { adjustOpacity } from '../../utils/color-utils';

interface MainNavProfileProps {
  isOpenNav: boolean;
  setIsOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainNavProfile = (props: MainNavProfileProps) => {
  const { colors } = useThemeCustom();
  const { isOpenNav, setIsOpenNav } = props;

  return (
    <Box bgcolor={adjustOpacity(colors.bgMenu, 0.45)} width="100%" padding="8px 16px" display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="center" gap="16px">
        <Box>
          <IconButton onClick={() => setIsOpenNav(!isOpenNav)}>
            <MenuIcon sx={{ color: colors.text, fontSize: '25px' }} />
          </IconButton>
        </Box>
        <Box>MMS</Box>
      </Box>

      <Box>USERNAME</Box>
    </Box>
  );
};

export default MainNavProfile;
