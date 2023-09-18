"use client";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/app/Firebase/db";
import { useRouter } from "next/navigation";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PetsIcon from "@mui/icons-material/Pets";
import {
    navBoxStyle,
    navAppBarStyle,
    navAppBarChevronIconStyle,
    navAppBarListItemStyle,
    navAppBarListItemBtnStyle,
    navAppBarListItemIconStyle,
    navAppBarIconStyle,
    navAppBarListItemTextStyle,
    navLogoutBtnStyle,
} from "@/app/GeneralResources/styles";

import {
    NAV_OPENED_MIXIN_TRANSITION,
    NAV_OPENED_MIXIN_BG_COLOR,
    NAV_OPENED_MIXIN_OVER_FLOW_X,
    NAV_CLOSES_MIXIN_TRANSITION,
    NAV_CLOSED_MIXIN_OVER_FLOW_X,
    NAV_CLOSED_MIXIN_UP,
    NAV_CLOSED_MIXIN_BG_COLOR,
    NAV_DRAWER_HEADER_DIV,
    NAV_DRAWER_HEADER_DISPLAY,
    NAV_DRAWER_HEADER_ALIGN_ITEMS,
    NAV_DRAWER_HEADER_JUSTIFY_CONTENT,
    NAV_APP_BAR_OPEN,
    NAV_APP_BAR_TRANSITION_ARRAY,
    NAV_DRAWER_OPEN,
    NAV_DRAWER_WHITE_SPACE,
    NAV_DRAWER_BOX_SIZING,
    NAV_APP_BAR_POS,
    NAV_ICON_BTN_COLOR,
    NAV_ICON_BTN_ARIA_LABEL,
    NAV_ICON_BTN_EDGE,
    NAV_ICON_BTN_DISPLAY,
    NAV_TYP_VAR,
    NAV_TYP_COMP,
    NAV_TYP_TXT,
    NAV_DARWER_VAR,
    NAV_DARWER_HEADER_THEME_DIR,
    NAV_LIST_ITEM_BTN_JC_INITIAL,
    NAV_LIST_ITEM_BTN_JC_CENTER,
    NAV_LIST_ITEM_ICON_MR_AUTO,
    NAV_HOMEPAGE_HREF,
    NAV_HOMRPAGE_BTN_TXT,
    NAV_USER_PAGE_BTN_TXT,
    NAV_USER_PAGE_HREF,
    NAV_LOGOUT_BTN_TXT,
    NAV_LOGOUT_BTN_VAR,
    NAV_LOGOUT_BTN_COLOR,
    NAV_LOGOUT_LOGIN_ROUTE,
} from "@/app/GeneralResources/resources";

import {
    NAV_DRAWER_WIDTH,
    NAV_THEME_SPACING_7,
    NAV_THEME_SPACING_8,
    NAV_THEME_SPACING_0,
    NAV_THEME_SPACING_1,
    NAV_THEME_ZINDEX_1,
    NAV_FLEX_SHRINK,
    NAV_MR_5,
    NAV_MR_3,
    NAV_OPACITY_1,
    NAV_OPACITY_0,
} from "@/app/GeneralResources/constants";
import { Button } from "@mui/material";

