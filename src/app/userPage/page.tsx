"use client";
import { useContext, useEffect, Fragment } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import {
    Grid,
    Box,
    Container,
    Toolbar,
    ThemeProvider,
    CssBaseline,
} from "@mui/material";

import {
    darkTheme,
    userPageBox1Style,
    userPageBox2Style,
    userPageContainerStyle,
} from "@/app/GeneralResources/styles";

import { auth } from "@/app/Firebase/db";
import UserInfoForm from "@/app/Components/UserInfo/UserInfoForm";
import DialogsGrid from "@/app/Components/UserInfo/DialogsGrid";
import { AuthContext } from "@/app/Context/AuthContext";
import MiniDrawer from "@/app/Components/UI/Nav";
import Providers from "@/app/store/provider";

import {
    USER_PAGE_LOGIN_ROUTE,
    USER_PAGE_BOX_COMP,
    USER_PAGE_CONTAINER_MAX_WIDTH,
} from "@/app/GeneralResources/resources";

function UserPage() {
    const { user } = useContext(AuthContext);

    const router = useRouter();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                router.push(USER_PAGE_LOGIN_ROUTE);
            }
        });
    }, [user]);

    if (!user) {
        return null;
    }

    return (
        <Providers>
            <Fragment>
                <MiniDrawer />
                <ThemeProvider theme={darkTheme}>
                    <Box sx={userPageBox1Style}>
                        <CssBaseline />
                        <Box
                            component={USER_PAGE_BOX_COMP}
                            sx={userPageBox2Style}
                        >
                            <Toolbar />
                            <Container
                                maxWidth={USER_PAGE_CONTAINER_MAX_WIDTH}
                                sx={userPageContainerStyle}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <UserInfoForm />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <DialogsGrid />
                                    </Grid>
                                </Grid>
                            </Container>
                        </Box>
                    </Box>
                </ThemeProvider>
            </Fragment>
        </Providers>
    );
}
export default UserPage;
