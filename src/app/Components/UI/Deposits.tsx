import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { yearActions } from "@/app/store/year";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import { SelectChangeEvent } from "@mui/material/Select";
import SelectComp from "@/app/Components/Form/SelectComp";
import { DepositsProps } from "../../Interfaces/interfaces";
import {
    depositsTyp1Style,
    depositsTyp2Style,
    depositsTyp3Style,
    depositsBtnStyle,
} from "../../Styles/styles";
import {
    DEPOSITS_DATE_FORMAT,
    DEPOSITS_TYP1_VAR,
    DEPOSITS_TYP1_TXT,
    DEPOSITS_TYP2_VAR,
    DEPOSITS_TYP2_COLOR,
    DEPOSITS_TYP2_TXT,
    DEPOSITS_BTN_COLOR,
    DEPOSITS_BTN_VAR,
    DEPOSITS_BTN_TXT,
    DEPOSITS_START_YEAR,
    DEPOSITS_TYP3_TXT,
    DEPOSITS_TYP3_VAR,
    DEPOSITS_TYP3_COLOR,
} from "@/app/GeneralResources/resources";

function Deposits({ budgetDialogHandler = () => null }: DepositsProps) {
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
    return (
        <Fragment>
            <Typography sx={depositsTyp1Style} variant={DEPOSITS_TYP1_VAR}>
                {DEPOSITS_TYP1_TXT}
            </Typography>
            <Typography
                sx={depositsTyp2Style}
                variant={DEPOSITS_TYP2_VAR}
                color={DEPOSITS_TYP2_COLOR}
            >
                {DEPOSITS_TYP2_TXT}
                {currentDate}
            </Typography>
            <Typography
                variant={DEPOSITS_TYP3_VAR}
                color={DEPOSITS_TYP3_COLOR}
                sx={depositsTyp3Style}
            >
                {DEPOSITS_TYP3_TXT}
            </Typography>
            <SelectComp
                name={year}
                nameHandler={handleSelectChange}
                items={years}
            />
            <Button
                onClick={budgetDialogHandler}
                color={DEPOSITS_BTN_COLOR}
                variant={DEPOSITS_BTN_VAR}
                sx={depositsBtnStyle}
            >
                {DEPOSITS_BTN_TXT}
            </Button>
        </Fragment>
    );
}

export default Deposits;
