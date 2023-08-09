import { Fragment } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import dayjs from "dayjs";

import { DepositsProps } from "../../Interfaces/interfaces";
import {
    depositsTyp1Style,
    depositsTyp2Style,
    depositsTyp3Style,
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
} from "@/app/GeneralResources/resources";

function Deposits({ budgetDialogHandler = () => null }: DepositsProps) {
    const currentDate = dayjs().format(DEPOSITS_DATE_FORMAT);
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
            <Button
                onClick={budgetDialogHandler}
                color={DEPOSITS_BTN_COLOR}
                variant={DEPOSITS_BTN_VAR}
                sx={depositsTyp3Style}
            >
                {DEPOSITS_BTN_TXT}
            </Button>
        </Fragment>
    );
}

export default Deposits;
