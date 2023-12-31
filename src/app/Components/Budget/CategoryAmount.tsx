"use client";
import { Fragment } from "react";
import TextField from "@mui/material/TextField";

import { CategoryAmountProps } from "@/app/GeneralResources/interfaces";
import {
    CATEGORY_AMOUNT_CATEGORY_PROP_DEFAULT,
    CATEGORY_AMOUNT_TYP_VAR,
    CATEGORY_AMOUNT_TYPE,
    CATEGORY_AMOUNT_INPUT_MODE,
    CATEGORY_AMOUNT_PATTERN,
    CATEGORY_AMOUNT_ID,
    CATEGORY_AMOUNT_NAME,
    CATEGORY_AMOUNT_AUTO_COMP,
    CATEGORY_AMOUNT_VAR,
    CATEGORY_AMOUNT_VALUE_TRUE,
} from "@/app/GeneralResources/resources";

import {
    CATEGORY_AMOUNT_AMOUNT_PROP_DEFUALT,
    CATEGORY_AMOUNT_VALUE_AMOUNT_0,
} from "@/app/GeneralResources/constants";

function CategoryAmount({
    amount = CATEGORY_AMOUNT_AMOUNT_PROP_DEFUALT,
    amountHandler = () => null,
}: CategoryAmountProps) {
    return (
        <Fragment>
            <TextField
                type={CATEGORY_AMOUNT_TYPE}
                inputProps={{
                    inputMode: CATEGORY_AMOUNT_INPUT_MODE,
                    pattern: CATEGORY_AMOUNT_PATTERN,
                }}
                required
                id={CATEGORY_AMOUNT_ID}
                name={CATEGORY_AMOUNT_NAME}
                fullWidth
                autoComplete={CATEGORY_AMOUNT_AUTO_COMP}
                variant={CATEGORY_AMOUNT_VAR}
                value={
                    amount === CATEGORY_AMOUNT_VALUE_AMOUNT_0
                        ? CATEGORY_AMOUNT_VALUE_TRUE
                        : amount
                }
                onChange={amountHandler}
            />
        </Fragment>
    );
}

export default CategoryAmount;
