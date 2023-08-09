"use client";
import { createTheme } from "@mui/material/styles";
import {
    DARK_THEME_MODE,
    DARK_THEME_PR_MAIN,
    DARK_THEME_PR_DARK,
    DARK_THEME_SEC_MAIN,
    DARK_THEME_SEC_DARK,
    DARK_THEME_SUC_MAIN,
    DARK_THEME_SUC_DARK,
    DARK_THEME_PR_CT,
    DARK_THEME_SEC_CT,
    DARK_THEME_SUC_CT,
    STYLE_DISPLAY_FLEX,
    STYLE_FLEX_DIRC_COL,
    STYLE_HEIGHT_100VH,
    STYLE_OVERFLOW_AUTO,
    STYLE_BG_COLOR_BG_DEFAULT,
    STYLE_TEXT_ALIGN_CENTER,
    STYLE_WIDTH_50,
    STYLE_HEIGHT_130,
    STYLE_M_20,
    STYLE_M_30,
    STYLE_M_50,
    STYLE_M_10,
    STYLE_COLOR_8884d8,
    STYLE_COLOR_1A2C42,
    STYLE_JC_CENTER,
    STYLE_COLOR_TEXT_PR,
    STYLE_DISPLAY_BLOCK,
} from "@/app/GeneralResources/resources";

export const darkTheme = createTheme({
    palette: {
        mode: DARK_THEME_MODE,
        primary: {
            main: DARK_THEME_PR_MAIN,
            dark: DARK_THEME_PR_DARK,
            contrastText: DARK_THEME_PR_CT,
        },
        secondary: {
            main: DARK_THEME_SEC_MAIN,
            dark: DARK_THEME_SEC_DARK,
            contrastText: DARK_THEME_SEC_CT,
        },
        success: {
            main: DARK_THEME_SUC_MAIN,
            dark: DARK_THEME_SUC_DARK,
            contrastText: DARK_THEME_SUC_CT,
        },
    },
});

export const paperCompStyle = {
    p: 2,
    display: STYLE_DISPLAY_FLEX,
    flexDirection: STYLE_FLEX_DIRC_COL,
    backgroundColor: darkTheme.palette.primary.dark,
};

export const homePageBox2Style = {
    backgroundColor: darkTheme.palette.primary.main,
    flexGrow: 1,
    height: STYLE_HEIGHT_100VH,
    overflow: STYLE_OVERFLOW_AUTO,
};

export const lineChartMargin = {
    top: 16,
    right: 16,
    bottom: 0,
    left: 24,
};

export const budgetDispalyStyle = {
    bgcolor: STYLE_BG_COLOR_BG_DEFAULT,
    textAlign: STYLE_TEXT_ALIGN_CENTER,
    width: STYLE_WIDTH_50,
    height: STYLE_HEIGHT_130,
};

export const budgetFormCurStyle = { mb: STYLE_M_20 };
export const budgetFormDividerStyle = { mb: STYLE_M_30, mt: STYLE_M_30 };
export const lineChartActiveDotStyle = {
    r: 8,
    fill: STYLE_COLOR_8884d8,
    stroke: STYLE_COLOR_8884d8,
};

export const pieChartTypStyle = { mt: 2 };

export const depositsTyp1Style = { margin: STYLE_M_10 };
export const depositsTyp2Style = { mt: STYLE_M_50, flex: 1 };
export const depositsTyp3Style = { mt: STYLE_M_50, flex: 1 };

export const navBoxStyle = { display: STYLE_DISPLAY_FLEX };
export const navAppBarStyle = { backgroundColor: STYLE_COLOR_1A2C42 };
export const navAppBarChevronIconStyle = { color: darkTheme.palette.grey[400] };
export const navAppBarListItemStyle = { display: STYLE_DISPLAY_BLOCK };
export const navAppBarListItemBtnStyle = { minHeight: 48, px: 2.5 };
export const navAppBarListItemIconStyle = {
    minWidth: 0,
    justifyContent: STYLE_JC_CENTER,
};
export const navAppBarIconStyle = { color: darkTheme.palette.grey[400] };
export const navAppBarListItemTextStyle = {
    color: darkTheme.palette.grey[400],
};

export const ordersLinkStyle = { mt: 3, color: STYLE_COLOR_TEXT_PR };

export const page2BoxStyle = { flexGrow: 1, p: 10 };

export const page3BoxStyle = { flexGrow: 1, p: 10 };

export const homePageBox1Style = { display: STYLE_DISPLAY_FLEX };
export const homePageContainerStyle = { mt: 4, mb: 4 };
