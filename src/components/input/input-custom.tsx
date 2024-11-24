import { TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useThemeCustom } from '../../theme/theme-context';
import { useCallback } from 'react';
import LabelError from '../label/label-error';

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

  return (
    <>
      <TextField {...props} {...propSlotProps()} error={props?.error || !!props?.helperText} helperText={props?.helperText && <LabelError text={props.helperText.toString()} />} />
    </>
  );
};

const InputCustom = styled(InputCustomDefault)(({ theme }) => {
  const { colors } = useThemeCustom();
  return {
    '.MuiFormLabel-asterisk': {
      color: colors.error,
    },
    '.MuiInputBase-root.MuiOutlinedInput-root.Mui-error.Mui-focused': {
      fieldset: {
        borderColor: colors.error,
      },
    },
    '.MuiInputBase-root.Mui-error': {
      input: {
        color: colors.error,
      },
      'fieldset.MuiOutlinedInput-notchedOutline': {
        borderColor: colors.error,
      },
      ':hover': {
        'fieldset.MuiOutlinedInput-notchedOutline': {
          borderColor: colors.error,
        },
      },
    },
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
      transition: 'all 0.15s ease-in-out',
    },
    '.MuiInputLabel-root.Mui-focused.Mui-error': {
      color: colors.error,
    },
    '.MuiInputLabel-root.Mui-focused': {
      color: colors.text,
    },
    '.MuiInputBase-root': {
      fieldset: {
        transition: 'all 0.15s ease-in-out',
        borderColor: colors.textBorder,
      },
      ':hover': {
        fieldset: {
          borderColor: colors.textBorderHover,
        },
      },
    },
    '.MuiInputBase-root.MuiOutlinedInput-root.Mui-focused': {
      fieldset: {
        borderColor: colors.textBorderHover,
      },
    },
  };
});

export default InputCustom;
