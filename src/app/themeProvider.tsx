"use client"
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import themePalatte from "../constants/theme";

const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const theme = createTheme(themePalatte);

    return (
        <ThemeProvider theme={theme}>
            {/* <CssBaseline enableColorScheme={false}/> */}
            {children}
        </ThemeProvider>
    );
}

export default MuiThemeProvider