export type ThemeType = 'dark' | 'light';

export type ThemeColorsType = 'primary' | 'secondary';
export interface ThemeColors {
  bg: string;
  bgSub: string;
  bgSubItem: string;
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
  text: string;
  textSub: string;
  textSubItem: string;
  textBorder: string;
  textBorderHover: string;
  //
  disabled: string;
  disabledSub: string;
  disabledSubitem: string;
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
}

const boxShadow = {
  bs_1: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
  bs_2: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
  bs_3: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
  bs_4: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
};

const primaryColors = {
  primary: '#05B3A7',
  primary_100: '#2FC0B6',
  primary_200: '#58CCC4',
  primary_300: '#82D9D3',
  primary_400: '#ACE6E2',
  primary_500: '#D5F2F0',
};

const secondaryColors = {
  secondary: '#1E15C9',
  secondary_100: '#433CD2',
  secondary_200: '#6963DB',
  secondary_300: '#8F8AE4',
  secondary_400: '#B4B1ED',
  secondary_500: '#DAD8F6',
};

const disabledColors = {
  disabled: '#B5B5B5',
  disabledSub: '#C1C1C1',
  disabledSubitem: '#CECECE',
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
  bg: '#131B2E',
  bgSub: '#132032',
  bgSubItem: '#122536',
};

const textColorsDark = {
  text: '#ffffff',
  textSub: '#d3d3d3',
  textSubItem: '#b1b1b1',
  textBorder: '#9d9d9d',
  textBorderHover: '#ffffff',
};

export const darkTheme: ThemeColors = {
  ...bgColorsDark,
  ...primaryColors,
  ...secondaryColors,
  ...textColorsDark,
  ...disabledColors,
  ...blackColors,
  ...whiteColors,
  ...boxShadow,
};

const bgColorsLight = {
  bg: '#ffffff',
  bgSub: '#ffffff',
  bgSubItem: '#ffffff',
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
