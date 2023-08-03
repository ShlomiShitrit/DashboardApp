"use client";
import { Fragment } from "react";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";

import { FormProps } from "../../Interfaces/interfaces";
import SelectComp from "./SelectComp";
import DatePickerComp from "./DatePickerComp";
import AmountComp from "./AmountComp";
import ReasonComp from "./ReasonComp";

function Form(props: FormProps) {
    return (
        <Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={8}>
                    <InputLabel id="select-label">Name</InputLabel>
                    <SelectComp
                        name={props.name}
                        nameHandler={props.nameHandler}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <DatePickerComp
                        date={props.date}
                        dateHandler={props.dateHandler}
                    />
                </Grid>
                <Grid item xs={12}>
                    <AmountComp amountHandler={props.amountHandler} />
                </Grid>
                <Grid item xs={12}>
                    <ReasonComp
                        reasonHandler={props.reasonHandler}
                        reason={props.reason}
                    />
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default Form;
