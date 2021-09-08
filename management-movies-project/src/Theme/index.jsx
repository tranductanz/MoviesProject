import { createTheme } from "@material-ui/core";

const theme = createTheme({
    palette: {
        primary: {
            light: "#ffef8c",
            main: "#ffdd01",
            //màu hover
            dark: "#fbb512",
            contrastText: "#000",
        },
        secondary: {
            light: '#ff4081',
            main: '#f50057',
            dark: '#c51162',
            contrastText: '#fff',
        }
    }

})
export default theme;