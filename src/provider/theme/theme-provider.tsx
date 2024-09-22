import { createContext, useContext, ReactNode, useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

const lightTheme = {
  colors: {
    primary: '#0070f3',
    bg: 'blue',
    text: 'white',
     black: 'black',
    bgcolor:'white'
  },
  fontSize: '16px',
};

const darkTheme = {
  colors: {
    primary: '#0070f3',
    bg: 'black',
    text: 'white',
    black: 'black',
    bgcolor:'black'
  },
  fontSize: '16px',
};

const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProviderComponent = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = useMemo(() => (isDarkMode ? darkTheme : lightTheme), [isDarkMode]);
console.log('theme value',theme);
  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};