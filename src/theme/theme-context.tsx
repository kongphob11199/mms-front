import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { darkTheme, ThemeColors, lightTheme, ThemeType } from './color';
import { KEY_STORAGE } from '../constants/common';
import { navVars } from './style/style-nav-vars';

interface ThemeContextType {
  colors: ThemeColors;
  handleChangeTheme: (type?: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const handleThemeSetColor = (theme: ThemeColors): ThemeColors => {
  theme.status.cancel = theme.textSubItem;
  return theme;
};

export const ThemeCustomProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const storedTheme = localStorage.getItem(KEY_STORAGE.THEME) || '1';
  const initialTheme = storedTheme === '0' ? lightTheme : darkTheme;

  const [theme, setTheme] = useState<ThemeColors>(handleThemeSetColor(initialTheme));

  const handleChangeTheme = (type?: ThemeType) => {
    const objTheme = storedTheme === '0' ? darkTheme : lightTheme;
    const newTheme = handleThemeSetColor(objTheme);
    const newThemeType = storedTheme === '0' ? '1' : '0';

    localStorage.setItem(KEY_STORAGE.THEME, newThemeType);
    setTheme(newTheme);
  };

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(navVars(theme)).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }, [theme]);

  return <ThemeContext.Provider value={{ colors: theme, handleChangeTheme }}>{children}</ThemeContext.Provider>;
};

export const useThemeCustom = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeCustom ต้องใช้ภายใน ThemeCustomProvider');
  }
  return context;
};
