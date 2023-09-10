import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { yearActions } from "@/app/store/year";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import SelectComp from "@/app/Components/Form/SelectComp";
import { DepositsProps, UserInfo } from "../../GeneralResources/interfaces";
import { getDataFromDB } from "@/app/Firebase/firebaseFunc";
import {
    depositsTyp1Style,
    depositsTyp2Style,
    depositsTyp3Style,
    depositsBtnStyle,
    depositsBtnBoxStyle,
} from "../../GeneralResources/styles";
import {
    DEPOSITS_DATE_FORMAT,
    DEPOSITS_TYP1_VAR,
    DEPOSITS_TYP1_TXT,
    DEPOSITS_TYP2_VAR,
    DEPOSITS_TYP2_COLOR,
    DEPOSITS_TYP2_TXT,
    DEPOSITS_BTN_COLOR,
    DEPOSITS_BTN_VAR,
    DEPOSITS_BUDGET_BTN_TXT,
    DEPOSITS_START_YEAR,
    DEPOSITS_TYP3_TXT,
    DEPOSITS_TYP3_VAR,
    DEPOSITS_TYP3_COLOR,
    DEPOSITS_CATEHORY_BTN_TXT,
    DEPOSITS_SELECT_COMP_HEIGHT,
    DEPOSITS_NAMES_BTN_TXT,
    DEPOSITS_EMPTY_STR,
    FB_USER_INFO_URL,
    DEPOSITS_BUDGET_PARAM,
} from "@/app/GeneralResources/resources";

function Deposits({
    budgetDialogHandler = () => null,
    categoriesDialogHandler = () => null,
    namesDialogHandler = () => null,
}: DepositsProps) {
    const [userInfo, setUserInfo] = useState<UserInfo>({
        email: DEPOSITS_EMPTY_STR,
        firstName: DEPOSITS_EMPTY_STR,
        lastName: DEPOSITS_EMPTY_STR,
    });

    const currentDate = dayjs().format(DEPOSITS_DATE_FORMAT);
    const year = useSelector((state: any) => state.year.year);
    const dispatch = useDispatch();
    const handleSelectChange = (event: SelectChangeEvent) => {
        dispatch(yearActions.changeYear(event.target.value as string));
    };
    const years: string[] = [DEPOSITS_START_YEAR];
    for (let i = 0; i < 31; i++) {
        years.push((Number(years[i]) + 1).toString());
    }

    useEffect(() => {
        getDataFromDB(setUserInfo, FB_USER_INFO_URL, DEPOSITS_BUDGET_PARAM);
    }, []);

    return (
        <Fragment>
            <Typography sx={depositsTyp1Style} variant={DEPOSITS_TYP1_VAR}>
                {`${DEPOSITS_TYP1_TXT} ${userInfo.firstName}!`}
            </Typography>
            <Typography
                sx={depositsTyp2Style}
                variant={DEPOSITS_TYP2_VAR}
                color={DEPOSITS_TYP2_COLOR}
            >
                {DEPOSITS_TYP2_TXT}
                {currentDate}
            </Typography>
            <Box>
                <Typography
                    variant={DEPOSITS_TYP3_VAR}
                    color={DEPOSITS_TYP3_COLOR}
                    sx={depositsTyp3Style}
                >
                    {DEPOSITS_TYP3_TXT}
                </Typography>
                <SelectComp
                    height={DEPOSITS_SELECT_COMP_HEIGHT}
                    name={year}
                    nameHandler={handleSelectChange}
                    items={years}
                />
            </Box>
            <Box sx={depositsBtnBoxStyle}>
                <Button
                    onClick={budgetDialogHandler}
                    color={DEPOSITS_BTN_COLOR}
                    variant={DEPOSITS_BTN_VAR}
                    sx={depositsBtnStyle}
                >
                    {DEPOSITS_BUDGET_BTN_TXT}
                </Button>
            </Box>
            <Box sx={depositsBtnBoxStyle}>
                <Button
                    onClick={namesDialogHandler}
                    color={DEPOSITS_BTN_COLOR}
                    variant={DEPOSITS_BTN_VAR}
                    sx={depositsBtnStyle}
                >
                    {DEPOSITS_NAMES_BTN_TXT}
                </Button>
                <Button
                    onClick={categoriesDialogHandler}
                    color={DEPOSITS_BTN_COLOR}
                    variant={DEPOSITS_BTN_VAR}
                    sx={depositsBtnStyle}
                >
                    {DEPOSITS_CATEHORY_BTN_TXT}
                </Button>
            </Box>
        </Fragment>
    );
}

export default Deposits;
