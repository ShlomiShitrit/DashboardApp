"use client";
import { EditOrdersDialogProps } from "@/app/GeneralResources/interfaces";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from "@mui/material";
import EditDialogForm from "@/app/Components/EditOrders/EditDialogForm";

export default function EditOrdersDialog({
    open,
    handleClose,
    data,
    path,
}: EditOrdersDialogProps) {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{"Edit Expense"}</DialogTitle>
            <DialogContent>
                <EditDialogForm
                    data={data}
                    path={path}
                    handleClose={handleClose}
                />
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleClose}
                    variant="contained"
                    color="success"
                >
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}
