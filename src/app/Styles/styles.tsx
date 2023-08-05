import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "#0A1F2F", dark: "#041B2F", contrastText: "#fff" },
        secondary: { main: "#0F1D3A", dark: "#0F1824", contrastText: "#fff" },
        success: { main: "#3498DB", dark: "#0F1824", contrastText: "#fff" },
    },
});

export const paperCompStyle = {
    p: 2,
    display: "flex",
    flexDirection: "column",
    backgroundColor: darkTheme.palette.primary.dark,
};

export const homePageBoxStyle = {
    backgroundColor: darkTheme.palette.primary.main ,
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
};

export const lineChartMargin = {
    top: 16,
    right: 16,
    bottom: 0,
    left: 24,
};
