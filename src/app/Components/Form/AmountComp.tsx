import React from "react";
import TextField from "@mui/material/TextField";

import { AmountCompProps } from "../../GeneralResources/interfaces";
import {
    AMOUNT_COMP_AUTO_COMP,
    AMOUNT_COMP_ID,
    AMOUNT_COMP_INPUT_MODE,
    AMOUNT_COMP_LABEL_TXT,
    AMOUNT_COMP_NAME,
    AMOUNT_COMP_PATTERN,
    AMOUNT_COMP_TYPE,
    AMOUNT_COMP_VAR,
} from "@/app/GeneralResources/resources";

function AmountComp({ amountHandler = (event) => null }: AmountCompProps) {
    return (
        <TextField
            type={AMOUNT_COMP_TYPE}
            inputProps={{
                inputMode: AMOUNT_COMP_INPUT_MODE,
                pattern: AMOUNT_COMP_PATTERN,
            }}
            required
            id={AMOUNT_COMP_ID}
            name={AMOUNT_COMP_NAME}
            label={AMOUNT_COMP_LABEL_TXT}
            fullWidth
            autoComplete={AMOUNT_COMP_AUTO_COMP}
            variant={AMOUNT_COMP_VAR}
            onChange={amountHandler}
        />
    );
}

export default AmountComp;
