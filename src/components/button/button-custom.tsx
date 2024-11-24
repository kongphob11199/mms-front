import { Button, ButtonProps, styled } from '@mui/material';
import { useThemeCustom } from '../../theme/theme-context';
import { adjustColor, adjustOpacity } from '../../utils/color-utils';
import { ThemeColorsType } from '../../theme/color';

type BtnShadowProps = 'btn-shadow' | 'btn-shadow-better' | 'btn-shadow-default' | 'none';

export type ButtonCustomProps = ButtonProps & {
  btnshadow?: BtnShadowProps;
  typecolor?: ThemeColorsType;
};

const ButtomCustomDefault = (props: ButtonCustomProps) => (
  <Button variant="contained" {...props}>
    {props.children}
  </Button>
);

const ButtonCustom = styled(ButtomCustomDefault)(({ theme, btnshadow, typecolor }) => {
  const { colors } = useThemeCustom();

  const colorTypeBtn = typecolor || 'primary';
  const colorBtn = colors[colorTypeBtn];

  const styleBtn = renderBtnShadow(colorBtn, btnshadow);

  return {
    backgroundColor: colorBtn,
    transition: 'all 0.3s ease-in-out',

    ...styleBtn,
    ':hover': {
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
      boxShadow: ` 0 8px 16px 0 ${adjustOpacity(adjustColor(color, -30), 0.3)}`,
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
