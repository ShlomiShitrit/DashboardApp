"use client";
import * as React from "react";
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
} from "@/app/Styles/styles";

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
    NAV_PAGE1_HREF,
    NAV_LIST_ITEM_ICON_MR_AUTO,
    NAV_PAGE1_BTN_TXT,
    NAV_PAGE2_HREF,
    NAV_PAGE2_BTN_TXT,
    NAV_PAGE3_HREF,
    NAV_PAGE3_BTN_TXT,
} from "@/app/GeneralResources/resources";

const drawerWidth = 240;

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
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up(NAV_CLOSED_MIXIN_UP)]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
        backgroundColor: NAV_CLOSED_MIXIN_BG_COLOR,
    },
});

const DrawerHeader = styled(NAV_DRAWER_HEADER_DIV)(({ theme }) => ({
    display: NAV_DRAWER_HEADER_DISPLAY,
    alignItems: NAV_DRAWER_HEADER_ALIGN_ITEMS,
    justifyContent: NAV_DRAWER_HEADER_JUSTIFY_CONTENT,
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== NAV_APP_BAR_OPEN,
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
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
    flexShrink: 0,
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
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
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
                            marginRight: 5,
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
                            href={NAV_PAGE1_HREF}
                        >
                            <ListItemIcon
                                sx={{
                                    ...navAppBarListItemIconStyle,
                                    mr: open ? 3 : NAV_LIST_ITEM_ICON_MR_AUTO,
                                }}
                            >
                                <HomeIcon sx={navAppBarIconStyle} />
                            </ListItemIcon>
                            <ListItemText
                                primary={NAV_PAGE1_BTN_TXT}
                                sx={{
                                    ...navAppBarListItemTextStyle,
                                    opacity: open ? 1 : 0,
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
                            href={NAV_PAGE2_HREF}
                        >
                            <ListItemIcon
                                sx={{
                                    ...navAppBarListItemIconStyle,
                                    mr: open ? 3 : NAV_LIST_ITEM_ICON_MR_AUTO,
                                }}
                            >
                                <PetsIcon sx={navAppBarIconStyle} />
                            </ListItemIcon>
                            <ListItemText
                                primary={NAV_PAGE2_BTN_TXT}
                                sx={{
                                    ...navAppBarListItemTextStyle,
                                    opacity: open ? 1 : 0,
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
                            href={NAV_PAGE3_HREF}
                        >
                            <ListItemIcon
                                sx={{
                                    ...navAppBarListItemIconStyle,
                                    mr: open ? 3 : NAV_LIST_ITEM_ICON_MR_AUTO,
                                }}
                            >
                                <PetsIcon sx={navAppBarIconStyle} />
                            </ListItemIcon>
                            <ListItemText
                                primary={NAV_PAGE3_BTN_TXT}
                                sx={{
                                    ...navAppBarListItemTextStyle,
                                    opacity: open ? 1 : 0,
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
