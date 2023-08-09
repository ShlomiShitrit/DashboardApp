"use client";
import { Box, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

import Dashboard from "./Components/Dashboard/Dashboard";
import DialogBtnGrid from "./Components/Dialog/DialogBtnGrid";
import {
    homePageBox2Style,
    darkTheme,
    homePageBox1Style,
    homePageContainerStyle,
} from "@/app/Styles/styles";
import {
    HOME_PAGE_BOX_COMP,
    HOME_PAGE_CONTAINER_MAX_WIDTH,
} from "@/app/GeneralResources/resources";

function HomePage() {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box sx={homePageBox1Style}>
                <CssBaseline />

                <Box component={HOME_PAGE_BOX_COMP} sx={homePageBox2Style}>
                    <Toolbar />
                    <Container
                        maxWidth={HOME_PAGE_CONTAINER_MAX_WIDTH}
                        sx={homePageContainerStyle}
                    >
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
