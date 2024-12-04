import { IconButton, styled } from '@mui/material';
import { useThemeCustom } from '../../theme/theme-context';

const IconButtonCustom = styled(IconButton)(({ theme }) => {
  const { colors } = useThemeCustom();
  return {
    color: colors.text,
  };
});

export default IconButtonCustom;
