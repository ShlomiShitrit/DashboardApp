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
import { NullDatejs } from "../../Interfaces/interfaces";

function DialogForm({open = false, handleClose = () => null}: DialogFormProps) {
    const [name, setName] = useState("Libi");
    const [date, setDate] = useState<NullDatejs>(dayjs("2023-08-02"));
    const [amount, setAmount] = useState(0);
    const [reason, setReason] = useState("");
    const [category, setCategory] = useState("Food");

    const handleSelectChange = (event: SelectChangeEvent) => {
        setName(event.target.value as string);
    };

    const handleDateChange = (newDate: NullDatejs) => {
        setDate(newDate);
    };

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(event.target.value));
    };

    const handleReasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setReason(event.target.value);
    };

    const handleCategoryChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    };

    const handleSubmit = async () => {
        await postData({
            id: idGenerator(),
            name,
            day: date?.date(),
            month: date ?  date.month() + 1 : undefined,
            year: date?.year(),
            amount,
            reason,
            category
        });
        handleClose();
    };
    return (
        <Dialog open={open} onClose={handleClose}>
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
                    category={category}
                    categoryHandler={handleCategoryChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Add</Button>
            </DialogActions>
        </Dialog>
    );
}

export default DialogForm;
