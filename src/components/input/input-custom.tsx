import { TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useThemeCustom } from '../../theme/theme-context';
import { useCallback } from 'react';

type InputCustomProps<Variant extends 'outlined' | 'filled' | 'standard' = 'outlined'> = Omit<TextFieldProps<Variant>, 'variant'> & {
  variant?: Variant;
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
};

const InputCustomDefault = <Variant extends 'outlined' | 'filled' | 'standard' = 'outlined'>({ variant = 'outlined' as Variant, ...props }: InputCustomProps<Variant>) => {
  const propSlotProps = useCallback(() => {
    return props?.startAdornment || props?.endAdornment
      ? {
          slotProps: {
            input: {
              startAdornment: props?.startAdornment || undefined,
              endAdornment: props?.endAdornment || undefined,
            },
            ...props?.slotProps,
          },
        }
      : {};
  }, [props?.slotProps, props?.startAdornment, props?.endAdornment]);

  return <TextField {...props} {...propSlotProps()} />;
};

const InputCustom = styled(InputCustomDefault)(({ theme }) => {
  const { colors } = useThemeCustom();
  return {
    '.MuiInputLabel-root': {
      color: colors.textSub,
    },
    input: {
      color: colors.text,
    },
    label: {
      transition: 'all 0.25s ease-in-out',
    },
    '.MuiInputLabel-root.Mui-focused': {
      color: colors.text,
    },
    '.MuiInputBase-root': {
      'fieldset.MuiOutlinedInput-notchedOutline': {
        transition: 'all 0.25s ease-in-out',
        borderColor: colors.textSub,
      },
      ':hover': {
        'fieldset.MuiOutlinedInput-notchedOutline': {
          borderColor: colors.textSub,
        },
      },
    },
    '.Mui-focused': {
      '.MuiOutlinedInput-notchedOutline': {
        borderColor: colors.text,
      },
    },
  };
});

export default InputCustom;
