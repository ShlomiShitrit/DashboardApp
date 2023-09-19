"use client";
import { NamesDialogProps } from "@/app/GeneralResources/interfaces";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from "@mui/material";
import NamesForm from "@/app/Components/Names/NamesForm";
import {
    NAMES_DIALOG_TITLE,
    NAMES_DIALOG_CANCEL_BTN_VAR,
    NAMES_DIALOG_CANCEL_BTN_COLOR,
    NAMES_DIALOG_CANCEL_BTN,
} from "@/app/GeneralResources/resources";

function NamesDialog({
    open = false,
    handleClose = () => null,
    handleChangeAdd = () => null,
    handleChangeDelete = () => null,
    names = [],
}: NamesDialogProps) {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{NAMES_DIALOG_TITLE}</DialogTitle>
            <DialogContent>
                <NamesForm
                    handleChangeAdd={handleChangeAdd}
                    handleChangeDelete={handleChangeDelete}
                    names={names}
                />
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleClose}
                    variant={NAMES_DIALOG_CANCEL_BTN_VAR}
                    color={NAMES_DIALOG_CANCEL_BTN_COLOR}
                >
                    {NAMES_DIALOG_CANCEL_BTN}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default NamesDialog;
