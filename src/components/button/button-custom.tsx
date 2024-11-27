import { Button, ButtonProps, styled } from '@mui/material';
import { useThemeCustom } from '../../theme/theme-context';
import { adjustColor, adjustOpacity } from '../../utils/color-utils';
import { ThemeColorsType, ThemeColosStatus } from '../../theme/color';

type BtnShadowProps = 'btn-shadow' | 'btn-shadow-better' | 'btn-shadow-default' | 'none';

export type ButtonCustomProps = ButtonProps & {
  btnshadow?: BtnShadowProps;
  typecolor?: ThemeColorsType;
  status?: ThemeColosStatus | 'default';
};

const ButtomCustomDefault = (props: ButtonCustomProps) => (
  <Button variant="contained" status={'default'} {...props}>
    {props.children}
  </Button>
);

const ButtonCustom = styled(ButtomCustomDefault)(({ theme, btnshadow, typecolor, status = 'default', variant = 'contained' }) => {
  const { colors } = useThemeCustom();

  const colorTypeBtn = typecolor || 'primary';
  const colorStatus = status === 'default' || !status ? colors[colorTypeBtn] : colors.status[status];
  const colorBtn = colorStatus;

  const styleBtn = variant !== 'contained' ? { ':hover': {} } : renderBtnShadow(colorBtn, btnshadow);

  return {
    transition: 'all 0.3s ease-in-out',
    '&.MuiButtonBase-root.MuiButton-root.MuiButton-contained': {
      backgroundColor: colorBtn,
    },
    '&.MuiButtonBase-root.MuiButton-root.MuiButton-contained.Mui-disabled': {
      backgroundColor: colors.disabled,
      color: colors.gray_100,
    },
    '&.MuiButtonBase-root.MuiButton-root.MuiButton-outlined': {
      backgroundColor: 'transparent',
      borderColor: colorBtn,
      color: colorBtn,
    },
    ...styleBtn,
    ':hover': {
      '&.MuiButtonBase-root.MuiButton-root.MuiButton-outlined': {
        backgroundColor: adjustOpacity(colorBtn, 0.15),
      },
      ...styleBtn[':hover'],
    },
  };
});

export default ButtonCustom;

const renderBtnShadow = (color: string, btnShadow?: BtnShadowProps) => {
  const styleBtnShadow = {
    boxShadow: ` 0 8px 16px 0 ${adjustOpacity(color, 0.3)}`,
    ':hover': {
      backgroundColor: adjustColor(color, -30),
      boxShadow: 'none',
    },
  };

  const styleBtnShadowBetter = {
    boxShadow: ` 0 8px 16px 0 ${adjustOpacity(color, 0.3)}`,
    ':hover': {
      backgroundColor: adjustColor(color, 10),
      boxShadow: ` 0 8px 32px 0 ${adjustOpacity(color, 0.5)}`,
    },
  };

  const styleBtnShadowDefault = {
    boxShadow: ``,
    ':hover': {
      backgroundColor: adjustColor(color, -30),
      boxShadow: ` 0 4px 8px 0 ${adjustOpacity(adjustColor(color, -30), 0.3)}`,
    },
  };

  const styleDefault = {
    ':hover': {},
  };

  switch (btnShadow) {
    case 'btn-shadow':
      return styleBtnShadow;
    case 'btn-shadow-better':
      return styleBtnShadowBetter;
    case 'none':
      return styleDefault;
    default:
      return styleBtnShadowDefault;
  }
};
