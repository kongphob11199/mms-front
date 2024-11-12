import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { darkTheme, ThemeColors, lightTheme, ThemeType } from './color';
import { KEY_STORAGE } from '../constants/common';

interface ThemeContextType {
  colors: ThemeColors;
  handleChangeTheme: (type?: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeCustomProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const storedTheme = localStorage.getItem(KEY_STORAGE.THEME);
  const initialTheme = storedTheme === '0' ? darkTheme : lightTheme;

  const [theme, setTheme] = useState<ThemeColors>(initialTheme);

  const handleChangeTheme = (type?: ThemeType) => {
    const newTheme = storedTheme === '0' ? lightTheme : darkTheme;
    const newThemeType = storedTheme === '0' ? '1' : '0';
    localStorage.setItem(KEY_STORAGE.THEME, newThemeType);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ colors: theme, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeCustom = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeCustom ต้องใช้ภายใน ThemeCustomProvider');
  }
  return context;
};
