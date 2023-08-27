"use client";
import { Fragment } from "react";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import { Dayjs } from "dayjs";

import { FormProps } from "../../Interfaces/interfaces";
import SelectComp from "./SelectComp";
import DatePickerComp from "./DatePickerComp";
import AmountComp from "./AmountComp";
import ReasonComp from "./ReasonComp";
import {
    FORM_PROP_NAME,
    FORM_PROP_REASON,
    FORM_PROP_CATEGORY,
    FORM_INPUT_LABEL_NAME_ID,
    FORM_INPUT_LABEL_NAME_TXT,
    FORM_INPUT_LABEL_CATEGORY_ID,
    FORM_INPUT_LABEL_CATEGORY_TXT,
    FORM_SELECT_COMP1_ITEMS,
    FORM_SELECT_COMP2_ITEMS,
} from "@/app/GeneralResources/resources";

import {
    FORM_GRID_CONT_SPACING,
    FORM_GRID_SIZE_12,
    FORM_GRID_SIZE_8,
    FORM_GRID_SIZE_6,
} from "@/app/GeneralResources/constants";

function Form({
    name = FORM_PROP_NAME,
    nameHandler = (event) => null,
    date = new Dayjs(),
    dateHandler = (newDate) => null,
    // TODO: delete amount prop
    amount = 0,
    amountHandler = (event) => null,
    reason = FORM_PROP_REASON,
    reasonHandler = (event) => null,
    category = FORM_PROP_CATEGORY,
    categoryHandler = (event) => null,
}: FormProps) {
    return (
        <Fragment>
            <Grid container spacing={FORM_GRID_CONT_SPACING}>
                <Grid item xs={FORM_GRID_SIZE_12} sm={FORM_GRID_SIZE_8}>
                    <InputLabel id={FORM_INPUT_LABEL_NAME_ID}>
                        {FORM_INPUT_LABEL_NAME_TXT}
                    </InputLabel>
                    <SelectComp
                        items={FORM_SELECT_COMP1_ITEMS}
                        name={name}
                        nameHandler={nameHandler}
                    />
                </Grid>
                <Grid item xs={FORM_GRID_SIZE_12} sm={FORM_GRID_SIZE_8}>
                    <InputLabel id={FORM_INPUT_LABEL_CATEGORY_ID}>
                        {FORM_INPUT_LABEL_CATEGORY_TXT}
                    </InputLabel>
                    <SelectComp
                        items={FORM_SELECT_COMP2_ITEMS}
                        name={category}
                        nameHandler={categoryHandler}
                    />
                </Grid>
                <Grid item xs={FORM_GRID_SIZE_12} sm={FORM_GRID_SIZE_6}>
                    <DatePickerComp date={date} dateHandler={dateHandler} />
                </Grid>
                <Grid item xs={FORM_GRID_SIZE_12}>
                    <AmountComp amountHandler={amountHandler} />
                </Grid>
                <Grid item xs={FORM_GRID_SIZE_12}>
                    <ReasonComp reasonHandler={reasonHandler} reason={reason} />
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default Form;
