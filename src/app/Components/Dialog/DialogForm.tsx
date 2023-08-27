"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";
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
import {
    DIALOG_FORM_NAME_DEFUALT,
    DIALOG_FORM_REASON_DEFUALT,
    DIALOG_FORM_CATEGORY_DEFUALT,
    DIALOG_FORM_TITLE,
    DIALOG_FORM_CANCEL_BTN_VAR,
    DIALOG_FORM_CANCEL_BTN_COLOR,
    DIALOG_FORM_CANCEL_BTN_TXT,
    DIALOG_FORM_SUBMIT_BTN_VAR,
    DIALOG_FORM_SUBMIT_BTN_COLOR,
    DIALOG_FORM_SUBMIT_BTN_TXT,
} from "@/app/GeneralResources/resources";

import {
    DIALOG_FORM_AMOUNT_STATE,
    DIALOG_FORM_MONTH_PLUS_1,
} from "@/app/GeneralResources/constants";
import { ordersActions } from "@/app/store/orders";

function DialogForm({
    open = false,
    handleClose = () => null,
}: DialogFormProps) {
    const [name, setName] = useState(DIALOG_FORM_NAME_DEFUALT);
    const [date, setDate] = useState<NullDatejs>(dayjs());
    const [amount, setAmount] = useState(DIALOG_FORM_AMOUNT_STATE);
    const [reason, setReason] = useState(DIALOG_FORM_REASON_DEFUALT);
    const [category, setCategory] = useState(DIALOG_FORM_CATEGORY_DEFUALT);

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

    const dispatch = useDispatch();

    const handleSubmit = async () => {
        await postData({
            id: idGenerator(),
            name,
            day: date?.date(),
            month: date ? date.month() + DIALOG_FORM_MONTH_PLUS_1 : undefined,
            year: date?.year(),
            amount,
            reason,
            category,
        });
        handleClose();
        dispatch(ordersActions.submit());
    };
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{DIALOG_FORM_TITLE}</DialogTitle>
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
                <Button
                    onClick={handleClose}
                    variant={DIALOG_FORM_CANCEL_BTN_VAR}
                    color={DIALOG_FORM_CANCEL_BTN_COLOR}
                >
                    {DIALOG_FORM_CANCEL_BTN_TXT}
                </Button>
                <Button
                    onClick={handleSubmit}
                    variant={DIALOG_FORM_SUBMIT_BTN_VAR}
                    color={DIALOG_FORM_SUBMIT_BTN_COLOR}
                >
                    {DIALOG_FORM_SUBMIT_BTN_TXT}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default DialogForm;
