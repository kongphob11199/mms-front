import { alpha, Button, ButtonProps, ButtonTypeMap, ExtendButtonBase, styled } from '@mui/material';
import { useThemeCustom } from '../../theme/theme-context';

type ButtonCustomProps = ButtonProps & {};

const ButtomCustomDefault = (props: ButtonCustomProps) => (
  <Button variant="contained" {...props}>
    {props.children}
  </Button>
);

const ButtonCustom = styled(ButtomCustomDefault)(({ theme }) => {
  const { colors } = useThemeCustom();
  return {
    backgroundColor: colors.primary,
  };
});

export default ButtonCustom;
