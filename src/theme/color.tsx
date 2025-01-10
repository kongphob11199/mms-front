export type ThemeType = 'dark' | 'light';

export type ThemeColorsType = 'primary' | 'secondary' | 'third';

export type ThemeColosStatus = 'success' | 'warning' | 'info' | 'error' | 'cancel';

export interface ThemeColors {
  bg: string;
  bgSub: string;
  bgSubItem: string;
  bgMenu: string;
  bgBlur: string;
  //
  primary: string;
  primary_100: string;
  primary_200: string;
  primary_300: string;
  primary_400: string;
  primary_500: string;
  //
  secondary: string;
  secondary_100: string;
  secondary_200: string;
  secondary_300: string;
  secondary_400: string;
  secondary_500: string;
  //
  third: string;
  third_100: string;
  third_200: string;
  third_300: string;
  third_400: string;
  third_500: string;
  //
  text: string;
  textSub: string;
  textSubItem: string;
  textBorder: string;
  textBorderHover: string;
  //
  disabled: string;
  disabledSub: string;
  disabledSubitem: string;
  disabledText: string;
  disabledTextSub: string;
  //
  black: string;
  black_100: string;
  black_200: string;
  black_300: string;
  black_400: string;
  white: string;
  white_100: string;
  white_200: string;
  white_300: string;
  white_400: string;
  //
  bs_1: string;
  bs_2: string;
  bs_3: string;
  bs_4: string;
  bs_5: string;
  //
  error: string;
  //
  gray: string;
  gray_100: string;
  //
  border: {
    gray: string;
  };
  //
  status: Record<ThemeColosStatus, string>;
}

const boxShadow = {
  bs_1: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
  bs_2: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
  bs_3: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
  bs_4: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  bs_5: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
};

const primaryColors = {
  primary: '#6110E5',
  primary_100: '#6230E2',
  primary_200: '#6250DE',
  primary_300: '#6370DB',
  primary_400: '#6381DA',
  primary_500: '#6391D8',
};

const secondaryColors = {
  secondary: '#372df5',
  secondary_100: '#3E49EF',
  secondary_200: '#4465EA',
  secondary_300: '#4B81E4',
  secondary_400: '#519DDF',
  secondary_500: '#58B9D9',
};

const thirdColors = {
  third: '#05B3A7',
  third_100: '#2FC0B6',
  third_200: '#58CCC4',
  third_300: '#82D9D3',
  third_400: '#ACE6E2',
  third_500: '#D5F2F0',
};

const disabledColors = {
  disabled: '#B5B5B5',
  disabledSub: '#C1C1C1',
  disabledSubitem: '#CECECE',
  disabledText: '#757575',
  disabledTextSub: '#a7a7a7',
};

const blackColors = {
  black: '#000000',
  black_100: '#121212',
  black_200: '#242424',
  black_300: '#373737',
  black_400: '#494949',
};

const whiteColors = {
  white: '#FFFFFF',
  white_100: '#EDEDED',
  white_200: '#DBDBDB',
  white_300: '#C8C8C8',
  white_400: '#B6B6B6',
};

const bgColorsDark = {
  bg: '#090c14',
  bgSub: '#0C131E',
  bgSubItem: '#101928',
  bgMenu: '#0a111c',
  bgBlur: '#00000073',
};

const textColorsDark = {
  text: '#ffffff',
  textSub: '#d3d3d3',
  textSubItem: '#b1b1b1',
  textBorder: '#9d9d9d',
  textBorderHover: '#ffffff',
};

const errorColors = {
  error: '#d32f2f',
};

const grayColors = {
  gray: '#9e9e9e',
  gray_100: '#757575',
};

const borderColor = {
  border: {
    gray: '#8d8d8d4f',
  },
};

const statusColors = {
  status: {
    success: '#15dd1d',
    warning: '#ebce0f',
    info: '#37a0e1',
    error: '#dd2515',
    cancel: '#1f1f1f',
  },
};

export const darkTheme: ThemeColors = {
  ...bgColorsDark,
  ...primaryColors,
  ...secondaryColors,
  ...thirdColors,
  ...textColorsDark,
  ...disabledColors,
  ...blackColors,
  ...whiteColors,
  ...boxShadow,
  ...errorColors,
  ...grayColors,
  ...statusColors,
  ...borderColor,
};

const bgColorsLight = {
  bg: '#ffffff',
  bgSub: '#ffffff',
  bgSubItem: '#ffffff',
  bgMenu: '#dcdcdc',
  bgBlur: '#00000073',
};

const textColorsLight = {
  text: '#000000',
  textSub: '#121212',
  textSubItem: '#242424',
  textBorder: '#9d9d9d',
  textBorderHover: '#828282',
};

export const lightTheme: ThemeColors = {
  ...darkTheme,
  ...bgColorsLight,
  ...textColorsLight,
};