const drawerWidth = NAV_DRAWER_WIDTH;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create(NAV_OPENED_MIXIN_TRANSITION, {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: NAV_OPENED_MIXIN_BG_COLOR,
    overflowX: NAV_OPENED_MIXIN_OVER_FLOW_X,
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create(NAV_CLOSES_MIXIN_TRANSITION, {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: NAV_CLOSED_MIXIN_OVER_FLOW_X,
    width: `calc(${theme.spacing(NAV_THEME_SPACING_7)} + 1px)`,
    [theme.breakpoints.up(NAV_CLOSED_MIXIN_UP)]: {
        width: `calc(${theme.spacing(NAV_THEME_SPACING_8)} + 1px)`,
        backgroundColor: NAV_CLOSED_MIXIN_BG_COLOR,
    },
});

const DrawerHeader = styled(NAV_DRAWER_HEADER_DIV)(({ theme }) => ({
    display: NAV_DRAWER_HEADER_DISPLAY,
    alignItems: NAV_DRAWER_HEADER_ALIGN_ITEMS,
    justifyContent: NAV_DRAWER_HEADER_JUSTIFY_CONTENT,
    padding: theme.spacing(NAV_THEME_SPACING_0, NAV_THEME_SPACING_1),
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== NAV_APP_BAR_OPEN,
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + NAV_THEME_ZINDEX_1,
    transition: theme.transitions.create(NAV_APP_BAR_TRANSITION_ARRAY, {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(NAV_APP_BAR_TRANSITION_ARRAY, {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== NAV_DRAWER_OPEN,
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: NAV_FLEX_SHRINK,
    whiteSpace: NAV_DRAWER_WHITE_SPACE,
    boxSizing: NAV_DRAWER_BOX_SIZING,
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

export default function MiniDrawer() {
    const theme = useTheme();
    const [open, setOpen] = useState<boolean>(false);
    const router = useRouter();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const signOutHandler = () => {
        signOut(auth)
            .then(() => {
                router.push(NAV_LOGOUT_LOGIN_ROUTE);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Box sx={navBoxStyle}>
            <CssBaseline />
            <AppBar position={NAV_APP_BAR_POS} open={open} sx={navAppBarStyle}>
                <Toolbar>
                    <IconButton
                        color={NAV_ICON_BTN_COLOR}
                        aria-label={NAV_ICON_BTN_ARIA_LABEL}
                        onClick={handleDrawerOpen}
                        edge={NAV_ICON_BTN_EDGE}
                        sx={{
                            marginRight: NAV_MR_5,
                            ...(open && { display: NAV_ICON_BTN_DISPLAY }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant={NAV_TYP_VAR}
                        noWrap
                        component={NAV_TYP_COMP}
                    >
                        {NAV_TYP_TXT}
                    </Typography>
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
            <Drawer variant={NAV_DARWER_VAR} open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === NAV_DARWER_HEADER_THEME_DIR ? (
                            <ChevronRightIcon sx={navAppBarChevronIconStyle} />
                        ) : (
                            <ChevronLeftIcon sx={navAppBarChevronIconStyle} />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem disablePadding sx={navAppBarListItemStyle}>
                        <ListItemButton
                            sx={{
                                ...navAppBarListItemBtnStyle,
                                justifyContent: open
                                    ? NAV_LIST_ITEM_BTN_JC_INITIAL
                                    : NAV_LIST_ITEM_BTN_JC_CENTER,
                            }}
                            href={NAV_HOMEPAGE_HREF}
                        >
                            <ListItemIcon
                                sx={{
                                    ...navAppBarListItemIconStyle,
                                    mr: open
                                        ? NAV_MR_3
                                        : NAV_LIST_ITEM_ICON_MR_AUTO,
                                }}
                            >
                                <HomeIcon sx={navAppBarIconStyle} />
                            </ListItemIcon>
                            <ListItemText
                                primary={NAV_HOMRPAGE_BTN_TXT}
                                sx={{
                                    ...navAppBarListItemTextStyle,
                                    opacity: open
                                        ? NAV_OPACITY_1
                                        : NAV_OPACITY_0,
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={navAppBarListItemStyle}>
                        <ListItemButton
                            sx={{
                                ...navAppBarListItemBtnStyle,
                                justifyContent: open
                                    ? NAV_LIST_ITEM_BTN_JC_INITIAL
                                    : NAV_LIST_ITEM_BTN_JC_CENTER,
                            }}
                            href={NAV_USER_PAGE_HREF}
                        >
                            <ListItemIcon
                                sx={{
                                    ...navAppBarListItemIconStyle,
                                    mr: open
                                        ? NAV_MR_3
                                        : NAV_LIST_ITEM_ICON_MR_AUTO,
                                }}
                            >
                                <PetsIcon sx={navAppBarIconStyle} />
                            </ListItemIcon>
                            <ListItemText
                                primary={NAV_USER_PAGE_BTN_TXT}
                                sx={{
                                    ...navAppBarListItemTextStyle,
                                    opacity: open
                                        ? NAV_OPACITY_1
                                        : NAV_OPACITY_0,
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
            </Drawer>
        </Box>
    );
}
