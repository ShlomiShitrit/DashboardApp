"use client";
import { Box, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

import Dashboard from "../Components/Dashboard/Dashboard";
import DialogBtnGrid from "../Components/Dialog/DialogBtnGrid";

import MiniDrawer from "@/app/Components/UI/Nav";
import Providers from "@/app/store/provider";

import {
    homePageBox2Style,
    darkTheme,
    homePageBox1Style,
    homePageContainerStyle,
} from "@/app/GeneralResources/styles";
import {
    HOME_PAGE_BOX_COMP,
    HOME_PAGE_CONTAINER_MAX_WIDTH,
} from "@/app/GeneralResources/resources";

import {
    HOME_PAGE_GRID_CONT_SPACING,
    HOME_PAGE_GRID_SIZE_12,
    HOME_PAGE_GRID_SIZE_8,
} from "@/app/GeneralResources/constants";

function HomePage() {
    return (
        <Providers>
            <MiniDrawer />
            <ThemeProvider theme={darkTheme}>
                <Box sx={homePageBox1Style}>
                    <CssBaseline />

                    <Box component={HOME_PAGE_BOX_COMP} sx={homePageBox2Style}>
                        <Toolbar />
                        <Container
                            maxWidth={HOME_PAGE_CONTAINER_MAX_WIDTH}
                            sx={homePageContainerStyle}
                        >
                            <Grid
                                container
                                spacing={HOME_PAGE_GRID_CONT_SPACING}
                            >
                                <Grid
                                    item
                                    xs={HOME_PAGE_GRID_SIZE_12}
                                    md={HOME_PAGE_GRID_SIZE_8}
                                    lg={HOME_PAGE_GRID_SIZE_12}
                                >
                                    <Dashboard />
                                </Grid>
                                <DialogBtnGrid />
                            </Grid>
                        </Container>
                    </Box>
                </Box>
            </ThemeProvider>
        </Providers>
    );
}

export default HomePage;
