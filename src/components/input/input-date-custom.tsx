import { DatePicker, DatePickerSlotProps, DatePickerSlots, LocalizationProvider } from '@mui/x-date-pickers';
import React, { RefObject } from 'react';
import AdapterDayjsTh from '../../constants/date';
import { Dayjs } from 'dayjs';
import { Popper, styled, SxProps } from '@mui/material';
import { useThemeCustom } from '../../theme/theme-context';
import { getLanguageCurrent } from '../../utils/lang-utils';

type InputDateCustomProps = {
  disabled?: boolean;
  disableFuture?: boolean;
  disableHighlightToday?: boolean;
  disableOpenPicker?: boolean;
  disablePast?: boolean;
  displayWeekNumber?: boolean;
  fixedWeekNumber?: number;
  format?: string;
  formatDensity?: 'dense' | 'spacious';
  inputRef?: RefObject<HTMLInputElement>;
  label?: string | React.ReactNode;
  loading?: boolean;
  maxDate?: Dayjs;
  minDate?: Dayjs;
  monthsPerRow?: 3 | 4;
  name?: string;
  onChange?: (value: Dayjs | null) => void;
  onClose?: () => void;
  onOpen?: () => void;
  open?: boolean;
  openTo?: 'day' | 'month' | 'year';
  orientation?: 'landscape' | 'portrait';
  renderLoading?: () => React.ReactNode;
  sx?: SxProps;
  timezone?: string;
  value?: Dayjs | null;
  view?: 'day' | 'month' | 'year';
  placeholder?: string;
  readOnlyDisplay?: boolean;
  readOnly?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
  slotProps?: DatePickerSlotProps<Dayjs, false>;
  slots?: DatePickerSlots<Dayjs> | undefined;
  sxPopper?: SxProps;
};

const InputDateCustomDefault = (props: InputDateCustomProps) => {
  const lang = getLanguageCurrent();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjsTh} adapterLocale={lang}>
      <DatePicker
        {...props}
        slotProps={{
          textField: {
            required: props?.required,
            placeholder: props?.placeholder,
            error: props?.error || !!props?.helperText,
            helperText: props?.helperText || '',
            inputProps: {
              readOnly: props?.readOnly || false,
            },
          },
          ...props?.slotProps,
        }}
        slots={{
          popper: (popper) => {
            return (
              <PopperDatePickerCustoms {...popper} sx={props?.sxPopper}>
                {popper.children}
              </PopperDatePickerCustoms>
            );
          },
          ...props?.slots,
        }}
      />
    </LocalizationProvider>
  );
};

export const PopperDatePickerCustoms = styled(Popper)<{}>(({ theme }) => {
  const { colors } = useThemeCustom();
  return {
    zIndex: '2000',
    '.MuiPaper-root': {
      backgroundColor: colors.bgSubItem,
      color: colors.text,
      svg: {
        fill: colors.white,
      },
      '.MuiTypography-root': {
        color: colors.text,
      },
      '.MuiPickersDay-root': {
        color: colors.text,
      },
      '.Mui-selected': {
        backgroundColor: `${colors.primary} !important`,
        color: '#fff',
      },
      '.MuiPickersDay-today': {
        borderColor: `${colors.text} !important`,
      },
      '.Mui-disabled': {
        color: `${colors.gray} !important`,
        svg: {
          fill: `${colors.gray} !important`,
        },
      },
    },
  };
});

const InputDateCustom = styled(InputDateCustomDefault)(({ theme, fullWidth }) => {
  const { colors } = useThemeCustom();
  return {
    width: fullWidth ? '100%' : 'auto',
    svg: {
      fill: colors.text,
    },
    '.MuiFormLabel-asterisk': {
      color: colors.error,
    },
    '.MuiInputBase-root.MuiOutlinedInput-root.Mui-error.Mui-focused': {
      fieldset: {
        borderColor: colors.error,
      },
    },
    '.MuiInputBase-root.Mui-error': {
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

export default InputDateCustom;
