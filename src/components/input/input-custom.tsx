import { TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useThemeCustom } from '../../theme/theme-context';
import { useCallback } from 'react';

type InputCustomProps<Variant extends 'outlined' | 'filled' | 'standard' = 'outlined'> = Omit<TextFieldProps<Variant>, 'variant'> & {
  variant?: Variant;
  endadornment?: React.ReactNode;
  startadornment?: React.ReactNode;
};

const InputCustomDefault = <Variant extends 'outlined' | 'filled' | 'standard' = 'outlined'>({ variant = 'outlined' as Variant, ...props }: InputCustomProps<Variant>) => {
  const propSlotProps = useCallback(() => {
    return props?.startadornment || props?.endadornment
      ? {
          slotProps: {
            input: {
              startAdornment: props?.startadornment || undefined,
              endAdornment: props?.endadornment || undefined,
            },
            ...props?.slotProps,
          },
        }
      : {};
  }, [props?.slotProps, props?.startadornment, props?.endadornment]);

  return <TextField {...props} {...propSlotProps()} />;
};

const InputCustom = styled(InputCustomDefault)(({ theme }) => {
  const { colors } = useThemeCustom();
  return {
    fieldset: {
      borderWidth: '0.5px',
    },
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
        borderColor: colors.textBorder,
      },
      ':hover': {
        'fieldset.MuiOutlinedInput-notchedOutline': {
          borderColor: colors.textBorderHover,
        },
      },
    },
    '.Mui-focused': {
      '.MuiOutlinedInput-notchedOutline': {
        borderColor: colors.textBorderHover,
      },
    },
  };
});

export default InputCustom;
