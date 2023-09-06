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
    STYLE_WIDTH_100_PRECENT,
    STYLE_BGCOLOR_PAPER,
    STYLE_M_1PX,
    STYLE_BGCOLOR_SEC_MAIN,
    STYLE_BGCOLOR_BLACK,
} from "@/app/GeneralResources/resources";

import {
    STYLE_P_2,
    STYLE_P_10,
    STYLE_FLEX_GROW_1,
    STYLE_TOP_16,
    STYLE_RIGHT_16,
    STYLE_BOTTOM_0,
    STYLE_LEFT_24,
    STYLE_R_8,
    STYLE_MT_2,
    STYLE_MT_3,
    STYLE_MT_4,
    STYLE_MB_4,
    STYLE_FLEX_1,
    STYLE_PALLETE_GREY_400,
    STYLE_MIN_HIGHT_48,
    STYLE_PX_2_POINT_5,
    STYLE_MIN_WIDTH_0,
    STYLE_WIDTH_150,
    STYLE_WIDTH_100,
    STYLE_MR_1,
    STYLE_ML_1,
    STYLE_MAX_WIDTH_360,
    STYLE_MT_5,
    STYLE_MT_8,
    STYLE_MT_1,
    STYLE_M_1,
    STYLE_MB_2,
} from "@/app/GeneralResources/constants";

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
    p: STYLE_P_2,
    display: STYLE_DISPLAY_FLEX,
    flexDirection: STYLE_FLEX_DIRC_COL,
    backgroundColor: darkTheme.palette.primary.dark,
};

export const lineChartMargin = {
    top: STYLE_TOP_16,
    right: STYLE_RIGHT_16,
    bottom: STYLE_BOTTOM_0,
    left: STYLE_LEFT_24,
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
    r: STYLE_R_8,
    fill: STYLE_COLOR_8884d8,
    stroke: STYLE_COLOR_8884d8,
};

export const pieChartTypStyle = { mt: STYLE_MT_2 };

export const depositsTyp1Style = { margin: STYLE_M_1PX };
export const depositsTyp2Style = { mt: STYLE_M_20, flex: STYLE_FLEX_1 };
export const depositsTyp3Style = {
    mb: STYLE_M_10,
    mt: STYLE_M_10,
    flex: STYLE_FLEX_1,
};
export const depositsBtnStyle = {
    mt: STYLE_M_20,
    flex: STYLE_FLEX_1,
    width: STYLE_WIDTH_100,
    mr: STYLE_MR_1,
    ml: STYLE_ML_1,
    height: 55,
};
export const depositsBtnBoxStyle = {
    display: STYLE_DISPLAY_FLEX,
};

export const navBoxStyle = { display: STYLE_DISPLAY_FLEX };
export const navAppBarStyle = { backgroundColor: STYLE_COLOR_1A2C42 };
export const navAppBarChevronIconStyle = {
    color: darkTheme.palette.grey[STYLE_PALLETE_GREY_400],
};
export const navAppBarListItemStyle = { display: STYLE_DISPLAY_BLOCK };
export const navAppBarListItemBtnStyle = {
    minHeight: STYLE_MIN_HIGHT_48,
    px: STYLE_PX_2_POINT_5,
};
export const navAppBarListItemIconStyle = {
    minWidth: STYLE_MIN_WIDTH_0,
    justifyContent: STYLE_JC_CENTER,
};
export const navAppBarIconStyle = {
    color: darkTheme.palette.grey[STYLE_PALLETE_GREY_400],
};
export const navAppBarListItemTextStyle = {
    color: darkTheme.palette.grey[STYLE_PALLETE_GREY_400],
};

export const ordersLinkStyle = { mt: STYLE_MT_3, color: STYLE_COLOR_TEXT_PR };

export const page2BoxStyle = { flexGrow: STYLE_FLEX_GROW_1, p: STYLE_P_10 };

export const page3BoxStyle = { flexGrow: STYLE_FLEX_GROW_1, p: STYLE_P_10 };

export const homePageBox1Style = { display: STYLE_DISPLAY_FLEX };
export const homePageBox2Style = {
    backgroundColor: darkTheme.palette.primary.main,
    flexGrow: STYLE_FLEX_GROW_1,
    height: STYLE_HEIGHT_100VH,
    overflow: STYLE_OVERFLOW_AUTO,
};

export const homePageContainerStyle = { mt: STYLE_MT_4, mb: STYLE_MB_4 };
export const ordersDeleteBtnStyle = { width: STYLE_WIDTH_150 };

export const categoriesFormListStyle = {
    width: STYLE_WIDTH_100_PRECENT,
    maxWidth: STYLE_MAX_WIDTH_360,
    bgcolor: STYLE_BGCOLOR_PAPER,
};

export const categoriesFormTxtFieldStyle = {
    mt: STYLE_MT_4,
};

export const categoriesFormAddBtnStyle = {
    mt: STYLE_MT_5,
};

export const signInPageBox1Style = {
    marginTop: STYLE_MT_8,
    display: STYLE_DISPLAY_FLEX,
    flexDirection: STYLE_FLEX_DIRC_COL,
    alignItems: STYLE_TEXT_ALIGN_CENTER,
};

export const signInPageBox2Style = { mt: STYLE_MT_1 };
export const signInAvatarStyle = {
    m: STYLE_M_1,
    bgcolor: STYLE_BGCOLOR_SEC_MAIN,
};

export const signInBtnStyle = { mt: STYLE_MT_3, mb: STYLE_MB_2 };

export const forgetPassPageBox1Style = {
    marginTop: STYLE_MT_8,
    display: STYLE_DISPLAY_FLEX,
    flexDirection: STYLE_FLEX_DIRC_COL,
    alignItems: STYLE_TEXT_ALIGN_CENTER,
};

export const forgetPassPageBox2Style = { mt: STYLE_MT_1 };
export const forgetPassAvatarStyle = {
    m: STYLE_M_1,
    bgcolor: STYLE_BGCOLOR_BLACK,
};
