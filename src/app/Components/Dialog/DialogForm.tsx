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

import { postData } from "../../utils/serverUtils";
import { idGenerator } from "../../utils/clientUtils";
import { DialogFormProps } from "../../Interfaces/interfaces";
import Form from "../Form/Form";

function DialogForm(props: DialogFormProps) {
    const [name, setName] = useState("Libi");
    const [date, setDate] = useState<Dayjs>(dayjs("2023-08-02"));
    const [amount, setAmount] = useState(0);
    const [reason, setReason] = useState("");

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

    const handleSubmit = async () => {
        await postData({
            id: idGenerator(),
            name,
            day: date.day(),
            month: date.month() + 1,
            year: date.year(),
            amount,
            reason,
        });
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
            </DialogActions>
        </Dialog>
    );
}

export default DialogForm;
