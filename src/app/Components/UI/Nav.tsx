"use client";
import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/app/Firebase/db";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { navLogoutBtnStyle } from "@/app/GeneralResources/styles";

import {
    NAV_TYP_VAR,
    NAV_TYP_COMP,
    NAV_TYP_TXT,
    NAV_LOGOUT_BTN_TXT,
    NAV_LOGOUT_BTN_VAR,
    NAV_LOGOUT_BTN_COLOR,
    NAV_LOGOUT_LOGIN_ROUTE,
} from "@/app/GeneralResources/resources";

import {
    Button,
    Menu,
    MenuItem,
    AppBar,
    Link,
    ThemeProvider,
} from "@mui/material";
import useMobile from "@/app/hooks/useMobile";

export default function MiniDrawer() {
    const theme = useTheme();
    const windowWidth = useMobile();
    const [isMobile, setIsMobile] = useState<boolean>(windowWidth <= 768);
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        setIsMobile(windowWidth <= 768);
    }, [windowWidth]);

    const signOutHandler = () => {
        signOut(auth)
            .then(() => {
                router.push(NAV_LOGOUT_LOGIN_ROUTE);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const pages = [
        {
            title: "Home Page",
            href: "/home-page",
        },
        {
            title: "User Page",
            href: "/user-page",
        },
    ];

    const DesktopNavbar: React.ReactElement = (
        <AppBar position="static" sx={{ backgroundColor: "#123957" }}>
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}
            >
                <Link href={"home-page"} sx={{ color: "white" }}>
                    <Typography
                        variant={NAV_TYP_VAR}
                        noWrap
                        component={NAV_TYP_COMP}
                    >
                        {NAV_TYP_TXT}
                    </Typography>
                </Link>

                <Link href={"user-page"} sx={{ ml: 2, color: "white" }}>
                    <Typography textAlign="center" component="div">
                        {"User page"}
                    </Typography>
                </Link>
                <Button
                    variant={NAV_LOGOUT_BTN_VAR}
                    color={NAV_LOGOUT_BTN_COLOR}
                    sx={navLogoutBtnStyle}
                    onClick={signOutHandler}
                >
                    {NAV_LOGOUT_BTN_TXT}
                </Button>
            </Toolbar>
        </AppBar>
    );

    const MobileNavbar: React.ReactElement = (
        <AppBar position="static" sx={{ backgroundColor: "#123957" }}>
            <Toolbar disableGutters>
                <IconButton
                    onClick={() => setOpenMenu(true)}
                    sx={{ p: 0, mr: "20px", color: "white" }}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    MenuListProps={{
                        style: {
                            backgroundColor: "#123957",
                        },
                    }}
                    sx={{
                        mt: "45px",
                        zIndex: 3000,
                    }}
                    id="menu-appbar"
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                    }}
                    open={openMenu}
                    onClose={() => setOpenMenu(false)}
                >
                    <>
                        {pages.map((page, index) => (
                            <MenuItem
                                key={index}
                                onClick={() => setOpenMenu(false)}
                            >
                                <>
                                    <Link
                                        href={page.href}
                                        sx={{ color: "white" }}
                                    >
                                        <Typography
                                            textAlign="center"
                                            component="div"
                                        >
                                            {page.title}
                                        </Typography>
                                    </Link>
                                </>
                            </MenuItem>
                        ))}
                    </>
                    <MenuItem onClick={() => setOpenMenu(false)}>
                        <Button
                            variant={NAV_LOGOUT_BTN_VAR}
                            color={NAV_LOGOUT_BTN_COLOR}
                            sx={navLogoutBtnStyle}
                            onClick={signOutHandler}
                        >
                            {NAV_LOGOUT_BTN_TXT}
                        </Button>
                    </MenuItem>
                </Menu>
                <Typography
                    variant={NAV_TYP_VAR}
                    noWrap
                    component={NAV_TYP_COMP}
                >
                    {NAV_TYP_TXT}
                </Typography>
            </Toolbar>
        </AppBar>
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {isMobile ? MobileNavbar : DesktopNavbar}
        </ThemeProvider>
    );
}
