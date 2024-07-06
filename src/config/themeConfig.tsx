import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
    palette:{
        mode: "light",
        primary: {
            main : "#E94560"
        }
    },
    typography: {
        fontFamily : "Poppins"
    }
})

type ThemeProp = {
    children: JSX.Element
}


export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider> 
    )
}