import React, { ReactNode, useMemo, useState } from 'react';
import {
  ThemeContext,
  Theme,
  LOCAL_STORAGE_THEME_KEY,
} from '../lib/ThemeContext';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);
  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
