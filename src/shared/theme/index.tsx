import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';

interface MuiThemeProps {
    children: React.ReactNode;
}

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        fontFamily: 'Ubuntu, Arial, sans-serif',
    },
    shape: {
        borderRadius: 12,
    },
});

export const MuiTheme = ({ children }: MuiThemeProps) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
