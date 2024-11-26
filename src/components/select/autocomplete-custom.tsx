import { Autocomplete, AutocompleteProps, styled, Popper, SxProps, Box } from '@mui/material';
import InputCustom from '../input/input-custom';
import { useTranslation } from 'react-i18next';
import { useThemeCustom } from '../../theme/theme-context';
import { adjustOpacity } from '../../utils/color-utils';

type AutocompleteCustomProps<Value, Multiple extends boolean | undefined = false, DisableClearable extends boolean | undefined = false, FreeSolo extends boolean | undefined = false> = Omit<
  AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo>,
  'renderInput'
> & {
  label?: string | React.ReactNode;
  helpertext?: string;
  sxPopper?: SxProps;
  required?: boolean;
  name?: string;
};

const AutocompleteCustomDefault = <Value, Multiple extends boolean | undefined = false, DisableClearable extends boolean | undefined = false, FreeSolo extends boolean | undefined = false>(
  props: AutocompleteCustomProps<Value, Multiple, DisableClearable, FreeSolo>
) => {
  const { t } = useTranslation();
  return (
    <Autocomplete
      noOptionsText={t('NOOPTION')}
      renderInput={(params) => <InputCustom {...params} required={props?.required} label={props?.label} helperText={props?.helpertext || ''} />}
      renderOption={(props: any, options: any, state, ownerState) => {
        const { component, align, key, ...restProps } = props;
        return (
          <Box {...restProps} key={key}>
            {t(options?.label)}
          </Box>
        );
      }}
      slots={{
        popper: (popper) => {
          return (
            <PopperAutocompleteCustom {...popper} sx={props?.sxPopper}>
              {popper.children}
            </PopperAutocompleteCustom>
          );
        },
      }}
      {...props}
    />
  );
};

const AutocompleteCustom = styled(AutocompleteCustomDefault)(({ theme }) => {
  const { colors } = useThemeCustom();
  return {
    '.MuiAutocomplete-endAdornment': {
      svg: {
        color: colors.text,
      },
    },
  };
});

export const PopperAutocompleteCustom = styled(Popper)<{}>(({ theme }) => {
  const { colors } = useThemeCustom();
  return {
    zIndex: '2000',
    '.MuiPaper-root': {
      backgroundColor: colors.bgSubItem,
      color: colors.text,
      '.MuiAutocomplete-noOptions': {
        color: colors.text,
      },
      '.MuiAutocomplete-option[aria-selected="true"]': {
        backgroundColor: `${adjustOpacity(colors.primary, 0.15)} `,
      },
      '.MuiAutocomplete-option.Mui-focused': {
        backgroundColor: `${adjustOpacity(colors.primary, 0.05)} `,
      },
      '.MuiAutocomplete-option[aria-selected="true"].Mui-focused': {
        backgroundColor: `${adjustOpacity(colors.primary, 0.2)} `,
      },
    },
  };
});

export default AutocompleteCustom;
