import { useState } from "react";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    SelectChangeEvent,
} from "@mui/material";

import { BudgetDialogProps } from "@/app/GeneralResources/interfaces";
import { updateDB } from "@/app/Firebase/firebaseFunc";
import BudgetForm from "./BudgetForm";
import {
    BUDGET_DIALOG_TITLE,
    BUDGET_DIALOG_CANCEL_BTN,
    BUDGET_DIALOG_SET_BTN,
    BUDGET_DIALOG_CANCEL_BTN_VAR,
    BUDGET_DIALOG_CANCEL_BTN_COLOR,
    BUDGET_DIALOG_SET_BTN_VAR,
    BUDGET_DIALOG_SET_BTN_COLOR,
    BUDGET_FORM_CATEGORY_DEFAULT,
    BUDGET_DIALOG_BUDGETS_PATH,
} from "@/app/GeneralResources/resources";

import { BUDGET_FORM_AMOUNT_DEFAULT } from "@/app/GeneralResources/constants";

function BudgetDialog({
    open = false,
    handleClose = () => null,
    isAdded = false,
    isDeleted = false,
}: BudgetDialogProps) {
    const [category, setCategory] = useState<string>(
        BUDGET_FORM_CATEGORY_DEFAULT
    );
    const [amount, setAmount] = useState<number>(BUDGET_FORM_AMOUNT_DEFAULT);

    const onCategoryChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value);
    };

    const onAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(event.target.value));
    };

    const handleSubmitForm = () => {
        const objToUpdate: {
            [key: string]: number;
        } = {};
        objToUpdate[category.toLowerCase()] = amount;
        updateDB(BUDGET_DIALOG_BUDGETS_PATH, objToUpdate);
        handleClose();
    };
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{BUDGET_DIALOG_TITLE}</DialogTitle>
            <DialogContent>
                <BudgetForm
                    isAdded={isAdded}
                    isDeleted={isDeleted}
                    onCategoryChange={onCategoryChange}
                    onAmountChange={onAmountChange}
                    category={category}
                    amount={amount}
                />
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleClose}
                    variant={BUDGET_DIALOG_CANCEL_BTN_VAR}
                    color={BUDGET_DIALOG_CANCEL_BTN_COLOR}
                >
                    {BUDGET_DIALOG_CANCEL_BTN}
                </Button>
                <Button
                    onClick={handleSubmitForm}
                    variant={BUDGET_DIALOG_SET_BTN_VAR}
                    color={BUDGET_DIALOG_SET_BTN_COLOR}
                >
                    {BUDGET_DIALOG_SET_BTN}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default BudgetDialog;
