import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from "@mui/material";

import { BudgetDialogProps } from "@/app/Interfaces/interfaces";
import BudgetForm from "./BudgetForm";
import {
    BUDGET_DIALOG_TITLE,
    BUDGET_DIALOG_CANCEL_BTN,
    BUDGET_DIALOG_SET_BTN,
    BUDGET_DIALOG_CANCEL_BTN_VAR,
    BUDGET_DIALOG_CANCEL_BTN_COLOR,
    BUDGET_DIALOG_SET_BTN_VAR,
    BUDGET_DIALOG_SET_BTN_COLOR,
} from "@/app/GeneralResources/resources";

function BudgetDialog({
    open = false,
    budgetArray = [],
    handlersArray = [],
    handleClose = () => null,
    handleSubmit = () => null,
}: BudgetDialogProps) {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{BUDGET_DIALOG_TITLE}</DialogTitle>
            <DialogContent>
                <BudgetForm
                    budgetArray={budgetArray}
                    handlersArray={handlersArray}
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
                    onClick={handleSubmit}
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
