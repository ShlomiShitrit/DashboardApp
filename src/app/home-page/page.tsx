"use client";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import {
    Box,
    Container,
    Grid,
    Toolbar,
    ThemeProvider,
    CssBaseline,
} from "@mui/material";

import { auth } from "@/app/Firebase/db";
import Dashboard from "@/app/Components/Dashboard/Dashboard";
import DialogBtnGrid from "@/app/Components/Dialog/DialogBtnGrid";
import { AuthContext } from "@/app/Context/AuthContext";
import Navbar from "@/app/Components/UI/Navbar";
import Providers from "@/app/store/provider";

import {
    darkTheme,
    homePageBox1Style,
    homePageBox2Style,
    homePageContainerStyle,
} from "@/app/GeneralResources/styles";
import {
    HOME_PAGE_BOX_COMP,
    HOME_PAGE_CONTAINER_MAX_WIDTH,
    HOME_PAGE_LOGIN_ROUTE,
} from "@/app/GeneralResources/resources";

import {
    HOME_PAGE_GRID_CONT_SPACING,
    HOME_PAGE_GRID_SIZE_12,
    HOME_PAGE_GRID_SIZE_8,
} from "@/app/GeneralResources/constants";

function HomePage() {
    const { user } = useContext(AuthContext);

    const router = useRouter();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                router.push(HOME_PAGE_LOGIN_ROUTE);
            }
        });
    }, [user]);

    if (!user) {
        return null;
    }

    return (
        <Providers>
            <Navbar />
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
