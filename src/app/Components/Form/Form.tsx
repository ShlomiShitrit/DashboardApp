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

function Form({
    name = "",
    nameHandler = (event) => null,
    date = new Dayjs(),
    dateHandler = (newDate) => null,
    amount = 0,
    amountHandler = (event) => null,
    reason = "",
    reasonHandler = (event) => null,
    category = "",
    categoryHandler = (event) => null,
}: FormProps) {
    return (
        <Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={8}>
                    <InputLabel id="select-name-label">Name</InputLabel>
                    <SelectComp
                        items={["Shlomi", "Libi"]}
                        name={name}
                        nameHandler={nameHandler}
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                <InputLabel id="select-category-label">Category</InputLabel>
                <SelectComp
                        items={[
                            "Pets",
                            "Food",
                            "Clothes",
                            "Bills",
                            "Car",
                            "Other",
                        ]}
                        name={category}
                        nameHandler={categoryHandler}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <DatePickerComp date={date} dateHandler={dateHandler} />
                </Grid>
                <Grid item xs={12}>
                    <AmountComp amountHandler={amountHandler} />
                </Grid>
                <Grid item xs={12}>
                    <ReasonComp reasonHandler={reasonHandler} reason={reason} />
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default Form;
