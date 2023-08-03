"use client";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { SelectChangeEvent } from "@mui/material/Select";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from "@mui/material";

import { Poster } from "./Fetcher";
import Form from "./Form";

interface DialogFormProps {
    open: boolean;
    handleClose: () => void;
    handleSubmit: () => void;
}

function DialogForm(props: DialogFormProps) {
    const [name, setName] = useState("Libi");
    const [date, setDate] = useState<Dayjs>(dayjs("2023-08-02"));
    const [amount, setAmount] = useState(0);
    const [reason, setReason] = useState("");
    const [counter, setCounter] = useState(0);

    const handleSelectChange = (event: SelectChangeEvent) => {
        setName(event.target.value as string);
    };

    const handleDateChange = (newDate: Dayjs) => {
        setDate(newDate);
    };

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(event.target.value));
    };

    const handleReasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setReason(event.target.value);
    };
    const test = () => {
        console.log({ id: counter, name, date, amount, reason });
    };

    const handleSubmit = async () => {
        await Poster({
            id: counter,
            name,
            day: date.day(),
            month: date.month() + 1,
            year: date.year(),
            amount,
            reason,
        });
        setCounter(counter + 1);
        props.handleClose();
    };
    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle>Add Exapanse</DialogTitle>
            <DialogContent>
                <Form
                    name={name}
                    nameHandler={handleSelectChange}
                    date={date}
                    dateHandler={handleDateChange}
                    amount={amount}
                    amountHandler={handleAmountChange}
                    reason={reason}
                    reasonHandler={handleReasonChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Add</Button>
                <Button onClick={test}>Test</Button>
            </DialogActions>
        </Dialog>
    );
}

export default DialogForm;
