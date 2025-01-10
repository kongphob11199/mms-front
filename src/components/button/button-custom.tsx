import { Button, ButtonProps, styled } from '@mui/material';
import { useThemeCustom } from '../../theme/theme-context';
import { adjustColor, adjustOpacity } from '../../utils/color-utils';
import { ThemeColorsType, ThemeColosStatus } from '../../theme/color';
import { useCallback } from 'react';

type BtnShadowProps = 'btn-shadow' | 'btn-shadow-better' | 'btn-shadow-default' | 'none';

export type ButtonCustomProps = ButtonProps & {
  btnshadow?: BtnShadowProps;
  typecolor?: ThemeColorsType;
  status?: ThemeColosStatus | 'default';
  btntype?: 'contained' | 'outlined' | 'text' | 'soft';
};

const ButtomCustomDefault = (props: ButtonCustomProps) => {
  const renderPropsButton = useCallback(() => {
    const newVariant = props?.variant ? props?.variant : props?.btntype && props?.btntype !== 'soft' ? props?.btntype : 'contained';
    return { ...props, variant: newVariant };
  }, [props]);
  return (
    <Button status="default" {...renderPropsButton()}>
      {props.children}
    </Button>
  );
};

const ButtonCustom = styled(ButtomCustomDefault)(({ theme, btnshadow, typecolor, status = 'default', variant = 'contained', btntype }) => {
  const { colors } = useThemeCustom();

  const colorTypeBtn = typecolor || 'primary';
  const colorStatus = status === 'default' || !status ? colors[colorTypeBtn] : colors.status[status];
  const colorBtn = colorStatus;

  const styleBtn = variant !== 'contained' ? { ':hover': {} } : renderBtnShadow(colorBtn, btnshadow || 'none', variant);

  return {
    transition: 'background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    color: colors.text,
    fontWeight: 500,
    cursor: 'pointer',
    height: '40px',
    '&.MuiButtonBase-root.MuiButton-root.MuiButton-contained': {
      backgroundColor: colorBtn,
      ...(btntype === 'soft' && {
        color: colorBtn,
        backgroundColor: adjustOpacity(colorBtn, 0.15),
        boxShadow: `none`,
      }),
    },
    '&.MuiButtonBase-root.MuiButton-root.MuiButton-contained.Mui-disabled': {
      backgroundColor: colors.disabled,
      color: colors.gray_100,
    },
    '&.MuiButtonBase-root.MuiButton-root.MuiButton-outlined': {
      backgroundColor: 'transparent',
      transition: 'background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-width 0.15s ease-in-out',
      borderColor: colorBtn,
      color: colorBtn,
      boxSizing: 'border-box',
    },
    '&.MuiButtonBase-root.MuiButton-root.MuiButton-text': {
      backgroundColor: 'transparent',
      color: colorBtn,
    },
    ...styleBtn,
    ':hover': {
      '&.MuiButtonBase-root.MuiButton-root.MuiButton-contained': {
        ...(btntype === 'soft' && {
          backgroundColor: adjustOpacity(colorBtn, 0.25),
          boxShadow: `none`,
        }),
      },
      '&.MuiButtonBase-root.MuiButton-root.MuiButton-outlined': {
        backgroundColor: adjustOpacity(colorBtn, 0.15),
        borderWidth: '2px',
      },
      '&.MuiButtonBase-root.MuiButton-root.MuiButton-text': {
        backgroundColor: adjustOpacity(colorBtn, 0.15),
      },
      ...styleBtn[':hover'],
    },
  };
});

export default ButtonCustom;

const renderBtnShadow = (color: string, btnShadow: BtnShadowProps, variant: string) => {
  const styleBtnShadow = {
    boxShadow: ` 0 8px 16px 0 ${adjustOpacity(color, 0.3)}`,
    ':hover': {
      [`&.MuiButtonBase-root.MuiButton-root.MuiButton-${variant}`]: {
        backgroundColor: adjustColor(color, -30),
        boxShadow: 'none',
      },
    },
  };

  const styleBtnShadowBetter = {
    boxShadow: ` 0 8px 16px 0 ${adjustOpacity(color, 0.3)}`,
    ':hover': {
      [`&.MuiButtonBase-root.MuiButton-root.MuiButton-${variant}`]: {
        backgroundColor: adjustColor(color, 10),
        boxShadow: ` 0 8px 32px 0 ${adjustOpacity(color, 0.5)}`,
      },
    },
  };

  const styleBtnShadowDefault = {
    boxShadow: ``,
    ':hover': {
      [`&.MuiButtonBase-root.MuiButton-root.MuiButton-${variant}`]: {
        backgroundColor: adjustColor(color, -30, 'hex'),
        boxShadow: ` 0 4px 8px 0 ${adjustOpacity(adjustColor(color, -30), 0.3)}`,
      },
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
