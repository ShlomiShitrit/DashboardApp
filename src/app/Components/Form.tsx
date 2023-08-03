"use client";
import { Fragment } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Dayjs } from "dayjs";

interface FormProps {
    name: string;
    nameHandler: (event: SelectChangeEvent) => void;
    date: Dayjs;
    dateHandler: (newDate: Dayjs) => void;
    amount: number;
    amountHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    reason: string;
    reasonHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Form(props: FormProps) {
    return (
        <Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={8}>
                    <InputLabel id="select-label">Name</InputLabel>
                    <Select
                        fullWidth
                        labelId="select-label"
                        id="select"
                        value={props.name}
                        label="Name"
                        onChange={props.nameHandler}
                    >
                        <MenuItem value={"Libi"}>Libi</MenuItem>
                        <MenuItem value={"Shlomi"}>Shlomi</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <DemoContainer components={["DatePicker"]}>
                        <DatePicker
                            onChange={props.dateHandler}
                            label="Date of expanse"
                            value={props.date}
                        />
                    </DemoContainer>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        type="number"
                        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                        required
                        id="amount"
                        name="amount"
                        label="Amount"
                        fullWidth
                        autoComplete="amount"
                        variant="standard"
                        onChange={props.amountHandler}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="reason"
                        name="reason"
                        label="Reason"
                        fullWidth
                        autoComplete="reason"
                        variant="standard"
                        value={props.reason}
                        onChange={props.reasonHandler}
                    />
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default Form;
