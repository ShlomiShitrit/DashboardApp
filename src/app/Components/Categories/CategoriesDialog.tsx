import { CategoriesDialogProps } from "@/app/Interfaces/interfaces";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from "@mui/material";
import CategoriesForm from "./CategoriesForm";

import {
    CATEGORIES_DIALOG_TITLE,
    CATEGORIES_DIALOG_CANCEL_BTN,
    CATEGORIES_DIALOG_SET_BTN,
    CATEGORIES_DIALOG_CANCEL_BTN_VAR,
    CATEGORIES_DIALOG_CANCEL_BTN_COLOR,
    CATEGORIES_DIALOG_SET_BTN_VAR,
    CATEGORIES_DIALOG_SET_BTN_COLOR,
} from "@/app/GeneralResources/resources";
import {
    writeToDB,
    readFromDB,
    deleteFromDB,
    updateDB,
} from "@/app/Firebase/firebaseFunc";

function CategoriesDialog({
    open = false,
    handleClose = () => null,
    handleSubmit = () => null,
    handleChangeAdd = () => null,
    categories = [],
    handleChangeDelete = () => null,
}: CategoriesDialogProps) {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{CATEGORIES_DIALOG_TITLE}</DialogTitle>
            <DialogContent>
                <CategoriesForm
                    handleChangeAdd={handleChangeAdd}
                    handleChangeDelete={handleChangeDelete}
                    categories={categories}
                 />
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleClose}
                    variant={CATEGORIES_DIALOG_CANCEL_BTN_VAR}
                    color={CATEGORIES_DIALOG_CANCEL_BTN_COLOR}
                >
                    {CATEGORIES_DIALOG_CANCEL_BTN}
                </Button>
                <Button
                    onClick={handleSubmit}
                    variant={CATEGORIES_DIALOG_SET_BTN_VAR}
                    color={CATEGORIES_DIALOG_SET_BTN_COLOR}
                >
                    {CATEGORIES_DIALOG_SET_BTN}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default CategoriesDialog;
