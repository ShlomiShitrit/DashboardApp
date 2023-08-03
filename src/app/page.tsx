"use client";
import { Box, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

import Dashboard from "./Components/Dashboard/Dashboard";
import DialogBtnGrid from "./Components/Dialog/DialogBtnGrid";
import { homePageBoxStyle } from "@/app/Styles/styles";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function HomePage() {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />

                <Box component="main" sx={homePageBoxStyle}>
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={5}>
                            <Grid item xs={12} md={8} lg={12}>
                                <Dashboard />
                            </Grid>
                            <DialogBtnGrid />
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default HomePage;
