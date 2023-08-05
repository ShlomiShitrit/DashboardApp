import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from "@mui/material";

import { BudgetDialogProps } from "@/app/Interfaces/interfaces";
import BudgetForm from "./BudgetForm";

function BudgetDialog({
    open = false,
    budgetArray = [],
    handlersArray = [],
    handleClose = () => null,
    handleSubmit = () => null,
}: BudgetDialogProps) {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Set Budgets</DialogTitle>
            <DialogContent>
                <BudgetForm
                    budgetArray={budgetArray}
                    handlersArray={handlersArray}
                />
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleClose}
                    variant="outlined"
                    color="success"
                >
                    Cancel
                </Button>
                <Button
                    onClick={handleSubmit}
                    variant="outlined"
                    color="success"
                >
                    Set
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default BudgetDialog;
